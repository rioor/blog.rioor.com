<template>
  <div>
    <nuxt-content :document="article" class="break-words"></nuxt-content>
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