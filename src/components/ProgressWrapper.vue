<template>
  <div :is="tag" :class="className" :style="style"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

const ProgressWrapper = {
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
  computed: {
    className() {
      return classNames(
        'progress',
        this.color ? this.color : ''
      );
    },
    style() {
      return { height: this.height + 'px'};
    }
  }
};

export default ProgressWrapper;
export { ProgressWrapper as mdbProgressWrapper };
</script>

<style scoped>
.progress-bar {
  height: 100%;
}
</style>
