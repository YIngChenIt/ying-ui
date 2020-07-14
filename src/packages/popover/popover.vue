<template>
  <div class="y-popover">
    <div
      v-if="visible"
      class="y-popover-content"
      :class="`content-${placement}`"
      ref="content"
      @click.stop
    >
      <h3 v-if="title">{{title}}</h3>
      <slot>{{content}}</slot>
      <div class="arrow"></div>
    </div>
    <slot name="reference"></slot>
  </div>
</template>

<script>
const on = (element, event, handler) => {
  element.addEventListener(event, handler, false);
};

const off = (element, event, handler) => {
  element.removeEventListener(event, handler, false);
};

export default {
  name: "y-popover",
  props: {
    value: {
      default: false,
      type: Boolean
    },
    placement: {
      validator(type) {
        if (!["top", "bottom", "left", "right"].includes(type)) {
          throw new Error(
            "属性必须是" + ["top", "bottom", "left", "right"].join("、")
          );
        }
        return true;
      }
    },
    width: {
      type: String
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    trigger: {
      type: String
    }
  },
  data() {
    return {
      visible: false
    };
  },
  watch: {
    visible(value) {
      this.$emit("input", value);
    },
    value: {
      immediate: true,
      handler(value) {
        this.visible = value;
        if (value) {
          this.$nextTick(() => {
            const content = this.$refs.content;
            this.dealContentCoordinate(content);
            document.body.appendChild(content);
            if (this.trigger == "hover") {
              on(content, "mouseenter", this.handleMouseEnter);
              on(content, "mouseleave", this.handleMouseLeave);
            }
          });
        }
      }
    }
  },
  methods: {
    dealContentCoordinate(content) {
      let left = this.$el.offsetLeft;
      let top = this.$el.offsetTop;
      const offsetWidth = this.$el.offsetWidth;
      const offsetHeight = this.$el.offsetHeight;
      if (this.placement === "bottom") {
        left = left - offsetWidth;
        top = top + offsetHeight + 20;
      } else if (this.placement === "top") {
        left = left - offsetWidth;
        top = top - offsetHeight - 40;
      } else if (this.placement === "left") {
        left = left- offsetWidth / 2 - this.width;
        top = top - offsetHeight / 2;
      } else if (this.placement === "right") {
        left = left + offsetWidth + 20;
        top = top - offsetHeight / 2;
      }
      content.style.left = left + "px";
      content.style.top = top + "px";
    },
    handleMouseEnter() {
      clearTimeout(this.timer);
      this.visible = true;
    },
    handleMouseLeave() {
      this.timer = setTimeout(() => {
        this.visible = false;
      }, 200);
    },
    toggle() {
      this.visible = !this.visible;
    },
    handleDocumentClick(e) {
      if (this.$el.contains(e.target)) {
        return false;
      }
      this.visible = false;
    }
  },
  mounted() {
    const reference = this.$slots.reference;
    if (reference) {
      this.reference = reference[0].elm;
    }
    if (this.trigger === "hover") {
      on(this.$el, "mouseenter", this.handleMouseEnter);
      on(this.$el, "mouseleave", this.handleMouseLeave);
    } else if (this.trigger === "click") {
      on(this.reference, "click", this.toggle);
      on(document, "click", this.handleDocumentClick);
    }
  },
  beforeDestroy() {
    off(this.$el, "mouseenter", this.handleMouseEnter);
    off(this.$el, "mouseleave", this.handleMouseLeave);
    off(this.reference, "click", this.toggle);
    off(document, "click", this.handleDocumentClick);
  }
};
</script>

<style lang="scss">
.y-popover {
  display: inline-block;
  position: relative;
}
.y-popover-content {
  position: absolute;
  top: 100px;
  left: 100px;
  padding: 10px;
  border-radius: 4px;
  z-index: 10;
  box-shadow: -1px -1px 3px #ccc, 1px 1px 3px #ccc;
  background: #fff;
}
.arrow {
  position: absolute;
}
.arrow::before,
.arrow::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border: 6px solid #ccc;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  position: absolute;
}
.arrow::after {
  border-bottom-color: #fff;
  transform: translateY(1px);
  filter: drop-shadow(0 -2px 1px #ccc);
}
.content-top {
  .arrow {
    left: 50%;
    margin-left: -6px;
    bottom: 0px;
    &::after,
    &::before {
      transform: rotate(180deg);
    }
  }
}
.content-bottom {
  .arrow {
    left: 50%;
    margin-left: -6px;
    top: -12px;
  }
}
.content-left {
  .arrow {
    top: 50%;
    margin-top: -6px;
    right: 0px;
    &::after,
    &::before {
      transform: rotate(90deg);
    }
  }
}
.content-right {
  .arrow {
    top: 50%;
    margin-top: -6px;
    left: -12px;
    &::after,
    &::before {
      transform: rotate(-90deg);
    }
  }
}
</style>