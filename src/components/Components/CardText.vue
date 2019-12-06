<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
const CardText = {
  props: {
    tag: {
      type: String,
      default: "p"
    }
  },
  computed: {
    className() {
      return [
        'card-text'
      ];
    }
  }
};

export default CardText;
export { CardText as mdbCardText };
</script>

<style scoped>
</style>
