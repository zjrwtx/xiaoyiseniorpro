module.exports = {
    // 网站的一些基本配置
    // base:配置部署站点的基础路径，后续再介绍
    title: '🔥小译学长X版', // 网站的标题
    description: '下一代，何必自己动手！', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }] // 需要被注入到当前页面的 HTML <head> 中的标签
    ],
    // base: '/xiaoyivuepress/' ,//当githubpage部署时就需要
    base: '' ,//这是其他平台部署时的配置
   // 配置导航栏logo(themeConfig.logo)
    plugins:[
    ['@vuepress/back-to-top'],
    ['dynamic-title',{
      // showIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
      showText: '(/≧▽≦/)欢迎回来~',
      // hideIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
      hideText: '(●—●)bye bye~',
      recoverTime: 1000,
    }],
    [
      'vuepress-plugin-sponsor',
      {
        theme: 'simple',
        // wechat: 'https://img2023.cnblogs.com/blog/2570547/202302/2570547-20230204101450324-1834222621.jpg',
       
        // alipay: 'https://img2023.cnblogs.com/blog/2570547/202302/2570547-20230204101423487-666174811.jpg',
        wechat: 'sponsor/wechat.png',
       
        alipay: 'sponsor/zhifubao.png',
        duration: 2000
      }
    ],
    // RSS订阅
    // [
    //   "@vuepress-reco/vuepress-plugin-rss",{
    //     site_url:"https://xiaoyisenior.top",
    //     copyright:"zjrwtx"
    //   }
    // ]
    // 看板娘
    // [
    //   '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    //   {
    //     // theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
    //     theme: ["haruto"],
    //     // messages: {
    //     //   welcome: '问题反馈与建议或加入产品交流群，请微信dd王同学：zjrwtxdaydayup',
    //     //   home: '返回主页',
    //     //   // theme: '好吧，希望你能喜欢我的其他小伙伴。',
    //     //   close: '关闭后可再次点击【看板娘】可打开此看板',
    //     //   info:"https://mp.weixin.qq.com/s/BppWgTCmfathyal_2aoamw"
    //     // }
    //     messages:
    //     {
    //       welcome: "欢迎来到  + （$site.title）",
    //       home: '心里的花，我想要带你回家。',
    //       // theme: '好吧，希望你能喜欢我的其他小伙伴。',
    //       close: '你知道我喜欢吃什么吗？痴痴地望着你。'
    //     }
    //   }
    // ]
    // 页面看板
  

  //   ['@vuepress-reco/vuepress-plugin-bulletin-popover',
  //    {
  //     width: '300px', // 默认 260px
  //     title: '消息提示',
  //     body: [
  //       {
  //         type: 'title',
  //         content: '添加冴羽好友入前端交流群',
  //         style: 'text-aligin: center;'
  //       },
  //       {
  //         type: 'image',
  //         src: ''
  //       }
  //     ],
  //     footer: [
  //       {
  //         type: 'button',
  //         text: '打赏',
  //         link: '/donate'
  //       } 
  //     ]
  //     }
  //   ]





  ],
  
  

  themeConfig: {
    logo: '/logo.jpg',
    // repo: 'zjrwtx/xiaoyivuepress/tree/gh-pages',// 默认是 false, 设置为 true 来启用，右上角会出现 github 跳转链接
    lastUpdated: '最近更新时间', // 每个文档展示最近更新时间
    editLinks: true, 
    editLinkText:"一起编辑",
    docsRepo: 'https://github.com/zjrwtx/xiaoyiseniorpro',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
    // contributors:"贡献人",
    contributors:true,
    colorMode:"light",
    colorModeSwitch:true,

    
    nav: [
      { text: '主页', link: '/' },
      // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
      { text: '🔥Xchatgpt（几乎和chatgpt官网同等能力）', link: 'http://8.134.73.252/', target: '_blank' },
      {
        text: 'AI对话(支持小程序)',
        
        items: [
          { text: '上下文关联模式（推荐|小程序端）', link: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODcwNzk3Nw==&mid=2247485615&idx=1&sn=c691d496386b5972e36fea8eaee33b97&chksm=cf0edcc9f87955df95fa23a716d78d496e7456183da7cfa6b348db6988865da9060896abcdcd&token=1164458978&lang=zh_CN#rd', target: '_blank'  },
          { text: '一问一答模式', link: 'https://huggingface.co/spaces/zjrwtx/testStreamlit' , target: '_blank' },
          // { text: 'AI做题（搜题）', link: 'https://huggingface.co/spaces/zjrwtx/xiaoyi_Search_the_question', target: '_blank'  },
          // { text: '给出答案AI解释题目', link: 'https://huggingface.co/spaces/zjrwtx/xiaoyi_explanation' , target: '_blank' },

        ]
      },
      {
        text: 'AI搜题与解释题目',
        
        items: [
          { text: 'AI做题（搜题）', link: 'https://huggingface.co/spaces/zjrwtx/xiaoyi_Search_the_question', target: '_blank'  },
          { text: '给出答案AI解释题目', link: 'https://huggingface.co/spaces/zjrwtx/xiaoyi_explanation' , target: '_blank' },
          

        ]
      },
      
      {
        text: 'AI绘画',
        
        items: [
          { text: '由文本生成图', link: 'https://huggingface.co/spaces/zjrwtx/xiaoyi_drawing' , target: '_blank' },
          { text: '一张原图生成多张不同图', link: 'https://huggingface.co/spaces/zjrwtx/xiaoyi_image_variations', target: '_blank'  },
          

        ]
      },
      { text: 'AI应用精选', link: '/allfunction/unique_function', target: '_blank' },

      
      // { text: '小译学长高级版（即将上线）', link: '/', target: '_blank' },    
      // { text: '万能工具箱(加速开发中)', link: '/', target: '_blank' },
      // 支持嵌套,形成下拉式的导航菜单
      {
        text: '其他',
        
        items: [
          // { text: '收藏的文章', link: '/favoritepaper/favoritepaper' },
          
          // { text: '更新动态|开发中', link: '/' },
          // { text: '反馈与建议', link: '/language/chinese/' },
          { text: '最新动态（用前先看）', link: 'https://www.yuque.com/jideduoyidianxiaorong/dhfgts/hfphzng86ygsoaq7?singleDoc# 《小译学长最新动态以及联系方式》', target: '_blank' },
          { text: '参与贡献', link: 'https://github.com/zjrwtx/xiaoyiseniorpro' },
          { text: '我的公众号', link: 'https://mp.weixin.qq.com/s/BppWgTCmfathyal_2aoamw' },
          { text: '我的抖音', link: 'https://www.douyin.com/user/MS4wLjABAAAAIdY0VlMSK0Shyd4FxHBgkXAtH4Zq8wsuKzIuSICWpy0' },
          { text: '我的小红书', link: 'https://www.xiaohongshu.com/user/profile/5f12a46a000000000101ff27' }

        ]
      }
    ],
  search: false, // 设置是否使用导航栏上的搜索框
  searchMaxSuggestions: 10,// 搜索框显示的搜索结果数量
  sidebar:{
    // "/allfunction/":[
    //   // {
    //   //   title:"group1",//组名
    //   //   sidebarDepth: 2,
    //   //   children:[""]//显示该目录下的README.md文件
    //   // },
    //   {
    //     title:"group2",
    //     sidebarDepth: 2,
    //     children:["Unique_function","Third-party"]
    //   }
    // ],
    collapsable:false,
    "/favoritepaper/":[
      "favoritepaper"//显示该目录下的favoritepaper

    ],
    "/allfunction/":[
      "Unique_function",
     
    ]
  }
    
  




  
     
  
   }
}
  