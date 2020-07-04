<template>
  <div>
    <ul>
      <li v-for="(navbar, index) in navbars" :key="index">
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