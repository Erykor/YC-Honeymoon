// 站间连线 (地图视图绘制路线), from/to 用 string station ID
// mode: flight|train|drive; lpos 是标签在 SVG 上的覆盖位置 (可为 null).
window.ROUTE_LINES = [
  {
    "from": "connemara",
    "to": "edinburgh",
    "mode": "flight",
    "label": "8/6 ✈ SNN→EDI 1h",
    "lpos": {
      "x": 446,
      "y": 239,
      "r": -17
    }
  },
  {
    "from": "edinburgh",
    "to": "budapest",
    "mode": "flight",
    "label": "8/9 ✈ EDI→BUD 3h",
    "lpos": {
      "x": 923,
      "y": 326,
      "r": 16
    }
  },
  {
    "from": "budapest",
    "to": "vienna",
    "mode": "train",
    "label": "8/17 🚆 BUD→VIE 2.5h",
    "lpos": {
      "x": 1207,
      "y": 439,
      "r": -9
    }
  },
  {
    "from": "vienna",
    "to": "dolomites",
    "mode": "train",
    "label": "8/23 🚆 VIE→INN 4.5h",
    "lpos": {
      "x": 1004,
      "y": 613,
      "r": -52
    }
  },
  {
    "from": "dolomites",
    "to": "kornati",
    "mode": "flight",
    "label": "9/1 ✈ VCE→SPU 1h",
    "lpos": {
      "x": 1028,
      "y": 728,
      "r": 7
    }
  },
  {
    "from": "kornati",
    "to": "kalymnos",
    "mode": "flight",
    "label": "9/7 ✈ ZAD→ATH→KGS 6h",
    "lpos": {
      "x": 1242,
      "y": 806,
      "r": 11
    }
  },
  {
    "from": "kalymnos",
    "to": "lo-stagnone",
    "mode": "flight",
    "label": "9/15 ✈ KGS→ATH→PMO 5h",
    "lpos": {
      "x": 1205,
      "y": 1014,
      "r": -31
    }
  },
  {
    "from": "lo-stagnone",
    "to": "malta",
    "mode": "train",
    "label": "9/29 ⛴ TPS→Malta 1.5h",
    "lpos": {
      "x": 963,
      "y": 1202,
      "r": 48
    }
  },
  {
    "from": "malta",
    "to": "gravel-tuscany",
    "mode": "flight",
    "label": "10/3 ✈ MLA→FLR 3h",
    "lpos": {
      "x": 1074,
      "y": 1023,
      "r": 69
    }
  },
  {
    "from": "gravel-tuscany",
    "to": "tuscany",
    "mode": "drive",
    "label": "10/9 🚗 Montalcino→Chianti 1h",
    "lpos": {
      "x": 880,
      "y": 977,
      "r": 30
    }
  },
  {
    "from": "tuscany",
    "to": "grasse",
    "mode": "flight",
    "label": "10/19 ✈ FLR→NCE 1.5h",
    "lpos": {
      "x": 785,
      "y": 951,
      "r": 11
    }
  },
  {
    "from": "grasse",
    "to": "truffle-hunt",
    "mode": "drive",
    "label": "10/22 🚗 Nice→Alba 5h (法意边境)",
    "lpos": {
      "x": 761,
      "y": 760,
      "r": -14
    }
  }
];
