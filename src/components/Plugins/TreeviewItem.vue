<template>
  <component :is="tag" :class="className">
    <div class="p-1" :class="headerClass" @click="opened = !opened" style="position: relative">
      <a v-if="nested" class="p-0 m-0 z-depth-0 stretched-link" @click="show = !show">
        <mdb-icon class="ic-w mx-1" :class="nestedIconClasses" :icon="arrow" />
      </a>
      <mdb-icon :fab="fab" :far="far" :fal="fal" :class="iconClass" class="pl-1 ic-w mr-1" :icon="icon" />
      <span>{{title}}</span>
    </div>
    <transition v-if="(animated || colorful) && nested" name="slide" >
      <ul v-if="show" class="nested list-unstyled pl-4">
        <slot></slot>
      </ul>
    </transition>
    <ul v-else-if="show && nested" class="nested list-unstyled pl-5">
      <slot></slot>
    </ul>
  </component>
</template>

<script>
import classNames from "classnames";
import { mdbIcon } from "../Content/Fa";
import { mdbBtn } from "../Components/Button";

const TreeviewItem = {
  components: {
    mdbIcon,
    mdbBtn
  },
  props: {
    tag: {
      type: String,
      default: "li"
    },
    icon: {
      type: String,
      default: "folder-open"
    },
    title: {
      type: String
    },
    nested: {
      type: Boolean,
      default: false
    },
    far: {
      type: Boolean,
      default: false
    },
    fab: {
      type: Boolean,
      default: false
    },
    fal: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false,
      opened: false
    };
  },
  computed: {
    className() {
      return classNames(
        this.animated && "treeview-animated-items ",
        this.nestedItems && this.colorful && "treeview-colorful-items"
      );
    },
    animatedParent(){
      return this.$parent.animated;
    },
    colorful() {
      return this.$parent.colorful;
    },
    nestedItems() {
      return this.$parent.nested;
    },
    nestedIcon() {
      return this.colorful ? 'plus-circle' : "angle-right";
    },
    nestedActiveIcon() {
      return this.colorful ? 'minus-circle' : "angle-down";
    },
    arrow() {
      if (this.show) {
        return this.nestedActiveIcon;
      }
      return this.nestedIcon;
    },
    headerClass() {
      return classNames(
        this.colorful ? this.nested ? 'treeview-colorful-items-header' : 'treeview-colorful-element' : '',
        this.opened && 'opened',
        this.show && 'open',
        this.animatedParent && (!this.nested) && 'treeview-animated-element',
        this.animated && this.show && "opened"
      );
    },
    nestedIconClasses() {
      return classNames(
        this.show && this.animated && 'white-text'
      );
    },
    iconClass() {
      return classNames(
        this.animated && this.show && 'white-text',
        this.colorful && this.show && 'amber-text'
      );
    },
  }
};

export default TreeviewItem;
export { TreeviewItem as mdbTreeviewItem };
</script>

<style scoped>
/* .active {
  background-color: #32a0ff;
  border-radius: 3px;
  color: white;
}

.treeview-header {
  transition: all 0.5s ease-out;
}
.treeview-header:hover {
  background-color: #8cb9ff;
  border-radius: 3px;
} */

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 120px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
