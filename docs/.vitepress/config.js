

require('dotenv').config()
module.exports = {
  base: process.env.Base_Url ? process.env.Base_Url : '/xi-yi-an',
  title: 'Hello VitePress',
  description: 'Just playing around.',
  lastUpdated: true,
  themeConfig: {
    smoothScroll: true,
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Config', link: '/config/' },
      { text: 'External', link:  '' }
    ],
    sidebar: [
      {
        text: 'Guide',
        collapsible: true,
        items: [
          {
            text: 'default',
            link: '/guide/index',
            title: 'ff',
          },
          {
            text: 'ff',
            link: '/guide/ff',
            title: 'ff',
          }
        ],
      },
      {
        '/': [
          {
            title: 'Home',
            collapsible: true,
            link: '/'
          },
          {
            title: 'about',
            collapsible: true,
            link: '/about'
          }
        ],
      },
      {
        '/config/': [
          {
            title: 'Config',
          }
        ],
      }
    ],
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>',
    //   // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
    //   appId: '<APP_ID>'
    // },
    // lastUpdated: 'Last Updated', // string | boolean
    // search: true,
    // searchMaxSuggestions: 10,
  }
}