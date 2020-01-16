<template>
  <component :is="tag" data-toggle="dropdown-menu" :class="className"
    ><slot></slot
  ></component>
</template>

<script>
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
      return [
        "dropdown-menu",
        "show",
        this.color ? "dropdown-" + this.color : ""
      ];
    }
  }
};

export default DropdownMenu;
export { DropdownMenu as mdbDropdownMenu };
</script>
<style>
.navbar .dropdown-menu {
  position: relative !important;
}

.navbar .mega-menu {
  position: absolute !important;
}
</style>
