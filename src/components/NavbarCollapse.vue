<template>
  <div :is="tag" :id="id" :class="className"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

const NavbarCollapse = {
  props: {
    tag: {
      type: String,
      default: "nav"
    },
    id: {
      type: String,
      default: 'navbarSupportedContent'
    }
  },
  computed: {
    className() {
      return classNames(
        'navbar-collapse'
      );
    }
  }
};

export default NavbarCollapse;
export { NavbarCollapse as mdbNavbarToggler };
</script>

<style scoped>
.show-navbar {
  animation: slideDown .3s ease-in;
  animation-fill-mode: forwards;
}
.hide-navbar {
  animation: slideUp .3s ease-out;
  animation-fill-mode: forwards;
}
@keyframes slideDown {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 500px;
  }
}
@keyframes slideUp {
  0% {
    max-height: 500px;
  }
  100% {
    max-height: 0;
  }
}
</style>

