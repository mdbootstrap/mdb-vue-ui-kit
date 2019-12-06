<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
const CardUp = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    color: {
      type: String
    },
    gradient: {
      type: String
    }
  },
  computed: {
    className() {
      return [
        'card-up',
        this.color ? this.color + '-color' : '',
        this.gradient ? this.gradient + '-gradient' : ''
      ];
    }
  }
};

export default CardUp;
export { CardUp as mdbCardUp };
</script>

<style scoped>
</style>
