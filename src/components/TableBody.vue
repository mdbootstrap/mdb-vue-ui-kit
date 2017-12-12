<template>
  <tbody :is="tag" :class="className"><slot></slot></tbody>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "tbody"
    },
    color: {
      type: String,
    }
  },
  data() {
    return {
      className: classNames(
        this.color ? 'tbody-' + this.color : ''
      )
    };
  }
};
</script>

<style scoped>
</style>
