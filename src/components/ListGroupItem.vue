<template>
  <li :class="className" :is="tag">
    <slot></slot>
  </li>
</template>

<script>
import classNames from 'classnames';
export default {
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
  data(){
    return {
      className: classNames(
        'list-group-item',
        'justify-content-between',
        'd-flex',
        'align-items-center',
        this.action ? 'list-group-item-action' : '',
        this.disabled ? 'disabled' : '',
        this.active ? 'active' : ''
      )
    };
  }
};
</script>

<style scoped>

</style>
