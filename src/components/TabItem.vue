<template>
  <component :is="tag" :class="className">
    <a :class="anchorClass" href="#" role="tab">
      <mdb-icon v-if="icon" :icon="icon" />
      <slot></slot>
    </a>
  </component>
</template>

<script>
import classNames from 'classnames';
import mdbIcon from './Fa.vue';

const TabItem = {
  components: {
    mdbIcon
  },
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  computed: {
    className() {
      return classNames(
        'nav-item'
      );
    },
    anchorClass() {
      return classNames(
        'nav-link',
        this.disabled && 'disabled',
        this.active && 'active'
      );
    }
  }
};

export default TabItem;
export { TabItem as mdbTabItem };
</script>

<style scoped>
</style>
