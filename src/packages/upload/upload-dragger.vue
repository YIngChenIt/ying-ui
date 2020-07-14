<template>
  <div class="y-upload-dragger" @drop.prevent="onDrop" @dragover.prevent @dragleave.prevent>
    <y-icon icon="shangchuan" class="icon"></y-icon>
    <div>将文件拖拽到此区域即可</div>
  </div>
</template>

<script>
export default {
  methods: {
    onDrop(e) {
      if (!this.accpet) {
        this.$emit("file", e.dataTransfer.files);
      } else {
        this.$emit("file", e.dataTransfer.files);
      }
    }
  }
};
</script>

<style lang="scss">
.y-upload-dragger {
  background-color: #fff;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  box-sizing: border-box;
  width: 360px;
  height: 180px;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover {
    border-color: #409eff;
  }
  .icon {
    width: 65px;
    height: 65px;
    margin: 40px auto 10px;
  }
}
</style>