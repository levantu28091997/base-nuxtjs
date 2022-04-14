export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Nuxt base',
        htmlAttrs: {
            lang: 'ja'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Realtime coupon system' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '@/plugins/qr.js', mode: 'client' },
        { src: '~/plugins/repositories.js' },
        { src: '~/plugins/validator.js' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/pwa',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        'nuxt-i18n'
    ],

    i18n: {
        /* module options */
        locales: ['en', 'ja'],
        defaultLocale: 'ja',		
        strategy: 'no_prefix',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
        },
        vueI18n: {			
            fallbackLocale: 'ja',
            messages: {
                en: require('./locales/en/index'),
                ja: require('./locales/ja/index'),
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    axios: {
        baseURL : process.env.BASE_API_URL || 'https://nuxt-project-1bb29-default-rtdb.asia-southeast1.firebasedatabase.app/'
    },

    pwa: {
        
    },
    // env
    env : {
        baseUrl : process.env.BASE_URL || 'http://localhost:3000',
        baseApiUrl : process.env.BASE_API_URL || 'https://nuxt-project-1bb29-default-rtdb.asia-southeast1.firebasedatabase.app/',
        firebaseApiKey : 'AIzaSyCbvPAavxK7KzrMtc0dH3xXsIUCmPFin-o'
    }
}
