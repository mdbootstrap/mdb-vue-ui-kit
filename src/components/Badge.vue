<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script>
import classNames from 'classnames';
import mdbClassMixin from '../mixins/mdbClassMixin';

const Badge =  {
  props: {
    tag: {
      type: String,
      default: "span"
    },
    color: {
      type: String,
    },
    pill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        'badge',
        this.color,
        this.pill ? 'badge-pill' : false,
        this.mdbClass
      );
    }
  },
  mixins: [mdbClassMixin]
};

export default Badge;
export { Badge as mdbBadge };
</script>

<style scoped>

</style>
