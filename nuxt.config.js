const pkg = require('./package')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Router
  */
  router: {
    middleware: 'i18n'
  },
  /*
  ** Plugins
  */
  plugins: [
    // Will inject the plugin in the $root app and also in the context as `i18n`
    { src: '~plugins/i18n.js', injectAs: 'i18n' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // ...
    }
  },
  modules: [
    // 文档: https://bootstrap-vue.js.org/docs/#nuxt-js
    'bootstrap-vue/nuxt',
    // 文档: https://github.com/nuxt-community/axios-module
    '@nuxtjs/axios'
  ],
  axios: {
    // proxyHeaders: false
  }
}
