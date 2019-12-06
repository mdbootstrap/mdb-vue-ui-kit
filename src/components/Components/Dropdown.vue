<template>
  <component v-if="multiLevel" @keyup.native.enter="$event.target.click()" :is="tag" :class="className">
    <span tabindex="0" class="dropdown-toggler" @click="toggle = !toggle" @keyup.stop.enter="toggle = !toggle">
      <slot name="toggle"></slot>
    </span>
    <div v-if="toggle" :style="style" v-on-clickaway="away">
      <slot></slot>
    </div>
  </component>

  <component v-else :is="tag" :class="className" :style="style">
    <span tabindex="0" class="dropdown-toggler" @click="toggle = !toggle" v-on-clickaway="away" @keyup.stop.enter="toggle = !toggle">
      <slot name="toggle"></slot>
    </span>
    <div v-if="toggle">
      <slot></slot>
    </div>
  </component>
</template>

<script>
import { mdbDropdown } from '../../mixins/mdbDropdown';

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
</style>

<style>
.navbar .dropdown-menu a:hover {
  color: inherit !important;
}
</style>
