<template>
    <component :href="href" :is="tag" class='navbar-brand'>
      <slot></slot>
    </component>
</template>

<script>

const NavbarBrand = {
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    href: {
      type: String,
    }
  }
};

export default NavbarBrand;
export { NavbarBrand as mdbNavbarBrand };
</script>

<style scoped>

</style>
