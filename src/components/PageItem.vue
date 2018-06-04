<template>
  <li :is="tag" :class="className" @click="wave">
    <a class="page-link" :href="href">
      <slot></slot>
    </a>
  </li>

</template>

<script>
import classNames from 'classnames';
import waves from '../mixins/waves';

export default {
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
      type: String,
      default: '#'
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
      return classNames(
        'page-item',
        this.active ? 'active' : false,
        this.disabled ? 'disabled' : false,
        this.waves ? 'ripple-parent' : false
      );
    }
  },
  mixins: [waves]
};
</script>

<style scoped>
</style>
