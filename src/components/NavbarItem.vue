<template>
  <li :is="tag" :class="className" @click="wave">
    <a v-if="!router" :href="link" :class="anchorClassName"><slot></slot></a>
    <router-link tag="a" v-if="router" :exact="exact" active-class='active' exact-active-class='active' :class='anchorClassName' :to="link">
      <slot></slot>
    </router-link>
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
    },
    router: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        'nav-item',
        this.waves && 'ripple-parent'
      );
    },
    anchorClassName() {
      return classNames({
        'nav-link': true,
        'navbar-link': true,
        'disabled': this.disabled,
        'active': this.active
      }
      );
    },
    link() {
      return this.router ? this.href : '#' + this.href;
    },
  },
  mixins: [waves]
};

export default NavbarItem;
export { NavbarItem as mdbNavItem };
</script>

<style scoped>

</style>
