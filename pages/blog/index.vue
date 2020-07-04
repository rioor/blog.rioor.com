<template>
  <div>
    <div class="underline mb-4 text-blue-600 hover:text-blue-700">
      <nuxt-link to="/">← Back to Home</nuxt-link>
    </div>
    <div v-for="article of articles" :key="article.slug">
      <blog-item :article="article"></blog-item>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'image', 'slug', 'updatedAt'])
      .sortBy('updatedAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>