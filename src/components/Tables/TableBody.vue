<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script>
const TblBody = {
  props: {
    tag: {
      type: String,
      default: "tbody"
    },
    color: {
      type: String,
    }
  },
  computed: {
    className() {
      return [
        this.color ? 'tbody-' + this.color : ''
      ];
    }
  }
};

export default TblBody;
export { TblBody as mdbTblBody };
</script>

<style scoped>
</style>
