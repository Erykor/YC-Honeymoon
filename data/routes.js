// 站间连线 (地图视图绘制路线).
// mode: flight|train; lpos 是标签在 SVG 上的覆盖位置 (可为 null).
window.ROUTE_LINES = [
      {"from":1,"to":2,"mode":"flight","label":"8/10 ✈ 3h","lpos":{"x":810,"y":350,"r":-8}},
      {"from":2,"to":3,"mode":"flight","label":"8/16 ✈ 4-5h","lpos":{"x":1210,"y":660,"r":60}},
      {"from":3,"to":4,"mode":"flight","label":"8/23 ✈→自驾","lpos":{"x":1190,"y":815,"r":22}},
      {"from":4,"to":5,"mode":"train","label":"8/31 🚄 5.5h","lpos":{"x":870,"y":690,"r":18}},
      {"from":5,"to":6,"mode":"flight","label":"9/8 ✈ 2h","lpos":{"x":600,"y":790,"r":82}},
      {"from":6,"to":7,"mode":"flight","label":"9/16 ✈ 2h","lpos":{"x":820,"y":620,"r":-12}},
      {"from":7,"to":8,"mode":"train","label":"9/22 🚄 1.5h","lpos":{"x":915,"y":580,"r":-28}},
      {"from":8,"to":9,"mode":"train","label":"9/28 🚄 8h","lpos":{"x":950,"y":700,"r":75}},
      {"from":9,"to":10,"mode":"flight","label":"10/11 ✈ 2.5h","lpos":{"x":540,"y":970,"r":12}},
      {"from":10,"to":11,"mode":"train","label":"10/17 🚌 2h","lpos":null},
      {"from":11,"to":12,"mode":"train","label":"10/20 🚌 3h","lpos":null},
      {"from":12,"to":13,"mode":"flight","label":"10/26 ✈ 2.5h","lpos":{"x":540,"y":850,"r":-8}}
];
