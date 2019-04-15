<template>
  <div :class="wrapperClass" @click="wave">
    <router-link v-if="to" :to="to" class="navbar-brand" >
      <slot></slot>
    </router-link>
    <component v-else :is="tag" class="navbar-brand" @click="wave">
      <slot></slot>
    </component>
  </div>
</template>

<script>
import waves from '../mixins/waves';

const NavbarBrand = {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    to: [String, Object],
    waves: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    wrapperClass() {
      return this.waves && 'ripple-parent';
    }
  },
  mixins: [waves]
};

export default NavbarBrand;
export { NavbarBrand as mdbNavbarBrand };
</script>

<style scoped>

</style>
