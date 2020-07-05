<template>
  <div class="flex items-center justify-between py-4">
    <nuxt-link to="/" class="hover:text-blue-600 hover:underline">
      <span>BLOG</span>
      <span class="text-xs hidden md:inline">rioor.com</span>
    </nuxt-link>

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