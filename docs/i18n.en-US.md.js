webpackJsonp([70],{

/***/ 2447:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "h3",
      "Getting Started"
    ],
    [
      "p",
      "Pro implements globalization through the umi plugin ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/umijs/umi-plugin-locale"
        },
        "umi-plugin-locale"
      ],
      " and is enabled by default.\n",
      [
        "code",
        "umi-plugin-locale"
      ],
      " convention Introduces the corresponding js in src/locales, such as en-US.js and zh-CN.js,\nAnd do the following configuration in ",
      [
        "code",
        "config/config.js"
      ],
      ":"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "plugins<span class=\"token punctuation\">:</span><span class=\"token punctuation\">[</span>\n   <span class=\"token operator\">...</span><span class=\"token punctuation\">,</span>\n   locale<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        enable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n        <span class=\"token keyword\">default</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'zh-CN'</span><span class=\"token punctuation\">,</span> \n        baseNavigator<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> \n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token operator\">...</span><span class=\"token punctuation\">.</span>\n<span class=\"token punctuation\">]</span>"
      },
      [
        "code",
        "plugins:[\n   ...,\n   locale: {\n        enable: true,\n        default: 'zh-CN', \n        baseNavigator: true, \n    },\n    ....\n]"
      ]
    ],
    [
      "p",
      "I am happy to use the function of globalization. See ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/umijs/umi-plugin-locale#usage for detailed configuration"
        },
        "config"
      ],
      "。"
    ],
    [
      "p",
      [
        "code",
        "umi-plugin-locale"
      ],
      " encapsulates ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/yahoo/react-intl"
        },
        "react-intl"
      ],
      ", api is basically the same as ",
      [
        "code",
        "react-intl"
      ],
      ", and is more convenient to package. All apis are as follows:"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>\n  formatMessage<span class=\"token punctuation\">,</span>\n  setLocale<span class=\"token punctuation\">,</span>\n  getLocale<span class=\"token punctuation\">,</span>\n  FormattedMessage<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'umi/locale'</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import {\n  formatMessage,\n  setLocale,\n  getLocale,\n  FormattedMessage,\n} from 'umi/locale';"
      ]
    ],
    [
      "h3",
      "Formatt Message"
    ],
    [
      "p",
      "If we have the following configuration in ",
      [
        "code",
        "en-US.js"
      ],
      " and ",
      [
        "code",
        "zh-CN.js"
      ],
      " respectively:"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// en-US.js</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'navbar.lang'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'中文'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// zh-CN.js</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'navbar.lang'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'English'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// en-US.js\n\nexport default {\n  'navbar.lang': '中文',\n}\n\n// zh-CN.js\n\nexport default {\n  'navbar.lang': 'English',\n}"
      ]
    ],
    [
      "p",
      "We can use this in the component"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>\n  FormattedMessage<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'umi/locale'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>FormattedMessage id<span class=\"token operator\">=</span><span class=\"token string\">\"navbar.lang\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "import {\n  FormattedMessage,\n} from 'umi/locale';\n\nexport default () => {\n  return <div><FormattedMessage id=\"navbar.lang\" /></div>\n}"
      ]
    ],
    [
      "p",
      "In some cases, you may need to return a string directly. You can use it like this:"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>\n  formatMessage<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'umi/locale'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">{</span><span class=\"token function\">formatMessage</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>id<span class=\"token punctuation\">:</span><span class=\"token string\">'navbar.lang'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "import {\n  formatMessage,\n} from 'umi/locale';\n\nexport default () => {\n  return <div>{formatMessage({id:'navbar.lang'})}</div>\n}"
      ]
    ],
    [
      "h3",
      "Set Locale"
    ],
    [
      "p",
      [
        "code",
        "umi-plugin-locale"
      ],
      " exposes apis named ",
      [
        "code",
        "setLocale"
      ],
      " and ",
      [
        "code",
        "getLocale"
      ],
      ", which make it easy to switch between regions.\nThe code like this:"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": " <span class=\"token operator\">...</span>\n changLang <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> locale <span class=\"token operator\">=</span> <span class=\"token function\">getLocale</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>locale <span class=\"token operator\">||</span> locale <span class=\"token operator\">===</span> <span class=\"token string\">'zh-CN'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">setLocale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'en-US'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">setLocale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'zh-CN'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">&lt;</span>Button\n          size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span>\n          ghost<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>theme <span class=\"token operator\">===</span> <span class=\"token string\">'dark'</span><span class=\"token punctuation\">}</span>\n          style<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n            margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'0 8px'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n          onClick<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">changLang</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>FormattedMessage id<span class=\"token operator\">=</span><span class=\"token string\">\"navbar.lang\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        " ...\n changLang = () => {\n    const locale = getLocale();\n    if (!locale || locale === 'zh-CN') {\n      setLocale('en-US');\n    } else {\n      setLocale('zh-CN');\n    }\n  };\n  render(){\n        <Button\n          size=\"small\"\n          ghost={theme === 'dark'}\n          style={{\n            margin: '0 8px',\n          }}\n          onClick={() => {\n            this.changLang();\n          }}\n        >\n          <FormattedMessage id=\"navbar.lang\" />\n        </Button>\n  }"
      ]
    ],
    [
      "p",
      "More advanced usage can be found in ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/yahoo/react-intl/wiki#getting-started"
        },
        "react-intl's api"
      ],
      "."
    ]
  ],
  "meta": {
    "order": 13,
    "title": "i18n",
    "type": "Advanced",
    "filename": "docs/i18n.en-US.md"
  },
  "toc": [
    "ul"
  ]
};

/***/ })

});