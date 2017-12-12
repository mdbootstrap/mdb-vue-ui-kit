<template>
  <div :is="tag" :class="className"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    interval: {
      type: Number,
      default: 10000
    }
  },
  data() {
    return {
      className: classNames(
        'carousel'
      ),
      render: 0
    };
  },
  created() {
    if (this.render == 0) {
      this.$parent.$emit('defineInterval', {'newInterval': this.interval});
      this.render++;
    }
  }
};
</script>

<style scoped>
</style>
