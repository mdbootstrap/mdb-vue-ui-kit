<template>
    <a :href="href" :is="tag" class='navbar-brand'>
      <slot></slot>
    </a>
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
