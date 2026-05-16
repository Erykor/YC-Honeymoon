// expand.js — runtime 把作者源数据 (stations.js) 补全为 renderer 期望格式
//
// 作者只写 stations.js / notes.js / routes.js (string ID + 天 ID), 这里补:
//   - station.id  保持 string, 但加 station.numericId (1..N) 给老接口用
//   - day.day     全局序号 (1..99)
//   - day.date    "M/D" 字符串
//   - day.week    "周一/周二/..."
//   - day.station_id 对应 station.numericId
//   - day.ref     "{stationId}.{dayId}" 跨文件引用键
//   - station.dates  "{firstDate} - {lastDate}"
//   - station.nights days.length
//   - station.firstDay / lastDay 全局序号范围
//   - 全局 window.INTENSITY 数组 (1..N)
//   - {{day:stationId.dayId}} token 在 am/pm/tips/weatherBackup/city 里替换为 "D{globalDay}"
//
// 调用: expandTrip() 必须在 stations.js 加载后, renderer 启动前。

(function() {
  function pad2(n) { return n < 10 ? '0' + n : '' + n; }

  function parseStartDate(s) {
    // "2026/7/29" -> Date
    const parts = s.split('/');
    return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
  }

  function fmtMD(d) {
    return (d.getMonth() + 1) + '/' + d.getDate();
  }

  function fmtWeek(d) {
    return '周' + '日一二三四五六'[d.getDay()];
  }

  function expandTrip() {
    if (!window.STATIONS || !window.TRIP_START) {
      console.error('expandTrip: missing window.STATIONS or window.TRIP_START');
      return;
    }

    // Build dayRef -> {globalDay, date} index for {{day:...}} resolution
    const refIndex = {};
    const cursor = parseStartDate(window.TRIP_START);
    let globalDay = 0;

    window.STATIONS.forEach((station, sIdx) => {
      station.numericId = sIdx + 1;
      const stationStart = new Date(cursor);
      station.firstDay = globalDay + 1;

      station.days.forEach((day, dIdx) => {
        globalDay++;
        day.day = globalDay;
        day.date = fmtMD(cursor);
        day.week = fmtWeek(cursor);
        day.station_id = station.numericId;
        day.ref = station.id + '.' + day.id;
        refIndex[day.ref] = {
          globalDay: globalDay,
          date: day.date,
          stationId: station.id,
          dayId: day.id
        };
        cursor.setDate(cursor.getDate() + 1);
      });

      station.lastDay = globalDay;
      const stationEnd = new Date(cursor.getTime() - 86400000);
      station.firstDate = fmtMD(stationStart);
      station.lastDate = fmtMD(stationEnd);
      station.dates = station.firstDate + ' - ' + station.lastDate;
      station.nights = station.days.length;
    });

    // Resolve {{day:stationId.dayId}} -> "D{N}" in text fields
    function resolveTokens(text) {
      if (!text) return text;
      return text.replace(/\{\{day:([a-z0-9_-]+)\.([a-z0-9_-]+)\}\}/g, function(m, sid, did) {
        const ref = refIndex[sid + '.' + did];
        if (!ref) return '[?:' + sid + '.' + did + ']';
        return 'D' + ref.globalDay;
      });
    }

    window.STATIONS.forEach(station => {
      station.tips = resolveTokens(station.tips);
      station.days.forEach(day => {
        day.city = resolveTokens(day.city);
        day.am = resolveTokens(day.am);
        day.pm = resolveTokens(day.pm);
        if (day.weatherBackup) day.weatherBackup = resolveTokens(day.weatherBackup);
      });
    });

    // Build flat INTENSITY array (1..N) from days[].intensity
    window.INTENSITY = [];
    window.STATIONS.forEach(station => {
      station.days.forEach(day => {
        window.INTENSITY.push(day.intensity || 3);
      });
    });

    // Resolve notes keys: keep them as 'stationId.dayId' strings;
    // renderer can map via refIndex when looking up by globalDay
    window.NOTES_BY_DAY = {};
    if (window.DAY_NOTES) {
      Object.keys(window.DAY_NOTES).forEach(ref => {
        const r = refIndex[ref];
        if (r) {
          window.NOTES_BY_DAY[r.globalDay] = window.DAY_NOTES[ref];
        } else {
          console.warn('expand: orphan note key', ref);
        }
      });
    }

    // Resolve STATION_BUDGETS: support both stringId and numericId access
    if (window.STATION_BUDGETS) {
      const original = window.STATION_BUDGETS;
      window.STATION_BUDGETS = new Proxy(original, {
        get(target, prop) {
          if (target[prop] !== undefined) return target[prop];
          // Fallback: numeric -> string
          if (typeof prop === 'string' && /^\d+$/.test(prop)) {
            const n = parseInt(prop);
            const station = window.STATIONS[n - 1];
            return station ? target[station.id] : undefined;
          }
          return undefined;
        }
      });
    }

    // Expose ref index for cross-file resolvers
    window.DAY_REF_INDEX = refIndex;

    console.log('expandTrip: ', window.STATIONS.length, 'stations,', globalDay, 'days,', window.INTENSITY.length, 'intensity entries');
  }

  window.expandTrip = expandTrip;
})();
