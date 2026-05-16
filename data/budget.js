// 预算 (按月汇总 + 各站合计)。
window.BUDGET = [
    {"category":"国际机票 (两人)","aug":1800,"sep":0,"oct":0,"nov":2700,"note":"北京→爱丁堡 8 月旺季 + Milan→中国 11/4 返航"},
    {"category":"申根 + 英国签证","aug":400,"sep":0,"oct":0,"nov":0,"note":"C 签 180 天多次 + UK Standard Visitor"},
    {"category":"旅行保险 (Adventure 档)","aug":1500,"sep":0,"oct":0,"nov":0,"note":"含高山救援+滑翔伞+冲浪+海钓 (基础档不够覆盖)"},
    {"category":"欧洲段航班 (7 段)","aug":700,"sep":900,"oct":400,"nov":0,"note":"Edin→Buda, Buda→Dbk, Dbk→Vce, Bcn→Mun, Flr→Lis, Por→Mxp (Slz→Flr 改火车)"},
    {"category":"火车+巴士+Swiss Pass","aug":400,"sep":750,"oct":200,"nov":50,"note":"克罗+葡萄牙+巴伐利亚+萨尔茨堡全改公交; Swiss Pass 8 天两人 ~$920; D92 Italo+Malpensa Express 入 nov"},
    {"category":"精简自驾 (5 段共 20 天)","aug":280,"sep":120,"oct":250,"nov":90,"note":"多洛米蒂 5d + 西海岸 1.5d + 托斯卡纳 5d + 阿尔巴 5d (D87-D91 含 Bra/Cappella); 跨月份 10/29-11/2"},
    {"category":"住宿 upgrade (4★ baseline)","aug":1900,"sep":2500,"oct":1900,"nov":460,"note":"全程升级到 4★ 精品酒店 / 中端 B&B / 高级 agriturismo €130-180/晚两人; 大段含早餐; Wiesn 周末 Munich +50%, Adler/Schloss/Victoria Jungfrau 仍走蜜月升级独立行"},
    {"category":"餐饮 baseline","aug":700,"sep":900,"oct":900,"nov":100,"note":"两人 $30-40/天: 市场自助 + 当地小馆 + 偶尔好餐厅, 不追求高级"},
    {"category":"节日通票 + 演出","aug":700,"sep":400,"oct":100,"nov":0,"note":"Fringe 票 + Sziget 5-day pass + Tattoo + Fado + Flamenco"},
    {"category":"★★ 重点活动体验 (主投入 + 升级)","aug":2100,"sep":2400,"oct":2700,"nov":200,"note":"★★ 升级版: Glencoe 私人徒步 £400/2人 + 海钓 peka + Dubrovnik sea kayak 日落 + Plitvice K + Seceda + Tre Cime + ★★ Via Ferrata Lagazuoi €240/2人 + Braies + ★★ Canyoning Saxetbach CHF 260/2人 + 高山奶酪 + ★★ Tegelberg 滑翔伞 €340/2人 + ★★ Königssee kayak + Liechtensteinklamm + Tuscan 烹饪课 + ★★ Vendemmia 4 日 €500/2人 (D62/63/64/70 含 lagar+blending+Y♡C 标签) + Antinori + 橄榄 harvest + Siena + ★★ Cinque Terre 5 村全程 + ★★ Cabo da Roca 悬崖日出 + Belém 烘焙 + Tagus 帆船 + 冲浪课 + ★★ Quinta Bomfim Lagar €300/2人 + ★★ Port Blending €150/2人 + ★★ Truffle Hunt with dog €120/2人 + Truffle Market + Truffle 烹饪课 + Bra/Cappella + Milan Duomo"},
    {"category":"★ 蜜月升级 (4 晚住宿 + 米其林)","aug":900,"sep":1900,"oct":0,"nov":0,"note":"Adler Ortisei + Victoria Jungfrau + Cadaqués 海景 + Schloss Fuschl 古堡 + Florence 米其林 (取消 Schottenhamel 帐篷)"},
    {"category":"装备 + eSIM + 现金","aug":600,"sep":200,"oct":200,"nov":0,"note":"防水冲锋衣 + 徒步鞋 + Airalo Europe + 多币现金"}
];

// 各站行程合计 (展示用, USD)。
window.STATION_BUDGETS = {
      1: '$2,200', 2: '$2,300', 3: '$1,800', 4: '$2,200', 5: '$2,900',
      6: '$2,100', 7: '$1,500', 8: '$2,000', 9: '$2,400', 10: '$1,100',
      11: '$400', 12: '$1,300', 13: '$2,000', 14: '$2,500'
};
