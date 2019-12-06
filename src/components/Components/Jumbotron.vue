
<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>
<script>
const Jumbotron = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return [
        'jumbotron',
        this.fluid ? 'jumbotron-fluid' : ''
      ];
    }
  }
};

export default Jumbotron;
export { Jumbotron as mdbJumbotron };
</script>

<style scoped>

</style>
