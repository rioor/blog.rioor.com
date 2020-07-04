export default {
  head: {
    title: 'blog',
    titleTemplate: '%s - blog.rioor.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'http-equiv',
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge,chrome=1',
      },
      { hid: 'renderer', name: 'renderer', content: 'webkit' },
      {
        name: 'keywords',
        content: 'rioor, blog',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'rioor blog',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'liumuu, liumuu@163.com',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  modules: ['@nuxt/content'],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
}
