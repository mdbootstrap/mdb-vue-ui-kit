<template>
  <ul :is="tag" :class="className">
    <slot></slot>
  </ul>
</template>

<script>
import classNames from 'classnames';

const NavbarNav = {
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        'navbar-nav',
        this.right ? 'ml-auto' : 'mr-auto'
      );
    }
  }
};

export default NavbarNav;
export { NavbarNav as mdbNavbarNav };
</script>

<style scoped>

</style>
