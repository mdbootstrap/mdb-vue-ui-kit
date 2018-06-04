<template>
  <ul :class="className" :is="tag">
    <slot></slot>
  </ul>
</template>

<script>
import classNames from 'classnames';
export default {
  props: {
    tag: {
      type: String,
      default: "ul"
    }
  },
  computed: {
    className(){
      return classNames(
        'list-group'
      );
    }
  }
};
</script>

<style scoped>

</style>
