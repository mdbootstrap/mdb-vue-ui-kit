<template>
  <form :is="tag" :class="className">
    <slot></slot>
  </form>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "form"
    },
    classes: {
      type: String
    }
  },
  computed: {
    className() {
      return classNames(
        'form-inline',
        this.classes
      );
    }
  }
};
</script>

<style scoped>

</style>
