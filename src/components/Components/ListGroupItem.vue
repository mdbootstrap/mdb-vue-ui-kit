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
    },
    justifyContentBetween: {
      type: Boolean,
      default: true
    },
    alignItemsCenter: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    className(){
      return classNames(
        'list-group-item',
        'd-flex',
        this.justifyContentBetween ? 'justify-content-between' : '',
        this.alignItemsCenter ? 'align-items-center' : '',
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
