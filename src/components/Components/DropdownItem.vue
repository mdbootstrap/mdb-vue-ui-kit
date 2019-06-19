<template>
  <component @keyup.native.stop.enter="handleKeypress" @click="$emit('click', $event)" :tabindex="0" :is="to ? 'router-link' : tag" :to="to" :exact="exact" :href="to ? false : href" :class="className" :target="tab"><slot></slot></component>
</template>

<script>
import classNames from 'classnames';

const DropdownItem = {
  props: {
    tag: {
      type: String,
      default: "a"
    },
    to: [String, Object],
    href: {
      type: String,
      default: "#"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: false
    },
    newTab: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        'dropdown-item',
        this.disabled ? 'disabled' : '',
        this.active ? 'active' : ''
      );
    },
    tab() {
      if (this.newTab) {
        return "_blank";
      } return false;
    }
  },
  methods: {
    handleKeypress(e){
      e.target.click();
    }
  }
};

export default DropdownItem;
export { DropdownItem as mdbDropdownItem };
</script>

<style scoped>
.dropdown-item {
  outline-color: rgba(0, 0, 0, 0.1);
}
</style>
