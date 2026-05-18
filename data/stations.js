// 13 站 94 天行程主数据 (重构 v3: 地理环线 + 季节最佳, Kalymnos 7 / Grasse 12 / Truffle 13)
// 改任何站 / 天 / 顺序, 后续日期+编号自动重算; 加 day 直接在 days[] 里 splice 即可
window.TRIP_START = "2026/7/29";
window.STATIONS = [
  {
    "id": "connemara",
    "name": "Connemara",
    "nameZh": "康内马拉",
    "fullName": "康内马拉 Connemara 海岸骑乘",
    "country": "🇮🇪 爱尔兰",
    "color": "#1F5F3A",
    "bg": "#E0F2E5",
    "stroke": "#2D7A4A",
    "x": 405,
    "y": 335,
    "labelPos": "left",
    "activities": "★★ Willie Leahy's Connemara Trail 6 日点对点 · Cliffs of Moher · Galway 老城",
    "festival": "★★ Connemara Coastal Trail 6 日",
    "tips": "<strong>★★ 6 日点对点骑乘 (主升级)：</strong> Willie Leahy's Connemara Trail 是大西洋海岸骑乘的金标准, 6 天沙滩奔驰 + Killary fjord 渡乘 + 山地小路 + 野马区, 每天换 B&B 过夜, €1,500-1,800/人含全餐 (提前 6 个月通过 connemaratrails.com 邮件订, 7 月底末班次)。<strong>装备:</strong> 自带骑靴 + 半 chap + 头盔 (营方可借备用), 服装防水/速干。<strong>不租车:</strong> 营方含全程接驳; Dublin 落地后 Bus Éireann 直达 Galway €15/人 3.5h, 营方派车从 Galway 接到 Loughrea 起点。<strong>签证:</strong> UK Standard Visitor 含 BIVS 背书可顺访爱尔兰; 或单独申请 Irish C 短期签 (3 周出签)。",
    "days": [
      {
        "id": "d1",
        "city": "✈ 转场 (北京/上海→Dublin→Loughrea)",
        "am": "✈ 北京/上海 → Dublin 经赫尔辛基/AMS/IST 12-15h (国航 / 芬航 / 土航 €800/人)。早到下午抵 DUB",
        "pm": "DUB 入境 + Bus Éireann 直达 Galway 3.5h €15/人。营方 17:00 派车 Galway → Loughrea 1h, 18:00 抵骑乘起点 B&B + welcome 晚餐 + 次日 9:00 装备 fit 商定",
        "lodging": "Loughrea B&B (营方含) €0",
        "star": false,
        "intensity": 4
      },
      {
        "id": "d2",
        "city": "★★ Trail Day 1 - Loughrea → Maam Cross",
        "am": "★★ 9:00 装备 fit (头盔/chap/saddle) + 配马 30min (营方根据\"几十小时鞍时\"配 forward-going horse) → 10:00 出发 Loughrea → Maam Cross 25km 内陆草场 + 林间小路 (第一天试探节奏, 不冲)",
        "pm": "13:00 山间野餐 + 12km 下午段进 Maam Valley → 17:00 抵 Maam Cross 客栈, 解鞍 + 喂马 (一起) + 19:30 营火晚餐",
        "lodging": "Maam Cross 营方含",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d3",
        "city": "★★ Trail Day 2 - Maam Cross → Leenane (Killary Fjord)",
        "am": "★★ 8:30 出发, Maam Valley → Killary 峡湾 (爱尔兰唯一 fjord) 海拔 0m 海岸线 + 河流渡乘 (浅水过马, 鞍带湿)",
        "pm": "14:00 抵 Leenane 渔村 + 解鞍 + 14:30 渔港午餐 (Killary fjord 牡蛎 €25) + 15:30 客栈休整。19:30 海鲜晚餐 + 19 世纪爱尔兰民谣 live",
        "lodging": "Leenane The Blackberry Café 客栈 营方含",
        "star": true,
        "intensity": 4,
        "weatherBackup": "河流暴涨 → 改为 Killary fjord 边的山地步道 (避免渡马)"
      },
      {
        "id": "d4",
        "city": "★★ Trail Day 3 - Leenane → Letterfrack (海岸坚驰)",
        "am": "★★ 8:30 出发, Killary 海岸→Letterfrack, 大西洋崖边 12 Bens 山脉脚下 25km, 上午段进 Connemara National Park 边缘 (野生 Connemara 矮种马)",
        "pm": "14:00 海岸滩涂 5km 经典坚驰段 (沙滩起飞, 鞍上盐风) → 16:30 抵 Letterfrack 解鞍, 17:30 Pier 边 Guinness pint + 19:30 客栈晚餐",
        "lodging": "Letterfrack Avoca Country Inn 营方含",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d5",
        "city": "★★ Trail Day 4 - Letterfrack → Clifden (野马区)",
        "am": "★★ 9:00 出发, Sky Road 海岸悬崖 + 野生 Connemara 矮种马群 (会近距离接触, 营主指导)。20km 海岸+草场混合",
        "pm": "Cleggan 海滩 13:00 野餐 + 海湾速骑 → 16:00 抵 Clifden 老城客栈, 17:30 老城 Foyles Hotel pub + 19:30 海鲜晚餐 chowder + 鲜煮 mussels",
        "lodging": "Clifden Foyles Hotel 营方含",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d6",
        "city": "★★ Trail Day 5 - Clifden → Roundstone (沙滩奔驰)",
        "am": "★★ 8:30 出发, Clifden Bay 海岸 + Aughrus 海滩 → ★ Dog's Bay 白沙滩 (爱尔兰最白沙滩之一) 长 1.5km 大段奔驰 (营主带头, 你俩跟队, 海浪边 gallop)",
        "pm": "14:00 Roundstone 港口午餐 + 港口 lobster 龙虾餐 €35 + 16:00 抵 Roundstone 客栈, 黄昏港口散步看捕鱼船入港 + 19:30 The Shamrock pub 当地 trad music live",
        "lodging": "Roundstone Eldons Hotel 营方含",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d7",
        "city": "★★ Trail Day 6 - Roundstone → Galway (最后骑乘)",
        "am": "★★ 8:30 出发最后骑乘日, Roundstone→Galway 25km 内陆混合段 + Galway 城外牧场 → 12:30 抵 Galway 城外营场 + 与马告别 + 颁 Willie Leahy's 完赛证书 + 营方午餐",
        "pm": "14:30 营方车送 Galway 老城入住 → 老城慢逛 Eyre Square + Quay Street 拱廊 + 17:00 Tigh Neachtain pub Irish trad music + 19:30 The Seafood Bar at Kirwans 牡蛎+黑啤晚餐",
        "lodging": "Galway 老城 The House Hotel €150",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d8",
        "city": "★ Cliffs of Moher 半日 + Galway 缓冲",
        "am": "★ 8:30 Bus Éireann 350 Galway → Cliffs of Moher 1.5h €15/人 (旺季 9 月预约) → 10:30 抵悬崖入园 €10/人, 走 8km 悬崖步道 (Doolin → O'Brien Tower → Hag's Head 全程, 莫赫断崖 214m 高悬崖 + 大西洋全景, 旺季限制 7 月底前 group 控制好)",
        "pm": "14:00 Doolin 巴士回 Galway 1.5h + 16:00 抵酒店午睡 (6 日骑乘后体力恢复) + 19:30 McDonagh's Fish & Chips 老牌晚餐 + 早睡为次日转场",
        "lodging": "Galway 老城 The House Hotel",
        "star": true,
        "intensity": 4,
        "weatherBackup": "暴风/大雾悬崖步道关 → 改 Aran Islands 渡轮 Inis Oírr 半日 (€30 渡轮 + 自行车环岛)"
      },
      {
        "id": "d9",
        "city": "转场 (Galway→Edinburgh)",
        "am": "8:00 Galway 早餐 + 退房 → Bus Éireann GoBE → Shannon 机场 1.5h €10/人 (Shannon 离 Edinburgh 更近; 备用 Dublin 2.5h €15)",
        "pm": "12:30 ✈ Shannon → Edinburgh (Aer Lingus 直飞 1h, €80/人; 备用 Dublin 直飞 Ryanair €60/人) → 14:00 抵 EDI → Airlink 100 → 15:00 入住 New Town 酒店 (Edinburgh 行程从 D10 8/7 Fringe 开幕日起开始; 8/6 抵作为 Fringe 前夜缓冲)",
        "lodging": "New Town £180/晚 (Edinburgh 入住提前 1 晚)",
        "star": false,
        "intensity": 3
      }
    ]
  },
  {
    "id": "edinburgh",
    "name": "Edinburgh",
    "nameZh": "爱丁堡",
    "fullName": "爱丁堡 Edinburgh",
    "country": "🇬🇧 英国",
    "color": "#3C3489",
    "bg": "#EEEDFE",
    "stroke": "#534AB7",
    "x": 535,
    "y": 295,
    "labelPos": "up",
    "activities": "Fringe 开幕日 (Fri) · Fringe 周六高峰 · ★★ Glencoe + Lost Valley 私人向导",
    "festival": "★ Edinburgh Fringe 艺穗节",
    "tips": "<strong>Fringe 周末 3 天 (8/7-8/9)：</strong> Fringe Opening Day 8/7 + 周六最大密度场次 8/8 + ★★ Highland Adventure Safaris Glencoe 私人徒步 8/9。<strong>必订：</strong> Fringe 演出 6 月公布完整阵容, 4 月起早鸟价。Tattoo 票 (8/7 周五场可加) 2 月就开始紧张。",
    "days": [
      {
        "id": "d1",
        "city": "爱丁堡",
        "am": "★ Fringe Opening Day。11:00 George Square 户外免费表演群",
        "pm": "15:00 Traverse Theatre £22 + 21:30 Late-night cabaret £25",
        "lodging": "New Town",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d2",
        "city": "爱丁堡",
        "am": "皇家植物园 £8.5 + Stockbridge Market 美食",
        "pm": "3 场连看 Fringe (Underbelly day pass) + 晚 Grassmarket 酒吧",
        "lodging": "New Town",
        "star": false,
        "intensity": 4
      },
      {
        "id": "d3",
        "city": "★★ Glencoe + Lost Valley 私人向导徒步",
        "am": "★★ 7:30 私人 4x4 接走 → Glencoe 主谷观景 + Lost Valley 隐谷徒步 6km 3h (Highland Adventure Safaris / Pat Wynne, £400/2人 全程私人向导, 8h 完整高地深度而非坐车)",
        "pm": "15:00 Steall Falls 短瀑布徒步 1h + 19:00 Ben Nevis 山脚晚餐, 21:00 回 Edinburgh 打包",
        "lodging": "New Town",
        "star": true,
        "intensity": 5
      }
    ]
  },
  {
    "id": "budapest",
    "name": "Budapest",
    "nameZh": "布达佩斯",
    "fullName": "布达佩斯 Budapest",
    "country": "🇭🇺 匈牙利",
    "color": "#72243E",
    "bg": "#FBEAF0",
    "stroke": "#993556",
    "x": 1265,
    "y": 510,
    "labelPos": "right",
    "activities": "Sziget Festival 5 日通票 · Széchenyi 温泉",
    "festival": "★ Sziget Festival 8/11-15",
    "tips": "<strong>必订：</strong> Sziget 5-Day Pass 早鸟 ~€330/人。<strong>留时间恢复：</strong> Sziget 节奏伤体力, 中间安排温泉日 + 游船日。<strong>转场温和：</strong> 8/16 飞 Dubrovnik 仅 4-5h, Sziget 散场后体力可承受。",
    "days": [
      {
        "id": "d1",
        "city": "转场日 (爱丁堡→布达佩斯)",
        "am": "[爱丁堡] 上午 Calton Hill + National Museum (免费)。退房寄存行李",
        "pm": "✈ Edinburgh → Budapest (Wizz/Ryanair, 3h, £80)。入住 Pest 5/7 区",
        "lodging": "Budapest Pest 区 €100",
        "star": false,
        "intensity": 4
      },
      {
        "id": "d2",
        "city": "布达佩斯",
        "am": "★ SZIGET DAY 1 开幕。14:00 进岛",
        "pm": "Main stage 18:00。深夜 02:00-04:00 EDM",
        "lodging": "Budapest €100",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d3",
        "city": "布达佩斯",
        "am": "★ SZIGET DAY 2。中午前恢复, 14:00 重返岛上",
        "pm": "Art Zone + Yoga 区。晚 main stage",
        "lodging": "Budapest",
        "star": true,
        "intensity": 2
      },
      {
        "id": "d4",
        "city": "完全休息日",
        "am": "★ Sziget 中场休息。Széchenyi 温泉浴场 €25 (4h 慢泡)",
        "pm": "酒店午睡 + 19:00 多瑙河晚餐游船 €45/人 (放空看夜景)",
        "lodging": "Budapest",
        "star": false,
        "intensity": 4
      },
      {
        "id": "d5",
        "city": "布达佩斯",
        "am": "★ SZIGET DAY 3。14:00 进岛",
        "pm": "看完一晚 headliner",
        "lodging": "Budapest",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d6",
        "city": "布达佩斯",
        "am": "★ SZIGET DAY 4 高峰。圣斯蒂芬大教堂 + Liszt Ferenc 广场",
        "pm": "18:00 Sziget 周六主舞台大牌",
        "lodging": "Budapest",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d7",
        "city": "★ 完全休息日 (布达佩斯)",
        "am": "★ 白板休息日。Sziget 4 日刚收摊, 不安排任何活动。睡到 10:00 + 酒店早午餐",
        "pm": "街区慢走 + 多瑙河沿岸咖啡馆 + 早睡 (为次日 ✈ 克罗地亚蓄电)",
        "lodging": "Budapest €100",
        "star": false,
        "intensity": 1
      },
      {
        "id": "d8",
        "city": "转场日 (布达佩斯→克罗地亚)",
        "am": "✈ Budapest → Dubrovnik (Vueling 或 Croatia Airlines 经 VIE/ZAG 中转, 4-5h, €130/人)。短途, Sziget 散场后体力可承受",
        "pm": "傍晚抵 Dubrovnik 老城。入住 €140 + 老城首夜散步",
        "lodging": "Dubrovnik 老城 €140",
        "star": false,
        "intensity": 3
      }
    ]
  },
  {
    "id": "vienna",
    "name": "Vienna",
    "nameZh": "维也纳",
    "fullName": "维也纳 Vienna (华尔兹课程 + 哈布斯堡深度)",
    "country": "🇦🇹 奥地利",
    "color": "#5C2B6F",
    "bg": "#F0E1F5",
    "stroke": "#7D3D94",
    "x": 1175,
    "y": 525,
    "labelPos": "left",
    "activities": "★★ Elmayer 华尔兹 3 日课程 · Schönbrunn 城堡 · Konzerthaus 古典音乐 · Belvedere Klimt · Albertina",
    "festival": "★★ Vienna 华尔兹课程",
    "tips": "<strong>★★ 3 日华尔兹课程 (主升级)：</strong> Tanzschule Elmayer (1919 帝国华尔兹学校, Habsburg 贵族传承); 3 日私人课程 €600-800/2人含 Standard Walzer + Wiener Walzer (3/4 旋转) + Polonaise + Quadrille 帝国舞会经典套路。<strong>毕业夜 ({{day:vienna.d4}}):</strong> Schönbrunn 城堡舞会模拟 (穿礼服试舞经典 Hofball dress code, 仪式感锚点) + Plachutta Wollzeile Tafelspitz 经典帝国名菜 €40/人 + Wiener Konzerthaus 古典音乐会 €60-100/人 (B 区池座, 帝国级体验, 性价比好)。<strong>必游:</strong> Schönbrunn + Belvedere (Klimt 吻) + Albertina + Stephansdom + Café Central / Sperl Kaffeehaus 文化 + Spanische Hofreitschule (Lipizzaner 白马晨训选看)。",
    "days": [
      {
        "id": "d1",
        "city": "转场 Budapest→Vienna + 老城序章",
        "am": "8:00 Budapest Keleti → Vienna Hauptbahnhof ÖBB RailJet 直达 2h25min €40/人 (Sziget 散场后无缝衔接, 不飞行); 11:00 抵 Wien + S-Bahn 入 1 区 + Stephansdom 教堂 + 12 世纪老城步行",
        "pm": "13:30 Plachutta 老城店 Tafelspitz 经典午餐 + 15:00 Hofburg 皇宫旧址 + Sisi 博物馆 (奥地利皇后伊丽莎白) + 17:00 Café Central (Trotsky/弗洛伊德/列宁喝过的传奇咖啡馆) Sachertorte + Wiener Melange + 19:30 Demel 老牌甜点店 Apfelstrudel + 老城散步",
        "lodging": "Vienna 1 区 €130",
        "star": false,
        "intensity": 3
      },
      {
        "id": "d2",
        "city": "★★ Waltz Day 1 - Tanzschule Elmayer + Schönbrunn",
        "am": "★★ 9:30 Tanzschule Elmayer (Bräunerstraße 13, 1 区中心 1919 创立) Day 1 私人课程 3h: Standard Walzer 基础 (3/4 拍, body lead, footwork frame) + Wiener Walzer 旋转入门 (180° pivot turn 关键)",
        "pm": "13:30 课程结束 + 15:30 Schönbrunn 城堡 € (60min audio tour, Habsburg 王朝 600 年) + 17:00 Schönbrunn 花园 + 19:30 Heuriger Wieninger (Stammersdorf 葡萄酒馆区) 当地 Grüner Veltliner 白葡萄酒 + 农家晚餐",
        "lodging": "Vienna 1 区",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d3",
        "city": "★★ Waltz Day 2 + Belvedere Klimt + Beim Czaak 老馆",
        "am": "★★ 9:30 Elmayer Day 2: Wiener Walzer 加速 + 进阶 outside partner + 连续旋转 60s (心率上升, 帝国舞会节奏) + Polonaise 帝国宫廷开场舞",
        "pm": "13:30 Belvedere 上宫 + Klimt '吻' 真迹 + Schiele 群作 € + 16:00 Belvedere 花园 + 18:00 Café Sperl (Schubert 作曲灵感地) + 19:30 Beim Czaak 经典维也纳 Wirtshaus €40/人 (Schwedenplatz 附近, 1926, Wiener Schnitzel + Kalbsbeuschel 维也纳家常)",
        "lodging": "Vienna 1 区",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d4",
        "city": "★★ Waltz Day 3 cert + Konzerthaus 古典夜",
        "am": "★★ 9:30 Elmayer Day 3 课程完成: Quadrille 群舞 + 你俩组合 demo + 颁 Elmayer 完赛证书 + 拍摄 Habsburg 风格照片",
        "pm": "14:00 Schönbrunn 城堡舞会模拟 选修 +€150/2人 (穿礼服试舞经典 Hofball, 真实贵族 dress code) + 18:30 Plachutta Wollzeile Tafelspitz 经典帝国名菜 €40/人 + 19:30 Wiener Konzerthaus 古典音乐会 €60-100/人 (B 区池座, 帝国级体验非米其林价位)",
        "lodging": "Vienna 1 区 €150",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d5",
        "city": "★ Albertina + Naschmarkt + Spanische Hofreitschule",
        "am": "★ 10:00 Spanische Hofreitschule 西班牙骑术学校 (Habsburg 帝国马术学校 1572 创立, Lipizzaner 白马) 晨训 Morning Exercise €15 1h + 11:30 Albertina (Habsburg 私人艺术馆 + Dürer 兔子 + Klimt 葛饰原作)",
        "pm": "14:00 Naschmarkt 露天集市 (维也纳百年食市, 土耳其+巴尔干+本地) + 15:30 Kaiserliche Schatzkammer 帝国宝库 € (奥地利皇冠+Habsburg 珠宝) + 17:30 Volksgarten 玫瑰园 + 19:30 Figlmüller 维也纳炸猪排发源地 (1905, 餐盘大过头, 一份两人吃)",
        "lodging": "Vienna 1 区",
        "star": true,
        "intensity": 3
      },
      {
        "id": "d6",
        "city": "转场 Vienna→Ortisei (火车)",
        "am": "8:00 退房 + Vienna Westbahnhof → ÖBB Railjet Wien→Innsbruck 直达 4h25min €60/人 (Alps 横穿景观线, 经 Salzburg+Tirol)",
        "pm": "12:30 抵 Innsbruck + Hertz 取车 + Innsbruck→Ortisei 自驾 1.5h (Brenner 关口 A22 → Val Gardena) → 15:30 抵 Ortisei + welcome 晚餐 + 老城慢散步 + 早睡为次日 Val di Funes",
        "lodging": "Ortisei €120 (多洛米蒂 第 1 晚)",
        "star": false,
        "intensity": 3
      }
    ]
  },
  {
    "id": "dolomites",
    "name": "Val Gardena",
    "nameZh": "多洛米蒂",
    "fullName": "多洛米蒂 Val Gardena",
    "country": "🇮🇹 意大利",
    "color": "#27500A",
    "bg": "#EAF3DE",
    "stroke": "#3B6D11",
    "x": 960,
    "y": 800,
    "labelPos": "up",
    "activities": "Seceda · Alpe di Siusi · Tre Cime 大环线 · Lago di Braies · Spa 日",
    "festival": "★ Tre Cime 大环线 + 多洛米蒂高山日",
    "tips": "<strong>取消山屋夜：</strong> Rifugio Locatelli 5 月才订基本无位 + 共宿条件硬 + 高山过夜降低后续行程安全余量。改 Tre Cime 大环线纯日游 (10km, 4h, 不过夜)。<strong>每日天气：</strong> 出发前 48h 查 meteo.provincia.bz.it, 雷暴/暴雨当日改为缓冲日。<strong>装备：</strong> 中高帮防水徒步鞋必备 (磨合好), 不再需要 silk liner / 山屋装备。<strong>Spa 日 ({{day:dolomites.d6}}):</strong> Ortisei 当地 4★ Spa 酒店 (Hotel Gardena Grödnerhof 或 Hotel Hell) 标准房 €200/晚 + Sole-Therme 私汤+双人按摩 €180/2人; 山景晚餐 Cascade Ortisei 当地 Ladin 料理 €60/人。",
    "days": [
      {
        "id": "d1",
        "city": "Val di Funes 适应日",
        "am": "8:00 Ortisei 早餐 + 自驾 (昨日 Innsbruck 已取 Hertz 5 日小车, 8/24-9/1, €280 总, {{day:dolomites.d6}} SPA 日省车不用) → Val di Funes 山谷 40min 自驾",
        "pm": "Santa Maddalena 教堂 (多洛米蒂经典明信片机位) + Geislergruppe 山下徒步 1h + 17:00 回 Ortisei 早晚餐 + 慢早睡为次日 Seceda",
        "lodging": "Ortisei",
        "star": false,
        "intensity": 3
      },
      {
        "id": "d2",
        "city": "Seceda",
        "am": "★ Ortisei → Seceda 缆车 2,519m €40 往返",
        "pm": "Adolf Munkel Weg 山谷面对 Odle 北壁 9km 3h",
        "lodging": "Ortisei",
        "star": true,
        "intensity": 2
      },
      {
        "id": "d3",
        "city": "Alpe di Siusi",
        "am": "★ 缆车上欧洲最大高山牧场",
        "pm": "牧场内徒步 5-8h。Rifugio Sanon 午餐",
        "lodging": "Ortisei",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d4",
        "city": "★★ Tre Cime 大环线日游",
        "am": "6:30 出发 Ortisei → Auronzo 收费道 €30 (1.5h)。8:00 入山, Auronzo→Lavaredo→Locatelli 经典 10km 大环线 4h",
        "pm": "中午 Rifugio Locatelli (Dreizinnenhütte) 山屋平台午餐 €18 (不过夜, 仅落座吃) + Cima Grande/Ovest/Piccola 三峰正面观景。15:00 起返程, 17:30 回 Ortisei 早休",
        "lodging": "Ortisei",
        "star": true,
        "intensity": 4,
        "weatherBackup": "若暴雨/雷暴/能见度差 → 与 {{day:dolomites.d8}} (完全休息日) 互换 (Tre Cime 上 d8, 休息推到 d7); 或与 {{day:dolomites.d1}} (Val di Funes 适应日) 提前。{{day:dolomites.d7}} Via Ferrata 装备已订, 不可换"
      },
      {
        "id": "d5",
        "city": "Lago di Braies + 缓冲",
        "am": "★ 7:00 自驾 Ortisei → Lago di Braies 1.5h (停车场需提前预约 €30)。环湖 3.5km + 木船拍照点 + 湖畔咖啡",
        "pm": "中午回 Ortisei 午睡。下午镇上咖啡 + 早睡为周六 4★ Spa 蓄电",
        "lodging": "Ortisei",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d6",
        "city": "Spa + Trauttmansdorff 花园日",
        "am": "睡到 09:00 + Ortisei 老城慢咖啡 + Trauttmansdorff 城堡花园 (Merano 1h)",
        "pm": "★ 私汤+双人按摩 €180/2人 (Sole-Therme 或当地 4★ 酒店 Spa) + 山景晚餐 Cascade Ortisei 当地 Ladin 料理 €60/人",
        "lodging": "Ortisei 4★ 公寓/酒店 €200",
        "star": true,
        "intensity": 2
      },
      {
        "id": "d7",
        "city": "★★ Via Ferrata Lagazuoi-Tofana di Mezzo",
        "am": "★★ 6:30 自驾 Ortisei → Cortina d'Ampezzo 1h → Lagazuoi 缆车 €18 → ★★ Via Ferrata 「Galleria del Lagazuoi」经典 WWI 隧道铁索路线 (含向导 €120/人, 双人绳索互相系扣, 垂直爬升 800m 穿一战隧道, 4h)",
        "pm": "14:30 Rifugio Lagazuoi 山屋平台午餐 €25 + 缆车下山。自驾回 Ortisei 17:30。装备租用 €30/2人 (头盔+安全带+lanyard, 鞋自备)",
        "lodging": "Ortisei",
        "star": true,
        "intensity": 1,
        "weatherBackup": "雷暴/雨 → Via Ferrata 强制取消, 改 Bolzano Ötzi 冰人博物馆 €13 + Renon 高原牧场缆车 (室内+缆车备用)"
      },
      {
        "id": "d8",
        "city": "★ 完全休息日 (Ortisei)",
        "am": "★ 白板休息日。多洛米蒂 7 日刚结束, 不安排任何徒步。睡到 09:30 + Ortisei 老城慢咖啡 + 行李整理",
        "pm": "镇上书店 + 看雪山发呆 + 早睡 (为次日 8h 火车多段做准备)",
        "lodging": "Ortisei",
        "star": false,
        "intensity": 5
      },
      {
        "id": "d9",
        "city": "转场 (多洛米蒂→Murter)",
        "am": "8:00 Ortisei 退房 + 自驾 → Venice VCE 机场 3h €40 油 + 还 Hertz",
        "pm": "13:00 ✈ Volotea / Croatia Air VCE → Split SPU 直飞 1h €100/人 (9 月仍运营; 备 VCE→ZAG→SPU 1 转 2h) → 14:30 抵 SPU + Sea Kayak Croatia 营方接驳 → Murter 岛 基地 1h drive → 16:30 抵 Murter + 装备 fit briefing + 19:30 港口 welcome 晚餐 + 早睡为次日 Kayak Day 1",
        "lodging": "Murter B&B 营方含 (Kornati 第 0 晚, 跨站)",
        "star": false,
        "intensity": 4
      }
    ]
  },
  {
    "id": "kornati",
    "name": "Kornati",
    "nameZh": "科尔纳特",
    "fullName": "科尔纳特 Kornati 海岛跳点海洋皮划艇",
    "country": "🇭🇷 克罗地亚 (Adriatic)",
    "color": "#0E5A6E",
    "bg": "#D9EEF4",
    "stroke": "#177F9C",
    "x": 1075,
    "y": 815,
    "labelPos": "up",
    "activities": "★★ Sea Kayak Croatia 6 日 Kornati 群岛点对点 (Murter→Žirje→Kornat→Levrnaka→Dugi Otok→Šibenik)",
    "festival": "★★ Kornati 群岛 6 日海洋皮划艇",
    "tips": "<strong>★★ 6 日点对点海岛跳 (主升级)：</strong> Kornati National Park (89 岛屿, Adriatic 蓝绿水, UNESCO 候选) 是地中海最佳 sea kayaking 区, 9 月水温 22°C 仍可游泳, 风稳定。**Sea Kayak Croatia** (seakayakcroatia.com) 6 日点对点 island-hop, €800-900/人含: 双 kayak + 全部装备 + 向导 (PADI Rescue level) + 5 晚 B&B/客栈 + 全餐 + 营地夜 1 晚 (荒岛野营选项)。<strong>路线:</strong> Day 1 Murter 基地训练; Day 2-5 Žirje→Kornat→Levrnaka→Dugi Otok 4 日点对点 (10-25km/天, 6h/天); Day 6 Dugi Otok→Zadar 收尾。<strong>入境:</strong> Dolomites→Venice VCE 自驾 3h + ✈ Volotea/Croatia Air VCE→SPU 直飞 1h €100/人 + 营方接驳 Split→Murter 1h ({{day:dolomites.d9}} 转场)。<strong>装备:</strong> 自带速干衣 + 防晒 + 防水袋; 营方提供 paddle + spray skirt + PFD + dry bag。",
    "days": [
      {
        "id": "d1",
        "city": "★★ Kayak Day 1 - Murter 训练 + Pasman 海湾",
        "am": "★★ 8:30 营方早餐 + 装备 fit (kayak + paddle + PFD + spray skirt + dry bag) + 1h 浅滩技术训练 (前推 + 转向 + bracing + group communication)",
        "pm": "13:00 Murter 港出发 + 4h 实战训练日 Pasman 海湾环 15km 平水 + 中途海蚀洞穿越 + 17:00 抵 Murter B&B + 港口晚餐 grilled bass + Croatian Žlahtina 白葡萄酒",
        "lodging": "Murter B&B 营方含",
        "star": true,
        "intensity": 4,
        "weatherBackup": "强 jugo 南风 → 改室内 Murter 老镇 + 装备演练 + Kornati 文化讲座"
      },
      {
        "id": "d2",
        "city": "★★ Kayak Day 2 - Murter → Žirje",
        "am": "★★ 8:00 出发, Murter → Žirje 跨海段 18km 4.5h (中等距离, 中途无人小岛野餐午餐 + Kakan 礁石休息)",
        "pm": "14:30 抵 Žirje 港 (Šibenik 群岛最大岛, 人口 100) + 解 kayak + 步行老村 (中世纪石头屋 + WWII 海军遗址) + 黄昏 olive grove 散步 + 19:30 客栈晚餐 fresh-caught lobster brodet 红番茄海鲜炖",
        "lodging": "Žirje 客栈 营方含",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d3",
        "city": "★★ Kayak Day 3 - Žirje → Kornat (Kornati 主岛, 营地夜)",
        "am": "★★ 7:30 出发 Žirje → Kornati 主岛 Kornat 25km 6h (最长一段, 必看 Kornati 群岛核心区 + 数十石岛 + 海蚀崖墙)",
        "pm": "★ 14:00 抵 Kornat + 解 kayak + ★ 荒岛营地夜 (Kornati NP 内允许 sailing 用户搭帐篷 + 月光下营火 BBQ) + 营方提供帐篷 + sleeping bag + 营火晚餐 (fresh sardines 烤 + 营长讲 Kornati 渔夫祖传故事)",
        "lodging": "Kornati 荒岛营地 营方含",
        "star": true,
        "intensity": 5,
        "weatherBackup": "风>20kn 或大雨 → 改入 Vrulje 渔村客栈 (Kornat 唯一住宿点)"
      },
      {
        "id": "d4",
        "city": "★★ Kayak Day 4 - Kornat → Levrnaka 经典悬崖墙",
        "am": "★★ 7:30 出发, Kornat 顶端 → Levrnaka 岛 (Kornati 最戏剧化悬崖墙 Magazinova škrila 80m 高直入海, 蜜月拍照经典) 20km 5h",
        "pm": "13:30 抵 Levrnaka + 港口野餐午餐 + 14:30 ★ Levrnaka 悬崖步道 1.5h 登顶 (整 Kornati 群岛 360° 全景) + 17:30 客栈晚餐 octopus peka 覆石板烤章鱼 + Plavac Mali 红葡萄酒",
        "lodging": "Levrnaka 渔家客栈 营方含",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d5",
        "city": "★★ Kayak Day 5 - Levrnaka → Dugi Otok (长岛)",
        "am": "★★ 7:30 出发, Levrnaka → Dugi Otok (Croatia 最长岛屿, 45km 长) 22km 5.5h (中途 Telašćica 自然公园海湾停 + 海蚀洞穿越)",
        "pm": "13:30 抵 Sali 港 (Dugi Otok 南端渔村, 100 人小村) + ★ Telašćica 山顶徒步 1h (盐湖 + Adriatic 全景) + 19:00 渔家晚餐 grilled tuna + Maraschino 樱桃酒 (Zadar 特产) + 19:30 港口看 Adriatic 满月 (10 月末末月)",
        "lodging": "Sali 渔家客栈 营方含",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d6",
        "city": "收尾 + 转场 (Dugi Otok→Kalymnos)",
        "am": "★ 8:00 短段 kayak 收尾 Dugi Otok 南岸 → 营方接驳船 → 12:00 抵 Zadar 港 + 颁 Sea Kayak Croatia 完赛证书 + Lloncia Adria 海鲜午餐 + 退装备",
        "pm": "14:00 Zadar 机场 → 15:30 ✈ Croatia Air/Aegean ZAD → Athens ATH 经 VIE/ZAG 1 转 4h €180/人 → 20:00 抵 ATH 转 ATH → Kos KGS (Aegean 直飞 50min €80/人, 21:30 末班) → 23:00 抵 KGS + 学校接驳 → 24:30 抵 Masouri 攀岩公寓 + 床上简餐早睡为次日 Climb Day 1",
        "lodging": "Masouri 攀岩公寓 (Kalymnos 第 0 晚)",
        "star": false,
        "intensity": 4
      }
    ]
  },
  {
    "id": "kalymnos",
    "name": "Kalymnos",
    "nameZh": "卡林诺斯",
    "fullName": "卡林诺斯 Kalymnos (希腊 Dodecanese)",
    "country": "🇬🇷 希腊",
    "color": "#A3540B",
    "bg": "#FCF1DD",
    "stroke": "#C66E18",
    "x": 1395,
    "y": 875,
    "labelPos": "right",
    "activities": "★★ 运动攀岩 lead transition 7 日课程 · Telendos 跨岛 · Grande Grotta 石灰岩海蚀岩壁",
    "festival": "★★ Kalymnos 攀岩 7 日 lead transition",
    "tips": "<strong>★★ 7 日 lead transition 沉浸 (主升级)：</strong> 全球前 3 运动攀岩点, 石灰岩海蚀岩壁 1000+ 路线, 10 月正值最佳风温季 (20-25°C, 阴影区干燥)。\"会攀但不能先锋\" = 学校经典 intermediate-to-lead 课程, 5-7 日 €450-600/人含教练 + 全套装备 (绳/快挂/安全带/头盔, 鞋自带或租)。<strong>学校选:</strong> Kalymnos Climbing School (老牌, 多语种) / Climb Kalymnos (意大利运营, lead 强项) / Aris Theodoropoulos 攀岩团 (Kalymnos 攻略书作者, 私教); 提前 2 月邮件订 7 日 package。<strong>住宿:</strong> Masouri 攀岩村中心区民宿 €60-80/晚双人 (Hotel Philoxenia / Apartments Edelweiss), 步行到 Grande Grotta 起点 10min。<strong>不租车:</strong> 学校班车接送各 sector + Pothia 港口 ferry + Telendos 跨岛渡 10min €3; 岛上 scooter €15/天可选。<strong>装备自备:</strong> 攀岩鞋 (磨合好, 海蚀岩石粗糙) + 速干服 + 防晒帽 + 1.5L 水 + 能量条; 头盔/绳/快挂/harness 学校全配。",
    "days": [
      {
        "id": "d1",
        "city": "Climb Day 1 - 装备 fit + Grande Grotta 入门",
        "am": "★★ 9:30 学校 briefing (昨晚已抵 Masouri) + 装备 fit (rope 60m + 安全带 + 头盔 + quickdraws + lead rope) + lead 理论 1h",
        "pm": "★ 14:00 Grande Grotta 入门半日 (Kalymnos 标志性 stalactite cave 大顶, top-rope 5b/5c 3 条试感觉) + 17:00 校内 belay 复盘 + 19:00 Masouri 海边餐厅 grilled octopus + 早睡为次日 lead",
        "lodging": "Masouri 攀岩民宿 €70",
        "star": true,
        "intensity": 3
      },
      {
        "id": "d2",
        "city": "★★ Climb Day 2 - Lead intro Iliada/Spartan",
        "am": "★★ 9:00 ★ Lead climbing 真正开始: 学校教练带 ★ Iliada / Spartan sectors 5a/5b lead 路线 (双安全索 top-rope 备份 → 渐进 lead, mock leads 中途强制坠落练习, 心理脱敏)",
        "pm": "14:00 午餐 + 15:30 Iliada 5b 真正 lead (第一条独立 lead 路线, 安全索完全 lead, 教练顶 belay) + 17:30 视频回放分析 + 18:30 Pothia 港 Pizzeria Mike's 传统晚餐",
        "lodging": "Masouri",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d3",
        "city": "★★ Climb Day 3 - Telendos 跨岛日 (Irox/Eros)",
        "am": "★★ 8:30 学校班车 + ferry → Telendos 岛 10min €3 (荒岛, 仅 50 人居民, 攀岩朝圣地) → 9:30 上 Irox / Eros sectors (海面正对岩壁, 蜜月最浪漫日) + lead 5b/5c 3 条",
        "pm": "13:00 Telendos 港口 Café Captain Mike 海鲜午餐 + 14:30 Eros sector 下午段 lead 6a 第一次 (首次真正难度跃迁) + 17:00 ferry 回 Masouri + 黄昏 Aegean 海日落 + Smaragda 小酒馆 mezedhes",
        "lodging": "Masouri",
        "star": true,
        "intensity": 4,
        "weatherBackup": "海风>30km/h ferry 停 → 改 Arhi sector (主岛, 同等品质 5c/6a)"
      },
      {
        "id": "d4",
        "city": "★★ Climb Day 4 - Odyssey + Poets",
        "am": "★★ 9:00 Odyssey + Poets sectors (Kalymnos 中等难度精华区, 直壁石灰岩, 比 Grande Grotta 角度小但技术细) + lead 5c/6a 进阶 3-4 条",
        "pm": "14:00 午餐 + 15:30 Poets sector 难度链路 6a/6a+ 2 条 + 教练 mock falls 练习 (主动 take 信任 belay 伙伴) + 17:30 收工 + 19:00 学校驻地 BBQ + 与其他学员国际交流",
        "lodging": "Masouri",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d5",
        "city": "★★ Climb Day 5 - Grande Grotta cave 6a (最终评估)",
        "am": "★★ 9:00 ★★ 回到 Grande Grotta 主洞 + Day 1 的 5a/5b 路线重攀 (对比 5 日前的自己) + 教练 IRTA Level 评估 (能否独立 lead 5c+/6a = lead climber 毕业)",
        "pm": "★ 14:00 ★ 真正考核日: 选 1 条 6a 路线独立 lead from ground to anchor 完整 (你俩轮流 belay, 教练监督), 完成即 IRTA Stage 3 lead cert 颁发 + 16:00 团体合影 + 17:30 庆祝 ouzo + 海边晚餐",
        "lodging": "Masouri",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d6",
        "city": "★ 蜜月最后攀 + Vathy fjord",
        "am": "★ 9:30 自由攀日 (camp 装备含, 不强制上课): 你俩独立选 sector 重攀 (无教练随同) 2-3 条 5b-6a 路线 (验证独立能力)",
        "pm": "★ 蜜月专属: 14:30 学校班车 → Vathy fjord (Kalymnos 隐秘渔村 + 翡翠峡湾, 比 Pothia 商业区美 3 倍) + 私人小艇 1.5h €60/2人沿 fjord 巡游 + 17:30 Vathy 港口餐厅 Harry's Paradise 主厨海鲜套餐 (蜜月夜) + 19:30 回 Masouri 早睡为转场",
        "lodging": "Masouri",
        "star": true,
        "intensity": 3,
        "weatherBackup": "Vathy 风大艇取消 → 改 Hora 山顶城堡 + Pera Kastro 中世纪石头村"
      },
      {
        "id": "d7",
        "city": "Pothia 老城 + 缓冲日",
        "am": "★ 9:30 自由攀小日 (camp 装备 day pass €30, 上 Skalia 短 3a/4a 暖身 2h) 或完全休骑",
        "pm": "14:00 学校班车 → Pothia 主城 (Kalymnos 老港) → Marine Sponge Museum + 老港 fisherman 早午餐 + 17:00 回 Masouri 海边日落 + 早睡为次日转场",
        "lodging": "Masouri 攀岩民宿",
        "star": false,
        "intensity": 2
      },
      {
        "id": "d8",
        "city": "转场 (Kalymnos→Lo Stagnone)",
        "am": "6:00 退房 + 学校班车 Masouri → Pothia 30min; 7:30 ferry Pothia → Kos 1h €10/人; 9:00 抵 KGS 机场",
        "pm": "11:00 ✈ KGS → Athens ATH 50min €80 → 13:30 ATH → Palermo PMO (Aegean/ITA 直飞 2h €150/人; 备经 FCO 中转 3h) → 16:30 抵 PMO + 学校接驳 Marsala kite camp 1.5h → 18:30 抵 Marsala + 海边公寓入住 + welcome 晚餐 + briefing 次日装备 fit",
        "lodging": "Marsala kite camp 海边公寓 (Lo Stagnone 第 0 晚)",
        "star": false,
        "intensity": 4
      }
    ]
  },
  {
    "id": "lo-stagnone",
    "name": "Lo Stagnone",
    "nameZh": "洛斯坦尼奥内",
    "fullName": "洛斯坦尼奥内 Lo Stagnone (Marsala)",
    "country": "🇮🇹 意大利 (西西里)",
    "color": "#0F5E7A",
    "bg": "#DDF1F8",
    "stroke": "#1B89A8",
    "x": 995,
    "y": 1118,
    "labelPos": "left",
    "activities": "★★ IKO 14 日风筝冲浪 deep camp · IKO Level 1→3 cert + foilboard intro + downwinder + kiteloop · Cantine Florio/Pellegrino · Erice · Mothia · Favignana · sunset catamaran",
    "festival": "★★ Lo Stagnone 风筝冲浪 14 日 deep camp",
    "tips": "<strong>★★ 14 日 deep camp 沉浸 (主升级)：</strong> Lo Stagnone 浅滩 (1km 内水深至腰), Sangiovese-thermal-wind 15-25kt 平稳, 全球最佳学风筝点之一。9 月稳风季 + 暑期人散开。14 日含: 10 个骑乘日 (IKO L1→L3 cert + jibe + upwind + foilboard intro + downwinder + kiteloop 进阶) + 3 个休骑日 (Erice / Mothia+Pellegrino / Favignana 自行车环岛) + 1 个 sunset catamaran 日。<strong>学校选：</strong> ProKite Alby Rondina (世界冠军 Alby 自家校, 含装备+海景公寓 14 晚) 或 PKS Marsala / Flow Kite School — 提前 2 月邮件订, 询问 14-day deep package €1,200-1,400/人 (含 IKO L1-3 cert + 设备 + 救援船 + 国际保险 + foilboard intro 1 日 €120/2人 加项)。<strong>不租车：</strong> 学校班车 + Marsala 城内步行 + 当日酒庄/Erice/Mothia/Favignana 拼车团 + Trapani 港渡船。<strong>装备：</strong> 防晒服 (UV50+ 长袖) + 反光镜风筝墨镜 + 护脚胶鞋, 学校提供其余 (foilboard 阶段租用)。",
    "days": [
      {
        "id": "d1",
        "city": "★★ Kite Day 1 - 装备 fit + 风筝陆地控制",
        "am": "9:00 学校报到 + IKO Level 1 理论 1h + 装备 fit (kite 9-12m² + 海航板 + harness) + 浅滩风筝起飞着陆陆地练 2h",
        "pm": "15:00 浅滩 body drag 体验 (无板, 用风筝拖体过浅水) 2h + 17:00 课程结束 + 18:30 海边餐厅 antipasti siciliani + 早晚餐为次日蓄电",
        "lodging": "Marsala kite camp 海边公寓",
        "star": true,
        "intensity": 3
      },
      {
        "id": "d2",
        "city": "★★ Kite Day 2 - body drag 升级",
        "am": "9:00 body drag upwind 练习 (单手控板模拟, 学逆风游回) 3h + body drag 收风筝水上自救",
        "pm": "14:30 浅滩自由练 1.5h + 17:00 课程结束 + 18:00 Marsala 老港 aperitivo + 海岸日落散步 + 19:30 早晚餐",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 3,
        "weatherBackup": "风太弱 → body drag 推到 {{day:lo-stagnone.d3}} 上午合并, 改下午 Trapani 老城慢逛"
      },
      {
        "id": "d3",
        "city": "★★ Kite Day 3 - water start 第一次站板",
        "am": "9:00 ★ water start 第一次站板尝试 (IKO Level 2 关键日, 反复跌入水 → 调整 → 起板 3-5m) 3h",
        "pm": "15:00 自由练 1.5h + 17:00 课程结束 + 19:30 Trattoria Garibaldi 海鲜晚餐",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d4",
        "city": "休骑日 - Erice 山顶村 + Cantine Florio",
        "am": "9:30 风筝休骑日 (累计 3 日骑课, 必休)。10:00 自驾拼车 Erice 山顶中世纪村庄 缆车 €9 (海拔 750m, 鸟瞰 Trapani 盐田 + Egadi 群岛) + Maria Grammatico pasticceria 杏仁糖 (修女传统配方)",
        "pm": "13:30 山顶 Monte San Giuliano 餐厅 busiate alla trapanese 午餐 + 15:30 缆车下山 + 16:30 ★ Cantine Florio 1833 历史马尔萨拉酒庄 4 种品鉴 €25/人 (Marsala 城内, 19 世纪木桶林立) + 19:30 海边餐厅 Caupona",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 2
      },
      {
        "id": "d5",
        "city": "★★ Kite Day 4 - water start 巩固 + first ride",
        "am": "9:00 ★ water start 反复练 → 5-20m 短距 ride 第一次 (IKO Level 2 入口) 3h",
        "pm": "14:30 续 ride 练习 + 起板成功率提升 2h + 17:00 课程结束 + 19:30 Cantina Siciliana cous cous trapanese 晚餐",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d6",
        "city": "★★ Kite Day 5 - 独立短距 ride",
        "am": "9:00 ride 升级 50-100m 短距独立骑 + 转向 transition 基础 3h (IKO Level 2-3 边界)",
        "pm": "14:30 自由练 + jibe 基础 2h + 17:00 课程结束 + 18:30 Marsala 老城 Piazza Loggia 主广场 aperitivo + Chiesa Madre + 海鲜晚餐",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d7",
        "city": "★★ Kite Day 6 - 独立长距 + jibe 转向",
        "am": "9:00 独立 ride 200m+ + jibe transition 完整动作 (无停板转向) 3h",
        "pm": "14:30 续 ride 长距 + upwind ride 顶风骑 (能逆风骑回起点 = IKO Level 3 关键) 2h + 17:00 课程结束 + 19:30 Trapani 老城 Ristorante Pocho 海鲜晚餐 看 Egadi 日落",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d8",
        "city": "休骑日 - Mothia 岛 + 盐田 + Pellegrino",
        "am": "9:30 风筝休骑日。10:00 Mothia/Mozia 岛 渡船 5min €6 (Whitaker 家族购岛建博物馆, Phoenician 古城遗址 8 世纪 BC + 著名 Mozia 御者大理石青年像) + 盐田博物馆",
        "pm": "13:00 Marsala 老港 La Sirena Ubriaca 海鲜午餐 + 15:00 ★ Cantine Pellegrino 1880 二号马尔萨拉酒庄 €20/人 (家族 6 代, garage cellar 现代化对比 Florio 古旧) + 17:30 Marsala 老城散步 + 19:30 早晚餐为次日 Level 3 cert 蓄电",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 2
      },
      {
        "id": "d9",
        "city": "★★ Kite Day 7 - IKO Level 3 cert 评估 (毕业)",
        "am": "★★ 9:00 IKO Level 3 cert 评估 (能 ride upwind 回起点 + jibe transition + 自救 = independent rider 毕业) 3h + 颁 IKO Level 3 cert + 学校 photo",
        "pm": "14:30 毕业庆祝自由练 (装备日租, 不强制) 2h + 17:00 同学合影 + 19:30 海边餐厅 celebration 海鲜晚餐",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 4,
        "weatherBackup": "无风 → cert 评估推到 {{day:lo-stagnone.d10}}/{{day:lo-stagnone.d11}}; 改 Trapani 盐田 Saline di Trapani 木风车 + Salina della Laguna 红粉日落"
      },
      {
        "id": "d10",
        "city": "★ sunset catamaran + 自由练",
        "am": "9:30 自由练习日 (装备日租, 不强制) 2h 复盘 + Marsala 老城慢早午餐",
        "pm": "★ 17:00 私人 sunset catamaran 双人坐 Lo Stagnone 浅滩巡航 1.5h €80/2人 (船长讲解 Phoenician 盐贸易史 + 木风车 + Mothia 岛环行) + 19:30 海边餐厅 cous cous 晚餐",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 3,
        "weatherBackup": "风/浪过大 catamaran 取消 → 改 Saline Ettore e Infersa 盐田博物馆 + 木风车导览 €5"
      },
      {
        "id": "d11",
        "city": "★★ Kite Day 8 - foilboard 水翼板 intro",
        "am": "★★ 9:00 ★ foilboard 水翼板 intro session (加项 €120/2人, 1 日体验, 全新感官 — 板下挂 65cm 水翼, 起飞后离水 50cm 滑行) + theory + 浅滩 body drag with foil 3h",
        "pm": "14:30 续 foilboard 第一次起飞尝试 (与普通板完全不同动作系) 2h + 17:00 学校 foil 介绍 + 19:30 海边晚餐",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 4,
        "weatherBackup": "风过大 (>20kn) → foil 入门危险 → 改普通板 jibe 深化 + 老城下午散步"
      },
      {
        "id": "d12",
        "city": "休骑日 - Egadi 群岛 Favignana 自行车环岛",
        "am": "8:30 风筝休骑日。Trapani 港 → Favignana 渡船 30min €12 (Egadi 群岛主岛, 蝴蝶形, 25km²) + 9:30 抵 + 租自行车 €10/天 + ★ Cala Rossa 红湾 (西西里最美海湾之一, 古采石场遗迹 + 翡翠水) 游泳",
        "pm": "12:30 Cala Azzurra 蓝湾午餐 + 海蚀洞泳 + 15:00 续骑环岛 25km loop + Bue Marino 古采石场 + 17:00 Favignana 港小镇 aperitivo + 18:30 渡船返 Trapani + 20:00 抵 Marsala 海鲜晚餐",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 3
      },
      {
        "id": "d13",
        "city": "★★ Kite Day 9 - downwinder 顺风长距旅行",
        "am": "★★ 9:00 downwinder briefing (顺风长距旅行: 从 A 点起飞, 沿海岸顺风一直骑到 B 点, 救援船跟随) + 装备到 Lo Stagnone 北端起点 → 10:00 出发顺风骑 Lo Stagnone → Trapani 海岸 15km (3-4h, IKO Level 3 后第一次真实距离旅行)",
        "pm": "14:00 抵 Trapani 海岸学校接驳 + 装备归位 + 15:30 庆祝午餐 La Pescheria di Trapani 海鲜午餐 + 17:30 回 Marsala 休息 + 19:30 早晚餐",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d14",
        "city": "★ Kite Day 10 - kiteloop 进阶 + 收尾",
        "am": "★★ 9:00 ★ kiteloop 进阶 (风筝在空中绕环 360° 同时鞍 ride, 进阶动作, 高级 IKO 课目) + 学校 1 对 1 指导 3h + 颁 ★ Lo Stagnone 14 日完赛证书 + 学校告别 photo + 同学合影",
        "pm": "14:00 Marsala 老城最后慢逛 + La Sirena Ubriaca 收尾午餐 + 16:00 行李整理 + 17:00 Trapani 盐田 Saline di Trapani 木风车导览 1.5h + 19:00 Salina della Laguna 红粉日落 (9 月盐分高峰, 盐山 + 风车 + 红粉水, 西西里最 iconic 镜头) + 早睡为次日转场",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 3
      }
    ]
  },
  {
    "id": "morocco",
    "name": "Morocco",
    "nameZh": "摩洛哥",
    "fullName": "摩洛哥 Morocco - Marrakech + Fes + Chefchaouen 文化环 7 日",
    "country": "🇲🇦 摩洛哥",
    "color": "#B5563D",
    "bg": "#FCE6DD",
    "stroke": "#D67454",
    "x": 530,
    "y": 1240,
    "labelPos": "left",
    "activities": "★ Marrakech medina + Jemaa el-Fnaa · Atlas Ourika Valley 山谷 · Fes 老 medina + Chouara 皮革染坊 · Chefchaouen 蓝城 + Rif 山脚",
    "festival": "★ Marrakech + Fes + Chefchaouen 7 日文化环",
    "tips": "<strong>★ 7 日文化环 (Almoravid → Marinid → Andalusian 三段历史)：</strong> Marrakech 红城 3 晚 (1062 Almoravid 建) + Fes 千年学城 2 晚 (859 al-Qarawiyyin 世界最古老大学) + Chefchaouen 蓝城 2 晚 (1471 Andalusian Moriscos 难民建)。<strong>签证：</strong> 中国护照 2016 起免签 90 天 (落地盖章, 备 6 月+护照 + 返程票 + 酒店预订 + €500 现金 backup)。<strong>转场:</strong> 入: 9/30 ✈ Alitalia PMO→FCO 1h + Royal Air Maroc FCO→CMN 3h + CMN→RAK 50min 国内, 总 8h €280/人 (备 PMO→MAD→RAK Iberia/Air Europa 7h €260); 出: 10/7 ✈ Iberia TNG→MAD→MLA 7h €250/人 (Malta 站 d1 转场)。<strong>城际:</strong> Marrakech→Fes Royal Air Maroc 国内 RAK→FEZ 50min €80/人 (vs ONCF 普通快车 7h €25/人, 飞节省 5h 中场不耗); Fes→Chefchaouen grand taxi 大计程车 4h €30/人 (Bab Boujloud 出口拼 6 人/辆) 或专车 €100/4人; Chefchaouen→Tangier grand taxi 1.5h €20。<strong>住宿:</strong> Marrakech 老城 riad (传统庭院民居) €70/晚双人 (Riad BE Marrakech / Riad Yasmine), Fes 老城 riad €60/晚 (Riad Verus / Dar Roumana), Chefchaouen 蓝城 guesthouse €40/晚 (Dar Echchaouen), Tangier 老城 hotel €50/晚 (Dar Nour / La Tangerina)。<strong>装备:</strong> 长袖+长裤 (medina 文化尊重, 女性不必头巾但避免短裙) + 防晒 + 防滑鞋 (medina 石板滑) + 现金 Dirham (大部分 medina 只收现金, 银行卡仅大店/酒店, ATM 见 BMCE/Attijariwafa)。<strong>注意:</strong> Medina 内禁烟酒 (Fes/Chefchaouen 几乎找不到酒, Marrakech riad 内有酒吧); 摄影禁拍当地女性面孔; 大老 medina 雇本地导游 €25/半日 防迷路 + 解释工坊; 出租车坚持打表 (petit taxi 城内 / grand taxi 城际), 或用 InDriver app 防宰客。",
    "days": [
      {
        "id": "d1",
        "city": "转场 (Lo Stagnone→Marrakech) + Jemaa el-Fnaa 夜",
        "am": "6:00 Marsala 退房 + 学校接驳 → PMO Palermo 机场 1.5h → 9:00 ✈ Alitalia PMO→FCO 1h + 11:00 转 12:30 Royal Air Maroc FCO→CMN 3h + 16:00 转 17:30 CMN→RAK 50min 国内 → 18:30 抵 Marrakech Menara RAK",
        "pm": "19:30 出关 + petit taxi RAK→Marrakech medina 30min 100 dirham (谈定价或用 InDriver app 防宰客) + 20:30 入住 Riad BE Marrakech 老城 riad (传统庭院 + 屋顶平台 + 早餐含) + 21:00 ★ Jemaa el-Fnaa 主广场夜市步行 (露天烧烤 + 蛇人 + 说书人; 蜜月小仪式: 鲜榨橙汁 5 dirham + 蜗牛汤 dare) + 23:00 回 riad 屋顶看月光红城",
        "lodging": "Marrakech medina Riad BE €70 (Morocco 第 1 晚)",
        "star": true,
        "intensity": 4,
        "weatherBackup": "PMO→FCO 季节性停飞 / 延误 → 直接订 PMO→MAD→RAK 总 7h Iberia/Air Europa €290/人; 落地夜雷雨改 riad 内屋顶晚餐 (大部分 riad 含)"
      },
      {
        "id": "d2",
        "city": "★★ Marrakech medina 全日 + 蜜月 hammam",
        "am": "★★ 9:00 Bahia Palace 1860 vizier 宫殿 (zellige 马赛克 + 雪松木雕顶 + 安达卢西亚庭院 2h) + 11:30 Madrasa Ben Youssef 1565 旧古兰学院 (Saadian 王朝雕花顶, 1.5h) + 13:00 medina souk 巷子穿梭午餐 Café Clock (camel burger 经典)",
        "pm": "15:00 Majorelle Garden 1923 Yves Saint Laurent 故居 cobalt blue 花园 + Berber Museum + 17:00 Saadian Tombs 1578 Saadian 王陵 + 19:00 ★ 蜜月双人 hammam Les Bains de Marrakech 90min €100/2人 (传统蒸汽浴 + 黑皂 gommage + argan 油按摩, 蜜月仪式锚点) + 21:00 Nomad rooftop 晚餐 medina 屋顶 (新派摩洛哥料理 tagine + harira + 主厨 demo)",
        "lodging": "Marrakech medina Riad BE",
        "star": true,
        "intensity": 4,
        "weatherBackup": "白天暴雨 (10 月罕见) → 室内 Maison de la Photographie + Yves Saint Laurent Museum + Marrakech Museum 三连"
      },
      {
        "id": "d3",
        "city": "★★ Atlas Mountains Ourika Valley day-trip",
        "am": "★★ 8:30 包车 Marrakech → High Atlas Ourika Valley 1.5h drive (海拔 1500m) + Berber 山村 Setti Fatma + 10:30 Cascades d'Ourika 7 瀑布徒步 2-3h (轻徒步, 山泉清凉, 可游泳)",
        "pm": "13:00 Berber 农庄午餐 (tagine 山羊 + 自烤面包 + 薄荷茶, 在地家庭餐桌 €15/人) + 15:00 Setti Fatma 山村 souk (周日最热闹) + 16:30 返 Marrakech + 18:30 抵 + 自由探 Mellah 老犹太区 (medina 东南) + 20:00 Dar Yacout 传统 8 菜套餐晚餐 €60/人 (medina 老 riad 餐厅 1001 夜风格)",
        "lodging": "Marrakech medina Riad BE",
        "star": true,
        "intensity": 4,
        "weatherBackup": "Atlas 山雷暴 → 改 Aït Benhaddou 沙漠 kasbah day-trip (3h drive + UNESCO 土堡 + 角斗士/木乃伊归来取景地, 全天 + €70/人 包车)"
      },
      {
        "id": "d4",
        "city": "转场 (Marrakech→Fes) + Fes medina 入夜",
        "am": "9:00 慢晨 + riad 早餐 + 退房 → 10:30 ✈ Royal Air Maroc RAK→FEZ 50min €80/人 国内直飞 (vs ONCF train 7h, 飞节省 5h 中场转场不耗) + 11:30 抵 Fes-Saïss FEZ + petit taxi 30min Fes Bab Boujloud 入医城 100 dirham",
        "pm": "13:00 入住 Riad Verus 老城 €60 (Fes el-Bali 老城核心, 1280 riad 改造, 屋顶 medina 全景) + 14:30 medina 入口 Bab Boujloud 蓝门拍照 + 15:00 Talaa Kebira 主轴 medina 漫步 (1200 年前商道, 1km 内 200 个工坊) + 17:30 Bou Inania Madrasa 1356 Marinid 学院 (雪松雕顶 + 大理石庭) + 19:00 Café Clock Fes 晚餐 (camel burger + 现场 Andalusian 音乐 oud)",
        "lodging": "Fes medina Riad Verus €60 (Morocco 第 4 晚)",
        "star": true,
        "intensity": 3,
        "weatherBackup": "RAK→FEZ 国内停飞季节性 → 改 ONCF 一等舱座票 7h €25/人, 出发改 7:00 早班, 整日车上, 夜抵 Fes 跳过晚活动到 d5"
      },
      {
        "id": "d5",
        "city": "★★ Fes 老 medina 全日 + Chouara 皮革染坊",
        "am": "★★ 9:00 雇本地导游 €25/半日 (riad 代订, 防 medina 9000 巷迷路 + 解释工坊) + Talaa Kebira → Souk el-Attarine 香料市场 + Henna Souk 海娜市场 + ★★ 11:00 Chouara Tannery 1000 年皮革染坊 (从屋顶俯瞰 60 个染色坑, 自然染料 indigo + saffron + poppy + henna, 拿薄荷叶遮鼻 dare)",
        "pm": "13:30 Café Clock Fes 屋顶午餐 (medina 屋顶 + 主厨 demo) + 15:00 Karaouine Mosque 859 创立世界最古老大学 (非穆斯林只能院外看 + 入口 zellige 拍照) + 15:30 al-Attarine Madrasa 1325 Marinid 学院 (zellige 极致) + 17:00 Mellah 犹太老区 + Royal Palace 大门 (7 道铜门最美) + 19:30 Dar Hatim 私家晚餐 €40/人 (家庭餐桌, 老厨娘 6 菜传统 + Marinid 风格)",
        "lodging": "Fes medina Riad Verus",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d6",
        "city": "转场 (Fes→Chefchaouen) + 蓝城 afternoon",
        "am": "8:30 退房 + grand taxi Bab Boujloud → Chefchaouen Place Outa el Hammam 4h drive €30/人 (拼 6 人 grand taxi 或专车 €100/4人) 过 Rif 山脉 + 11:00 中途 Ouezzane 小镇休 + 12:30 抵 Chefchaouen",
        "pm": "13:00 入住 Dar Echchaouen guesthouse €40 (medina 边山坡 + Rif 山景) + 14:00 ★ Chefchaouen medina 蓝城漫步 (1471 Andalusian Moriscos 难民建, 1930s 当地犹太人染蓝传统) + Place Outa el Hammam 主广场 + Kasbah 老堡 + 17:00 Spanish Mosque 山顶日落 (徒步 30min, Chefchaouen 全景蓝白 + Rif 山脚) + 19:30 Bab Ssour 餐厅 (medina 边经典 Berber 晚餐 chicken bastilla + tagine de kefta)",
        "lodging": "Chefchaouen Dar Echchaouen €40 (Morocco 第 6 晚)",
        "star": true,
        "intensity": 3
      },
      {
        "id": "d7",
        "city": "★ Chefchaouen 蓝城晨 + 转场 to Tangier",
        "am": "★ 6:30 早起 Chefchaouen 蓝城无人晨拍 (日出后 1h 内最佳, 白色阳光 + 蓝墙) 2h + 8:30 riad 早餐 + 10:00 退房 + grand taxi Chefchaouen → Tangier 1.5h €20",
        "pm": "12:00 抵 Tangier 老城 + 入住 Dar Nour 老 medina hotel €50 (Paul Bowles 时代波西米亚老租客地) + 13:00 Café Hafa 海岸悬崖咖啡 (Paul Bowles 老巴黎书生地, 海望 Spain) + 15:00 Tangier Kasbah 老堡 + American Legation Museum (1821 美国首个海外外交楼) + 17:00 Bab al-Bahar 海门 + Tangier marina 海边漫步 + 19:30 海鲜晚餐 Tanger Saveur du Poisson (老餐厅, 没菜单, 当日海鲜套餐 €25/人) + 早睡为次日早机",
        "lodging": "Tangier 老城 Dar Nour €50 (Morocco 第 7 晚)",
        "star": false,
        "intensity": 3
      }
    ]
  },
  {
    "id": "malta",
    "name": "Malta",
    "nameZh": "马耳他/戈佐",
    "fullName": "马耳他/戈佐 Malta/Gozo (3 日 PADI Advanced 潜水)",
    "country": "🇲🇹 马耳他",
    "color": "#7A1F3A",
    "bg": "#FAE3EC",
    "stroke": "#A02A4D",
    "x": 1050,
    "y": 1180,
    "labelPos": "right",
    "activities": "★★ Gozo Blue Hole + Inland Sea 洞穿越 · MV Karwela 沉船 · Reqqa Reef 50m 壁 · 海蚀岩壁石灰岩",
    "festival": "★★ Malta/Gozo 3 日 PADI Advanced 潜水",
    "tips": "<strong>★★ 3 日地中海顶级潜水 (PADI Advanced 级别)：</strong> 9-10 月地中海水温 24-26°C, 能见度 30m+, 是 PADI Advanced 玩家的梦想季。Gozo (兄弟岛) 是 Malta 最佳潜水基地, 5 大经典 dive sites: Blue Hole (火山洞) + Inland Sea 海蚀洞穿越 + MV Karwela 商船沉船 (38m, 2006 沉) + P29 巡逻艇沉船 (35m) + Reqqa Reef 50m+ 大壁。<strong>学校选:</strong> Atlantis Diving Centre Gozo (老牌专业) / Dive Systems Malta / Calypso Diving (Marsalforn 港边)。提前 1 月邮件订 3 日 6 dive package €280-350/人 (含装备 + 船 + 教练 + 国际保险)。<strong>转场:</strong> Morocco Tangier TNG → Malta MLA Iberia/Air Europa 经 MAD 7h €250/人 (整 d1 转场, 早班 9:00 出 TNG 17:30 抵 MLA)。Valletta → Gozo 渡船 Cirkewwa→Mġarr 25min €5/人。<strong>住宿:</strong> Marsalforn (Gozo 北岸潜水村) 公寓 €70-90/晚双人, 步行到 Reqqa Reef 起点。",
    "days": [
      {
        "id": "d1",
        "city": "转场 (Tangier→Malta/Gozo)",
        "am": "6:00 Tangier Dar Nour 退房 + petit taxi → TNG Ibn Battuta 机场 30min + 9:00 ✈ Iberia TNG→MAD 2h + 12:00 MAD 转机 2.5h + 14:30 ✈ Iberia/Air Europa MAD→MLA 3h",
        "pm": "17:30 抵 Malta Luqa MLA + 入境 + bus X1 to Cirkewwa 北岸渡口 1h €2 → 19:30 Gozo ferry Cirkewwa→Mġarr 25min €5/人 → 20:00 抵 Gozo + 入住 Marsalforn 潜水公寓 + 学校 briefing 21:00 (装备 fit + 第二日 Blue Hole 介绍)",
        "lodging": "Marsalforn 潜水公寓 €80",
        "star": false,
        "intensity": 4,
        "weatherBackup": "TNG→MAD→MLA 航段延误 / 季节性停飞 → 备 TNG→CMN→MLA Royal Air Maroc/Lufthansa 经 FCO 9h €280; 抵 MLA 晚于 22:00 → 改宿 Valletta 1 晚, 次日 d2 早渡 Gozo (压缩 dive 1 个)"
      },
      {
        "id": "d2",
        "city": "★★ Dive Day 1 - Gozo Blue Hole + Inland Sea",
        "am": "★★ 8:30 学校班车 → Dwejra Point + ★ Blue Hole 火山洞潜水 (深 16m, 经隧道连接外海, 27m 深处壁面珊瑚) + 表面间隔 1h",
        "pm": "11:30 Inland Sea 海蚀洞穿越潜 (从浅滩游隧道 50m 进开放海, 视野从 8m 渐 35m, 经典 PADI Advanced 体验) + 14:30 学校驻地午餐 + 16:00 boat dive Karwela MV 沉船 38m (商船 2006 沉, 已成珊瑚礁与鱼群家园) + 19:00 Marsalforn 港口海鲜晚餐 ar Rikkardu",
        "lodging": "Marsalforn",
        "star": true,
        "intensity": 5,
        "weatherBackup": "北风>20kn → Inland Sea + Karwela 改南岸 Mġarr ix-Xini (避风峡湾, 同等品质 Wall dive)"
      },
      {
        "id": "d3",
        "city": "★★ Dive Day 2 - Reqqa Reef + P29 + Gozo 最后夜",
        "am": "★★ 8:30 ★ Reqqa Reef boat dive 50m 大壁 (北岸 Marsalforn 出, Gozo 顶级 wall dive, 海狼鱼群 + 大梭鱼洞穴, Deep Adventure dive specialty) + 11:00 P29 巡逻艇沉船 35m (军舰 2007 沉) + 13:00 学校驻地 debrief + 颁 PADI Adventure dive log 章",
        "pm": "14:30 Marsalforn 港散步 + Ramla Bay 红沙滩 (Gozo 北岸最美海湾, 不潜浮潜) + 17:00 Dwejra Bay 日落看 Azure Window 旧址 + 19:30 ar Rikkardu 海鲜晚餐 + 早睡 (no-fly 24h 间隔, 次日中午后才能飞)",
        "lodging": "Marsalforn 潜水公寓 (Malta 第 3 晚)",
        "star": true,
        "intensity": 3,
        "weatherBackup": "潜水气压 / 飞航 24h 间隔: 最后潜必须在 d3 上午完成 (11:00 前 Reqqa Reef + P29), d3 整日不再潜; 次日 ({{day:tuscany.d1}}) 中午后才能飞 FLR"
      }
    ]
  },
  {
    "id": "tuscany",
    "name": "Tuscany Vendemmia",
    "nameZh": "托斯卡纳 Vendemmia",
    "fullName": "托斯卡纳 Tuscany - Vendemmia + Olive + Cinque Terre",
    "country": "🇮🇹 意大利",
    "color": "#791F1F",
    "bg": "#FCEBEB",
    "stroke": "#A32D2D",
    "x": 890,
    "y": 890,
    "labelPos": "left",
    "activities": "★★ Vendemmia 4 日葡萄踩酿 · Tuscan 烹饪课 · 橄榄 harvest · Cinque Terre 5 村 + Buca Lapi 经典 Bistecca",
    "festival": "★★ Vendemmia 4 日沉浸 + Y♡C 2026.10.12 蜜月标签",
    "tips": "<strong>★★ Vendemmia 4 日沉浸 (主升级)：</strong> {{day:tuscany.d2}}-{{day:tuscany.d4}} 葡萄园采收 + lagar 脚踩 + {{day:tuscany.d9}} blending 装瓶 (Y♡C 2026.10.12 蜜月标签, 1 年陈化版 2027 秋寄到中国)。<strong>10 天结构: </strong> {{day:tuscany.d1}} 转场 MLA→FLR + 入 Castellina 农庄 + {{day:tuscany.d2}}-{{day:tuscany.d4}} 葡萄采收 + lagar 脚踩 + {{day:tuscany.d5}} Tuscan 烹饪课 + {{day:tuscany.d6}} olive harvest 全日 + {{day:tuscany.d7}} Cinque Terre 5 村 + Florence Buca Lapi 经典 Bistecca 收尾 + {{day:tuscany.d8}} 回 Chianti 缓冲 + Greve/Volpaia + {{day:tuscany.d9}} blending workshop 蜜月贴标 + {{day:tuscany.d10}} 转场 Grasse。<strong>农庄：</strong> Castellina/Greve agriturismo, 双人间 €90/晚, 9 晚 €810。",
    "days": [
      {
        "id": "d1",
        "city": "转场 (Malta→Florence) + 入 Castellina agriturismo",
        "am": "6:00 Marsalforn 公寓退房 + 学校接驳 → Gozo Mġarr ferry → Cirkewwa → bus X1 to MLA 总 2h → 10:00 ✈ Air Malta MLA → Florence FLR 直飞 3h €130/人 (季节性, 备 MLA→FCO→FLR 4h €110/人) — no-fly 24h+ 间隔 ({{day:malta.d3}} 最后潜 11:00 前, 24h 后可飞)",
        "pm": "13:30 抵 FLR + Tramvia + SITA 巴士 Florence Peretola → Castellina-Monteriggioni 1.5h €8 → 15:30 抵 Castellina agriturismo + welcome (农庄主带看 cantina + 葡萄园 + 次日 Vendemmia 1 briefing) + 19:30 Albergaccio Castellina 老镇晚餐 (Sangiovese 单一品种, agriturismo 推荐)",
        "lodging": "Castellina in Chianti agriturismo €90 (Tuscany 第 1 晚)",
        "star": false,
        "intensity": 3,
        "weatherBackup": "MLA→FLR 直飞季节性, 6 月内查 10 月时刻; 备 MLA→FCO 1.5h + Italo→FLR 1.5h €60 总 4h"
      },
      {
        "id": "d2",
        "city": "★★ Vendemmia Day 1 - 葡萄园采收",
        "am": "★★ 6:30 起床, 农庄主带去葡萄园 → 跟 vignaiolo 一起剪 Sangiovese 串, 装筐 4-5h (背手剪 + 篮筐, 节奏比 olive 慢但更累)",
        "pm": "运葡萄回 cantina 选果台分拣 (烂果剔除) + 称重 + 看入破皮机 + 听 vignaiolo 讲 Chianti DOCG 规则。傍晚泳池放松 + 农庄家庭晚餐",
        "lodging": "Chianti 农庄 €90",
        "star": true,
        "intensity": 4,
        "weatherBackup": "中雨可继续 (葡萄不怕轻雨); 暴雨/雷暴 → 转 cantina 室内分拣台 + 学发酵控温讲解 (含费)"
      },
      {
        "id": "d3",
        "city": "★★ Vendemmia Day 2 - 继续采收 + 农庄家宴",
        "am": "★★ 7:00 第二批葡萄园 (高坡老藤 Sangiovese, 串小但浓度高), 整日跟农庄一起采 + 装筐, 中午农庄主家 panini + 自家酒 + 午休",
        "pm": "下午看昨日入桶果汁开始一次发酵 (每日测温度/糖度记入日志, 你们的桶单独编号)。19:30 农庄家庭正式晚宴 (3-4 道, 与采工同桌, 你们是这周的临时家人)",
        "lodging": "Chianti 农庄",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d4",
        "city": "★★ Vendemmia Day 3 - 传统 lagar 脚踩",
        "am": "★★ 早上挑选最好一批晚熟葡萄入石槽 (lagar) → 你俩光脚下槽 30-40min 传统脚踩 (蜜月仪式感: 共同压同一批果, 这批进你们专属小桶)",
        "pm": "看果浆入小橡木桶 (你们这桶贴 Y♡C 2026.10.12 始酿日标签, 留酒庄陈化 1 年, 2027 秋寄 6 瓶熟成版到中国) + 农庄主讲品种/年份。傍晚 Castellina 老镇晚餐 Albergaccio (Sangiovese 单一品种深度)",
        "lodging": "Chianti 农庄",
        "star": true,
        "intensity": 3
      },
      {
        "id": "d5",
        "city": "★ Tuscan 烹饪课全日",
        "am": "★ 9:30 Tuscan 烹饪课 (农庄内或 Chianti 老镇工坊) €120/人: 买菜 (农庄菜园 + 周边市场) + 手擀 tagliatelle + ragù + Bistecca alla Fiorentina + tiramisù。中午吃自己做的午餐",
        "pm": "14:00 农庄泳池午休 + 慢节奏恢复 + Castellina 老镇 18:00 aperitivo + 19:30 农庄家庭晚餐 (你们 Vendemmia Day 3 lagar 脚踩那桶进入发酵 24h, 农庄主报喜)",
        "lodging": "Chianti 农庄",
        "star": true,
        "intensity": 2
      },
      {
        "id": "d6",
        "city": "★★ Olive Harvest 全日",
        "am": "★★ 农庄 olive harvest 全天: 与农场工人一起背篓+网+轻摇杆采橄榄 4h, 装筐运 frantoio (合作社榨油坊)",
        "pm": "看自己采的橄榄进料 + 现榨新油 6-10L (按重量分得纪念瓶) + 现榨橄榄油 tasting + Tuscan bruschetta 工作坊 + 农庄主家自烧晚餐 (白松露体验留到 truffle-hunt 周)",
        "lodging": "Chianti 农庄",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d7",
        "city": "★★ Cinque Terre 全程 Sentiero Azzurro 5 村 + Florence Buca Lapi 收尾",
        "am": "★★ 6:30 早 SITA 巴士 Castellina → Florence + 8:00 Florence SMN → La Spezia 火车 2.5h €25 → Cinque Terre Treno Card €27.5/天 + 10:30 Riomaggiore 起步",
        "pm": "★★ Sentiero Azzurro 全程 12km 5-6h: Riomaggiore→Manarola→Corniglia→Vernazza→Monterosso (5 村连走, 用满体力)。傍晚 Monterosso 海滩泡脚 + 18:00 火车回 Florence + ★ 19:30 Buca Lapi 1880 创立 Florence 经典老牌 Bistecca alla Fiorentina €60/人 (1.2kg T-bone 切尔比纳牛, 老柴火炭烤, Antinori 宫殿地下室, 提前 3 天订) + Florence hostel 夜",
        "lodging": "Florence hostel €60",
        "star": true,
        "intensity": 5,
        "weatherBackup": "暴雨步道关 (Sentiero Azzurro 易因山体滑坡封段) → 仅火车连村 + 重点 Manarola 酒窖 + Vernazza 教堂 (室内) + 早回 Florence Buca Lapi 提前到 18:30"
      },
      {
        "id": "d8",
        "city": "回 Chianti + 农庄休息 + Greve + Volpaia 古村",
        "am": "Florence Santa Maria Novella → Castellina-Monteriggioni 巴士 SITA 1.5h €8 (回 agriturismo 不取车) + Cinque Terre 12km 之后大腿沉, 慢晨",
        "pm": "下午 ★ Greve in Chianti 主广场 + Macelleria Falorni 老牌肉店 + Montefioralle 古村 (Castellina 邻村) + ★ Volpaia 山顶古村 (Chianti 区最美中世纪小村, 距 Castellina 30min, Volpaia Castello 酒庄品鉴 €15/人) + 19:30 农庄家庭晚餐 (准备明日 Vendemmia 4 blending workshop)",
        "lodging": "Chianti 农庄",
        "star": false,
        "intensity": 2
      },
      {
        "id": "d9",
        "city": "★★ Vendemmia Day 4 - Blending Workshop + 🌟 蜜月贴标",
        "am": "★ 9:30 农庄 blending workshop 上半场: 大师讲解 Chianti Classico DOCG blending 规则 (Sangiovese 主调 ≥80% + Canaiolo + Colorino 等次品种) + 嗅闻 3 种已陈化葡萄酒原液",
        "pm": "★★ 14:00 blending workshop 下半场 €100/2人: 你俩自调比例 → 装瓶 + 蜡封 + 贴 🌟 Y♡C 2026.10.12 蜜月标签 (6 瓶带回); Vendemmia Day 3 脚踩那桶留酒庄陈化, 2027 秋寄 6 瓶熟成版到中国 (运费 €40)。19:30 告别家宴 (与采工同桌)",
        "lodging": "Chianti 农庄",
        "star": true,
        "intensity": 3
      },
      {
        "id": "d10",
        "city": "转场 (托斯卡纳→Grasse)",
        "am": "8:00 Castellina 退房 + 农庄主告别 + SITA 巴士 Castellina → Florence Peretola 1.5h €8 → 11:00 抵 FLR",
        "pm": "13:00 ✈ Air France/ITA Airways FLR → Nice NCE 直飞 1.5h €130/人 (季节性, 备 FLR→PSA→NCE 火车 6h) → 14:30 抵 NCE + Hertz 取车 → Nice→Grasse drive 30min → 16:00 入住 Hotel Carlton Cannes (Côte d'Azur 海景) + 17:30 ★ Musée International de la Parfumerie 嗅闻图书馆 1.5h + 19:30 Mougins 山村 La Place de Mougins 经典 Provence 晚餐",
        "lodging": "Hotel Carlton Cannes 4★ €180 (Grasse 第 1 晚)",
        "star": false,
        "intensity": 3
      }
    ]
  },
  {
    "id": "grasse",
    "name": "Grasse",
    "nameZh": "格拉斯",
    "fullName": "格拉斯 Grasse (Côte d'Azur 香水 3 日)",
    "country": "🇫🇷 法国",
    "color": "#9C2E5F",
    "bg": "#F9E1EE",
    "stroke": "#C44886",
    "x": 710,
    "y": 855,
    "labelPos": "down",
    "activities": "★★ Galimard 香水工坊 · Molinard 大师班 · 香水博物馆 · 玫瑰/茉莉田",
    "festival": "★★ Grasse 香水 3 日",
    "tips": "<strong>★★ 3 日 Grasse 香水沉浸：</strong> Grasse 是世界香水之都 (1747 年 Galimard + 1849 年 Molinard + 1782 年 Fragonard 三大老牌), Côte d'Azur 山区。2 工坊 + 香水博物馆 + Domaine de Manon (Chanel No.5 玫瑰/茉莉田) 3 日深度。<strong>★ 必订：</strong> Galimard \"Studio des Fragrances\" 半日 €55/人 (提前 2 周邮件); Molinard 大师班全日 €120/人 (提前 2 周, 含 50ml signature 自调香水带回); Musée International de la Parfumerie €4 (Grasse 旧城 700 sqm, 嗅闻图书馆 200 年史)。<strong>转场:</strong> Malta MLA → Nice NCE Air Malta 直飞 2h €120/人 (季节性); 备用 MLA→ZRH→NCE 3h €150。Nice→Grasse drive 30min 或 RD 巴士 1h €5。<strong>住宿:</strong> Hotel Carlton Cannes 4★ €180/晚 2 晚 (Côte d'Azur 海景) 或 Grasse 老城 B&B €100/晚。",
    "days": [
      {
        "id": "d1",
        "city": "★★ Galimard \"Studio des Fragrances\" + Domaine de Manon",
        "am": "★★ 9:30 Galimard (Route de Pégomas, Grasse, 1747 创立) 'Studio des Fragrances' 半日 €55/人 (3h 入门 perfumer 课程: 嗅闻 127 种原料 + 学 olfactory pyramid 三角嗅闻 + 调出 100ml 自己 signature 香水 + 命名 + 装瓶带回, 配方留 Galimard 老厂 30 年终身可补单)",
        "pm": "13:00 Galimard 餐厅家常午餐 + 14:30 自驾 Domaine de Manon 茉莉田 €30/人 (10 月 jasmine 花季已尾, 但 Chanel No.5 历史 tour + olive grove + 蒸馏厂内部仍开) + 17:00 Musée International de la Parfumerie 嗅闻图书馆 1.5h + 19:30 Mougins 山村 La Place de Mougins 经典 Provence 晚餐",
        "lodging": "Hotel Carlton Cannes 4★",
        "star": true,
        "intensity": 3,
        "weatherBackup": "茉莉田秋雨季 → 改 Grasse 老城 Vieille Ville 散步 + Place aux Aires 露天市场 + 香料采购"
      },
      {
        "id": "d2",
        "city": "★★ Molinard 大师班全日",
        "am": "★★ 9:00 Molinard (Boulevard Victor Hugo, Grasse, 1849 创立, Coco Chanel 个人 perfumer) 'Création de Parfum' 全日大师班 €120/人 (6h 高级 perfumer 课程: 学香水四象限 + 主调-次调-基调结构 + 嗅闻 250 种原料 + 调出 50ml signature 香水 + 装精装瓶 + 印你名字 label + 配方留 Molinard 终身可补单)",
        "pm": "15:00 课程结束 + Molinard 商店购原料 + 16:30 Maison Fragonard 香水厂参观 (1782 创立, Saracen-built 老厂) + 18:30 Antibes 老城 Vieil Antibes 海边晚餐 + Picasso Museum 旁海滩日落",
        "lodging": "Hotel Carlton Cannes",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d3",
        "city": "转场 (Grasse→Alba 自驾 5h, 沿法意边境)",
        "am": "9:00 Grasse 老城最后慢逛 (Place aux Aires 香料市场 + Cathédrale Notre-Dame-du-Puy 12 世纪老教堂) + 10:00 退房 + 自驾 Grasse → Alba 5h €60 油 + 通行 (A8 沿 Côte d'Azur → Ventimiglia → A10 沿 Liguria 海岸 → Genoa → A26 北上 Asti → Alba)",
        "pm": "15:00 中途 Ventimiglia / Sanremo 海岸午餐 (Liguria 海鲜) + 续驾 → 18:00 抵 Alba + Hertz 还租车 (5 日租仅含 Alba 段, 取车 Alba; 或 Nice 取车整段 5 日 €280 含 droppage) → La Morra agriturismo + welcome 晚餐 (agnolotti del plin + Barolo) + 早睡为次日 dawn hunt",
        "lodging": "La Morra agriturismo €120 (Truffle 第 0 晚)",
        "star": false,
        "intensity": 3
      }
    ]
  },
  {
    "id": "truffle-hunt",
    "name": "Truffle Hunter Week",
    "nameZh": "意大利松露猎人周",
    "fullName": "Roddi/Alba 意大利松露猎人周 (Piemonte 沉浸)",
    "country": "🇮🇹 意大利 (Piemonte)",
    "color": "#712B13",
    "bg": "#F8E2D5",
    "stroke": "#993C1D",
    "x": 850,
    "y": 820,
    "labelPos": "up",
    "activities": "★★ 2 次 pre-dawn 松露猎 · 松露 cooking class · 白松露 World Market peak · frantoio 油坊 · 1 日 Barolo/Bra/Cappella 保留",
    "festival": "★★ 意大利松露猎人周 + 白松露 peak weekend",
    "tips": "<strong>★★ 8 日松露沉浸 (主升级, 替代 Alba 通用版本)：</strong> 5 日松露猎人深度 (2 次 dawn hunts + cooking class + market peak Sat-Sun + frantoio 油/butter workshop) + 3 日 Piemonte 保留 (Barolo + Bra Slow Food + Cappella + Milan 末日)。<strong>必订：</strong> Truffle Hunting with trifolau 提前 2 月邮件 italyandwine.net €60/人 (Roddi pre-dawn); 第 2 次 hunt 在 Monferrato 区不同森林 + 不同 trifolau, 通过 La Morra agriturismo 老板介绍 €70/人; cooking class with truffle €130/人 周五场提前 2 周; World Truffle Market 10/31-11/1 周末门票 €18/天/人; La Morra agriturismo 7 晚提前 3 个月订双人间 €120/晚。<strong>租车:</strong> Alba Hertz 5 日 10/29-11/2 €200, 10/31-11/1 松露周末用免费 navetta 避免酒驾。",
    "days": [
      {
        "id": "d1",
        "city": "Alba 老城探 + 松露 master 见面",
        "am": "前日 ({{day:grasse.d3}}) Grasse→Nice→Alba 自驾 5h 已到 La Morra 农庄; 8:30 缓晨 + 自驾 Alba 老城 30min + Cortile della Maddalena Alba 老城松露市场 (工作日小开市) + 步行 Alba 主教座堂 + Castello di Roddi 黄昏",
        "pm": "★ 14:00 Barolo WiMu 葡萄酒博物馆 €15 (Castello Falletti 1340 城堡, Barolo 起源地) + 16:00 Castello Banfi viewpoint + 17:30 回 La Morra agriturismo + 与 trifolau master Riccardo 见面 (60 岁 + 3 只 Lagotto Romagnolo 狗 + 30 年挖松露经验) + 商定次日 5:30 dawn hunt + welcome 晚餐 (agnolotti del plin + Barolo) + 早睡",
        "lodging": "La Morra agriturismo €120",
        "star": false,
        "intensity": 2
      },
      {
        "id": "d2",
        "city": "★★ Dawn Hunt #1 + Truffle World Market 开幕周末 Sat",
        "am": "★★ 5:30-8:30 Truffle Hunting #1 with Riccardo + 3 只 Lagotto Romagnolo 狗 (Roddi 森林 pre-dawn, 你俩亲手挖到 5-10g 白松露, 装锡纸+米 {{day:truffle-hunt.d4}} cooking class 用) €60/人。9:00 回 agriturismo 早餐",
        "pm": "★ 11:00 自驾 Alba 老城 → Cortile della Maddalena ★★ Truffle World Market Sat 入场 €5 (Alba 节开幕周末; 现买现谈, 你俩挑 5-10g 带回, 拍卖大厅围观) + Truffle 短份午餐 Osteria dell'Arco + 15:30 Truffle Wine Pairing 工坊 + 18:00 回 La Morra + ★ 松露 prep workshop (清洁 + storage in rice/eggs, Riccardo 亲教)",
        "lodging": "La Morra",
        "star": true,
        "intensity": 4,
        "weatherBackup": "森林大雨 → 狗鼻子被雨水扰乱, 改室内 truffle museum + lab 1.5h €40/人 + Market 顺延"
      },
      {
        "id": "d3",
        "city": "★★ World Truffle Market peak Sun + Bagna Càuda",
        "am": "★ 上午继续 World Truffle Market 周日 (周末高峰最后一天, 价格谈判更友好, 余货半价) + 12:00 整桌 Bagna Càuda 蘸酱传统午餐 (蒜油蘸生菜 + 红椒 + 朝鲜蓟, Piemonte 冬季开篇)",
        "pm": "★ navetta 回 La Morra 葡萄园观景 + 15:30 Cappella del Barolo 彩色教堂 (Sol LeWitt + David Tremlett 当代艺术) + 17:30 La Morra 葡萄园 sunset + 早睡为周一 dawn hunt #2",
        "lodging": "La Morra",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d4",
        "city": "★ Cooking class with truffle (Roddi)",
        "am": "★ 9:30 Cooking class with truffle €130/人 (午餐含, Alba 老城工坊 'Pasta Class Alba' 或 'Truffle Stories'): 手擀 tajarin + 鸡蛋蛋黄 fonduta + 现场刨自己挖的白松露 + Barolo zabaione + carne cruda all'albese 生牛肉",
        "pm": "14:00 自驾 Moncalvo 山顶村庄 1h 看朗格丘日落 + 16:00 Monferrato 葡萄园 viewpoint + 18:30 回 La Morra agriturismo (周末松露节用 navetta, 车 {{day:truffle-hunt.d6}}+{{day:truffle-hunt.d7}} 再用)",
        "lodging": "La Morra",
        "star": true,
        "intensity": 3
      },
      {
        "id": "d5",
        "city": "Cappella del Barolo + Moncalvo + La Morra 葡萄园",
        "am": "★ 9:30 自驾 La Morra → Cappella del Barolo 彩色教堂 (Sol LeWitt + David Tremlett 当代艺术 1999) + Castello Falletti viewpoint 葡萄园景 + 11:30 Castello di Roddi 城堡",
        "pm": "13:30 La Morra 老村午餐 Bovio 餐厅 (Langhe 经典 carne cruda + tajarin) + 15:00 自驾 Moncalvo 山顶村庄 1h 看 Monferrato 葡萄园 + 16:30 Moncalvo viewpoint 朗格丘日落 + 18:30 回 La Morra agriturismo 早睡为次日 Dawn Hunt #2",
        "lodging": "La Morra",
        "star": true,
        "intensity": 3
      },
      {
        "id": "d6",
        "city": "★★ Dawn Hunt #2 + Frantoio truffle oil/butter",
        "am": "★★ 5:30-8:30 Truffle Hunting #2 with Monferrato 区 trifolau Paolo + 不同 Lagotto 狗 (新森林 + 不同土壤, 你俩对比 Roddi vs Monferrato 风味差异) €70/人。9:00 回 agriturismo 早餐",
        "pm": "10:30 ★ Frantoio Olive & Truffle 油坊 workshop (Casa del Tartufo Bianco, La Morra): 看你俩 dawn 挖的 truffle 进 lab → 切片 + 浸 olive oil 做 truffle oil + truffle butter 现场制作 + 带 6 瓶回中国 €100 + 17:00 回 agriturismo + 18:30 farewell 晚餐 (trifolau Riccardo 一家共 5 道松露料理)",
        "lodging": "La Morra",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d7",
        "city": "Bra Slow Food + Cappella + 还车",
        "am": "★ 自驾 Bra 城 30min Slow Food 起源 + Eataly 旗舰原型 + Pollenzo 美食大学 (访客可入) + Boccondivino 1986 Slow Food 创始餐厅午餐 €40/人",
        "pm": "★ Castello di Roddi 城堡 + Cappella del Barolo 彩色教堂复访 + La Morra 葡萄园观景台 + 17:00 还车 Alba Hertz + 18:30 La Morra agriturismo 最后一晚 + 整理行李, 早睡为明日 Milan 末日",
        "lodging": "La Morra €120",
        "star": true,
        "intensity": 3
      },
      {
        "id": "d8",
        "city": "★ Milan 末日缓冲 + 返航",
        "am": "★ 早 Italo 火车 La Morra → Milano Centrale 1.5h €25/人 + Malpensa Express → Milano Centrale 寄存行李。Duomo di Milano 大教堂登顶 + Galleria Vittorio Emanuele II + Sforzesco 城堡公园",
        "pm": "Navigli 运河区午餐 + 最后一支 gelato (Gelateria della Musica) → 傍晚 Malpensa Express → 机场酒店 €60 → ✈ Milan Malpensa → 北京/上海 (国航 / 海航 / 土耳其航空 14h, 直飞或一程中转)",
        "lodging": "Malpensa 机场酒店 €60 (返航前夜)",
        "star": true,
        "intensity": 4
      }
    ]
  }
];
