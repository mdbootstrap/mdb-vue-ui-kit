<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
const TblHead = {
  props: {
    tag: {
      type: String,
      default: "thead"
    },
    color: {
      type: String
    },
    textWhite: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return [
        (this.color !== 'dark' && this.color !== 'light') ? this.color : `thead-${this.color}`,
        this.textWhite && 'text-white'
      ];
    }
  }
};

export default TblHead;
export { TblHead as mdbTblHead };
</script>

<style scoped>
</style>
