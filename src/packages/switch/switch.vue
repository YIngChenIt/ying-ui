<template>
  <div
    class="y-switch"
    @click.prevent="switchValue"
    :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }"
  >
    <input
      type="checkbox"
      :true-value="activeValue"
      :false-value="inactiveValue"
      ref="input"
      class="y-switch__input"
      @change="handleChange"
      @keydown.enter="switchValue"
      :disabled="switchDisabled"
    />
    <div class="y-switch__core" ref="core" :style="{ 'width': coreWidth + 'px' }"></div>
  </div>
</template>

<script>
export default {
  name: "y-switch",
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      coreWidth: this.width
    };
  },
  created() {
    if (!~[this.activeValue, this.inactiveValue].includes(this.value)) {
      this.$emit("input", this.inactiveValue);
    }
  },
  methods: {
    setBackgroundColor() {
      const newColor = this.checked ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    },
    switchValue() {
      !this.switchDisabled && this.handleChange();
    },
    handleChange() {
      const val = this.checked ? this.inactiveValue : this.activeValue;
      this.$emit("input", val);
      this.$emit("change", val);
      this.$nextTick(() => {
        this.$refs.input.checked = this.checked;
      });
    }
  },
  mounted() {
    this.coreWidth = this.width || 40;
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor();
    }
  },
  computed: {
    checked() {
      return this.value === this.activeValue;
    },
    switchDisabled() {
      // TODO 接入父容器表单的禁用逻辑
      return this.disabled;
    }
  },
  watch: {
    checked() {
      this.$refs.input.checked = this.checked;
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
    }
  }
};
</script>

<style lang="scss">
.y-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .y-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .y-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    &:after {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.is-checked {
  .y-switch__core {
    background-color: yellow;
    &:after {
      left: 100%;
      margin-left: -17px;
    }
  }
}

.is-disabled {
  opacity: 0.6;
  .y-switch__core {
    cursor: not-allowed;
  }
}
</style>