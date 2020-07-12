<template>
  <section class="y-container" :class="{isVertical}">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: "y-container",
  data() {
    return { isVertical: true };
  },
  mounted() {
    this.isVertical = this.$children.some(child =>
      ["y-footer", "y-header"].includes(child.$options.name)
    );
  }
};
</script>
<style lang="scss">
.y-container {
  display: flex;
  flex-direction: row;
  flex:1
}
.y-container.isVertical {
  flex-direction: column;
}
</style>