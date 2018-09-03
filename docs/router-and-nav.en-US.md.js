webpackJsonp([56],{

/***/ 2461:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "Basic Structure"
    ],
    [
      "p",
      "In this part, scaffolding builds the basic framework of routing and menus by combining some configuration files, basic algorithms and tool functions, mainly involving the following modules/functions:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "Routing Management"
          ],
          " Configure the route in ",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js"
            },
            [
              "code",
              "router.config.js"
            ]
          ],
          " according to the agreed syntax."
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "Menu generation"
          ],
          " Generates a menu based on the routing configuration. The name of the menu item, the nested path is highly coupled to the route."
        ]
      ],
      [
        "li",
        [
          "p",
          "Breadcrumbs component The breadcrumbs built into ",
          [
            "a",
            {
              "title": null,
              "href": "http://pro.ant.design/components/PageHeader"
            },
            "PageHeader"
          ],
          " can also be automatically generated from the configuration information provided by the scaffolding."
        ]
      ]
    ],
    [
      "p",
      "The following is a brief introduction to the basic ideas of each module. If you are not interested in the implementation process, just want to know how to implement the relevant requirements, you can directly view ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/router-and-nav#Example"
        },
        "requirements instance"
      ],
      "."
    ],
    [
      "h3",
      "Router"
    ],
    [
      "p",
      "At present, all the routes in the scaffolding are managed by ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js"
        },
        [
          "code",
          "router.config.js"
        ]
      ],
      ". In the configuration of umi, we add some parameters, such as ",
      [
        "code",
        "name"
      ],
      ", ",
      [
        "code",
        "icon"
      ],
      ", ",
      [
        "code",
        "hideChildren"
      ],
      ", ",
      [
        "code",
        "authority"
      ],
      ", to assist the generation. menu. among them:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "name"
          ],
          " and ",
          [
            "code",
            "icon"
          ],
          " represent the icon and text of the generated menu item, respectively."
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "hideChildren"
          ],
          " is used to hide sub-routes that do not need to be displayed in the menu. Usage can view the configuration of the ",
          [
            "code",
            "Step by Step Form"
          ],
          "."
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "hideInMenu"
          ],
          " can not display this route in the menu, including sub-routing. The effect can be viewed on the ",
          [
            "code",
            "exception/trigger"
          ],
          " page."
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "authority"
          ],
          " is used to configure the permissions of this route. If configured, it will verify the permissions of the current user and decide whether to display it."
        ],
        [
          "blockquote",
          [
            "p",
            "You may notice that the ",
            [
              "code",
              "name"
            ],
            " in the configuration is different from the actual display of the menu. This is because we use the global component, see ",
            [
              "a",
              {
                "title": null,
                "href": "/docs/i18n/"
              },
              "i18n"
            ],
            "."
          ]
        ]
      ]
    ],
    [
      "h3",
      "Menu"
    ],
    [
      "p",
      "The menu is generated according to ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js"
        },
        [
          "code",
          "router.config.js"
        ]
      ],
      ", and the concrete logic is implemented in the ",
      [
        "code",
        "formatter"
      ],
      " method in ",
      [
        "code",
        "src/layouts/LoadingPage"
      ],
      "."
    ],
    [
      "blockquote",
      [
        "p",
        "If your project does not require a menu, you can remove the mount of the ",
        [
          "code",
          "SiderMenu"
        ],
        " component directly in ",
        [
          "code",
          "BasicLayout"
        ],
        ". And set ",
        [
          "code",
          "const MenuData = []"
        ],
        " in ",
        [
          "code",
          "src/layouts/LoadingPage"
        ],
        "."
      ]
    ],
    [
      "h3",
      "Bread Crumbs"
    ],
    [
      "p",
      "Breadcrumbs are implemented by ",
      [
        "code",
        "PageHeaderLayout"
      ],
      ", ",
      [
        "code",
        "MenuContext"
      ],
      " will be passed to ",
      [
        "code",
        "PageHeader"
      ],
      " via props according to the ",
      [
        "code",
        "breadcrumbNameMap"
      ],
      " generated by ",
      [
        "code",
        "MenuData"
      ],
      ". If you want to make custom breadcrumbs, you can modify the incoming ",
      [
        "code",
        "breadcrumbNameMap"
      ],
      " solve."
    ],
    [
      "p",
      [
        "code",
        "breadcrumbNameMap"
      ],
      " sample data is as follows:"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'/'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span> redirect<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard/analysis'</span><span class=\"token punctuation\">,</span> locale<span class=\"token punctuation\">:</span> <span class=\"token string\">'menu'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'/dashboard/analysis'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'analysis'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'./Dashboard/Analysis'</span><span class=\"token punctuation\">,</span>\n    locale<span class=\"token punctuation\">:</span> <span class=\"token string\">'menu.dashboard.analysis'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token operator\">...</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "{\n  '/': { path: '/', redirect: '/dashboard/analysis', locale: 'menu' },\n  '/dashboard/analysis': {\n    name: 'analysis',\n    component: './Dashboard/Analysis',\n    locale: 'menu.dashboard.analysis',\n  },\n  ...\n}"
      ]
    ],
    [
      "h2",
      "Example"
    ],
    [
      "p",
      "The above outlines the implementation of this part, and then through the actual case to explain what to do."
    ],
    [
      "h3",
      "Add Page"
    ],
    [
      "p",
      "Scaffolding provides two layout templates by default: ",
      [
        "code",
        "Basic Layout - BasicLayout"
      ],
      " and ",
      [
        "code",
        "Account Layout - UserLayout"
      ],
      ":"
    ],
    [
      "p",
      [
        "img",
        {
          "alt": "BasicLayout",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png"
        }
      ]
    ],
    [
      "p",
      [
        "img",
        {
          "alt": "UserLayout",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/mXsydBXvLqBVEZLMssEy.png"
        }
      ]
    ],
    [
      "p",
      "If your page can take advantage of both layouts, you only need to add one to the corresponding routing configuration:"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "  <span class=\"token comment\" spellcheck=\"true\">// app</span>\n  <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'../layouts/LoadingPage'</span><span class=\"token punctuation\">,</span>\n    routes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token comment\" spellcheck=\"true\">// dashboard</span>\n      <span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span> redirect<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard/analysis'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> path <span class=\"token punctuation\">:</span><span class=\"token string\">'/dashboard/test'</span><span class=\"token punctuation\">,</span>component<span class=\"token punctuation\">:</span><span class=\"token string\">\"./Dashboard/Test\"</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token operator\">...</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>"
      },
      [
        "code",
        "  // app\n  {\n    path: '/',\n    component: '../layouts/LoadingPage',\n    routes: [\n      // dashboard\n      { path: '/', redirect: '/dashboard/analysis' },\n      { path :'/dashboard/test',component:\"./Dashboard/Test\"},\n    ...\n},"
      ]
    ],
    [
      "p",
      "When added, the relevant routing and navigation will be automatically generated."
    ],
    [
      "h3",
      "新增布局"
    ],
    [
      "p",
      "In the scaffolding we implement the layout template by nesting the route. ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js"
        },
        [
          "code",
          "router.config.js"
        ]
      ],
      " is an array, where the first level of data is our layout, if you need to add a new layout you can directly add a new level one array."
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n   <span class=\"token comment\" spellcheck=\"true\">// user</span>\n   <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/user'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'../layouts/UserLayout'</span><span class=\"token punctuation\">,</span>\n    routes<span class=\"token punctuation\">:</span><span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token punctuation\">]</span>\n   <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n   <span class=\"token comment\" spellcheck=\"true\">// app</span>\n   <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'../layouts/LoadingPage'</span><span class=\"token punctuation\">,</span>\n    routes<span class=\"token punctuation\">:</span><span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token punctuation\">]</span>\n   <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n   <span class=\"token comment\" spellcheck=\"true\">// new</span>\n   <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/new'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'../layouts/new_page'</span><span class=\"token punctuation\">,</span>\n    routes<span class=\"token punctuation\">:</span><span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token punctuation\">]</span>\n   <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span>"
      },
      [
        "code",
        "module.exports = [\n   // user\n   {\n    path: '/user',\n    component: '../layouts/UserLayout',\n    routes:[...]\n   },\n   // app\n   {\n    path: '/',\n    component: '../layouts/LoadingPage',\n    routes:[...]\n   },\n   // new\n   {\n    path: '/new',\n    component: '../layouts/new_page',\n    routes:[...]\n   },\n]"
      ]
    ],
    [
      "h3",
      "Routing with parameters"
    ],
    [
      "p",
      "Scaffolding supports routing with parameters by default, but it is not a good idea to display a route with parameters in the menu. We will not automatically inject a parameter for you, you may need to handle it yourself in the code."
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard/:page'</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'analysis'</span><span class=\"token punctuation\">,</span> component<span class=\"token punctuation\">:</span> <span class=\"token string\">'./Dashboard/Analysis'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>"
      },
      [
        "code",
        "{ path: '/dashboard/:page', name: 'analysis', component: './Dashboard/Analysis' },"
      ]
    ],
    [
      "p",
      "You can jump to this route with the following code:"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> router <span class=\"token keyword\">from</span> <span class=\"token string\">'umi/router'</span><span class=\"token punctuation\">;</span>\n\nrouter<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/dashboard/anyParams'</span><span class=\"token punctuation\">)</span>\n\n<span class=\"token comment\" spellcheck=\"true\">//or</span>\n\n<span class=\"token keyword\">import</span> Link <span class=\"token keyword\">from</span> <span class=\"token string\">'umi/link'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token operator\">&lt;</span>Link to<span class=\"token operator\">=</span><span class=\"token string\">\"/dashboard/anyParams\"</span><span class=\"token operator\">></span>go<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Link<span class=\"token operator\">></span>"
      },
      [
        "code",
        "import router from 'umi/router';\n\nrouter.push('/dashboard/anyParams')\n\n//or\n\nimport Link from 'umi/link';\n\n<Link to=\"/dashboard/anyParams\">go</Link>"
      ]
    ],
    [
      "p",
      "In the routing component, routing parameters can be obtained via ",
      [
        "code",
        "this.props.match.params"
      ],
      "."
    ],
    [
      "p",
      "See more details:",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/router.html#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E8%B7%AF%E7%94%B1"
        },
        "umi#router"
      ]
    ]
  ],
  "meta": {
    "order": 3,
    "title": {
      "en-US": "Router and Nav",
      "zh-CN": "路由和菜单"
    },
    "type": "Introduction",
    "filename": "docs/router-and-nav.en-US.md"
  },
  "description": [
    "section",
    [
      "p",
      "Routing and menus are the key skeletons for organizing an application. The routes in pro are centrally managed in a convenient way to manage and manage them in ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js"
        },
        [
          "code",
          "router.config.js"
        ]
      ],
      "."
    ]
  ],
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Basic-Structure",
          "title": "Basic Structure"
        },
        "Basic Structure"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Example",
          "title": "Example"
        },
        "Example"
      ]
    ]
  ]
};

/***/ })

});