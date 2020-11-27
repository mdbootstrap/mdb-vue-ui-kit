<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
const CardBody = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    color: {
      type: String
    },
    cascade: {
      type: Boolean
    }
  },
  computed: {
    className() {
      return [
        'card-body',
        this.color ? this.color + '-color' : '',
        this.cascade && 'card-body-cascade'
      ];
    }
  }
};

export default CardBody;
export { CardBody as mdbCardBody };
</script>

<style scoped>
.card-dark p,
.card-dark i,
.card-dark h4,
.card-dark a,
.card-dark a:hover {
  color: white;
}

.card-dark hr {
  border-top: 1px solid rgba(255,255,255,.1);
}
</style>

