// 预算 (按月汇总 + 各站合计)。STATION_BUDGETS 用 string station ID
window.BUDGET = [
  {
    "category": "国际机票 (两人)",
    "aug": 1800,
    "sep": 0,
    "oct": 0,
    "nov": 2700,
    "note": "北京/上海→Dublin 7/29 旺季 €800/人 + Milan→中国 11/4 返航"
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
    "category": "欧洲段航班 (10 段)",
    "aug": 1100,
    "sep": 1500,
    "oct": 900,
    "nov": 0,
    "note": "SNN→EDI 8/6 + EDI→BUD + BUD→DBV + DBV→VCE + ZRH→PMO 9/7 + MLA→BCN 9/17 + BCN→VIE 9/22 + VIE→FLR 9/30 + FLR→ATH→KGS 10/14 + KGS→ATH→SPU 10/21 + ZAD→MXP 10/27"
  },
  {
    "category": "火车+巴士+渡轮",
    "aug": 500,
    "sep": 500,
    "oct": 300,
    "nov": 50,
    "note": "爱尔兰 Bus Éireann + 克罗+巴伐利亚 (无 Munich/Salzburg) + Sicily-Malta catamaran + Swiss Pass 6 天 ~$700; D98 Italo+Malpensa Express 入 nov"
  },
  {
    "category": "精简自驾 (5 段共 18 天)",
    "aug": 280,
    "sep": 120,
    "oct": 250,
    "nov": 90,
    "note": "多洛 5d + 西海岸 1d + Wachau 1d (Vienna 内) + 托斯卡纳 5d + 阿尔巴 5d"
  },
  {
    "category": "住宿 upgrade (4★ baseline)",
    "aug": 2400,
    "sep": 2800,
    "oct": 1700,
    "nov": 460,
    "note": "Connemara 6 晚 B&B 营方含 + Galway 2 晚 + EDI 4 晚 + Marsala 7 晚 + Gozo 2 晚 + BCN 4 晚 + Vienna 1 区 9 晚 €130/晚 + Masouri 7 晚 + Kornati B&B 5 晚营方含 + Adler/Victoria Jungfrau 走蜜月升级独立行 (Munich/Salzburg/Porto 砍掉省 4★ 18 晚 ~$2400)"
  },
  {
    "category": "餐饮 baseline",
    "aug": 900,
    "sep": 900,
    "oct": 900,
    "nov": 100,
    "note": "两人 $30-40/天 + Vienna Kaffeehaus + Heuriger + Malta 海鲜 + Kornati 渔家菜"
  },
  {
    "category": "节日通票 + 演出",
    "aug": 580,
    "sep": 400,
    "oct": 100,
    "nov": 0,
    "note": "Fringe 3 日票 + Sziget 5-day pass + Tattoo + Schönbrunn 舞会 + Spanische Hofreitschule"
  },
  {
    "category": "★★ 重点活动体验 (主投入 + 升级)",
    "aug": 6100,
    "sep": 5400,
    "oct": 4900,
    "nov": 200,
    "note": "★★ Connemara Trail 6 日 €3,600/2人 + Cliffs of Moher + Glencoe £400/2人 + Dubrovnik sea kayak + 海钓 peka + Plitvice + Seceda + Tre Cime + Via Ferrata + Canyoning + Lo Stagnone 风筝 7 日 €1200/2人 + Cantine Florio/Pellegrino + Erice + Mothia + Trapani + 蜜月 catamaran + Malta/Gozo PADI Advanced 6 dives €680/2人 + Vienna Tanzschule Elmayer 华尔兹 3 日 €700/2人 + Spanische Hofreitschule 晨训 + Schönbrunn 舞会模拟 + Steirereck 米其林二星 + Tuscan 烹饪课 + Vendemmia 4 日 + Antinori + 橄榄 harvest + Siena + Cinque Terre + Kalymnos 攀岩 7 日 €980/2人 + Vathy fjord 私艇 + Kornati Sea Kayak 6 日 €1,700/2人 + Truffle Hunt + Truffle Market + Bra/Cappella + Milan Duomo"
  },
  {
    "category": "★ 蜜月升级 (5 晚 + 米其林)",
    "aug": 900,
    "sep": 2100,
    "oct": 0,
    "nov": 0,
    "note": "Adler Ortisei D33 + Victoria Jungfrau D40 + Cadaqués D54 + Wiener Staatsoper + Plachutta D59 (替代 Schloss Fuschl) + La Bottega D66"
  },
  {
    "category": "装备 + eSIM + 现金",
    "aug": 1200,
    "sep": 200,
    "oct": 200,
    "nov": 0,
    "note": "防水冲锋衣 + 徒步鞋 + 攀岩鞋 + 骑靴+chap + 速干潜水内衣 + 舞鞋 (Vienna) + UV50 防晒服 + Airalo Europe 4 月 + 多币现金"
  }
];

// 各站行程合计 (展示用, USD)。
window.STATION_BUDGETS = {
  "connemara": "$4,000",
  "edinburgh": "$1,400",
  "budapest": "$2,300",
  "croatia": "$1,800",
  "dolomites": "$2,200",
  "croatia-islands": "$2,100",
  "lo-stagnone": "$2,900",
  "malta": "$1,500",
  "grasse": "$1,800",
  "vienna": "$2,600",
  "gravel-tuscany": "$3,200",
  "tuscany": "$1,800",
  "kalymnos": "$2,800",
  "kornati": "$2,800",
  "truffle-hunt": "$2,400"
};
