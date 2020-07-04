<template>
  <div class="flex items-center justify-between py-4">
    <a href="/" class="hover:text-blue-600 hover:underline">
      <span>BLOG</span>
      <span class="text-xs">rioor.com</span>
    </a>

    <ul class="inline-flex items-center">
      <li
        v-for="(navbar, index) in navbars"
        :key="index"
        class="list-none font-semibold px-2 py-1 text-gray-600 hover:text-blue-600 hover:underline"
      >
        <nuxt-link :to="navbar.slug">{{navbar.name}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbars: [
        { name: 'Home', slug: '/' },
        { name: 'Blog', slug: '/blog' },
        { name: 'About', slug: '/about' }
      ]
    }
  }
}
</script>