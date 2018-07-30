<template>
  <div :is="tag" :class="className"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

const CardBody = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    color: {
      type: String
    },
    cascade: {
      type: Boolean
    }
  },
  computed: {
    className() {
      return classNames(
        'card-body',
        this.color ? this.color + '-color' : '',
        this.cascade && 'card-body-cascade'
      );
    }
  }
};

export default CardBody;
export { CardBody as mdbCardBody };
</script>

<style scoped>
</style>

