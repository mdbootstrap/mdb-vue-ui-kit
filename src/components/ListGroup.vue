<template>
  <ul :class="className" :is="tag">
    <slot></slot>
  </ul>
</template>

<script>
import classNames from 'classnames';

const ListGroup = {
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

export default ListGroup;
export { ListGroup as mdbListGroup };
</script>

<style scoped>

</style>
