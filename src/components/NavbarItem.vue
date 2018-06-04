<template>
  <li :is="tag" :class="className" @click="wave">
    <a :href="href" class="nav-link navbar-link"><slot></slot></a>
  </li>
</template>

<script>
import classNames from 'classnames';
import waves from '../mixins/waves';

export default {
  props: {
    tag: {
      type: String,
      default: 'li'
    },
    active: {
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
    wavesFixed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        'nav-item',
        this.active ? 'active' : '',
        this.waves ? 'ripple-parent' : ''
      );
    }
  },
  mixins: [waves]
};
</script>

<style scoped>

</style>
