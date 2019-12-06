<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script>
import mdbClassMixin from '../../mixins/mdbClassMixin';

const Badge =  {
  props: {
    tag: {
      type: String,
      default: "span"
    },
    color: {
      type: String,
      default: 'default'
    },
    pill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      const mdbColors = ['danger', 'warning', 'success', 'info', 'default', 'primary', 'secondary', 'elegant', 'stylish', 'unique', 'special'];
      return [
        'badge',
        mdbColors.includes(this.color) ? `${this.color}-color` : this.color,
        this.pill ? 'badge-pill' : false,
        this.mdbClass
      ];
    }
  },
  mixins: [mdbClassMixin]
};

export default Badge;
export { Badge as mdbBadge };
</script>

<style scoped>

</style>
