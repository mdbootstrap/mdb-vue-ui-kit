<template>
  <component :class="className" :is="tag">
    <slot></slot>
  </component>
</template>

<script>
import classNames from 'classnames';
const ListGroupItem = {
  props: {
    tag: {
      type: String,
      default: "li"
    },
    action: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className(){
      return classNames(
        'list-group-item',
        'justify-content-between',
        'd-flex',
        'align-items-center',
        this.action ? 'list-group-item-action' : '',
        this.disabled ? 'disabled' : '',
        this.active ? 'active' : ''
      );
    }
  }
};

export default ListGroupItem;
export { ListGroupItem as mdbListGroupItem };
</script>

<style scoped>

</style>
