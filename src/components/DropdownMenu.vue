<template>
  <div :is="tag" data-toggle="dropdown-menu" :class="className"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

const DropdownMenu = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    dropup: {
      type: Boolean,
      default: false
    },
    right: {
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
    color: {
      type: String
    }
  },
  computed: {
    className() {
      return classNames(
        'dropdown-menu',
        'show',
        this.right ? 'dropdown-menu-right' : '',
        this.dropup ? 'dropup' : '',
        this.color ? 'dropdown-' + this.color : '',
        this.dropright ? 'dropright' : '',
        this.dropleft ? 'dropleft' : ''
      );
    }
  }
};

export default DropdownMenu;
export { DropdownMenu as mdbDropdownMenu };
</script>

<style scoped>
.dropdown-menu {
  position: absolute;
  left: 0;
}
.dropdown-menu-right {
  left: auto;
  right: 0;
}
.dropup {
  position: absolute;
  top: auto;
  bottom: 100%;
  margin-bottom: 3rem;
}
.dropright {
  left: 100%;
  top: 0;
}
.dropleft {
  left: auto;
  right: 2.5rem;
  top: 0;
}
</style>
