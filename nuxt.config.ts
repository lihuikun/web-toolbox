// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
import unocssConfig from './unocss.config'

export default defineNuxtConfig({
  nitro: {
    preset: 'vercel-edge',
  },
  app: {
    // head
    head: {
      title: '前端工具库',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: '一款前端常见的工具网站跳转网站',
          name: '前端工具库',
          content: '前端工具库',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }],
      script: [{ src: 'https://www.googletagmanager.com/gtag/js?id=G-SH50NF9BHX', async: true }, {
        innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-SH50NF9BHX');
        `,
        type: 'text/javascript'
      }]
    }
  },

  // css
  css: ['~/assets/scss/index.scss'],

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/color-mode'
  ],

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // colorMode
  colorMode: {
    classSuffix: '',
  },

  unocss: unocssConfig,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
})
