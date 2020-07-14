<template>
  <div class="y-upload">
    <uploadDragger v-if="drag" :accept="accept" @file="uploadFiles"></uploadDragger>
    <template v-else>
      <div @click="handleClick" class="y-upload-btn">
        <slot></slot>
      </div>
      <input
        type="file"
        :accept="accept"
        :multiple="multiple"
        @change="handleChange"
        :name="name"
        ref="input"
        class="input"
      />
    </template>
    <div>
      <slot name="tip"></slot>
    </div>
    <ul>
      <li v-for="file in files" :key="file.uid">
        <div class="list-item">
          <y-icon icon="file"></y-icon>
          <!-- <img :src="file.url" alt /> -->
          {{file.name}}
          <y-progress v-if="file.status === 'uploading'" :percentage="file.percentage"></y-progress>
          <y-icon icon="cha"></y-icon>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ajax from "./ajax";
import uploadDragger from "./upload-dragger.vue";

export default {
  name: "y-upload",
  components: {
    uploadDragger
  },
  props: {
    name: {
      type: String,
      default: "file"
    },
    action: {
      type: String,
      required: true
    },
    fileList: {
      type: Array,
      default: () => []
    },
    accept: String,
    limit: Number,
    multiple: Boolean,
    onExceed: Function,
    onChange: Function,
    onSuccess: Function,
    onError: Function,
    onProgress: Function,
    beforeUpload: Function,
    httpRequest: {
      type: Function,
      default: ajax
    },
    drag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tempIndex: 1,
      files: [],
      reqs: {}
    };
  },
  watch: {
    fileList: {
      immediate: true,
      handler(fileList) {
        this.files = fileList.map(item => {
          item.uid = Date.now() + this.tempIndex++;
          item.status = "success";
          return item;
        });
      }
    }
  },
  methods: {
    handleClick() {
      this.$refs.input.value = "";
      this.$refs.input.click();
    },
    handleChange(e) {
      const files = e.target.files;
      this.uploadFiles(files);
    },
    uploadFiles(files) {
      if (this.limit && this.fileList.length + files.length > this.limit) {
        return this.onExceed && this.onExceed(files, this.fileList);
      }
      [...files].forEach(file => {
        this.handleStart(file);
        this.upload(file);
      });
    },
    handleStart(file) {
      file.uid = Math.random() + this.tempIndex++;
      const f = {
        status: "ready",
        name: file.name,
        size: file.size,
        percentage: 0,
        uid: file.uid,
        raw: file
      };
      f.url = URL.createObjectURL(file);
      this.files.push(f);
      this.onChange && this.onChange(f);
    },
    upload(file) {
      if (!this.beforeUpload) {
        return this.post(file);
      }
      const flag = this.beforeUpload(file);
      if (flag) {
        return this.post(file);
      }
    },
    post(file) {
      const uid = file.uid;
      const options = {
        file,
        filename: this.name,
        action: this.action,
        onProgress: ev => {
          this.handleProgress(ev, file);
        },
        onSuccess: res => {
          this.handleSuccess(res, file);
        },
        onError: err => {
          this.handleError(err, file);
        }
      };

      const req = this.httpRequest(options);
      this.reqs[uid] = req;
      if (req && req.then) {
        req.then(options.onSuccess, options.onError);
      }
    },
    getFile(rawFile) {
      return this.files.find(file => file.uid == rawFile.uid);
    },
    handleProgress(ev, rawFile) {
      const file = this.getFile(rawFile);
      file.status = "uploading";
      file.percentage = ev.percent || 0;
      this.onProgress && this.onProgress(ev, rawFile);
    },
    handleSuccess(res, rawFile) {
      let file = this.getFile(rawFile);
      file.status = "success";
      this.onSuccess && this.onSuccess(res, rawFile);
      this.onChange && this.onChange(file);
    },
    handleError(err, rawFile) {
      let file = this.getFile(rawFile);
      file.status = "fail";
      this.onError && this.onError(err, rawFile);
      this.onChange && this.onChange(file);
      delete this.reqs[file.uid];
    }
  }
};
</script>

<style lang="scss">
.y-upload {
  .y-upload-btn {
    display: inline-block;
  }
  .input {
    display: none;
  }
}
</style>