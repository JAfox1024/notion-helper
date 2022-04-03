export default {
  pages: [
    'pages/index/index',
    'pages/saveArticle/index',
    'pages/book/index',
    'pages/user/index',
    'pages/feedback/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationStyle: 'custom',
  },
  supportedMaterials: [
    {
      materialType: "text/html",
      name: "${nickname}",
      desc: "保存到我的Notion",
      path: "/pages/saveArticle/index"
    }
  ],
}