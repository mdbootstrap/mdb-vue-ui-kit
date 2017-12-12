<template>
  <div :is="tag" :class="className" role="progressbar" :aria-valuenow="value" aria-valuemin="0" aria-valuemax="100"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

export default {
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
    }
  },
  data() {
    return {
      className: classNames(
        'progress-bar',
        this.striped ? 'progress-bar-striped' : '',
        this.color ? 'bg-' + this.color : '',
        this.animated ? 'progress-bar-animated' : '',
        'w-' + this.value
      ),
    };
  }
};
</script>

<style scoped>
</style>
