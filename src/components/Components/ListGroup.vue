<template>
  <component :class="className" :is="tag">
    <slot></slot>
  </component>
</template>

<script>
const ListGroup = {
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    sm: {
      type: Boolean,
      default: false
    },
    lg: {
      type: Boolean,
      default: false
    },
    md: {
      type: Boolean,
      default: false
    },
    xl: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className(){
      return [
        'list-group',
        this.horizontal ? this.sm ? 'list-group-horizontal-sm' : this.md ? 'list-group-horizontal-md' : this.lg ? 'list-group-horizontal-lg' : this.xl ? 'list-group-horizontal-xl' : 'list-group-horizontal' : ''
      ];
    }
  }
};

export default ListGroup;
export { ListGroup as mdbListGroup };
</script>

<style scoped>
  
</style>
