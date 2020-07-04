export default {
  head: {
    title: 'blog',
    titleTemplate: '%s - 极简攻略 - Rioor.com',
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
        content: '剑网3,剑三,剑三手游,指尖江湖,谢云流传,明日方舟,极简攻略',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Rioor.com着力于打造极简的游戏攻略、便捷的网址大全。萌新入门、极简教程、官方资料、前瞻爆料等一应俱全，让你的生活更精彩！',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'iFieer,Email：ifieer@163.com',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  modules: ['@nuxt/content'],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
}
