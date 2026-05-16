// 14 站 99 天行程主数据 (重构 v2: string ID, 无 day#/date/week/station_id - 由 expand.js 运行时计算)
// 改任何站 / 天 / 顺序, 后续日期+编号自动重算; 加 day 直接在 days[] 里 splice 即可
window.TRIP_START = '2026/7/29';
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
    "x": 380,
    "y": 280,
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
    "x": 540,
    "y": 340,
    "labelPos": "down",
    "activities": "Fringe 开幕日 (Fri) · Fringe 周六高峰 · ★★ Glencoe + Lost Valley 私人向导",
    "festival": "★ Edinburgh Fringe 艺穗节",
    "tips": "<strong>Fringe 只留 3 天 (8/7-8/9)：</strong> 砍掉前 3 天 (Royal Mile/Castle/Arthur's Seat) 后保留 Fringe Opening Day 8/7 + 周六最大密度场次 8/8 + ★★ Highland Adventure Safaris Glencoe 私人徒步 8/9。<strong>必订：</strong> Fringe 演出 6 月公布完整阵容, 4 月起早鸟价。Tattoo 票 (8/7 周五场可加) 2 月就开始紧张。",
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
    "x": 1100,
    "y": 420,
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
    "id": "croatia",
    "name": "Croatia",
    "nameZh": "克罗地亚",
    "fullName": "克罗地亚 Croatia",
    "country": "🇭🇷 克罗地亚",
    "color": "#085041",
    "bg": "#E1F5EE",
    "stroke": "#0F6E56",
    "x": 1280,
    "y": 870,
    "labelPos": "right",
    "activities": "Dubrovnik 城墙 · Split 海钓+peka · Krka 游泳 · Plitvice 十六湖",
    "festival": "★ Dubrovnik 城墙 + Plitvice + 海钓",
    "tips": "<strong>不租车：</strong> Dubrovnik→Split 走 Jadrolinija 渡轮 (4.5h €40/人, 海岸风景比开车好); Split→Plitvice / Plitvice→Zagreb 走 FlixBus / Arriva 长途巴士 €15-25/人; Krka 走 day tour 含船 €60/人, 省下租车 + 跨境费 + 停车。<strong>必订：</strong> Dubrovnik 老城住宿 8 月旺季现订; Plitvice 入园 7:30 早场票; Split 海钓家庭船半日 €80/人 提前 1 周邮件订。<strong>D26 当晚转 Zagreb：</strong> 拆原 D27 五段连环转场 (巴士+飞+巴士+火车+巴士) 为 D26 出园后巴士到 Zagreb 过夜 + D27 仅 Zagreb→Venice→Ortisei, 任一段误点的连锁风险减半。",
    "days": [
      {
        "id": "d1",
        "city": "Dubrovnik 城墙 + 海上 kayak 日落",
        "am": "★ 8:00 城墙环走 (避热)",
        "pm": "★★ 17:00 双人 sea kayak Dubrovnik 老城+Lokrum 一圈日落 3h €90/2人 (起点 Pile Gate 西门 Adriatic Kayak Tours), 海蚀洞游泳 + 海上回看老城金色城墙。结束 21:30 Buža Bar 悬崖酒吧夜景 cocktail",
        "lodging": "Dubrovnik",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d2",
        "city": "→Split (渡轮)",
        "am": "7:00 Jadrolinija Dubrovnik → Split 高速渡轮 4.5h €40/人, 海岸日间风景片",
        "pm": "12:00 落地, 步行入住戴克里先宫殿内 €100。Riva 海滨晚餐",
        "lodging": "Split €100",
        "star": false,
        "intensity": 3
      },
      {
        "id": "d3",
        "city": "Split+海钓",
        "am": "戴克里先宫殿地下室 + 大教堂登顶",
        "pm": "★ Split 周边家庭船半日海钓 + 船上做 fish peka €80/人 (Trogir 可顺路绕看)",
        "lodging": "Split",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d4",
        "city": "Krka day tour",
        "am": "★ Krka 国家公园 day tour €60/人 (含 Split 接送 + 入园 + 船游 + 自由游泳 6h)",
        "pm": "15:00 抵 Skradinski Buk 大瀑布池游泳 + 木栈道",
        "lodging": "Split",
        "star": true,
        "intensity": 3
      },
      {
        "id": "d5",
        "city": "→Plitvice (巴士)",
        "am": "7:30 FlixBus / Arriva Split → Plitvice 4h €20/人 (直达, 巴士站就在公园门口)",
        "pm": "15:00 后入园 €15(B 票)。走 H 线短段熟悉",
        "lodging": "Mukinje 村 €80",
        "star": false,
        "intensity": 3
      },
      {
        "id": "d6",
        "city": "Plitvice → Zagreb",
        "am": "★ 7:30 入园。走 K 线全程 8h, 18km",
        "pm": "船渡 P3→P1 + 缆车。17:30 出园 → FlixBus / Arriva Plitvice → Zagreb 2.5h €15/人。21:00 入住 Zagreb 老城 (拆 D27 五段连环转场, 风险减半)",
        "lodging": "Zagreb 老城 €70",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d7",
        "city": "转场 (Zagreb→多洛米蒂)",
        "am": "Zagreb 老城早餐 + Ban Jelačić 广场短逛。10:30 出发机场 → ✈ Zagreb → Venice (Croatia Air 直飞 1h, €120/人)",
        "pm": "Venice Marco Polo → ATVO 巴士 → Mestre → Italo 到 Bolzano 2.5h → SAD 巴士 350 到 Ortisei 1h (合计 €40/人)。住 Ortisei €120",
        "lodging": "Ortisei €120",
        "star": false,
        "intensity": 5
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
    "x": 1080,
    "y": 740,
    "labelPos": "right",
    "activities": "Seceda · Alpe di Siusi · Tre Cime 大环线 · Lago di Braies · ★ 蜜月 Spa 日",
    "festival": "★ Tre Cime 大环线 + 多洛米蒂高山日",
    "tips": "<strong>取消山屋夜：</strong> Rifugio Locatelli 5 月才订基本无位 + 共宿条件硬 + 高山过夜降低后续行程安全余量。改 Tre Cime 大环线纯日游 (10km, 4h, 不过夜)。<strong>每日天气：</strong> 出发前 48h 查 meteo.provincia.bz.it, 雷暴/暴雨当日改为缓冲日。<strong>装备：</strong> 中高帮防水徒步鞋必备 (磨合好), 不再需要 silk liner / 山屋装备。",
    "days": [
      {
        "id": "d1",
        "city": "Val di Funes 适应日 (取车)",
        "am": "Ortisei Hertz 9:00 取 5 日小车 8/25-8/29 €280 (D33 SPA 日省车不用, D34 Cinque Torri + D36 转场再续 2 日, 还车 Innsbruck)",
        "pm": "Val di Funes 山谷 → Santa Maddalena 教堂 (多洛米蒂经典明信片机位, 自驾 40min)",
        "lodging": "Ortisei",
        "star": false,
        "intensity": 4
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
        "weatherBackup": "若暴雨/雷暴/能见度差 → 与 D35 (9/1 完全休息日) 互换 (Tre Cime 上 D35, 休息推到 D34); 或与 D27 (8/24 Val di Funes 适应日) 提前。D34 (8/31) Via Ferrata 装备已订, 不可换"
      },
      {
        "id": "d5",
        "city": "Lago di Braies + 缓冲",
        "am": "★ 7:00 自驾 Ortisei → Lago di Braies 1.5h (停车场需提前预约 €30)。环湖 3.5km + 木船拍照点 + 湖畔咖啡",
        "pm": "中午回 Ortisei 午睡。下午镇上咖啡 + 早睡为周六蜜月 SPA 蓄电",
        "lodging": "Ortisei",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d6",
        "city": "★ 蜜月 SPA 日 Ortisei",
        "am": "睡到 09:00 + Ortisei 老城慢咖啡 + Trauttmansdorff 城堡花园 (Merano 1h)",
        "pm": "★ 蜜月专属: Adler Spa Resort Balance 私汤+双人按摩 €280/2人 + 山景晚餐 Tubladel 米其林推荐",
        "lodging": "Adler Spa Resort 升级 1 晚 €450",
        "star": true,
        "intensity": 3
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
        "city": "转场 (多洛米蒂→瑞士)",
        "am": "9:00 自驾 Ortisei → Innsbruck 还车点 1.5h",
        "pm": "Innsbruck → Zürich EC 火车 4h + Zürich → Lauterbrunnen 2.5h",
        "lodging": "Lauterbrunnen CHF 180",
        "star": false,
        "intensity": 1
      }
    ]
  },
  {
    "id": "croatia-islands",
    "name": "Hvar Islands",
    "nameZh": "赫瓦尔群岛",
    "fullName": "赫瓦尔群岛 Hvar (双人皮划艇 5 日)",
    "country": "🇭🇷 克罗地亚",
    "color": "#0D6B7E",
    "bg": "#D2EEF4",
    "stroke": "#1583A0",
    "x": 1240,
    "y": 920,
    "labelPos": "right",
    "activities": "★★ Hvar 群岛 5 日双人皮划艇 · Pakleni 群岛 · Šćedro 荒岛宿 · 老城散步",
    "festival": "★★ Hvar 双人皮划艇 5 日",
    "tips": "<strong>★★ 5 日双人 sea kayak (主升级, 替代 Interlaken)：</strong> Hvar 群岛是中达尔马提亚明珠, 翡翠透明水 + 海蚀洞 + 隐秘海湾, 双人 kayak 4 日点对点 + 1 荒岛宿。Adventure Hvar / Adriatic Kayak Tours 提供双人 kayak charter, €600-800/人含装备 + 向导 + 4 晚 B&B + 全餐。<strong>路线:</strong> Hvar town 出发 → Pakleni 群岛 (Sv. Klement + Marinkovac + Palmizana) → Hvar 东岸 Pokojni Dol → Šćedro 岛 (荒岛宿) → 返 Hvar。<strong>注意:</strong> 砍掉 Victoria Jungfrau 蜜月夜 + Canyoning + 滑翔伞 (Swiss 段全砍); 5 蜜月夜变为 4 (Adler / Cadaqués / Wiener Staatsoper / La Bottega)。<strong>转场:</strong> Innsbruck → ✈ SPU Split 经 VIE 中转 1 stop 3h, Croatia Air / Austrian €130/人; Split→Hvar Jadrolinija catamaran 1h €15/人。<strong>装备:</strong> 速干衣 + 防晒衣 + 防水袋 + sport sandal; 营方提供 PFD + spray skirt + dry bag。",
    "days": [
      {
        "id": "d1",
        "city": "转场 (多洛米蒂→Split→Hvar)",
        "am": "9:00 Ortisei → Innsbruck 还车点 1.5h → ✈ INN → Split SPU 经 VIE 1 转 3h €130/人",
        "pm": "14:30 抵 SPU + bus 30min Split 老港 → 16:30 Jadrolinija catamaran Split→Hvar town 1h €15/人 → 17:30 抵 Hvar 老港 + Adventure Hvar 营方接驳 + 入住老城 B&B + 装备 fit briefing 19:00 + Hvar Riva 海滨晚餐",
        "lodging": "Hvar 老城 B&B €100",
        "star": false,
        "intensity": 3
      },
      {
        "id": "d2",
        "city": "★★ Kayak Day 1 - Pakleni 群岛环游",
        "am": "★★ 9:00 Hvar 老港装船 + 跨海 Pakleni 群岛 Sv. Klement 8km → 11:30 Palmizana 海滩游泳 + 海蚀洞穿越",
        "pm": "13:30 Marinkovac 岛 + 隐秘海湾游泳 + 海岸礁石 lunch + 16:00 返 Hvar 老港 (今日 20km 5h kayak) + 17:30 Hvar 老镇 13 世纪 Fortica 城堡黄昏 + 19:30 Lucullus 海鲜晚餐",
        "lodging": "Hvar 老城 B&B",
        "star": true,
        "intensity": 4,
        "weatherBackup": "海风>25kn 跨海段不开 → 改 Pakleni 浅水 + Hvar 海岸短段 12km (同等品质, 减距离)"
      },
      {
        "id": "d3",
        "city": "★★ Kayak Day 2 - Hvar 东岸 + Pokojni Dol",
        "am": "★★ 8:30 Hvar 老港出发, Hvar 东岸 → Sv. Nedjelja 葡萄园村 18km, 中途 Pokojni Dol 海湾午餐 + 海蚀洞穿越",
        "pm": "14:30 Sv. Nedjelja 渔家午餐 octopus peka + 15:30 返航 Hvar (今日 25km 6h) + 17:30 抵客栈 + 黄昏 Riva 散步 + 19:30 Konoba Menego 传统达尔马提亚晚餐",
        "lodging": "Hvar 老城 B&B",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d4",
        "city": "★★ Kayak Day 3 - Hvar→Šćedro 岛 (荒岛宿)",
        "am": "★★ 9:00 Hvar 老港 → Šćedro 岛 (Hvar 南面小荒岛, 15km 跨海) 4h kayak",
        "pm": "13:30 抵 Šćedro Mostir 港 (30 居民唯一 konoba) + 海湾游泳 + 渔家午餐 + 15:30 Šćedro 岛环走 1h (Dominican 修道院遗址) + 17:30 营火晚餐 + 19:30 营长讲克罗地亚渔夫祖传故事 + 银河观星 (荒岛无光污染)",
        "lodging": "Šćedro Mostir 渔家客栈 营方含",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d5",
        "city": "★ Kayak Day 4 收尾 + 转场 (Hvar→Sicily)",
        "am": "★ 7:30 Šćedro → Hvar 返程 (15km 4h) + 11:30 抵 Hvar 老港 + 颁 Adventure Hvar 完赛证书 + Hvar 老镇午餐",
        "pm": "14:00 Jadrolinija catamaran Hvar→Split 1h + 15:30 抵 SPU 机场 → 17:00 ✈ SPU → Palermo PMO 经 VIE 1 转 4h €180/人 → 21:30 抵 PMO + 私人接驳 → Marsala kite camp 1.5h → 23:00 抵 Marsala",
        "lodging": "Marsala/Lo Stagnone 海边公寓 €100 (Lo Stagnone 第 1 晚)",
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
    "x": 920,
    "y": 1100,
    "labelPos": "right",
    "activities": "★★ IKO 7 日风筝冲浪 camp · Cantine Florio/Pellegrino · Mothia 岛 · Erice 山顶村 · 蜜月 sunset catamaran",
    "festival": "★★ Lo Stagnone 风筝冲浪 7 日 camp",
    "tips": "<strong>★★ 7 日 camp 沉浸：</strong> Lo Stagnone 浅滩 (1km 内水深至腰), Sangiovese-thermal-wind 15-25kt 平稳, 全球最佳学风筝点之一。9 月仍是稳风季 + 暑期人散开。<strong>学校选：</strong> ProKite Alby Rondina (世界冠军 Alby 自家校, 含装备+宿舍/海景公寓 7 晚) 或 PKS Marsala / Flow Kite School — 提前 2 月邮件订, 询问 7-day all-inclusive package €600-700/人 (含 IKO L1-3 cert + 设备 + 救援船 + 国际保险)。<strong>不租车：</strong> 学校班车 + Marsala 城内步行 + 当日酒庄/Erice/Mothia 拼车团 (Marsala Wine Tour Co-op €30/人/趟)。<strong>蜜月仪式：</strong> D46 双人独立 rider 完成 IKO Level 3 + D47 蜜月私人 sunset catamaran 1.5h €80/2人。<strong>装备：</strong> 防晒服 (UV50+ 长袖) + 反光镜风筝墨镜 + 护脚胶鞋, 学校提供其余。",
    "days": [
      {
        "id": "d1",
        "city": "★★ Kite Day 1 - 装备 fit + 风筝陆地控制",
        "am": "9:00 学校报到 + IKO Level 1 理论 1h + 装备 fit (kite 9-12m² + 海航板 + harness) + 浅滩风筝起飞着陆陆地练 2h",
        "pm": "15:00 浅滩 body drag 体验 (无板, 用风筝拖体过浅水) 2h + 17:00 课程结束 + ★ Cantine Florio 1833 历史马尔萨拉酒庄 (Marsala 城内, 学校班车 10min, 桶藏 cellars 19 世纪木桶林立) €25/人 4 种品鉴 + 19:30 海边餐厅 antipasti siciliani",
        "lodging": "Marsala kite camp 海边公寓",
        "star": true,
        "intensity": 3
      },
      {
        "id": "d2",
        "city": "★★ Kite Day 2 - body drag 升级 + Erice",
        "am": "9:00 body drag upwind 练习 (单手控板模拟, 学逆风游回) 3h + body drag 收风筝水上自救",
        "pm": "14:00 课程半日结束 + 自驾拼车 Erice 山顶中世纪村庄 缆车 €9 (海拔 750m, 鸟瞰 Trapani 盐田 + Egadi 群岛) + Maria Grammatico pasticceria 杏仁糖 (修女传统配方) + 19:30 山顶 Monte San Giuliano 餐厅 busiate alla trapanese 晚餐",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 4,
        "weatherBackup": "风太弱 → body drag 推到 D44 上午合并, 改全日 Erice + Trapani 老城"
      },
      {
        "id": "d3",
        "city": "★★ Kite Day 3 - water start 真正起板",
        "am": "9:00 ★ Water start 第一次站板 (IKO Level 2 关键日, 重复跌入水 → 调整 → 起板 5-20m) 3h",
        "pm": "15:00 半休: Mothia/Mozia 岛 渡船 5min €6 (Whitaker 家族购岛建博物馆, Phoenician 古城遗址 8 世纪 BC + 著名 Mozia 御者大理石青年像) + 盐田博物馆 + 木风车日落 拍照盐山金粉色",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d4",
        "city": "★★ Kite Day 4 - 独立短距 ride",
        "am": "9:00 ride 升级 50-100m 短距离独立骑行 + 转向 transition 练习 3h (IKO Level 2-3 边界)",
        "pm": "15:00 课程结束 + ★ Cantine Pellegrino 1880 二号马尔萨拉酒庄 (家族 6 代经营, garage cellar 现代化对比 Florio 古旧) €20/人 + 17:30 Marsala 老城 aperitivo (Piazza Loggia 主广场 + Chiesa Madre) + Caupona 海鲜晚餐",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d5",
        "city": "★★ Kite Day 5 - 独立 rider 长距 (Level 3 cert)",
        "am": "★★ 9:00 独立 ride 200m+ + jibe/upwind ride 练习 + IKO Level 3 cert 评估 (能 ride upwind 回起点 = independent rider 毕业)",
        "pm": "15:00 庆祝 + 私人 SUP 双人浅滩 1h €40/2人 (绕 Mothia 岛环 Lo Stagnone 浅滩, 浅水透明见底) + 19:30 Trapani 老城 海鲜晚餐 Ristorante Pocho 看 Egadi 日落",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 4,
        "weatherBackup": "无风 → Level 3 评估推到 D47 上午; 改 Trapani 盐田 Saline di Trapani 木风车 + Salina della Laguna 红粉日落"
      },
      {
        "id": "d6",
        "city": "★ 蜜月 catamaran + 自由练",
        "am": "9:30 自由练习日 (camp 装备 7 日租用满, 不强制上课) 2h 复盘 + Marsala 老城慢早午餐",
        "pm": "★ 蜜月专属: 17:00 私人 sunset catamaran 双人坐 Lo Stagnone 浅滩巡航 1.5h €80/2人 (船长讲解 Phoenician 盐贸易史 + 木风车 + Mothia 岛环行) + 19:30 Cantina Siciliana 老城招牌 cous cous trapanese + couscous all'agghiotta 晚餐",
        "lodging": "Marsala kite camp",
        "star": true,
        "intensity": 5,
        "weatherBackup": "风/浪过大 catamaran 取消 → 改 Saline Ettore e Infersa 盐田博物馆 + 木风车导览 €5"
      },
      {
        "id": "d7",
        "city": "★ Kite 最后一组课 + Trapani 盐田",
        "am": "9:00 最后一组课 (jibe 完善 / 难度技巧 / 自由练 3 选 1) 2h + 学校告别 photo + 颁 IKO 证书 + ★ Marsala 餐厅 La Sirena Ubriaca 海鲜午餐",
        "pm": "14:00 自驾拼车 Trapani 盐田 Saline di Trapani 木风车导览 1.5h + 16:30 Salina della Laguna 红粉日落 (9 月底盐分高峰, 盐山 + 风车 + 红粉水, 西西里最 iconic 镜头) + 回 Marsala 收拾行李, 早睡",
        "lodging": "Marsala kite camp",
        "star": true,
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
    "x": 980,
    "y": 1130,
    "labelPos": "right",
    "activities": "★★ Gozo Blue Hole + Inland Sea 洞穿越 · MV Karwela 沉船 · Reqqa Reef 50m 壁 · 海蚀岩壁石灰岩",
    "festival": "★★ Malta/Gozo 3 日 PADI Advanced 潜水",
    "tips": "<strong>★★ 3 日地中海顶级潜水 (PADI Advanced 级别)：</strong> 9 月地中海水温 24-26°C, 能见度 30m+, 是 PADI Advanced 玩家的梦想季。Gozo (兄弟岛) 是 Malta 最佳潜水基地, 5 大经典 dive sites: Blue Hole (火山洞) + Inland Sea 海蚀洞穿越 + MV Karwela 商船沉船 (38m, 2006 沉) + P29 巡逻艇沉船 (35m) + Reqqa Reef 50m+ 大壁。<strong>学校选:</strong> Atlantis Diving Centre Gozo (老牌专业) / Dive Systems Malta / Calypso Diving (Marsalforn 港边)。提前 1 月邮件订 3 日 6 dive package €280-350/人 (含装备 + 船 + 教练 + 国际保险)。<strong>转场:</strong> Marsala → Pozzallo (Sicily 港口) drive 1.5h + Virtu Ferries catamaran Pozzallo→Valletta 1.5h €100/人 (季节性, 旺季每日多班; 备用 ✈ TPS→MLA 40min)。Valletta → Gozo 渡船 Cirkewwa→Mġarr 25min €5/人。<strong>住宿:</strong> Marsalforn (Gozo 北岸潜水村) 公寓 €70-90/晚双人, 步行到 Reqqa Reef 起点。",
    "days": [
      {
        "id": "d1",
        "city": "转场 (Lo Stagnone→Malta/Gozo)",
        "am": "6:00 Marsala 退房 + 学校接驳 → Pozzallo 港 1.5h drive + 8:30 Virtu Ferries Pozzallo → Valletta catamaran 1.5h €100/人",
        "pm": "11:00 抵 Valletta + bus X1 to Cirkewwa 北岸渡口 1h € → 14:00 Gozo ferry Cirkewwa→Mġarr 25min €5/人 → 15:30 抵 Gozo + 入住 Marsalforn 潜水公寓 + 学校 briefing 17:00 (装备 fit + 第二日 Blue Hole 介绍)",
        "lodging": "Marsalforn 潜水公寓 €80",
        "star": false,
        "intensity": 4
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
        "city": "★★ Dive Day 2 - Reqqa Reef + P29 + 转场",
        "am": "★★ 8:30 ★ Reqqa Reef boat dive 50m 大壁 (北岸 Marsalforn 出, Gozo 顶级 wall dive, 海狼鱼群 + 大梭鱼洞穴, Deep Adventure dive specialty) + 11:00 P29 巡逻艇沉船 35m (军舰 2007 沉) + 13:00 学校驻地 debrief + 颁 PADI Adventure dive log 章",
        "pm": "14:30 退房 → Mġarr ferry → Cirkewwa → Valletta 1.5h → 16:30 Virtu Ferries 末班 Valletta→Pozzallo (或 18:00 ✈ MLA→BCN Ryanair 直飞 2h €80/人, 推荐) → 抵 BCN 21:00 入住 Eixample",
        "lodging": "Barcelona Eixample €130 (BCN 第一晚)",
        "star": true,
        "intensity": 4,
        "weatherBackup": "潜水气压 / 飞航 24h 间隔: 最后潜要在 9/16 完成, 9/17 仅做浅潜 ≤18m 或 boat ride (no-fly 6-8h 间隔)"
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
    "x": 540,
    "y": 870,
    "labelPos": "down",
    "activities": "★★ Galimard 香水工坊 · Molinard 大师班 · 香水博物馆 · 玫瑰/茉莉田",
    "festival": "★★ Grasse 香水 3 日 (替代 Barcelona)",
    "tips": "<strong>★★ 3 日 Grasse 香水沉浸 (替代 Barcelona)：</strong> Grasse 是世界香水之都 (1747 年 Galimard + 1849 年 Molinard + 1782 年 Fragonard 三大老牌), Côte d'Azur 山区。2 工坊 + 香水博物馆 + Domaine de Manon (Chanel No.5 玫瑰/茉莉田) 3 日深度。<strong>★ 必订：</strong> Galimard \"Studio des Fragrances\" 半日 €55/人 (提前 2 周邮件); Molinard 大师班全日 €120/人 (提前 2 周, 含 50ml signature 自调香水带回); Musée International de la Parfumerie €4 (Grasse 旧城 700 sqm, 嗅闻图书馆 200 年史)。<strong>转场:</strong> Malta MLA → Nice NCE Air Malta 直飞 2h €120/人 (季节性); 备用 MLA→ZRH→NCE 3h €150。Nice→Grasse drive 30min 或 RD 巴士 1h €5。<strong>住宿:</strong> Hotel Carlton Cannes 4★ €180/晚 2 晚 (蜜月升级) 或 Grasse 老城 B&B €100/晚。<strong>蜜月夜砍掉:</strong> 替换 Cadaqués 蜜月夜, 总蜜月夜从 5 → 3 (Adler + Wiener Staatsoper + La Bottega)。",
    "days": [
      {
        "id": "d1",
        "city": "转场 (Malta→Nice→Grasse) + 香水博物馆",
        "am": "9:00 Marsalforn → Mġarr ferry → Cirkewwa → Valletta + bus 1h → 11:30 MLA 机场 → 13:00 ✈ Air Malta MLA → NCE 2h €120/人",
        "pm": "15:30 抵 NCE + Hertz 取车 1 日 €60 → Nice→Grasse 30min drive → 16:30 入住 Hotel Carlton Cannes (蜜月升级) → 17:30 ★ Musée International de la Parfumerie 嗅闻图书馆 1.5h + Galimard 老厂房 intro tour 半小时 + 19:30 Mougins 山村 La Place de Mougins 米其林推荐晚餐",
        "lodging": "Hotel Carlton Cannes 4★ €180",
        "star": false,
        "intensity": 3
      },
      {
        "id": "d2",
        "city": "★★ Galimard \"Studio des Fragrances\" + 玫瑰/茉莉田",
        "am": "★★ 9:30 Galimard (Route de Pégomas, Grasse, 1747 创立) 'Studio des Fragrances' 半日 €55/人 (3h 入门 perfumer 课程: 嗅闻 127 种原料 + 学 olfactory pyramid 三角嗅闻 + 调出 100ml 自己 signature 香水 + 命名 + 装瓶带回, 配方留 Galimard 老厂 30 年终身可补单)",
        "pm": "13:00 Galimard 餐厅家常午餐 + 14:30 自驾 Domaine de Manon (Chanel No.5 玫瑰 + 茉莉田 — 1909 起为 Chanel 提供 Grasse jasmine, 8 月底茉莉花季尾) 1h tour €30/人 + 17:00 Maison Fragonard 香水厂参观 (1782 创立, Saracen-built 老厂) + 19:30 Antibes 老城 Vieil Antibes 海边晚餐",
        "lodging": "Hotel Carlton Cannes",
        "star": true,
        "intensity": 3,
        "weatherBackup": "茉莉田秋雨季 → 改 Grasse 老城 Vieille Ville 散步 + Place aux Aires 露天市场 + 香料采购"
      },
      {
        "id": "d3",
        "city": "★★ Molinard 大师班 + 转场 Vienna",
        "am": "★★ 9:00 Molinard (Boulevard Victor Hugo, Grasse, 1849 创立, Coco Chanel 个人 perfumer) 'Création de Parfum' 全日大师班 €120/人 (6h 高级 perfumer 课程: 学香水四象限 + 主调-次调-基调结构 + 嗅闻 250 种原料 + 调出 50ml signature 香水 + 装精装瓶 + 印你名字 label + 配方留 Molinard 终身可补单)",
        "pm": "15:00 课程结束 + Molinard 商店购原料 + 还车 NCE → 17:30 ✈ NCE → Vienna VIE (Austrian/Lufthansa 直飞 1h45 €130/人) → 20:30 抵 VIE + CAT 16min Stephansdom → 22:00 入住 Vienna 1 区",
        "lodging": "Vienna 1 区 €130 (Vienna 第 1 晚)",
        "star": true,
        "intensity": 4
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
    "x": 1080,
    "y": 530,
    "labelPos": "up",
    "activities": "★★ Elmayer 华尔兹 3 日课程 · Schönbrunn 城堡 · ★ 蜜月 Wiener Staatsoper 米其林夜 · Belvedere Klimt · Albertina",
    "festival": "★★ Vienna 华尔兹课程 + 蜜月 Staatsoper",
    "tips": "<strong>★★ 3 日华尔兹课程 (主升级, 压缩至 6 日)：</strong> Tanzschule Elmayer (1919 帝国华尔兹学校, Habsburg 贵族传承); 3 日私人课程 €600-800/2人含 Standard Walzer + Wiener Walzer (3/4 旋转) + Polonaise + Quadrille 帝国舞会经典套路。**砍掉 Wachau 河谷 + Hallstatt 日游** (Gravel/Tuscany 段补回乡村活动)。<strong>★ 蜜月: Wiener Staatsoper 米其林夜:</strong> Plachutta Tafelspitz 米其林推荐 + Vienna Philharmonic €350/2人 (1869 落成歌剧院 1 等池座) — 替代被砍 Schloss Fuschl 蜜月夜。<strong>必游:</strong> Schönbrunn + Belvedere (Klimt 吻) + Albertina + Stephansdom + Café Central / Sperl Kaffeehaus 文化 + Spanische Hofreitschule (Lipizzaner 白马晨训选看)。",
    "days": [
      {
        "id": "d1",
        "city": "Vienna 老城序章 + Stephansdom",
        "am": "Grasse → Nice ✈ → Vienna 已昨晚 22:00 入住; 今日睡到 9:00 + 老城 Stephansdom 教堂 + 12 世纪老城步行 + 11:30 Hofburg 皇宫旧址 + Sisi 博物馆 (奥地利皇后伊丽莎白)",
        "pm": "13:30 Plachutta 老城店 Tafelspitz 经典午餐 + 15:00 Café Central (Trotsky/弗洛伊德/列宁喝过的传奇咖啡馆) Sachertorte + Wiener Melange + 17:00 Karlskirche 巴洛克教堂 (Otto Wagner 设计) + 19:30 Demel 老牌甜点店 Apfelstrudel + 老城散步",
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
        "city": "★★ Waltz Day 2 + Belvedere Klimt + Steirereck",
        "am": "★★ 9:30 Elmayer Day 2: Wiener Walzer 加速 + 进阶 outside partner + 连续旋转 60s (心率上升, 帝国舞会节奏) + Polonaise 帝国宫廷开场舞",
        "pm": "13:30 Belvedere 上宫 + Klimt '吻' 真迹 + Schiele 群作 € + 16:00 Belvedere 花园 + 18:00 Café Sperl (Schubert 作曲灵感地) + 19:30 Steirereck 米其林二星晚餐 €180/人 (Stadtpark, 提前 2 月订)",
        "lodging": "Vienna 1 区",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d4",
        "city": "★★ Waltz Day 3 cert + 🌟 蜜月 Wiener Staatsoper 米其林夜",
        "am": "★★ 9:30 Elmayer Day 3 课程完成: Quadrille 群舞 + 你俩组合 demo + 颁 Elmayer 完赛证书 + 拍摄 Habsburg 风格照片",
        "pm": "★ 蜜月专属: 14:00 Schönbrunn 城堡舞会模拟 选修 +€150/2人 (穿礼服试舞经典 Hofball, 真实贵族 dress code) + 18:30 Plachutta Wollzeile Tafelspitz 米其林推荐 + 19:30 🌟 Wiener Staatsoper 国家歌剧院 — Vienna Philharmonic 演出 €175/人 1 等池座",
        "lodging": "Vienna 1 区 +蜜月升级 €180",
        "star": true,
        "intensity": 5
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
        "city": "转场 (Vienna→Florence, 接 Gravel)",
        "am": "8:00 退房 + CAT 16min 到 VIE → 10:00 ✈ Austrian/Lufthansa VIE → Florence FLR 1.5h €130/人",
        "pm": "12:30 抵 FLR + Tramvia → Florence 老城 → 13:30 Tuscany Cycling / Pavé Cycling 提前预定 Castellina in Chianti 接驳 + gravel bike fit (车架 + 鞍 + 把宽 + 双胎压) + 17:00 抵 Castellina agriturismo + welcome 晚餐 + 路书 briefing",
        "lodging": "Castellina in Chianti agriturismo €90 (Gravel 第 1 晚)",
        "star": false,
        "intensity": 3
      }
    ]
  },
  {
    "id": "gravel-tuscany",
    "name": "Strade Bianche Gravel",
    "nameZh": "托斯卡纳白路砾石",
    "fullName": "Strade Bianche / Tuscany 白路 Gravel 7 日 (Chianti → Crete Senesi → Montalcino)",
    "country": "🇮🇹 意大利 (Toscana)",
    "color": "#A87C2D",
    "bg": "#F6EBC9",
    "stroke": "#C99340",
    "x": 870,
    "y": 855,
    "labelPos": "right",
    "activities": "★★ 7 日 gravel 长距离 · Strade Bianche 白路 · Chianti → Siena → Crete Senesi → Pienza → Montalcino · Florence 老城 + 🌟 La Bottega 米其林",
    "festival": "★★ Tuscany Gravel Riding 7 日 + 🌟 La Bottega 米其林",
    "tips": "<strong>★★ 7 日 gravel 长距离 (主升级, 新增)：</strong> Strade Bianche 白路 (literally \"white roads\") 是 Tuscany Crete Senesi 区域的标志性 gravel cycling 路线, 经典 pro race 路线 + 葡萄园 + 柏树大道。**Tuscany Cycling / Pavé Cycling Tours / InGamba** 提供 7 日 self-guided 或 supported package €1,500-2,500/人含: 高级 gravel bike (碳架, 35-40c 双胎) + GPS 路书 + 行李接驳 + B&B 全程 + 部分餐 + 救援车。<strong>路线 (6 骑乘日 + 1 休):</strong> Day 1 抵达 + bike fit; Day 2 Chianti 60km; Day 3 Castellina → Siena 70km; Day 4 Siena 周边 Crete Senesi 65km loop; Day 5 Florence 休 (Uffizi + 🌟 La Bottega); Day 6 Florence → Pienza 80km; Day 7 Pienza → Montalcino 65km + 还车 + 转 Chianti agriturismo (Vendemmia 起点)。<strong>装备:</strong> 自带骑行裤 + 防水冲锋 + 头盔 + 卡鞋 (车队提供 gravel bike, 但卡鞋自带最舒); 平均 60-80km/天 中等强度。<strong>胜过自驾日:</strong> Antinori / Siena / Val d'Orcia 全在 gravel 路上经过, 不再需要单独自驾日 (Tuscany 站对应砍 3 天)。",
    "days": [
      {
        "id": "d1",
        "city": "★ Gravel Day 1 - Chianti 60km loop",
        "am": "★★ 9:00 Castellina in Chianti 出发 + 60km loop: Castellina → Radda in Chianti → Castello di Brolio (Barone Ricasoli 1860 城堡 + 葡萄园) → Gaiole → 返 Castellina. 中度起伏 +800m 累计爬升",
        "pm": "13:30 Castello di Brolio 葡萄园午餐 + Chianti Classico 红葡萄酒品鉴 + 14:30 续骑回 Castellina + 17:00 抵 + bike 简洁 + 18:30 Albergaccio Castellina 米其林推荐晚餐 (Sangiovese 单一品种深度)",
        "lodging": "Castellina in Chianti agriturismo",
        "star": true,
        "intensity": 4,
        "weatherBackup": "暴雨 → gravel 路滑泥泞改 indoor cantina tour Antinori + Verrazzano (车队接驳免费)"
      },
      {
        "id": "d2",
        "city": "★★ Gravel Day 2 - Castellina → Siena 70km",
        "am": "★★ 8:30 Castellina → Strade Bianche 白路 70km 点对点至 Siena. 经典段: Lecchi → Pievasciata → Vagliagli → Murlo (白色石灰岩 gravel + 柏树大道 + 葡萄园全景); +1,100m 爬升",
        "pm": "14:00 Murlo agriturismo 午餐 + 15:30 续骑 Sovicille → 17:00 抵 Siena 城外 Pian dei Mantellini → 把 bike 寄存酒店 + Piazza del Campo 晚 Aperitivo + Trattoria Papei 晚餐 (Pici cacio e pepe + Bistecca alla Senese)",
        "lodging": "Siena 老城 4★ Hotel Athena €160",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d3",
        "city": "★★ Gravel Day 3 - Siena 周边 Crete Senesi 65km loop",
        "am": "★★ 8:30 Siena 出 → Crete Senesi 黏土丘陵区 65km loop: Asciano → San Giovanni d'Asso → Buonconvento → 返 Siena. **Strade Bianche 真正核心** — 黄白相间 gravel + 孤立柏树 + 罗马式小教堂 (Monte Oliveto Maggiore 1313 创建本笃会修道院)",
        "pm": "13:30 Buonconvento 老镇 trattoria 午餐 + 15:00 续骑 + 17:00 抵 Siena + Duomo + Torre del Mangia 登顶 (城内 88m, 88 级阶梯) + 19:30 Osteria Le Logge 米其林推荐",
        "lodging": "Siena 老城",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d4",
        "city": "★ Florence 休骑 + Uffizi",
        "am": "★ 9:00 Siena → bike 车队接驳 Florence (1h drive) → 入住 Santo Spirito 区 €90 + 11:00 ★ Uffizi €25 (提前 1 月订, 第一批入场, 文艺复兴 1F 2-3h) — 完美 gravel 中场休骑日",
        "pm": "14:00 Mercato Centrale 二楼 food court 午餐 + 15:30 Ponte Vecchio + Piazza della Signoria + 17:00 Boboli 花园 + Palazzo Pitti 慢看 + 19:30 Piazzale Michelangelo 日落 (Arno + 穹顶 + 老桥全景, gravel 后腿略沉但日落很美)",
        "lodging": "Florence Santo Spirito €90",
        "star": true,
        "intensity": 2
      },
      {
        "id": "d5",
        "city": "🌟 蜜月 La Bottega del Buon Caffè + 自由 Florence",
        "am": "★ 慢晨 + 10:00 Boboli 花园第二轮 (gravel 后慢逛, 不冲) + 11:30 San Miniato al Monte 罗马式教堂 (Florence 最古老) + 13:00 Trattoria Mario 排队午餐 (Florence 老牌)",
        "pm": "15:00 Mercato Sant'Ambrogio 当地市场 + Cibreo 老牌餐厅 area 散步 + 17:30 准备晚餐 → 🌟 19:30 La Bottega del Buon Caffè 米其林一星晚餐 €120/人 (Arno 河畔, 提前 2 周订, 蜜月 anchor 不动)",
        "lodging": "Florence Santo Spirito",
        "star": true,
        "intensity": 2
      },
      {
        "id": "d6",
        "city": "★★ Gravel Day 4 - Florence → Pienza 80km (最长)",
        "am": "★★ 7:30 Florence → bike 车队接驳到 Greve in Chianti (gravel 起点, 避开 Florence 城内大马路) + 8:30 出发 Greve → Panzano → Castelnuovo Berardenga → Pienza 80km 点对点 (最长一天 +1,400m 爬升, 经典 Tuscany 全景)",
        "pm": "13:00 Castelnuovo 农庄午餐 + 14:30 续骑 → 17:30 抵 Pienza 文艺复兴模范小镇 (Pope Pius II 1462 设计) + 入住 Pienza 中心 B&B + 18:30 Piazza Pio II 主广场 aperitivo + 19:30 La Terrazza del Chiostro pecorino + truffle 晚餐",
        "lodging": "Pienza 中心 B&B €130",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d7",
        "city": "★★ Gravel Day 5 - Pienza → Montalcino 65km + 还车",
        "am": "★★ 8:30 Pienza → Montalcino 65km gravel: 经 Sant'Antimo (1118 罗马式修道院, gregorian chant 早晨弥撒) + San Quirico d'Orcia + Val d'Orcia UNESCO 景观 + Bagno Vignoni (中世纪温泉广场)",
        "pm": "13:00 Montalcino 山顶城堡 + Castello Banfi 或 Casanova di Neri 酒庄午餐 + ★ Brunello di Montalcino Sangiovese Grosso 品鉴 (Italy 顶级 DOCG) + 15:30 bike 车队接驳 Montalcino → Castellina agriturismo (Tuscany Vendemmia 基地, 1h drive) + 18:30 抵 + Tuscan 烹饪课前夜 briefing + 早睡为次日 Vendemmia D1",
        "lodging": "Castellina Chianti agriturismo €90 (Tuscany 第 1 晚)",
        "star": true,
        "intensity": 4
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
    "x": 880,
    "y": 830,
    "labelPos": "right",
    "activities": "★★ Vendemmia 4 日葡萄踩酿 · Tuscan 烹饪课 · 橄榄 harvest · Cinque Terre 5 村",
    "festival": "★★ Vendemmia 4 日沉浸 + Y♡C 2026.10.12 蜜月标签",
    "tips": "<strong>★★ Vendemmia 4 日沉浸 (主升级)：</strong> D1-D3 葡萄园采收 + lagar 脚踩 + D9 blending 装瓶 (Y♡C 2026.10.12 蜜月标签, 1 年陈化版 2027 秋寄到中国)。<strong>压缩 13→10 天: </strong> Florence (Uffizi + 🌟 La Bottega 米其林) + Siena + Val d'Orcia + Antinori 全部移到 gravel-tuscany 站完成 (gravel 路线本就经过这些点); 留 Vendemmia 主线 + 烹饪课 + olive + Cinque Terre + blending 蜜月仪式。<strong>农庄：</strong> Castellina/Greve agriturismo, 双人间 €90/晚, 8 晚 €720 (gravel 站已用 1 晚 Castellina)。",
    "days": [
      {
        "id": "d1",
        "city": "★★ Vendemmia Day 1 - 葡萄园采收",
        "am": "★★ 6:30 起床, 农庄主带去葡萄园 → 跟 vignaiolo 一起剪 Sangiovese 串, 装筐 4-5h (背手剪 + 篮筐, 节奏比 olive 慢但更累)",
        "pm": "运葡萄回 cantina 选果台分拣 (烂果剔除) + 称重 + 看入破皮机 + 听 vignaiolo 讲 Chianti DOCG 规则。傍晚泳池放松 + 农庄家庭晚餐",
        "lodging": "Chianti 农庄 €90",
        "star": true,
        "intensity": 4,
        "weatherBackup": "中雨可继续 (葡萄不怕轻雨); 暴雨/雷暴 → 转 cantina 室内分拣台 + 学发酵控温讲解 (含费)"
      },
      {
        "id": "d2",
        "city": "★★ Vendemmia Day 2 - 继续采收 + 农庄家宴",
        "am": "★★ 7:00 第二批葡萄园 (高坡老藤 Sangiovese, 串小但浓度高), 整日跟农庄一起采 + 装筐, 中午农庄主家 panini + 自家酒 + 午休",
        "pm": "下午看昨日入桶果汁开始一次发酵 (每日测温度/糖度记入日志, 你们的桶单独编号)。19:30 农庄家庭正式晚宴 (3-4 道, 与采工同桌, 你们是这周的临时家人)",
        "lodging": "Chianti 农庄",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d3",
        "city": "★★ Vendemmia Day 3 - 传统 lagar 脚踩",
        "am": "★★ 早上挑选最好一批晚熟葡萄入石槽 (lagar) → 你俩光脚下槽 30-40min 传统脚踩 (蜜月仪式感: 共同压同一批果, 这批进你们专属小桶)",
        "pm": "看果浆入小橡木桶 (你们这桶贴 Y♡C 2026.10.6 始酿日标签, 留酒庄陈化 1 年, 2027 秋寄 6 瓶熟成版到中国) + 农庄主讲品种/年份。傍晚 Castellina 老镇晚餐 Albergaccio (Sangiovese 单一品种深度)",
        "lodging": "Chianti 农庄",
        "star": true,
        "intensity": 3
      },
      {
        "id": "d4",
        "city": "★ Tuscan 烹饪课 + 休骑日",
        "am": "★ 9:30 Tuscan 烹饪课 (农庄内或 Chianti 老镇工坊) €120/人: 买菜 (农庄菜园 + 周边市场) + 手擀 tagliatelle + ragù + Bistecca alla Fiorentina + tiramisù。中午吃自己做的午餐",
        "pm": "14:00 农庄泳池午休 + gravel 后腿恢复 + Castellina 老镇 18:00 aperitivo + 19:30 农庄家庭晚餐 (你们 D3 lagar 脚踩那桶进入发酵 24h, 农庄主报喜)",
        "lodging": "Chianti 农庄",
        "star": true,
        "intensity": 2
      },
      {
        "id": "d5",
        "city": "★★ Olive Harvest 全日",
        "am": "★★ 农庄 olive harvest 全天: 与农场工人一起背篓+网+轻摇杆采橄榄 4h, 装筐运 frantoio (合作社榨油坊)",
        "pm": "看自己采的橄榄进料 + 现榨新油 6-10L (按重量分得纪念瓶) + 现榨橄榄油 tasting + Tuscan bruschetta 工作坊 + 农庄主家自烧晚餐 (白松露体验留到 truffle-hunt 周)",
        "lodging": "Chianti 农庄",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d6",
        "city": "★ 农庄休息日 + 葡萄园观景",
        "am": "★ 慢晨 + Chianti 农庄泳池 + agriturismo 早午餐 + Castellina 老镇 Enoteca 葡萄酒店酒吧",
        "pm": "下午 ★ Volpaia 山顶古村 (Chianti 区最美中世纪小村, 距 Castellina 30min) + Volpaia Castello 葡萄酒庄品鉴 + 19:30 Albergaccio Castellina 米其林推荐晚餐",
        "lodging": "Chianti 农庄",
        "star": false,
        "intensity": 2
      },
      {
        "id": "d7",
        "city": "★★ Cinque Terre 全程 Sentiero Azzurro 5 村",
        "am": "★★ 6:30 早 SITA 巴士 Castellina → Florence + 8:00 Florence SMN → La Spezia 火车 2.5h €25 → Cinque Terre Treno Card €27.5/天 + 10:30 Riomaggiore 起步",
        "pm": "★★ Sentiero Azzurro 全程 12km 5-6h: Riomaggiore→Manarola→Corniglia→Vernazza→Monterosso (5 村连走, 用满体力)。傍晚 Monterosso 海滩泡脚 + 火车回 Florence hostel",
        "lodging": "Florence hostel €60",
        "star": true,
        "intensity": 5,
        "weatherBackup": "暴雨步道关 (Sentiero Azzurro 易因山体滑坡封段) → 仅火车连村 + 重点 Manarola 酒窖 + Vernazza 教堂 (室内)"
      },
      {
        "id": "d8",
        "city": "回 Chianti + 农庄休息",
        "am": "Florence Santa Maria Novella → Castellina-Monteriggioni 巴士 SITA 1.5h €8 (回 agriturismo 不取车) + Cinque Terre 12km 之后大腿沉, 慢晨",
        "pm": "下午 ★ Greve in Chianti 主广场 + Macelleria Falorni 老牌肉店 + Montefioralle 古村 (Castellina 邻村) + 19:30 农庄家庭晚餐 (准备明日 Vendemmia 4 blending workshop)",
        "lodging": "Chianti 农庄",
        "star": false,
        "intensity": 2
      },
      {
        "id": "d9",
        "city": "★★ Vendemmia Day 4 - Blending Workshop + 🌟 蜜月贴标",
        "am": "★ 9:30 农庄 blending workshop 上半场: 大师讲解 Chianti Classico DOCG blending 规则 (Sangiovese 主调 ≥80% + Canaiolo + Colorino 等次品种) + 嗅闻 3 种已陈化葡萄酒原液",
        "pm": "★★ 14:00 blending workshop 下半场 €100/2人: 你俩自调比例 → 装瓶 + 蜡封 + 贴 🌟 Y♡C 2026.10.12 蜜月标签 (6 瓶带回); D3 脚踩那桶留酒庄陈化, 2027 秋寄 6 瓶熟成版到中国 (运费 €40)。19:30 告别家宴 (与采工同桌)",
        "lodging": "Chianti 农庄",
        "star": true,
        "intensity": 3
      },
      {
        "id": "d10",
        "city": "转场 (托斯卡纳→Kalymnos)",
        "am": "SITA 巴士 Castellina → Florence Peretola 1.5h €8 → 12:00 抵 FLR → ✈ FLR → Athens ATH (Aegean/Sky Express 直飞 2h €130/人, 14:30 班次)",
        "pm": "17:00 抵 ATH 转 ATH → Kos KGS (Aegean 直飞 50min €80/人, 18:30 班次) → 20:00 抵 KGS + 公交 Kos Pothia 港 30min → 22:00 ferry ANEK Kalymnos 末班 → Pothia 港 (Kalymnos 主港) 1h + 学校班车 → 24:00 抵 Masouri kite camp 海边公寓 (Kalymnos 第 1 晚)",
        "lodging": "Masouri 攀岩公寓 €70 (Kalymnos 第 1 晚)",
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
    "x": 1300,
    "y": 770,
    "labelPos": "right",
    "activities": "★★ 运动攀岩 lead transition 7 日课程 · Telendos 跨岛 · Grande Grotta 石灰岩海蚀岩壁",
    "festival": "★★ Kalymnos 攀岩 7 日 lead transition",
    "tips": "<strong>★★ 7 日 lead transition 沉浸 (主升级)：</strong> 全球前 3 运动攀岩点, 石灰岩海蚀岩壁 1000+ 路线, 10 月正值最佳风温季 (20-25°C, 阴影区干燥)。\"会攀但不能先锋\" = 学校经典 intermediate-to-lead 课程, 5-7 日 €450-600/人含教练 + 全套装备 (绳/快挂/安全带/头盔, 鞋自带或租)。<strong>学校选:</strong> Kalymnos Climbing School (老牌, 多语种) / Climb Kalymnos (意大利运营, lead 强项) / Aris Theodoropoulos 攀岩团 (Kalymnos 攻略书作者, 私教); 提前 2 月邮件订 7 日 package。<strong>住宿:</strong> Masouri 攀岩村中心区民宿 €60-80/晚双人 (Hotel Philoxenia / Apartments Edelweiss), 步行到 Grande Grotta 起点 10min。<strong>不租车:</strong> 学校班车接送各 sector + Pothia 港口 ferry + Telendos 跨岛渡 10min €3; 岛上 scooter €15/天可选。<strong>装备自备:</strong> 攀岩鞋 (磨合好, 海蚀岩石粗糙) + 速干服 + 防晒帽 + 1.5L 水 + 能量条; 头盔/绳/快挂/harness 学校全配。",
    "days": [
      {
        "id": "d1",
        "city": "转场 (Tuscany→Kalymnos)",
        "am": "6:00 Florence Peretola → ✈ FLR → Athens ATH (Aegean/Sky Express 直飞 2h €130/人, 9:00 班次) → 12:00 抵 ATH 转 ATH → Kos KGS (Aegean 直飞 50min €80/人, 13:30 班次, 8 月前订便宜)",
        "pm": "14:30 抵 KGS 机场 + 公交 Kos Pothia 港 30min €5/人 → 15:30 ferry ANEK Kalymnos → Pothia 港 (Kalymnos 主港) 1h €10/人 → 17:00 抵 Pothia + 学校班车 → Masouri 攀岩村 30min → 18:00 入住 Hotel Philoxenia + 学校 briefing 19:30 (装备 fit + 第二日课程介绍)",
        "lodging": "Masouri 攀岩民宿 €70",
        "star": false,
        "intensity": 4
      },
      {
        "id": "d2",
        "city": "★★ Kite Day 1 - 装备 fit + Grande Grotta top-rope",
        "am": "★★ 9:00 学校报到 + IRTA 理论 1h (lead climbing 物理+安全) + 装备 fit (harness 调试 + 8 字结练 + 制动手) → 10:30 步行到 Grande Grotta 主洞 sector (Kalymnos 招牌岩壁, 大悬挑) + top-rope 4a-5a 暖身路线 3 条 (找节奏)",
        "pm": "14:00 学校驻地午餐 + 15:30 Grande Grotta 下层 top-rope 5b/5c 增加难度 2 条 (技术细化: footwork + reading sequence) + 17:30 收工 + 18:30 Masouri 海边餐厅 Aegean 海鲜烤章鱼 + Greek salad",
        "lodging": "Masouri",
        "star": true,
        "intensity": 4,
        "weatherBackup": "11 月偶有阵风 → 改 Sikati Cave 室内式洞穴 sector (避风, 同等品质 5b/5c)"
      },
      {
        "id": "d3",
        "city": "★★ Climb Day 2 - Lead intro Iliada/Spartan",
        "am": "★★ 9:00 ★ Lead climbing 真正开始: 学校教练带 ★ Iliada / Spartan sectors 5a/5b lead 路线 (双安全索 top-rope 备份 → 渐进 lead, mock leads 中途强制坠落练习, 心理脱敏)",
        "pm": "14:00 午餐 + 15:30 Iliada 5b 真正 lead (第一条独立 lead 路线, 安全索完全 lead, 教练顶 belay) + 17:30 视频回放分析 + 18:30 Pothia 港 Pizzeria Mike's 传统晚餐",
        "lodging": "Masouri",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d4",
        "city": "★★ Climb Day 3 - Telendos 跨岛日 (Irox/Eros)",
        "am": "★★ 8:30 学校班车 + ferry → Telendos 岛 10min €3 (荒岛, 仅 50 人居民, 攀岩朝圣地) → 9:30 上 Irox / Eros sectors (海面正对岩壁, 蜜月最浪漫日) + lead 5b/5c 3 条",
        "pm": "13:00 Telendos 港口 Café Captain Mike 海鲜午餐 + 14:30 Eros sector 下午段 lead 6a 第一次 (首次真正难度跃迁) + 17:00 ferry 回 Masouri + 黄昏 Aegean 海日落 + Smaragda 小酒馆 mezedhes",
        "lodging": "Masouri",
        "star": true,
        "intensity": 4,
        "weatherBackup": "海风>30km/h ferry 停 → 改 Arhi sector (主岛, 同等品质 5c/6a)"
      },
      {
        "id": "d5",
        "city": "★★ Climb Day 4 - Odyssey + Poets",
        "am": "★★ 9:00 Odyssey + Poets sectors (Kalymnos 中等难度精华区, 直壁石灰岩, 比 Grande Grotta 角度小但技术细) + lead 5c/6a 进阶 3-4 条",
        "pm": "14:00 午餐 + 15:30 Poets sector 难度链路 6a/6a+ 2 条 + 教练 mock falls 练习 (主动 take 信任 belay 伙伴) + 17:30 收工 + 19:00 学校驻地 BBQ + 与其他学员国际交流",
        "lodging": "Masouri",
        "star": true,
        "intensity": 4
      },
      {
        "id": "d6",
        "city": "★★ Climb Day 5 - Grande Grotta cave 6a (最终评估)",
        "am": "★★ 9:00 ★★ 回到 Grande Grotta 主洞 + Day 1 的 5a/5b 路线重攀 (对比 5 日前的自己) + 教练 IRTA Level 评估 (能否独立 lead 5c+/6a = lead climber 毕业)",
        "pm": "★ 14:00 ★ 真正考核日: 选 1 条 6a 路线独立 lead from ground to anchor 完整 (你俩轮流 belay, 教练监督), 完成即 IRTA Stage 3 lead cert 颁发 + 16:00 团体合影 + 17:30 庆祝 ouzo + 海边晚餐",
        "lodging": "Masouri",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d7",
        "city": "★ 蜜月最后攀 + Vathy fjord",
        "am": "★ 9:30 自由攀日 (camp 装备含, 不强制上课): 你俩独立选 sector 重攀 (无教练随同) 2-3 条 5b-6a 路线 (验证独立能力)",
        "pm": "★ 蜜月专属: 14:30 学校班车 → Vathy fjord (Kalymnos 隐秘渔村 + 翡翠峡湾, 比 Pothia 商业区美 3 倍) + 私人小艇 1.5h €60/2人沿 fjord 巡游 + 17:30 Vathy 港口餐厅 Harry's Paradise 主厨海鲜套餐 (蜜月夜) + 19:30 回 Masouri 早睡为转场",
        "lodging": "Masouri",
        "star": true,
        "intensity": 3,
        "weatherBackup": "Vathy 风大艇取消 → 改 Hora 山顶城堡 + Pera Kastro 中世纪石头村"
      },
      {
        "id": "d8",
        "city": "转场 (Kalymnos→Split → Kornati 海岛跳点)",
        "am": "6:00 退房 + 学校班车 Masouri → Pothia 30min; 7:30 ferry Pothia → Kos 1h €10/人; 9:00 抵 KGS 机场; 11:00 ✈ KGS → Athens ATH 50min €80; ATH → SPU Split (Croatia Airlines+Aegean 经 ZAG 1 转, 6h, €250/人)",
        "pm": "18:00 抵 Split + 与 Kornati Sea Kayak 营方接驳到 Murter 岛 基地 (Kornati 群岛门户) 1h drive + 19:30 入住营方 B&B + welcome 晚餐 + 次日 6 日 kayak 装备 fit briefing",
        "lodging": "Porto Ribeira €90",
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
    "x": 1240,
    "y": 800,
    "labelPos": "right",
    "activities": "★★ Sea Kayak Croatia 6 日 Kornati 群岛点对点 (Murter→Žirje→Kornat→Levrnaka→Dugi Otok→Šibenik)",
    "festival": "★★ Kornati 群岛 6 日海洋皮划艇",
    "tips": "<strong>★★ 6 日点对点海岛跳 (主升级, 替换 Porto)：</strong> Kornati National Park (89 岛屿, Adriatic 蓝绿水, UNESCO 候选) 是地中海最佳 sea kayaking 区, 10 月末水温 19°C 仍可游泳, 风稳定。**Sea Kayak Croatia** (seakayakcroatia.com) 6 日点对点 island-hop, €800-900/人含: 双 kayak + 全部装备 + 向导 (PADI Rescue level) + 5 晚 B&B/客栈 + 全餐 + 营地夜 1 晚 (荒岛野营选项)。<strong>路线:</strong> Day 1 Murter 基地训练; Day 2-5 Žirje→Kornat→Levrnaka→Dugi Otok 4 日点对点 (10-25km/天, 6h/天); Day 6 Dugi Otok→Šibenik 收尾。<strong>难度:</strong> 适合中级 sea kayaker, Lo Stagnone 风筝 + Dubrovnik kayak (D24) 后体能够。<strong>不租车:</strong> 营方含 Murter→Šibenik 全程接驳。<strong>装备:</strong> 自带速干衣 + 防晒 + 防水袋; 营方提供 paddle + spray skirt + PFD + dry bag。",
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
        "city": "收尾 + 转场 (Dugi Otok→Alba)",
        "am": "★ 8:00 短段 kayak 收尾 Dugi Otok 南岸 → 营方接驳船 → 12:00 抵 Zadar 港 + 颁 Sea Kayak Croatia 完赛证书 + Lloncia Adria 海鲜午餐 + 退装备",
        "pm": "14:30 Zadar 老城短逛 (Sea Organ 海风琴 + Greeting to the Sun 太阳能装置 Nikola Bašić 作品) → 16:00 Zadar 机场 → 17:30 ✈ ZAD → Milan Malpensa (Ryanair 直飞 1.5h, €100/人) → 19:30 抵 MXP + Malpensa Express → Milano Centrale → Italo 到 Asti 1h + SFM4 到 Alba 30min → 23:00 抵 La Morra agriturismo, 晚餐床上简餐 + 早睡为白松露周",
        "lodging": "La Morra €120 (Alba 第一晚)",
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
    "x": 700,
    "y": 800,
    "labelPos": "down",
    "activities": "★★ 2 次 pre-dawn 松露猎 · 松露 cooking class · 白松露 World Market peak · frantoio 油坊 · 1 日 Barolo/Bra/Cappella 保留",
    "festival": "★★ 意大利松露猎人周 + 白松露 peak weekend",
    "tips": "<strong>★★ 8 日松露沉浸 (主升级, 替代 Alba 通用版本)：</strong> 5 日松露猎人深度 (2 次 dawn hunts + cooking class + market peak Sat-Sun + frantoio 油/butter workshop) + 3 日 Piemonte 保留 (Barolo + Bra Slow Food + Cappella + Milan 末日)。<strong>必订：</strong> Truffle Hunting with trifolau 提前 2 月邮件 italyandwine.net €60/人 (Roddi pre-dawn); 第 2 次 hunt 在 Monferrato 区不同森林 + 不同 trifolau, 通过 La Morra agriturismo 老板介绍 €70/人; cooking class with truffle €130/人 周五场提前 2 周; World Truffle Market 10/31-11/1 周末门票 €18/天/人; La Morra agriturismo 7 晚提前 3 个月订双人间 €120/晚。<strong>租车:</strong> Alba Hertz 5 日 10/29-11/2 €200, 10/31-11/1 松露周末用免费 navetta 避免酒驾。",
    "days": [
      {
        "id": "d1",
        "city": "抵 Roddi/La Morra + 松露 master 见面",
        "am": "前日 Zadar→Milan→Alba 已到, 上午 Cortile della Maddalena Alba 老城松露市场 (工作日小开市) + 步行 Alba 主教座堂",
        "pm": "★ Italo + SFM4 → La Morra 站 (15min) + agriturismo 接驳 → 与 trifolau master Riccardo 见面 (60 岁 + 3 只 Lagotto Romagnolo 狗 + 30 年挖松露经验) + 商定次日 5:30 dawn hunt + welcome 晚餐 (agnolotti del plin + Barolo) + 早睡",
        "lodging": "La Morra agriturismo €120",
        "star": false,
        "intensity": 2
      },
      {
        "id": "d2",
        "city": "★★ Dawn Hunt #1 + 取车 + Barolo 酒庄",
        "am": "★★ 5:30-8:30 Truffle Hunting #1 with Riccardo + 3 只 Lagotto Romagnolo 狗 (Roddi 森林 pre-dawn, 你俩亲手挖到 5-10g 白松露, 装锡纸+米 D3 cooking class 用) €60/人。9:00 回 agriturismo 早餐",
        "pm": "9:30 Alba Hertz 取 5 日小车 10/29-11/2 €200 → ★ Barolo WiMu 葡萄酒博物馆 €15 + Marchesi di Barolo 酒庄 €25 + La Morra Bovio 餐厅午餐 + Pio Cesare/Ceretto 第二轮 (一人开车不喝, 轮换) + 17:00 回 agriturismo + 18:00 ★ 松露 prep workshop (清洁 + storage in rice/eggs, Riccardo 亲教)",
        "lodging": "La Morra",
        "star": true,
        "intensity": 4,
        "weatherBackup": "森林大雨 → 狗鼻子被雨水扰乱, 改室内 truffle museum + lab 1.5h €40/人 + Barolo 顺延 D7 周一"
      },
      {
        "id": "d3",
        "city": "★ Cooking class with truffle (Roddi)",
        "am": "★ 9:30 Cooking class with truffle €130/人 (午餐含, Alba 老城工坊 'Pasta Class Alba' 或 'Truffle Stories'): 手擀 tajarin + 鸡蛋蛋黄 fonduta + 现场刨自己挖的白松露 + Barolo zabaione + carne cruda all'albese 生牛肉",
        "pm": "14:00 自驾 Moncalvo 山顶村庄 1h 看朗格丘日落 + 16:00 Monferrato 葡萄园 viewpoint + 18:30 回 La Morra agriturismo (周末松露节用 navetta, 车 D6+D7 再用)",
        "lodging": "La Morra",
        "star": true,
        "intensity": 3
      },
      {
        "id": "d4",
        "city": "★★ White Truffle World Market peak Sat",
        "am": "★★ 9:00 World Truffle Market 周六入场 (10 月底正值松露真正高峰) - Cortile della Maddalena 拍卖大厅 + 现买现谈, 你俩挑 5-10g 带回中国送父母 (€150-200/人); Alba 节日期间免费 navetta 覆盖城内 + La Morra/Barolo 周末班次",
        "pm": "Truffle 短份午餐 Osteria dell'Arco 或市场内小摊 + 13:00 Truffle 拍卖区围观 (世界买家 + 最高 truffle 上百万 €) + 15:30 Truffle 烹饪 demo (米其林主厨现场刨松露) + 18:00 navetta 回 La Morra",
        "lodging": "La Morra",
        "star": true,
        "intensity": 5
      },
      {
        "id": "d5",
        "city": "★★ World Truffle Market peak Sun + Bagna Càuda",
        "am": "★ 上午继续 World Truffle Market 周日 (周末高峰最后一天, 价格谈判更友好, 余货半价) + 12:00 整桌 Bagna Càuda 蘸酱传统午餐 (蒜油蘸生菜 + 红椒 + 朝鲜蓟, Piemonte 冬季开篇)",
        "pm": "★ navetta 回 La Morra 葡萄园观景 + 15:30 Cappella del Barolo 彩色教堂 (Sol LeWitt + David Tremlett 当代艺术) + 17:30 La Morra 葡萄园 sunset + 早睡为周一 dawn hunt #2",
        "lodging": "La Morra",
        "star": true,
        "intensity": 5
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
