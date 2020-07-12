<template>
  <div class="y-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "y-col",
  data() {
    return {
      gutter: 0
    };
  },
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: null
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    colClass() {
      const classes = [];
      classes.push(`y-col-${this.span}`);
      if (this.offset) {
        classes.push(`y-col-offset-${this.offset}`);
      }
      ["xs", "sm", "md", "lg", "xl"].forEach(type => {
        if (typeof this[type] === "object") {
          const { span, offset } = this[type];
          span && classes.push(`y-col-${type}-${span}`); // y-col-xs-1
          offset && classes.push(`y-col-${type}-offset-${offset}`); // y-col-xs-offset-1
        } else {
          this[type] && classes.push(`y-col-${type}-${this[type]}`); // y-col-xs-1
        }
      });
      return classes;
    },
    colStyle() {
      let style = {};
      if (this.gutter) {
        console.log(this.gutter);
        style = {
          ...style,
          paddingLeft: this.gutter / 2 + "px",
          paddingRight: this.gutter / 2 + "px"
        };
      }
      return style;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_var.scss";

@for $i from 1 through 24 {
  .y-col-#{$i} {
    width: $i/24 * 100%;
  }
  .y-col-offset-#{$i} {
    margin-left: $i/24 * 100%;
  }
}

@include res(xs) {
  @for $i from 1 through 24 {
    .y-col-xs-#{$i} {
      width: $i/24 * 100%;
    }
    .y-col-xs-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}

@include res(sm) {
  @for $i from 1 through 24 {
    .y-col-sm-#{$i} {
      width: $i/24 * 100%;
    }
    .y-col-sm-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}

@include res(md) {
  @for $i from 1 through 24 {
    .y-col-md-#{$i} {
      width: $i/24 * 100%;
    }
    .y-col-md-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}

@include res(lg) {
  @for $i from 1 through 24 {
    .y-col-lg-#{$i} {
      width: $i/24 * 100%;
    }
    .y-col-lg-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}

@include res(xl) {
  @for $i from 1 through 24 {
    .y-col-xl-#{$i} {
      width: $i/24 * 100%;
    }
    .y-col-xl-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
}
</style>