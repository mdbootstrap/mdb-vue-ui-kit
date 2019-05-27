<template>
  <component :is="tag" :class="className">
    <a :class="anchorClass" href="#" role="tab">
      <mdb-icon v-if="icon" :icon="icon" :far="far || regular" :fal="fal || light" :fab="fab || brands" />
      <slot></slot>
    </a>
  </component>
</template>

<script>
import classNames from 'classnames';
import mdbIcon from '../Content/Fa.vue';

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
    },
    far: {
      type: Boolean,
      default: false
    },
    regular: {
      type: Boolean,
      default: false
    },
    fal: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    fab: {
      type: Boolean,
      default: false
    },
    brands: {
      type: Boolean,
      default: false
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
