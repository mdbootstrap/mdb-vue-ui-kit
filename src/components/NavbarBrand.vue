<template>
    <component :href="href" :is="tag" class='navbar-brand'>
      <slot></slot>
    </component>
</template>

<script>

const mdbNavbarBrand = {
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

export default mdbNavbarBrand;
</script>

<style scoped>

</style>
