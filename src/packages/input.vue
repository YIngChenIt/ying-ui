<template>
  <div class="y-input" :class="inputClass">
    <y-icon :icon="prefixIcon" v-if="prefixIcon"></y-icon>
    <y-icon :icon="suffixIcon" v-if="suffixIcon"></y-icon>
    <input
      :type="showPassword?(passwordVisible?'text':'password'):type"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      @input="$emit('input',$event.target.value)"
      ref="input"
    />
    <y-icon
      icon="qingkong"
      v-if="clearable && value"
      @click.native="$emit('input','')"
      @mousedown.native.prevent
    ></y-icon>
    <y-icon icon="eye" v-if="showPassword && value" @click.native="changeStatus"></y-icon>
  </div>
</template>

<script>
export default {
  name: "y-input",
  props: {
    name: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    prefixIcon: String,
    suffixIcon: String
  },
  data() {
    return {
      passwordVisible: false
    };
  },
  computed: {
    inputClass() {
      let classes = [];
      if (this.clearable || this.showPassword || this.suffixIcon) {
        classes.push(`y-input-suffix-icon`);
      }
      if (this.prefixIcon) {
        classes.push(`y-input-prefix-icon`);
      }
      return classes;
    }
  },
  methods: {
    changeStatus() {
      this.passwordVisible = !this.passwordVisible;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  }
};
</script>


<style lang="scss">
@import "@/styles/_var.scss";
.y-input {
  display: inline-flex;
  position: relative;
  input {
    padding: 8px;
    width: 150px;
    height: 42px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    &:focus {
      border: 1px solid $primary;
      outline: none;
      box-shadow: inset -1px 0px 2px $primary, inset 1px 1px 1px $primary;
    }
    &[disabled] {
      cursor: not-allowed;
      background: #eee;
    }
  }
}
.y-input-suffix-icon {
  input {
    padding-right: 25px;
  }
  .y-icon {
    right: 8px;
    top: 13px;
    position: absolute;
    cursor: pointer;
    width: 14.5px;
    height: 14.5px;
  }
}
.y-input-prefix-icon {
  input {
    padding-left: 25px;
  }
  .y-icon {
    left: 8px;
    top: 13px;
    position: absolute;
    cursor: pointer;
    width: 14.5px;
    height: 14.5px;
  }
}
</style>