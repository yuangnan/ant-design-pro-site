webpackJsonp([39],{

/***/ 2390:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "Ant Design Pro 提供的业务中常用的图表类型，都是基于 ",
      [
        "a",
        {
          "title": null,
          "href": "https://antv.alipay.com/g2/doc/index.html"
        },
        "G2"
      ],
      " 按照 Ant Design 图表规范封装，需要注意的是 Ant Design Pro 的图表组件以套件形式提供，可以任意组合实现复杂的业务需求。"
    ],
    [
      "p",
      "因为结合了 Ant Design 的标准设计，本着极简的设计思想以及开箱即用的理念，简化了大量 API 配置，所以如果需要灵活定制图表，可以参考 Ant Design Pro 图表实现，自行基于 ",
      [
        "a",
        {
          "title": null,
          "href": "https://antv.alipay.com/g2/doc/index.html"
        },
        "G2"
      ],
      " 封装图表组件使用。"
    ]
  ],
  "meta": {
    "title": {
      "en-US": "Charts",
      "zh-CN": "Charts"
    },
    "subtitle": "图表",
    "order": 2,
    "cols": 2,
    "filename": "scaffold/src/components/Charts/index.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#API",
          "title": "API"
        },
        "API"
      ]
    ]
  ],
  "api": [
    "section",
    [
      "h2",
      "API"
    ],
    [
      "h3",
      "ChartCard"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "title"
          ],
          [
            "td",
            "卡片标题"
          ],
          [
            "td",
            "ReactNode",
            "|",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "action"
          ],
          [
            "td",
            "卡片操作"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "total"
          ],
          [
            "td",
            "数据总量"
          ],
          [
            "td",
            "ReactNode ",
            "|",
            " number ",
            "|",
            " function"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "footer"
          ],
          [
            "td",
            "卡片底部"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "contentHeight"
          ],
          [
            "td",
            "内容区域高度"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "avatar"
          ],
          [
            "td",
            "右侧图标"
          ],
          [
            "td",
            "React.ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "MiniBar"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "color"
          ],
          [
            "td",
            "图表颜色"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "#1890FF"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "height"
          ],
          [
            "td",
            "图表高度"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "data"
          ],
          [
            "td",
            "数据"
          ],
          [
            "td",
            "array<{x, y}>"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "MiniArea"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "color"
          ],
          [
            "td",
            "图表颜色"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "rgba(24, 144, 255, 0.2)"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "borderColor"
          ],
          [
            "td",
            "图表边颜色"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "#1890FF"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "height"
          ],
          [
            "td",
            "图表高度"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "line"
          ],
          [
            "td",
            "是否显示描边"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "false"
          ]
        ],
        [
          "tr",
          [
            "td",
            "animate"
          ],
          [
            "td",
            "是否显示动画"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "true"
          ]
        ],
        [
          "tr",
          [
            "td",
            "xAxis"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "http://antvis.github.io/g2/doc/tutorial/start/axis.html"
              },
              "x 轴配置"
            ]
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "yAxis"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "http://antvis.github.io/g2/doc/tutorial/start/axis.html"
              },
              "y 轴配置"
            ]
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "data"
          ],
          [
            "td",
            "数据"
          ],
          [
            "td",
            "array<{x, y}>"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "MiniProgress"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "target"
          ],
          [
            "td",
            "目标比例"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "color"
          ],
          [
            "td",
            "进度条颜色"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "strokeWidth"
          ],
          [
            "td",
            "进度条高度"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "percent"
          ],
          [
            "td",
            "进度比例"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Bar"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "title"
          ],
          [
            "td",
            "图表标题"
          ],
          [
            "td",
            "ReactNode",
            "|",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "color"
          ],
          [
            "td",
            "图表颜色"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "rgba(24, 144, 255, 0.85)"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "padding"
          ],
          [
            "td",
            "图表内部间距"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/alibaba/BizCharts/blob/master/doc/api/chart.md#7padding-object--number--array-"
              },
              "array"
            ]
          ],
          [
            "td",
            [
              "code",
              "'auto'"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "height"
          ],
          [
            "td",
            "图表高度"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "data"
          ],
          [
            "td",
            "数据"
          ],
          [
            "td",
            "array<{x, y}>"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "autoLabel"
          ],
          [
            "td",
            "在宽度不足时，自动隐藏 x 轴的 label"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            [
              "code",
              "true"
            ]
          ]
        ]
      ]
    ],
    [
      "h3",
      "Pie"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "animate"
          ],
          [
            "td",
            "是否显示动画"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "true"
          ]
        ],
        [
          "tr",
          [
            "td",
            "color"
          ],
          [
            "td",
            "图表颜色"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "rgba(24, 144, 255, 0.85)"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "height"
          ],
          [
            "td",
            "图表高度"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "hasLegend"
          ],
          [
            "td",
            "是否显示 legend"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            [
              "code",
              "false"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "padding"
          ],
          [
            "td",
            "图表内部间距"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/alibaba/BizCharts/blob/master/doc/api/chart.md#7padding-object--number--array-"
              },
              "array"
            ]
          ],
          [
            "td",
            [
              "code",
              "'auto'"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "percent"
          ],
          [
            "td",
            "占比"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "tooltip"
          ],
          [
            "td",
            "是否显示 tooltip"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "true"
          ]
        ],
        [
          "tr",
          [
            "td",
            "valueFormat"
          ],
          [
            "td",
            "显示值的格式化函数"
          ],
          [
            "td",
            "function"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "title"
          ],
          [
            "td",
            "图表标题"
          ],
          [
            "td",
            "ReactNode",
            "|",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "subTitle"
          ],
          [
            "td",
            "图表子标题"
          ],
          [
            "td",
            "ReactNode",
            "|",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "total"
          ],
          [
            "td",
            "图标中央的总数"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "function"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Radar"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "title"
          ],
          [
            "td",
            "图表标题"
          ],
          [
            "td",
            "ReactNode",
            "|",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "height"
          ],
          [
            "td",
            "图表高度"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "hasLegend"
          ],
          [
            "td",
            "是否显示 legend"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            [
              "code",
              "false"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "padding"
          ],
          [
            "td",
            "图表内部间距"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/alibaba/BizCharts/blob/master/doc/api/chart.md#7padding-object--number--array-"
              },
              "array"
            ]
          ],
          [
            "td",
            [
              "code",
              "'auto'"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "data"
          ],
          [
            "td",
            "图标数据"
          ],
          [
            "td",
            "array<{name,label,value}>"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Gauge"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "title"
          ],
          [
            "td",
            "图表标题"
          ],
          [
            "td",
            "ReactNode",
            "|",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "height"
          ],
          [
            "td",
            "图表高度"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "color"
          ],
          [
            "td",
            "图表颜色"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "#2F9CFF"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "bgColor"
          ],
          [
            "td",
            "图表背景颜色"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "#F0F2F5"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "percent"
          ],
          [
            "td",
            "进度比例"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "WaterWave"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "title"
          ],
          [
            "td",
            "图表标题"
          ],
          [
            "td",
            "ReactNode",
            "|",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "height"
          ],
          [
            "td",
            "图表高度"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "color"
          ],
          [
            "td",
            "图表颜色"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "#1890FF"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "percent"
          ],
          [
            "td",
            "进度比例"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "TagCloud"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "data"
          ],
          [
            "td",
            "标题"
          ],
          [
            "td",
            "Array<name, value",
            ">"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "height"
          ],
          [
            "td",
            "高度值"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "TimelineChart"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "data"
          ],
          [
            "td",
            "标题"
          ],
          [
            "td",
            "Array<x, y1, y2",
            ">"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "titleMap"
          ],
          [
            "td",
            "指标别名"
          ],
          [
            "td",
            "Object{y1: '客流量', y2: '支付笔数'}"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "height"
          ],
          [
            "td",
            "高度值"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "400"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Field"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "label"
          ],
          [
            "td",
            "标题"
          ],
          [
            "td",
            "ReactNode",
            "|",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "value"
          ],
          [
            "td",
            "值"
          ],
          [
            "td",
            "ReactNode",
            "|",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

});