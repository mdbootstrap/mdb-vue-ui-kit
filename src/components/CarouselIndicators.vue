<template>
  <ol :is="tag" :class="className"><slot></slot></ol>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "ol"
    }
  },
  data() {
    return {
      className: classNames(
        'carousel-indicators'
      ),
    };
  },
};
</script>

<style scoped>
</style>
