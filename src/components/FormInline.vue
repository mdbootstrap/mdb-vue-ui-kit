<template>
  <form :is="tag" :class="classes">
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
    className: {
      type: String
    }
  },
  data() {
    return {
      classes: classNames(
        'form-inline'
      )
    };
  }
};
</script>

<style scoped>

</style>
