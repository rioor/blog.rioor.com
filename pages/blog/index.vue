<template>
  <div>
    <div v-for="article of articles" :key="article.slug">
      <blog-item :article="article"></blog-item>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'image', 'slug', 'author', 'updatedAt'])
      .sortBy('updatedAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>