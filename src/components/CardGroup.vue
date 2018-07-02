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
    deck: {
      type: Boolean,
      default: false
    },
    column: {
      type: Boolean,
      defaul: false
    }
  },
  computed: {
    className() {
      return classNames(
        this.deck ? 'card-deck' : this.column ? 'card-columns' : 'card-group'
      );
    }
  }
};
</script>

<style scoped>
</style>
