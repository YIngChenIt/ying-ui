<template>
  <div id="app">
    <div class="container">
      <y-popover
        v-model="value"
        width="200"
        title="标题"
        content="内容内容，这是一个popover"
        trigger="click"
        placement="right"
      >
        <y-button type="primary" slot="reference">click</y-button>
      </y-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: false
    };
  }
};
</script>

<style lang="scss">
.container {
  margin: 150px auto;
  text-align: center;
}
</style>
