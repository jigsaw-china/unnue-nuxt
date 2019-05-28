const cndURL = 'https://cdn2.unnue.com';
const baiduKey = 'cea5893888a0415c7e2366dc669e9a94';

module.exports = {
  head: {
    title: '开媛笔记 | unNue.com',
    titleTemplate: '%s _开媛笔记 💳',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'Content-Type', content: 'text/html' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { name: 'author', content: '274111451@qq.com' },
      { hid: 'keywords', name: 'keywords', content: '开媛笔记,开猿笔记,开源笔记,开源博客,开源个人网站,前后端分离网站,前端技术问题,vue ssr,nodejs项目,nuxt项目' },
      { hid: 'description', name: 'description', content: '开媛笔记，鲍亚龙的开源网站，基于nuxt ssr首屏服务器端渲染 ⚡。用于分享、记录、交流和学习，希望可以帮助到小伙伴们。同时网站在不断更新，创造属于猿（媛）的世界 🍬 -$Bao Yalong .. ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: `https://hm.baidu.com/hm.js?${baiduKey}` },
      { src: '//cpro.baidustatic.com/cpro/ui/c.js', async: true, defer: true } // 广告
    ],
  },
  css: [
    { src: '~assets/sass/app.scss', lang: 'scss' }
  ],
  loading: { color: '#3B8070' },
  cache: {
    max: 100,
    maxAge: 1000 * 60 * 15
  },
  plugins: [
    { src: '~/plugins/ga', ssr: false },
    { src: '~/plugins/seo', ssr: false },
    { src: '~/plugins/anniTitle', ssr: false },
    { src: '~/plugins/audio', ssr: false },
    { src: '~/plugins/base64', ssr: false },
    { src: '~/plugins/filters' },
    { src: '~/plugins/gravatar' },
  ],
  build: {
    // analyze: true,
    publicPath: `${cndURL}/_nuxt/`,
    // 都能使用此文件
    styleResources: {
      scss: './assets/sass/base.scss'
    },
    // 可能会重复打包的插件
    vendor: [
      'axios',
      'simplemde',
      'markdown-it',
      'moment',
      'js-base64'
    ],
    maxChunkSize: 350000,
    extractCSS: { allChunks: true },
    // Run ESLint on save
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
