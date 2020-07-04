<template>
  <div class="grid grid-cols-4 gap-4 my-4">
    <!-- img -->
    <div class="col-span-1">
      <img class="w-40 h-24" :src="article.image" :alt="article.title" />
    </div>
    <!-- title desc -->
    <div class="col-span-3">
      <h2 class="text-2xl leading-none">
        <nuxt-link
          :to="`/blog/${article.slug}`"
          class="text-gray-700 hover:text-blue-600 hover:underline"
        >{{article.title}}</nuxt-link>
      </h2>
      <div class="mt-2 text-sm text-gray-600">{{article.description}}</div>
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