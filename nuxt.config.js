module.exports = {
  // Global CSS
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/scss/main.scss'
  ],
  // Add element-ui in our app, see plugins/element-ui.js file
  plugins: [
    '@/plugins/element-ui',
  ],
  // Headers of the page
  head: {
    title: 'LiteFinance - The World of Financial Freedom',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
    ],
  },
  // Customize the progress bar color
  loading: { color: '#3B8070' },
  // Build configuration
  build: {
    styleResources: {
      scss: [
        './assets/scss/main.scss',
      ],
    },
    // Run ESLint on save
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },
  },
  serverMiddleware: [
    { path: '/api/comments', handler: '~/api/comments.js' },
    { path: '/api/ratings', handler: '~/api/ratings.js' },
    { path: '/api', handler: '~/api/index.js' },
  ],
  // Nuxt Modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    
    'nuxt-rfg-icon',
  ],
  // RealFaviconGenerator Favicon's for NUXT
  // @see https://github.com/pimlie/nuxt-rfg-icon#rfg
  rfg: {
    "design": {
      "ios": {
        "pictureAspect": "noChange",
        "assets": {
          "ios6AndPriorIcons": false,
          "ios7AndLaterIcons": false,
          "precomposedIcons": false,
          "declareOnlyDefaultIcon": true
        }
      },
      "desktopBrowser": {},
      "windows": {
        "pictureAspect": "noChange",
        "backgroundColor": "#da532c",
        "onConflict": "override",
        "assets": {
          "windows80Ie10Tile": false,
          "windows10Ie11EdgeTiles": {
            "small": false,
            "medium": true,
            "big": false,
            "rectangle": false
          }
        }
      },
      "androidChrome": {
        "pictureAspect": "noChange",
        "themeColor": "#ffffff",
        "manifest": {
          "display": "standalone",
          "orientation": "notSet",
          "onConflict": "override",
          "declared": true
        },
        "assets": {
          "legacyIcon": false,
          "lowResolutionIcons": false
        }
      },
      "safariPinnedTab": {
        "pictureAspect": "silhouette",
        "themeColor": "#5bbad5"
      }
    },
    "settings": {
      "scalingAlgorithm": "Mitchell",
      "errorOnImageTooSmall": false,
      "readmeFile": false,
      "htmlCodeFile": false,
      "usePathAsIs": false
    },
  },
  axios: {
  }
}
