<template>
  <div class="grid grid-cols-4 gap-4 mb-4">
    <!-- img -->
    <div class="col-span-1">
      <nuxt-link :to="`/blog/${article.slug}`">
        <img
          class="w-full h-32 object-cover hover:opacity-75"
          :src="article.image"
          :alt="article.title"
        />
      </nuxt-link>
    </div>
    <!-- title desc -->
    <div class="col-span-3 h-32">
      <h2 class="text-2xl leading-none">
        <nuxt-link
          :to="`/blog/${article.slug}`"
          class="text-gray-700 hover:text-blue-600 hover:underline"
        >{{article.title}}</nuxt-link>
      </h2>
      <div class="text-sm text-gray-500 mt-2">
        <span>{{article.updatedAt}}</span>
        <span class="ml-2">{{article.slug}}</span>
      </div>
      <div class="my-1 text-sm text-gray-600">{{article.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>