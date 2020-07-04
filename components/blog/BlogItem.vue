<template>
  <div class="grid grid-cols-4 gap-4 mb-10">
    <!-- img -->
    <div class="col-span-4 md:col-span-1">
      <nuxt-link :to="`/blog/${article.slug}`">
        <img
          class="w-full h-32 object-cover hover:opacity-75 border-white border-4 shadow"
          :src="article.image"
          :alt="article.title"
        />
      </nuxt-link>
    </div>
    <!-- title desc -->
    <div class="pr-4 col-span-4 md:col-span-3 h-32 border-b-2 border-r">
      <h2 class="text-2xl truncate">
        <nuxt-link
          :to="`/blog/${article.slug}`"
          class="text-gray-700 hover:text-blue-600 hover:underline"
        >{{article.title}}</nuxt-link>
      </h2>
      <div class="text-sm text-gray-500 mt-2 truncate">
        <span>{{article.updatedAt}}</span>
        <span class="ml-2">{{article.slug}}</span>
      </div>
      <div class="my-1 text-sm text-gray-600 overflow-hidden">{{article.description}}</div>
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