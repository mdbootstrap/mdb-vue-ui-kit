<template>
  <component
    ref="popper"
    :is="tag"
    :class="className"
    :style="style"
    v-mdb-click-outside="multiAway"
  >
    <span
      tabindex="0"
      class="dropdown-toggler"
      @click="toggle = !toggle"
      v-mdb-click-outside="away"
      @keyup.stop.enter="toggle = !toggle"
    >
      <slot name="toggle"></slot>
    </span>

    <transition
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
    >
      <ul
        class="list-unstyled mb-0"
        style="z-index: 1000; transition: opacity .2s linear"
        ref="options"
        v-show="toggle"
      >
        <slot></slot>
      </ul>
    </transition>
  </component>
</template>

<script>
import { mdbDropdown } from "../../mixins/mdbDropdown";

const Dropdown = {
  mixins: [mdbDropdown]
};

export default Dropdown;
export { Dropdown as mdbDropdown };
</script>

<style scoped>
.dropdown {
  display: inline-block;
}
.collapse-item {
  position: relative;
  z-index: 1000;
  transition: opacity 0.2s;
}
</style>

<style>
.navbar .dropdown-menu a:hover {
  color: inherit !important;
}

.dropdown-menu {
  top: 0 !important;
  position: relative !important;
}

.dropdown-toggler:focus {
  outline: none;
}

</style>
