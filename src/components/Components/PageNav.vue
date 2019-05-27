<template>
  <component :is="tag" :class="className" @click="wave">
    <a v-if="prev" class="page-link" href="#" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
      <span class="sr-only">Previous</span>
    </a>
    <a v-if="next" class="page-link" href="#" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
      <span class="sr-only">Next</span>
    </a>
  </component>
</template>

<script>
import classNames from 'classnames';
import waves from '../../mixins/waves';

const PageNav = {
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String
    },
    waves: {
      type: Boolean,
      default: true
    },
    prev: {
      type: Boolean,
      default: false
    },
    next: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        'page-item',
        this.active ? 'active' : false,
        this.disabled ? 'disabled' : false,
        this.waves ? 'ripple-parent' : false
      );
    }
  },
  mixins: [waves]
};

export default PageNav;
export { PageNav as mdbPageNav };
</script>

<style scoped>
</style>
