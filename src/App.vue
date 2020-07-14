<template>
  <div id="app">
    <y-upload
      name="avatar"
      action="http://localhost:3000/upload"
      :file-list="fileList"
      :limit="5"
      accept="image/jpeg"
      :multiple="true"
      :on-exceed="handleExceed"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
      :beforeUpload="beforeUpload"
      :drag="false"
    >
      <y-button type="primary" icon="shangchuan">点击上传</y-button>
      <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </y-upload>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    handleExceed(files, fileList) {
      console.log("用户传递的已经超过预期");
    },
    handleChange(file) {
      // console.log(file);
    },
    handleSuccess() {},
    handleError() {},
    handleProgress() {},
    beforeUpload(rawFile) {
      let limitSize = rawFile.size / 1024 > 500;
      if (limitSize) {
        console.log("当前超过了500k");
        return false;
      } else if (!rawFile.name.endsWith(".jpg")) {
        console.log("文件类型不对");
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="scss">
.red {
  background: red;
}
.green {
  background: green;
}

.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.y-header,
.y-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.y-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.y-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .y-container {
  margin-bottom: 40px;
}

.y-container:nth-child(5) .y-aside,
.y-container:nth-child(6) .y-aside {
  line-height: 260px;
}

.y-container:nth-child(7) .y-aside {
  line-height: 320px;
}
</style>
