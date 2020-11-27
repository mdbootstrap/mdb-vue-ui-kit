<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
const CardHeader = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    color: {
      type: String
    },
    textColor: {
      type: String
    },
    border: {
      type: String
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return [
        'card-header',
        (this.color && !this.textColor) ? this.color + ' white-text':
          this.textColor ? this.color + ' ' + this.textColor+'-text' : false,
        this.border && 'border-'+this.border,
        this.transparent && 'transparent'
      ];
    }
  }
};

export default CardHeader;
export { CardHeader as mdbCardHeader };
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
