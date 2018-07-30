<template>
  <div :is="tag" :class="className" role="progressbar" :aria-valuenow="value" aria-valuemin="0" aria-valuemax="100" :style="[{'width' : value + '%'}]"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

const ProgressBar = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    value: {
      type: Number,
      default: 0
    },
    striped: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    animated: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        this.indeterminate ? 'indeterminate' : 'progress-bar',
        this.striped ? 'progress-bar-striped' : '',
        this.color ? 'bg-' + this.color : '',
        this.animated ? 'progress-bar-animated' : ''
      );
    }
  }
};

export default ProgressBar;
export { ProgressBar as mdbProgress };
</script>

<style scoped>
</style>
