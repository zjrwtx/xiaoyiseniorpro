module.exports = {
    // 网站的一些基本配置
    // base:配置部署站点的基础路径，后续再介绍
    title: '小译学长Pro版', // 网站的标题
    description: 'All in one AI bot', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }] // 需要被注入到当前页面的 HTML <head> 中的标签
    ],
    base: '/xiaoyivuepress/' ,
   // 配置导航栏logo(themeConfig.logo)
  

  themeConfig: {
    logo: '/logo.jpg',
    // repo: 'zjrwtx/xiaoyivuepress/tree/gh-pages',// 默认是 false, 设置为 true 来启用，右上角会出现 github 跳转链接
    lastUpdated: 'Last Updated', // 每个文档展示最近更新时间
    editLinks: true, 
    editLinkText:"一起编辑",
    docsRepo: 'https://github.com/zjrwtx/xiaoyivuepress',
    docsBranch: 'gh-pages',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
    lastUpdatedText:"最近更新时间",
    nav: [
      { text: '主页', link: '/' },
      // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
      { text: 'AI对话', link: 'https://zjrwtx-teststreamlit.hf.space/' },
      { text: 'AI做题', link: 'https://blog.csdn.net', target: '_blank' },
      { text: 'AI给出答案解释题目', link: 'https://blog.csdn.net', target: '_blank' },
      { text: 'AI绘画（由文本生成图）', link: 'https://zjrwtx-teststreamlit.hf.space/' },
      { text: 'AI原图生成多图', link: 'https://blog.csdn.net', target: '_blank' },
      { text: '万能工具箱', link: 'https://blog.csdn.net', target: '_blank' },
      
      // 支持嵌套,形成下拉式的导航菜单
      {
        text: '探索其他',
        // ariaLabel: 'Language Menu',
        items: [
          { text: '收藏的文章', link: '/favoritepaper/favoritepaper' },
          
          { text: '更新动态', link: '/language/chinese/' },
          { text: '反馈与建议', link: '/language/chinese/' },
          { text: '加入我们', link: '/language/chinese/' },
          { text: '我的公众号', link: '/language/english/' },
          { text: '我的抖音', link: '/language/chinese/' },
          { text: '我的小红书', link: '/language/english/' }

        ]
      }
    ],
  search: false, // 设置是否使用导航栏上的搜索框
  searchMaxSuggestions: 10,// 搜索框显示的搜索结果数量
  sidebar:{
    "/allfunction/":[
      {
        title:"group1",//组名
        children:[""]//显示该目录下的favoritepaper.md文件
      },
      {
        title:"group2",
        children:["Unique_function","Third-party"]
      }
      
    ],
    "/favoritepaper/":[
      "favoritepaper"//显示该目录下的favoritepaper

    ]
  }
    
  




  
     
  
   }
}
  