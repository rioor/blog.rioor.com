<template>
  <div>
    <div class="underline mb-4 text-blue-600 hover:text-blue-700">
      <nuxt-link to="/blog">← Back to Blog List</nuxt-link>
    </div>

    <article>
      <h2 class="text-xl md:text-3xl text-gray-700 leading-none">{{article.title}}</h2>

      <ul class="list-none text-sm text-gray-600 my-2">
        <li class="inline-block mr-2">slug: {{article.slug}}</li>
        <li class="inline-block mr-2">create: {{article.createdAt}}</li>
        <li class="inline-block mr-2">update: {{article.updatedAt}}</li>
      </ul>

      <div class="text-gray-700 my-4">{{article.description}}</div>

      <div class="my-4 p-2" align="center">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full md:w-1/2 object-cover border-white border-4 shadow-md hover:shadow-lg"
        />
      </div>
      <!-- grid -->
      <div class="grid grid-cols-4 gap-4 relative">
        <!-- toc -->
        <div class="col-span-4">
          <blog-toc :tocs="article.toc"></blog-toc>
        </div>
        <!-- article -->
        <div class="col-span-4">
          <blog-article :article="article"></blog-article>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  }
}
</script>