<template>
  <div>
    <ul>
      <li v-for="toc of tocs" :key="toc.id">
        <nuxt-link
          :to="`#${toc.id}`"
          :class="[toc.depth <= 2 ? 'text-sm' : 'text-xs ml-4']"
          class="hover:underline text-blue-600 hover:text-red-600"
        >{{toc.text}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tocs: {
      type: Array
    }
  }
}
</script>