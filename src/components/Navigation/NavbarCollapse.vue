<template>
  <component :is="tag" :id="id" :class="className"><slot></slot></component>
</template>

<script>
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
      return [
        'navbar-collapse'
      ];
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
    max-height: 550px;
  }
}
@keyframes slideUp {
  0% {
    max-height: 550px;
  }
  100% {
    max-height: 0;
  }
}
</style>

