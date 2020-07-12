<template>
  <main class="y-main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "y-main"
};
</script>

<style lang="scss">
.y-main {
  flex: 1;
  padding: 20px;
}
</style>