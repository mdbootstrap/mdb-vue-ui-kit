<template>
  <li :is="tag" :class="className" @click="wave">
    <a :href="href" class="nav-link navbar-link" :class="{disabled: disabled, active: active}"><slot></slot></a>
  </li>
</template>

<script>
import classNames from 'classnames';
import waves from '../mixins/waves';

const NavbarItem = {
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
    },
    disabled: {
      type: Boolean
    }
  },
  computed: {
    className() {
      return classNames(
        'nav-item',
        this.waves && 'ripple-parent'
      );
    }
  },
  mixins: [waves]
};

export default NavbarItem;
export { NavbarItem as mdbNavItem };
</script>

<style scoped>

</style>
