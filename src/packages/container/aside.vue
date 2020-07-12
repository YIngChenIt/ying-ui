<template>
  <aside class="y-aside" :style="{width}"></aside>
</template>

<script>
export default {
  name: "y-aside",
  props: {
    width: {
      type: String,
      default: "300px"
    }
  }
};
</script>

<style lang="scss">
</style>