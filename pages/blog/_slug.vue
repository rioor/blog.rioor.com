<template>
  <article>
    <h1>{{article.title}}</h1>
    <nuxt-content :document="article"></nuxt-content>
    <pre>{{article}}</pre>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  }
}
</script>