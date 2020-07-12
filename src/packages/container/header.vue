<template>
  <header :style="{ 'height': height }" class="y-header">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "y-header",
  props: {
    height: {
      type: String,
      default: "60px"
    }
  }
};
</script>

<style lang="scss">
</style>