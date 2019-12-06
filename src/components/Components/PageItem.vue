<template>
  <component :is="tag" :class="className" @click="wave">
    <a class="page-link" :href="href">
      <slot></slot>
    </a>
  </component>

</template>

<script>
import waves from '../../mixins/waves';

const PageItem = {
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String
    },
    waves: {
      type: Boolean,
      default: true
    },
    darkWaves: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    className() {
      return [
        'page-item',
        this.active ? 'active' : false,
        this.disabled ? 'disabled' : false,
        this.waves ? 'ripple-parent' : false
      ];
    }
  },
  mixins: [waves]
};

export default PageItem;
export { PageItem as mdbPageItem };
</script>

<style scoped>
</style>
