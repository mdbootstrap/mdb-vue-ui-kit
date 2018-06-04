<template>
  <div :is="tag" :class="className">
    <h3 class="h3-responsive">{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    title: {
      type: String
    },
    text: {
      type: String
    }
  },
  computed: {
    className() {
      return classNames(
        'carousel-caption'
      );
    }
  }
};
</script>

<style scoped>
</style>
