<template>
  <div :is="tag" :class="className" :style="style">
    <span @click="toggle = !toggle" v-on-clickaway="away">
      <slot name="toggle"></slot>
    </span>
    <div v-if="toggle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import classNames from 'classnames';
import { mixin as clickaway } from 'vue-clickaway';

const Dropdown = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    show: {
      type: Boolean
    },
    btnGroup: {
      type: Boolean
    },
    dropup: {
      type: Boolean,
      default: false
    },
    dropright: {
      type: Boolean,
      default: false
    },
    dropleft: {
      type: Boolean,
      default: false
    },
    split: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      toggle: false
    };
  },
  mixins: [clickaway],
  methods: {
    away() {
      this.toggle = false;
    }
  },
  computed: {
    className() {
      return classNames(
        this.btnGroup ? 'btn-group' : 'dropdown',
        this.show && 'show',
        this.dropup && 'dropup',
        this.dropright && 'dropright',
        this.dropleft && 'dropleft'
      );
    },
    style() {
      return {
        'margin-left' : this.split && '-0.3rem'
      };
    }
  }
};

export default Dropdown;
export { Dropdown as mdbDropdown };
</script>

<style scoped>
.dropdown {
  display: inline-block;
}
</style>

<style>
.navbar .dropdown-menu a:hover {
  color: inherit !important;
}
</style>
