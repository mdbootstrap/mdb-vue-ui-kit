<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
import mdbClassMixin from '../../mixins/mdbClassMixin';

const Container = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    fluid: {
      type: Boolean,
      default: false
    },
    freeBird: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return [
        this.fluid ? 'container-fluid' : 'container',
        this.freeBird ? 'free-bird' : '',
        this.mdbClass
      ];
    }
  },
  mixins: [mdbClassMixin]
};

export default Container;
export { Container as mdbContainer };
</script>

<style scoped>
</style>

