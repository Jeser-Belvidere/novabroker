// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/fonts", "nuxt-schema-org"],
  css: ["~/assets/css/main.css"],
  app: {
    //TODO: Добавить микроразметку
    head: {
      title: "NOVABROKER",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon16x16.svg" },
        { rel: 'preload', href: '/fonts/AdventPro-VariableFont_wdth,wght.ttf', as: 'font', type: 'font/ttf' }
      ],
      meta: [
        {
          property: "title",
          name: "title",
          content: "NOVABROKER",
        },
        //TODO: не более 2-4х ключевых слов
        {
          property: "keywords",
          name: "keywords",
          content:
            "Оформление ТС, Таможенное оформление, Перевозка ТС, Таможенный брокер, Таможня, оценка ТС, оценка машин, СБКТС, ЭПТС, УВЭОС, ГЛОНАСС ",
        },
        {
          property: "description",
          name: "description",
          content: "Таможенный брокер",
        },
        {
          property: "og:title",
          content: "NOVABROKER",
        },
        {
          property: "og:description",
          content: "Таможенные услуги и оформление",
        },
        {
          property: "og:image",
          content: 'https://новаброкер.рф/favicon128x128.svg',
        },
        {
          property: "og:url",
          content: "https://новаброкер.рф/",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
});
