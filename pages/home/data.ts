export interface WebDataList{
  name: string,
  list: {
    title: string,
    description: string,
    link: string,
  }[]
}
export const webDataList:WebDataList[] = [
  {
    name: "前端框架", list: [
      {
        "title": "vuejs",
        "description": "一款用于构建 Web 界面，易学易用，性能出色且功能丰富的框架。",
        "link": "https://cn.vuejs.org/"
      },
      {
        "title": "react",
        "description": "React 官方中文文档 – 用于构建用户界面的 JavaScript 库",
        "link": "https://react.docschina.org/"
      },
      {
        "title": "Angular",
        "description": "Angular is a platform for building mobile and desktop web applications.",
        "link": "https://angular.io/"
      },
      {
        "title": "Svelte",
        "description": "Cybernetically enhanced web apps",
        "link": "https://svelte.dev/"
      },
      {
        "title": "preact",
        "description": "Fast 3kB alternative to React with the same modern API",
        "link": "https://preactjs.com/"
      },
      {
        "title": "solidjs",
        "description": "Solid is a purely reactive library. It was designed from the ground up with a reactive core. It's influenced by reactive principles developed by previous libraries.",
        "link": "https://www.solidjs.com/"
      },
      {
        "title": "vue-router",
        "description": "Vue.js 的官方路由",
        "link": "https://router.vuejs.org/zh/"
      },
      {
        "title": "react-router",
        "description": "React 官网路由",
        "link": "https://reactrouter.com/"
      },
      {
        "title": "pinia",
        "description": "The Vue Store that you will enjoy using",
        "link": "https://pinia.vuejs.org/"
      },
      {
        "title": "vuex",
        "description": "Vue.js 的中心化状态管理方案",
        "link": "https://vuex.vuejs.org/zh/"
      },
      {
        "title": "redux",
        "description": "JavaScript应用程序的可预测状态容器。",
        "link": "https://redux.js.org/"
      },
      {
        "title": "Rematch",
        "description": "Rematch is Redux best practices without the boilerplate",
        "link": "https://rematchjs.bootcss.com/"
      },
      {
        "title": "recoil",
        "description": "A state management library for React.",
        "link": "https://recoiljs.org/zh-hans/"
      },
      {
        "title": "nextjs",
        "description": "Next.js 支持规模化的生产级 React 应用程序。大量世界领先的公司都在使用 Next.js 来构建静态和动态网站及 web 应用。",
        "link": "https://nextjs.org/"
      },
      {
        "title": "nuxtjs",
        "description": "使用 Vue 3 构建您的下一个应用，体验混合渲染、强大的数据获取和新功能。 Nuxt 3 是一个开源框架，使 Web 开发变得简单而强大。",
        "link": "https://www.nuxtjs.org/"
      }
    ],
  },

  {
    name: "开发社区", list: [
      {
        "title": "github",
        "description": "全世界最大的开源代码仓库",
        "link": "https://github.com"
      },
      {
        "title": "gitee",
        "description": "Gitee.com（码云） 是 OSCHINA.NET 推出的代码托管平台，支持 Git 和 SVN，提供免费的私有仓库托管。目前已有超过 800 万的开发者选择 Gitee。",
        "link": "https://gitee.com/"
      },
      {
        "title": "掘金",
        "description": "掘金是面向全球中文开发者的技术内容分享与交流平台。我们通过技术文章、沸点、课程、直播等产品和服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。",
        "link": "https://juejin.cn/"
      },
      {
        "title": "segmentfault-思否",
        "description": "SegmentFault 思否是中国领先的开发者技术社区。我们以技术问答、技术专栏、技术课程、技术资讯为核心的产品形态，为开发者提供纯粹、高质的技术交流平台。",
        "link": "https://segmentfault.com/"
      },
      {
        "title": "stack overflow",
        "description": "Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge, and build their careers.",
        "link": "https://stackoverflow.com/"
      },
      {
        "title": "CSDN",
        "description": "CSDN是全球知名中文IT技术交流平台,创建于1999年,包含原创博客、精品问答、职业培训、技术论坛、资源下载等产品服务,提供原创、优质、完整内容的专业IT技术开发社区.",
        "link": "https://www.csdn.net/"
      },
      {
        "title": "博客园",
        "description": "博客园是一个面向开发者的知识分享社区。",
        "link": "https://www.cnblogs.com/"
      },
      {
        "title": "开源中国",
        "description": "OSCHINA.NET 是目前领先的中文开源技术社区。我们传播开源的理念，推广开源项目，为 IT 开发者提供了一个发现、使用、并交流开源技术的平台",
        "link": "https://www.oschina.net/"
      }
    ],
  },
  {
    name: "实用工具", list: [
      {
        "title": "Regex101",
        "description": "Regular expression tester with syntax highlighting, explanation, cheat sheet for PHP/PCRE, Python, GO, JavaScript, Java, C#/.NET.",
        "link": "https://regex101.com/"
      },
      {
        "title": "正则大全",
        "description": "在线正则大全",
        "link": "https://any86.github.io/any-rule/"
      },
      {
        "title": "TinyPNG",
        "description": "让你的网站更快，节省带宽。TinyPNG将您的WebP、PNG和JPEG图像优化50-80%，同时保持完全透明！",
        "link": "https://tinypng.com/"
      },
      {
        "title": "纯色占位图",
        "description": "Dynamic Dummy Image Generator",
        "link": "https://dummyimage.com/"
      },
      {
        "title": "RegExr正则学习",
        "description": "带有语法高亮的、支持PHP / PCRE 和 JS 语言、 上下文解释、 备忘单、参考 和 正则表达式社区的正则表达式测试工具",
        "link": "https://regexr-cn.com/"
      },
      {
        "title": "JSON格式化",
        "description": "提供相关的Json解析、验证、格式化、压缩、编辑器以及Json与XML相互转换等服务",
        "link": "https://www.json.cn/"
      },
      {
        "title": "JSON转Typescript",
        "description": "立即从JSON生成TypeScript接口。",
        "link": "https://quicktype.io/typescript"
      },
      {
        "title": "codeif命名神器",
        "description": "从Github、Bitbucket、Google Code、Codeplex、Sourceforge、Fedora Project、GitLab中搜索项目，以查找实际使用变量名。",
        "link": "https://unbug.github.io/codelf/"
      },
      {
        "title": "Convertio文件转换器",
        "description": "Convertio - 在线转换文件的简单工具。支持超过309种不同的文档、图像、电子表格、电子书、文档、演示文稿、音频和视频格式。",
        "link": "https://convertio.co/zh/"
      },
      {
        "title": "png转ico",
        "description": "轻松将 PNG 图像转换为 ICO 格式！ 这个免费的转换器将使您能够快速将任何.png图像转换为.ico格式，而不会降低质量。",
        "link": "https://pngtoicon.com/cn"
      },
      {
        "title": "免费图床",
        "description": "简单易操作，免费且不压缩图片画质的公共图床平台，支持对接PicGo。从本地相册选取图片上传到图床服务器快速获取图片外链。支持批量上传！",
        "link": "https://www.imgtp.com/"
      },
      {
        "title": "百度脑图",
        "description": "百度脑图，便捷的脑图编辑工具 - 控制创意，如此简单。",
        "link": "https://naotu.baidu.com/"
      },
      {
        "title": "processOn",
        "description": "专业强大的作图工具，支持多人实时在线协作，可用于原型图、UML、BPMN、网络拓扑图等多种图形绘制",
        "link": "https://www.processon.com/"
      },
      {
        "title": "linux命令搜索",
        "description": "Linux命令搜索引擎:最专业的Linux命令大全，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。",
        "link": "https://wangchujiang.com/linux-command/"
      },
      {
        "title": "Can I Use",
        "description": "'Can I use' provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.",
        "link": "https://caniuse.com/"
      },
      {
        "title": "30 seconds of code",
        "description": "Browse 1157 short code snippets for all your development needs on 30 seconds of code.",
        "link": "https://www.30secondsofcode.org/"
      }
    ],
  },
  {
    name: "图片资源", list: [
      {
        "title": "雪碧图生成器",
        "description": "Generate CSS image sprites from multiple images with our easy-to-use uploading tool. Get started for free.",
        "link": "https://www.toptal.com/developers/css/sprite-generator"
      },
      {
        "title": "Lorem Picsum",
        "description": "The Lorem Ipsum for photos.",
        "link": "https://picsum.photos/"
      },
      {
        "title": "pexels",
        "description": "免费素材图片和视频，可以在任何地方使用。✓ 高质量 ✓ 100% 免费✓ 无需注明归属",
        "link": "https://www.pexels.com/zh-cn/"
      },
      {
        "title": "unsplash",
        "description": "好看的免费图片和照片，你可以下载并用于任何项目。比任何免版税或库存照片都要好。",
        "link": "https://unsplash.com/"
      }
    ],
  },
  {
    name: "代码平台", list: [
      {
        "title": "codesandbox",
        "description": "CodeSandbox is an online code editor and prototyping tool that makes creating and sharing web apps faster",
        "link": "https://codesandbox.io/"
      },
      {
        "title": "codePen",
        "description": "An online code editor, learning environment, and community for front-end web development using HTML, CSS and JavaScript code snippets, projects, and web applications.",
        "link": "https://codepen.io/"
      },
      {
        "title": "stackblitz",
        "description": "Stay in the flow with instant dev experiences. No more hours stashing/pulling/installing locally — just click, and start coding.",
        "link": "https://stackblitz.com/"
      },
      {
        "title": "PLAYCODE",
        "description": "Super sleek javascript playground with instant live preview and console.",
        "link": "https://playcode.io/"
      }
    ],
  },
  {
    name: "设计资源", list: [
      {
        "title": "Free Vector Illustra",
        "description": "免费下载设计素材-图标、照片、用户体验插图和视频音乐",
        "link": "https://icons8.com/illustrations"
      },
      {
        "title": "传统中国色",
        "description": "提供各种中国的传统颜色的名称，CMYK值，RGB值，16进制表示。",
        "link": "http://zhongguose.com/"
      },
      {
        "title": "渐变色(WebGradients)",
        "description": "访问 WebGradients.com，了解 CSS3、Photoshop 和 Sketch 中的 180 种漂亮的线性渐变。 该系列由顶级设计师策划，完全免费。",
        "link": "https://webgradients.com/"
      },
      {
        "title": "渐变色(uigradients)",
        "description": "为设计师和开发人员精心挑选的漂亮颜色渐变系列",
        "link": "https://uigradients.com/"
      },
      {
        "title": "豆皮儿UI",
        "description": "doupir豆皮儿网是一个专注于UI领域的垂直素材资源共享平台，旨在为UI设计师提供基础UI设计素材，并逐步打造成为一个垂直的素材交流平台。",
        "link": "https://www.doupir.com/"
      },
      {
        "title": "dribbble",
        "description": "在 Dribbble 上寻找顶级设计师和创意专业人士。 我们是设计师获得灵感、反馈、社区和工作的地方。 您发现并与全球设计师联系的最佳资源。",
        "link": "https://dribbble.com/"
      },
      {
        "title": "色盘",
        "description": "Hey Designers & Developers! We have a set of tools that include Material Color Palette, Flat UI Color Palette, Icons, Unicodes & more.",
        "link": "https://materialui.co/"
      },
      {
        "title": "色轮(adobe color)",
        "description": "使用色轮或影像建立调色盘，或浏览 Adobe Color 社群中的数千个颜色组合。",
        "link": "https://color.adobe.com/zh/create/color-wheel"
      },
      {
        "title": "美叶- 优质灵感辑录",
        "description": "美叶，为设计师，创意人提供有价值的设计参考。灵感采集，优质素材获取，时刻Follow最新流行设计趋势",
        "link": "https://www.meiye.art/"
      },
      {
        "title": "站酷ZCOOL",
        "description": "站酷ZCOOL,中国设计师互动平台.深耕设计领域十五年,站酷聚集了1500万设计师、摄影师、插画师、艺术家、创意人,提供创意设计素材,正版商业高清图片,创意设计师群体中具有较高的影响力与号召力。",
        "link": "https://www.zcool.com.cn/"
      },
      {
        "title": "花瓣网",
        "description": "花瓣网, 设计师寻找灵感的天堂！图片素材领导者，帮你采集、发现网络上你喜欢的事物。你可以用它收集灵感,保存有用的素材,计划旅行,晒晒自己想要的东西",
        "link": "https://huaban.com/"
      }
    ],
  },
  {
    name: "在线设计", list: [
      {
        "title": "稿定设计",
        "description": "做图做视频在线设计神器",
        "link": "https://www.gaoding.com/"
      },
      {
        "title": "即时设计",
        "description": "即时设计是一款在线可协作的UI设计工具，是可协作的在线sketch、国内版figma，拥有海量的设计资源与素材，支持导入sketch格式的源文件。支持创建交互原型、获取设计标注、快速切图、团队协作等工作。",
        "link": "https://js.design/"
      },
      {
        "title": "Pixso",
        "description": "Pixso是一体化设计协作工具，助力产研设团队制作原型，UI/UX设计，视觉设计，低代码交付时获得更轻松流畅的工作体验，让团队协作更高效。支持Sketch，Figma格式。",
        "link": "https://pixso.cn/"
      },
      {
        "title": "figma",
        "description": "作为一个团队打造更好的产品。 使用 Figma 将设计、原型制作和收集反馈集中在一处。",
        "link": "https://www.figma.com/"
      },
      {
        "title": "masterGo",
        "description": "MasterGo 是为团队协作而生的一站式在线产品设计工具，提供在线产品设计、原型图制作设计、网页开发设计、产品交互设计等功能，支持多人实时协作，可快速搭建设计系统。",
        "link": "https://mastergo.com/"
      },
      {
        "title": "墨刀",
        "description": "墨刀是产品设计一体化在线协同办公平台,集原型设计,线上版sketch设计师工具、流程图、思维导图为一体。",
        "link": "https://modao.cc/"
      }
    ],
  },
  {
    name: "图标库", list: [
      {
        "title": "iconfont",
        "description": "iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。",
        "link": "https://www.iconfont.cn/"
      },
      {
        "title": "iconPark",
        "description": "IconPark, park your icon. Made by ByteDance",
        "link": "https://iconpark.oceanengine.com/official"
      },
      {
        "title": "Simple Icons",
        "description": "2316 Free SVG icons for popular brands",
        "link": "https://simpleicons.org/"
      },
      {
        "title": "remixicon",
        "description": "Remix Icon 是一组为设计师和开发人员精心打造的开源中性风格系统符号。 所有图标均可免费用于个人和商业用途。",
        "link": "https://remixicon.com/"
      },
      {
        "title": "fontawesome",
        "description": "世界上最受欢迎和最容易使用的图标集。 更多图标。 更多款式。 更多选择。",
        "link": "https://fontawesome.com/"
      },
      {
        "title": "bootstrap Icon",
        "description": "Bootstrap 官方开源 SVG 图标库",
        "link": "https://icons.getbootstrap.com/"
      },
      {
        "title": "material icons",
        "description": "Material Symbols 是我们最新的图标，将 2,500 多个字形整合到一个字体文件中，并具有多种设计变体。",
        "link": "https://fonts.google.com/icons"
      },
      {
        "title": "xicons",
        "description": "icons合集",
        "link": "https://www.xicons.org/"
      }
    ],
  },
  {
    name: "开发文档", list: [
      {
        "title": "es6入门教程",
        "description": "《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。",
        "link": "https://es6.ruanyifeng.com/"
      },
      {
        "title": "现代 JavaScript 教程",
        "description": "以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。",
        "link": "https://zh.javascript.info/"
      },
      {
        "title": "MDN Web Docs",
        "description": "MDN Web Docs网站提供了有关开放式Web技术的信息，包括用于网站和渐进式Web应用程序的HTML、CSS和API。",
        "link": "https://developer.mozilla.org/zh-CN/"
      },
      {
        "title": "菜鸟教程",
        "description": "菜鸟教程(www.runoob.com)提供了编程的基础技术教程, 介绍了HTML、CSS、Javascript、Python，Java，Ruby，C，PHP , MySQL等各种编程语言的基础知识。",
        "link": "https://www.runoob.com/"
      },
      {
        "title": "Typescript",
        "description": "TypeScript通过向语言中添加类型来扩展JavaScript，在运行代码之前捕捉错误并提供修复来加速开发体验。",
        "link": "https://www.typescriptlang.org/"
      },
      {
        "title": "TypeScript 入门教程",
        "description": "从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript。",
        "link": "https://ts.xcatliu.com/"
      },
      {
        "title": "vuepress",
        "description": "Vue 驱动的静态网站生成器",
        "link": "https://vuepress.vuejs.org/zh/"
      },
      {
        "title": "vitepress",
        "description": "Vite & Vue powered static site generator.",
        "link": "https://vitepress.vuejs.org/"
      }
    ],
  },
  {
    name: "跨平台", list: [
      {
        "title": "electron",
        "description": "使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序。",
        "link": "https://www.electronjs.org/"
      },
      {
        "title": "flutter",
        "description": "Flutter 官方文档中文版，包含 SDK 下载、最新特性介绍、代码示例、开发文档、中文社区等内容。",
        "link": "https://flutter.cn/"
      },
      {
        "title": "tauri",
        "description": "Tauri是一个框架，用于为所有主要桌面平台构建小巧、快速的二进制文件。",
        "link": "https://tauri.app/"
      }
    ],
  },
  {
    name: "UI组件库", list: [
      {
        "title": "elemnt plus",
        "description": "a Vue 3 based component library for designers and developers",
        "link": "https://element-plus.gitee.io/zh-CN/"
      },
      {
        "title": "element",
        "description": "Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库",
        "link": "https://element.eleme.cn/#/zh-CN"
      },
      {
        "title": "naive ui",
        "description": "Naive UI 是一个 Vue3 的组件库。",
        "link": "https://www.naiveui.com/zh-CN/os-theme"
      },
      {
        "title": "antd design vue",
        "description": "基于Ant设计和Vue的企业级UI组件",
        "link": "https://www.antdv.com/docs/vue/introduce-cn"
      },
      {
        "title": "antd design",
        "description": "antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。",
        "link": "https://ant.design/docs/react/introduce-cn"
      },
      {
        "title": "TDesign",
        "description": "TDesign 是腾讯开源的企业级设计体系，提供了统一价值观，一致的设计语言和视觉风格，和开箱即用的 UI 组件库。",
        "link": "https://tdesign.tencent.com/"
      },
      {
        "title": "arco design",
        "description": "Arco Design - 企业级产品的完整设计和开发解决方案",
        "link": "https://arco.design/"
      },
      {
        "title": "arco design mobile",
        "description": "让移动应用获得开箱即用的设计解决方案",
        "link": "https://arco.design/mobile/react"
      },
      {
        "title": "semi design",
        "description": "Create a consistent, good-looking, easy-to-use, and efficient user experience with a user-centric, content-first, and human-friendly design system",
        "link": "https://semi.design/zh-CN/"
      },
      {
        "title": "material-ui",
        "description": "React 组件用于更快速、更简便的 web 开发。你也可以建立你自己的设计系统，或者从 Material Design 开始。",
        "link": "https://v4.mui.com/zh/"
      },
      {
        "title": "vuetify",
        "description": "Vuetify 是一个material风格的 Vue UI 库，包含手工制作的精美材料组件。不需要设计技能 - 创建令人惊叹的应用程序所需的一切都触手可及。",
        "link": "https://vuetify.cn/zh-Hans/"
      }
    ],
  },
  {
    name: "数据可视化", list: [
      {
        "title": "antv",
        "description": "AntV 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。",
        "link": "https://antv.vision/zh"
      },
      {
        "title": "Echarts",
        "description": "一个基于 JavaScript 的开源可视化图表库",
        "link": "https://echarts.apache.org/zh/index.html"
      },
      {
        "title": "d3js",
        "description": "D3 is a JavaScript library for visualizing data with HTML, SVG, and CSS.",
        "link": "https://d3js.org/"
      }
    ],
  },
  {
    name: "打包构建", list: [
      {
        "title": "webpack",
        "description": "webpack主要目的是捆绑JavaScript文件以在浏览器中使用，但它也能够转换、捆绑或打包几乎任何资源或资产。",
        "link": "https://webpack.js.org/"
      },
      {
        "title": "rollup",
        "description": "Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，Rollup 对代码模块使用新的标准化格式，这些标准都包含在 JavaScript 的 ES6 版本中。",
        "link": "https://www.rollupjs.com/"
      },
      {
        "title": "vite",
        "description": "下一代的前端工具链",
        "link": "https://cn.vitejs.dev/"
      },
      {
        "title": "esbuild",
        "description": "极速 JavaScript 打包器",
        "link": "https://esbuild.docschina.org/"
      }
    ],
  },
  {
    name: "Node相关", list: [
      {
        "title": "nodejs",
        "description": "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        "link": "https://nodejs.org/en/docs/"
      },
      {
        "title": "express",
        "description": "高度包容、快速而极简的 Node.js Web 框架",
        "link": "https://expressjs.com/zh-cn/"
      },
      {
        "title": "koa",
        "description": "基于 Node.js 平台的下一代 web 开发框架",
        "link": "https://www.koajs.com.cn/"
      },
      {
        "title": "eggjs",
        "description": "企业级node框架",
        "link": "https://www.eggjs.org/zh-CN"
      },
      {
        "title": "nestjs",
        "description": "NestJS是一个用于构建高效、可扩展节点的框架。js web应用程序。它使用现代JavaScript，使用TypeScript构建，并结合了OOP（面向对象编程）、FP（函数式编程）和FRP（函数式反应式编程）的元素。",
        "link": "https://nestjs.com/"
      },
      {
        "title": "typeorm",
        "description": "TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript ",
        "link": "https://typeorm.io/"
      },
      {
        "title": "Sequelize",
        "description": "Sequelize是一种现代类型脚本和节点。用于Postgres、MySQL、MariaDB、SQLite和SQL Server等的js ORM。具有可靠的事务支持、关系、即时和延迟加载、读取复制等功能。",
        "link": "https://sequelize.org/"
      },
      {
        "title": "prisma",
        "description": "Next-generation Node.js and TypeScript ORM",
        "link": "https://www.prisma.io/"
      }
    ],
  },
  {
    name: "小程序相关", list: [
      {
        "title": "微信小程开发文档",
        "description": "微信开发者平台文档",
        "link": "https://developers.weixin.qq.com/miniprogram/dev/framework/"
      },
      {
        "title": "支付宝小程序",
        "description": "支付宝小程序官网",
        "link": "https://mini.open.alipay.com/channel/miniIndex.htm"
      },
      {
        "title": "QQ小程序",
        "description": "QQ小程序是连接年轻用户的新方式，覆盖8亿新生代活跃网民。轻便快捷的开发模式，将能在QQ内被轻松获取和传播",
        "link": "https://q.qq.com/miniapp"
      },
      {
        "title": "uni-app",
        "description": "uni-app多端开发,开发一次同时生成App、小程序、H5",
        "link": "https://uniapp.dcloud.net.cn/"
      },
      {
        "title": "taro",
        "description": "Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用。",
        "link": "https://taro-docs.jd.com/taro/docs/"
      },
      {
        "title": "kbone",
        "description": "kbone 是一个致力于微信小程序和 Web 端同构的解决方案。",
        "link": "https://github.com/Tencent/kbone"
      }
    ],
  },
  {
    name: "办公协作", list: [
      {
        "title": "语雀",
        "description": "十万阿里人都在用的笔记与文档知识库",
        "link": "https://www.yuque.com/dashboard"
      },
      {
        "title": "腾讯文档",
        "description": "腾讯文档是一款可多人协作的在线文档，可同时编辑Word、Excel和PPT文档，云端实时保存。可针对QQ、微信好友设置文档访问、编辑权限，支持多种版本Word、Excel和PPT文档模板。",
        "link": "https://docs.qq.com/"
      },
      {
        "title": "飞书",
        "description": "飞书——先进企业协作与管理平台。",
        "link": "https://www.feishu.cn/"
      },
      {
        "title": "腾讯会议",
        "description": "基于腾讯20多年音视频通讯经验，腾讯会议提供一站式音视频会议解决方案，让您能随时随地体验高清流畅的会议以及会议协作。",
        "link": "https://meeting.tencent.com/"
      },
      {
        "title": "google文档",
        "description": "使用 Google 文档创建和协作处理在线文档。在任意设备上安全地实时共享内容，与他人一起编辑文档。",
        "link": "https://www.google.com/intl/zh-CN/docs/about/"
      },
      {
        "title": "石墨文档",
        "description": "全新一代云端 Office，面向未来的办公软件",
        "link": "https://shimo.im/"
      },
      {
        "title": "博思白板",
        "description": "BoardMix在线协作白板，集思维导图，流程图、多维表格，笔记文档多种创意表达能力于一体，激发团队创造力无限延伸，免费在线使用。",
        "link": "https://boardmix.cn/"
      }
    ],
  },
  {
    name: "Node包管理", list: [
      {
        "title": "npm",
        "description": "node包管理器",
        "link": "https://www.npmjs.com/"
      },
      {
        "title": "yarn",
        "description": "Fast, reliable, and secure dependency management.",
        "link": "https://yarnpkg.com/"
      },
      {
        "title": "pnpm",
        "description": "pnpm - 速度快、节省磁盘空间的软件包管理器",
        "link": "https://www.pnpm.cn/"
      }
    ],
  },
  {
    name: "视频学习", list: [
      {
        "title": "慕课网",
        "description": "慕课网（IMOOC）是IT技能学习平台。慕课网(IMOOC)课程涉及JAVA、前端、Python、大数据等60类主流技术语言，覆盖了面试就业、职业成长、自我提升等需求场景，帮助用户实现从技能提升到岗位提升的能力闭环。",
        "link": "https://www.imooc.com/"
      },
      {
        "title": "极客学院",
        "description": "极客学院作为专业IT职业在线教育平台,拥有海量高清IT职业课程,涵盖30+个技术领域。",
        "link": "https://www.jikexueyuan.com/"
      },
      {
        "title": "哔哩哔哩",
        "description": "bilibili是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。",
        "link": "https://www.bilibili.com/"
      }
    ],
  },
  {
    name: "面试刷题", list: [
      {
        "title": "大厂面试题每日一题",
        "description": "山月的全栈进阶之路",
        "link": "https://q.shanyue.tech/"
      },
      {
        "title": "力扣（LeetCode）",
        "description": "备战技术面试？力扣提供海量技术面试资源，帮助你高效提升编程技能，轻松拿下世界 IT 名企 Dream Offer。",
        "link": "https://leetcode.cn/"
      },
      {
        "title": "面试鸭",
        "description": "专业面试刷题网站，助你成为面试达人！支持自由组卷、在线刷题、校招社招斩获大厂offer，求职必备！",
        "link": "https://www.mianshiya.com/"
      }
    ]
  },
]

