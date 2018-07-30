<template>
  <h4 :is="tag" :class="className"><slot></slot></h4>
</template>

<script>
import classNames from 'classnames';

const CardTitle = {
  props: {
    tag: {
      type: String,
      default: "h4"
    }
  },
  computed: {
    className() {
      return classNames(
        'card-title'
      );
    }
  }
};

export default CardTitle;
export { CardTitle as mdbCardTitle };
</script>

<style scoped>
</style>
