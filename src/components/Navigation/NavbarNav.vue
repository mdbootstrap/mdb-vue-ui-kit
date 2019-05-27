<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script>
import classNames from 'classnames';

const NavbarNav = {
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    nav: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    justifyAround: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        this.nav ? 'nav' : 'navbar-nav',
        this.right ? 'ml-auto' : 
          this.center ? 'justify-content-center w-100' : 
            this.vertical ? 'flex-column' :
              this.justifyAround ? 'justify-content-around w-100' : 'mr-auto'
      );
    }
  }
};

export default NavbarNav;
export { NavbarNav as mdbNavbarNav };
</script>

<style scoped>

</style>
