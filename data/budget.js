// 预算 (按月汇总 + 各站合计)。STATION_BUDGETS 用 string station ID
window.BUDGET = [
  {
    "category": "国际机票 (两人)",
    "aug": 1800,
    "sep": 0,
    "oct": 2700,
    "nov": 0,
    "note": "北京/上海→Dublin 7/29 旺季 €800/人 + Milan Malpensa→中国 10/30 返航"
  },
  {
    "category": "签证 (申根+UK+爱尔兰 BIVS)",
    "aug": 450,
    "sep": 0,
    "oct": 0,
    "nov": 0,
    "note": "申根 C 签 + UK Standard Visitor + BIVS 背书"
  },
  {
    "category": "旅行保险 (Adventure 档)",
    "aug": 1900,
    "sep": 0,
    "oct": 0,
    "nov": 0,
    "note": "含高山+滑翔伞+冲浪+海钓+风筝+攀岩 lead+海岸骑乘+PADI Advanced 潜水+sea kayak"
  },
  {
    "category": "欧洲段航班 (7 段) + 火车 (2 段) + 自驾跨境 (1 段)",
    "aug": 800,
    "sep": 1000,
    "oct": 700,
    "nov": 0,
    "note": "✈ SNN→EDI 8/6 + EDI→BUD 8/9 + VCE→SPU 9/1 + ZAD→ATH→KGS 9/7 + KGS→ATH→PMO 9/15 + MLA→FLR 10/3 + FLR→NCE 10/19; 🚆 BUD→VIE 8/17 RailJet €40/人 + VIE→INN 8/23 RailJet €60/人 (省 2 段飞行); 🚗 Grasse→Alba 10/22 自驾 5h (法意边境 A8/A10/A26, 省 1 段飞行)"
  },
  {
    "category": "火车+巴士+渡轮",
    "aug": 350,
    "sep": 300,
    "oct": 250,
    "nov": 0,
    "note": "爱尔兰 Bus Éireann (Dublin→Galway + Galway→Shannon) + 🚆 BUD→VIE RailJet + VIE→INN RailJet + Trapani→Malta catamaran + Italo+Malpensa Express (Alba→MXP D101)"
  },
  {
    "category": "精简自驾 (5 段共 18 天)",
    "aug": 280,
    "sep": 120,
    "oct": 250,
    "nov": 90,
    "note": "多洛 5d + Grasse 2d (Nice 取/还车) + 托斯卡纳 gravel-Vendemmia 接驳 1d + 阿尔巴 5d"
  },
  {
    "category": "住宿 upgrade (4★ baseline)",
    "aug": 2400,
    "sep": 2300,
    "oct": 2000,
    "nov": 0,
    "note": "Connemara 6 晚 B&B 营方含 + Galway 2 晚 + EDI 4 晚 + Vienna 1 区 6 晚 €150/晚 + Ortisei 8 晚 + Kornati B&B 5 晚营方含 + Marsala kite camp 14 晚 + Gozo 2 晚 + Cannes 2 晚 + Castellina 9 + Masouri 7 + La Morra 7 + Ortisei 4★ Spa 升级 1 晚 €200"
  },
  {
    "category": "餐饮 baseline",
    "aug": 900,
    "sep": 800,
    "oct": 800,
    "nov": 0,
    "note": "两人 $30-40/天 + Vienna Kaffeehaus + Heuriger + Sicily 海鲜 + Malta 海鲜 + Kornati 渔家菜"
  },
  {
    "category": "节日通票 + 演出",
    "aug": 580,
    "sep": 100,
    "oct": 200,
    "nov": 0,
    "note": "Fringe 3 日票 + Sziget 5-day pass + Tattoo + Schönbrunn 舞会 + Spanische Hofreitschule + Alba 白松露 World Market + Truffle Cooking"
  },
  {
    "category": "★★ 重点活动体验 (主投入 + 升级)",
    "aug": 6100,
    "sep": 4800,
    "oct": 4900,
    "nov": 0,
    "note": "★★ Connemara Trail 6 日 €3,600/2人 + Cliffs of Moher + Glencoe £400/2人 + Vienna Tanzschule Elmayer 华尔兹 3 日 €700/2人 + Spanische Hofreitschule 晨训 + Schönbrunn 舞会模拟 + Konzerthaus 古典 + Seceda + Tre Cime + Via Ferrata + Kornati Sea Kayak 6 日 €1,700/2人 + Lo Stagnone 风筝 deep 14 日 €2,800/2人 含 foilboard + downwinder + kiteloop + Cantine Florio/Pellegrino + Erice + Mothia + Favignana + sunset catamaran + Malta/Gozo PADI Advanced 6 dives €680/2人 + Tuscany Gravel 7 日 €2,000/2人 + Tuscan 烹饪课 + Vendemmia 4 日 + 橄榄 harvest + Cinque Terre + Kalymnos 攀岩 7 日 €980/2人 + Vathy fjord 私艇 + Truffle Hunt #1 + #2 + Truffle Market + Frantoio 油坊"
  },
  {
    "category": "★ 升级体验 (Spa + 帝国晚餐, 非米其林)",
    "aug": 380,
    "sep": 280,
    "oct": 0,
    "nov": 0,
    "note": "Ortisei 4★ Spa 酒店 + 私汤双人按摩 + Ladin 山景晚餐 (dolomites.d6) + Schönbrunn 城堡舞会模拟 + Plachutta Tafelspitz + Konzerthaus 古典音乐 (vienna.d4) + Florence Buca Lapi 经典 Bistecca (gravel-tuscany.d5)"
  },
  {
    "category": "装备 + eSIM + 现金",
    "aug": 1200,
    "sep": 100,
    "oct": 100,
    "nov": 0,
    "note": "防水冲锋衣 + 徒步鞋 + 攀岩鞋 + 骑靴+chap + 速干潜水内衣 + 舞鞋 (Vienna) + UV50 防晒服 + Airalo Europe 3 月 + 多币现金"
  }
];

// 各站行程合计 (展示用, USD)。
window.STATION_BUDGETS = {
  "connemara": "$4,000",
  "edinburgh": "$1,400",
  "budapest": "$2,300",
  "vienna": "$2,300",
  "dolomites": "$2,000",
  "kornati": "$2,800",
  "lo-stagnone": "$4,200",
  "malta": "$1,500",
  "grasse": "$1,800",
  "gravel-tuscany": "$3,000",
  "tuscany": "$1,800",
  "kalymnos": "$2,800",
  "truffle-hunt": "$2,400"
};
