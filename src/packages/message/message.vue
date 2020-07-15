<template>
  <div class="message-container">
    <div
      class="y-message"
      :style="getStyle(layer)"
      v-for="(layer, key) in layers"
      :key="key"
    >{{layer.message}}<span v-if="layer.showClose" @click="remove(layer, true)">x</span></div>
  </div>
</template>

<script>
const styleMap = {
  success: {
    backgroundColor: "#f0f9eb",
    color: "#67c23a",
    borderColor: "#e1f3d8"
  },
  error: {
    backgroundColor: "#fef0f0",
    color: "#f56c6c",
    borderColor: "#fde2e2"
  },
  warning: {
    backgroundColor: "#fdf6ec",
    color: "#e6a23c",
    borderColor: "#faecd8"
  }
};

export default {
  data() {
    return {
      layers: []
    };
  },
  mounted() {
    this.id = 0;
  },
  methods: {
    remove(layer, flag) {
      clearTimeout(layer.timer);
      this.layers = this.layers.filter(item => item.id !== layer.id);
      flag && layer.onClose && layer.onClose(layer)
    },
    add(options) {
      const layer = {
        ...options,
        id: ++this.id
      };
      this.layers.push(layer);
      layer.timer = setTimeout(() => {
        this.remove(layer);
      }, options.duration);
    },
    getStyle(layer) {
      return styleMap[layer.type] ? styleMap[layer.type] : {};
    }
  }
};
</script>

<style lang="scss">
.message-container {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  .y-message {
    min-width: 380px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    margin: 20px auto;
    background-color: #edf2fc;
    transition: opacity 0.3s, transform 0.4s, top 0.4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>