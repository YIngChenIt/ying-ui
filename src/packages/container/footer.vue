<template>
  <footer :style="{ 'height': height }" class="y-footer">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: "y-footer",
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
};
</script>

<style lang="scss">
</style>