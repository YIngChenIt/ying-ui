<template>
  <div class="y-upload-dragger" @drop.prevent="onDrop" @dragover.prevent @dragleave.prevent>
    <y-icon icon="shangchuan" class="icon"></y-icon>
    <span>将文件拖拽到此区域即可</span>
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
  background: #eee;
  border: 1px solid #aaa;
  width: 360px;
  height: 180px;
  line-height: 180px;
  border-radius: 10px;
  flex-direction: row;
  display: flex;
  .icon {
    width: 65px;
    height: 65px;
    margin: 65px auto 10px;
  }
}
</style>