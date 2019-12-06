<template>
  <component :class="className" :is="tag"><slot></slot>
  </component>
</template>

<script>
const Media = {
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    className() {
      return [
        'media'
      ];
    }
  }
};

export default Media;
export { Media as mdbMedia };
</script>


<style scoped>
</style>
