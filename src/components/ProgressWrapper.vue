<template>
  <div :is="tag" :class="className" :style="style"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    height: {
      type: Number
    },
    color: {
      type: String
    }
  },
  data() {
    return {
      className: classNames(
        'progress',
        this.color ? this.color : ''
      ),
      style: {
        height: this.height + 'px'
      }
    };
  }
};
</script>

<style scoped>
.progress-bar {
  height: 100%;
}
</style>
