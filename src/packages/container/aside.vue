<template>
  <aside class="y-aside" :style="{width}">
    aside
  </aside>
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