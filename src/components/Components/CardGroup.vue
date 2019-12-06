<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
const CardGroup = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    deck: {
      type: Boolean,
      default: false
    },
    column: {
      type: Boolean,
      defaul: false
    }
  },
  computed: {
    className() {
      return [
        this.deck ? 'card-deck' : this.column ? 'card-columns' : 'card-group'
      ];
    }
  }
};

export default CardGroup;
export { CardGroup as mdbCardGroup };
</script>

<style scoped>
</style>
