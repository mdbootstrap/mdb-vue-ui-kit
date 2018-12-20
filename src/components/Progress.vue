<template>
  <component :is="tag" :class="className" :style="style">
    <component :is="barTag" :class="barClassName" role="progressbar" :aria-valuenow="value" aria-valuemin="0" aria-valuemax="100" :style="[{'width' : value + '%'}]"><slot></slot></component>
  </component>
</template>

<script>
import classNames from 'classnames';

const Progress = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    barTag: {
      type: String,
      default: "div"
    },
    height: {
      type: Number
    },
    bgColor: {
      type: String
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
        'progress md-progress',
        this.bgColor && this.bgColor
      );
    },
    barClassName() {
      return classNames(
        this.indeterminate ? 'indeterminate' : 'progress-bar',
        this.striped ? 'progress-bar-striped' : '',
        this.color ? 'bg-' + this.color : '',
        this.animated ? 'progress-bar-animated' : ''
      );
    },
    style() {
      return { height: this.height + 'px'};
    }
  }
};

export default Progress;
export { Progress as mdbProgress };
</script>

<style scoped>
.progress-bar {
  height: 100%;
}
</style>
