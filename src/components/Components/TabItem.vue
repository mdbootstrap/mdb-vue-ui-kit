<template>
  <component :is="tag" :class="className">
    <a :class="anchorClass" href="#" role="tab">
      <i v-if="icon" :class="iconClass" />
      <slot></slot>
    </a>
  </component>
</template>

<script>
import mdbIcon from '../Content/Fa.vue';

const TabItem = {
  mixnins: [mdbIcon],
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
      return [
        'nav-item'
      ];
    },
    anchorClass() {
      return [
        'nav-link',
        this.disabled && 'disabled',
        this.active && 'active'
      ];
    }
  }
};

export default TabItem;
export { TabItem as mdbTabItem };
</script>

<style scoped>
</style>
