<template>
  <div class="grid grid-cols-4 gap-4 mb-10">
    <!-- img -->
    <div class="col-span-4 hidden md:block md:col-span-1">
      <nuxt-link :to="`/blog/${article.slug}`">
        <img
          class="w-full h-32 object-cover hover:opacity-75 border-white border-4 shadow"
          :src="article.image"
          :alt="article.title"
        />
      </nuxt-link>
    </div>
    <!-- title desc -->
    <div class="p-4 col-span-4 md:col-span-3 h-32 border-b-2 border-r">
      <h2 class="text-sm font-semibold md:font-normal md:text-xl lg:text-2xl truncate">
        <nuxt-link
          :to="`/blog/${article.slug}`"
          class="text-gray-700 hover:text-blue-600 hover:underline"
        >{{article.title}}</nuxt-link>
      </h2>
      <div class="text-sm text-gray-500 mt-2 truncate">
        <span>updated: {{ formatDate(article.updatedAt) }}</span>
        <span class="ml-2">{{article.slug}}</span>
      </div>
      <div class="my-1 text-sm text-gray-500 truncate">{{article.description}}</div>
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
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>