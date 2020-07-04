<template>
  <div>
    <nuxt-content :document="article"></nuxt-content>
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