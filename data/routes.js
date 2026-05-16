// 站间连线 (地图视图绘制路线), from/to 用 string station ID
// mode: flight|train|drive; lpos 是标签在 SVG 上的覆盖位置 (可为 null).
window.ROUTE_LINES = [
  {
    "from": "connemara",
    "to": "edinburgh",
    "mode": "flight",
    "label": "8/6 ✈ SNN→EDI 1h",
    "lpos": {
      "x": 460,
      "y": 310,
      "r": -12
    }
  },
  {
    "from": "edinburgh",
    "to": "budapest",
    "mode": "flight",
    "label": "8/10 ✈ 3h",
    "lpos": {
      "x": 810,
      "y": 350,
      "r": -8
    }
  },
  {
    "from": "budapest",
    "to": "croatia",
    "mode": "flight",
    "label": "8/17 ✈ 4-5h",
    "lpos": {
      "x": 1210,
      "y": 660,
      "r": 60
    }
  },
  {
    "from": "croatia",
    "to": "dolomites",
    "mode": "flight",
    "label": "8/24 ✈→自驾",
    "lpos": {
      "x": 1190,
      "y": 815,
      "r": 22
    }
  },
  {
    "from": "dolomites",
    "to": "croatia-islands",
    "mode": "flight",
    "label": "9/3 ✈ INN→SPU 经 VIE 3h",
    "lpos": {
      "x": 1130,
      "y": 850,
      "r": 22
    }
  },
  {
    "from": "croatia-islands",
    "to": "lo-stagnone",
    "mode": "flight",
    "label": "9/7 ✈ SPU→PMO 经 VIE 4h",
    "lpos": {
      "x": 1080,
      "y": 990,
      "r": -28
    }
  },
  {
    "from": "lo-stagnone",
    "to": "malta",
    "mode": "train",
    "label": "9/15 ⛴ TPS→Malta 1.5h",
    "lpos": {
      "x": 950,
      "y": 1110,
      "r": -5
    }
  },
  {
    "from": "malta",
    "to": "grasse",
    "mode": "flight",
    "label": "9/18 ✈ MLA→NCE 2h",
    "lpos": {
      "x": 760,
      "y": 1030,
      "r": -25
    }
  },
  {
    "from": "grasse",
    "to": "vienna",
    "mode": "flight",
    "label": "9/20 ✈ NCE→VIE 1h45",
    "lpos": {
      "x": 780,
      "y": 720,
      "r": -55
    }
  },
  {
    "from": "vienna",
    "to": "gravel-tuscany",
    "mode": "flight",
    "label": "9/26 ✈ VIE→FLR 1.5h",
    "lpos": {
      "x": 980,
      "y": 680,
      "r": 80
    }
  },
  {
    "from": "gravel-tuscany",
    "to": "tuscany",
    "mode": "drive",
    "label": "10/3 🚗 Montalcino→Chianti 1h",
    "lpos": {
      "x": 880,
      "y": 850,
      "r": 5
    }
  },
  {
    "from": "tuscany",
    "to": "kalymnos",
    "mode": "flight",
    "label": "10/14 ✈ FLR→ATH→KGS 6h",
    "lpos": {
      "x": 1090,
      "y": 800,
      "r": -8
    }
  },
  {
    "from": "kalymnos",
    "to": "kornati",
    "mode": "flight",
    "label": "10/21 ✈ KGS→ATH→SPU 6h",
    "lpos": {
      "x": 1270,
      "y": 790,
      "r": 78
    }
  },
  {
    "from": "kornati",
    "to": "truffle-hunt",
    "mode": "flight",
    "label": "10/27 ✈ ZAD→MXP 1.5h",
    "lpos": {
      "x": 990,
      "y": 810,
      "r": -15
    }
  }
];
