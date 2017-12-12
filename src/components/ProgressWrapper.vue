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
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      className: classNames(
        'progress'
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
