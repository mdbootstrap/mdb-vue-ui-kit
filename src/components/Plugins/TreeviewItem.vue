<template>
  <component :is="tag" :class="className">
    <div class="p-1" :class="headerClass">
      <mdb-btn v-if="nested" flat class="p-0 m-0 z-depth-0" @click="show = !show">
        <mdb-icon class="ic-w mx-1" :icon="arrow" />
      </mdb-btn>
      <mdb-icon :fab="fab" :far="far" class="ic-w mr-1" :icon="icon" />
      <span>{{title}}</span>
    </div>
    <transition v-if="animated && nested" name="slide" >
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
    animated: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    className() {
      return classNames(this.animated && "treeview-animated-items ");
    },
    animatedParent(){
      return this.$parent.animated;
    },
    arrow() {
      if (this.show) {
        return "angle-down";
      }
      return "angle-right";
    },
    headerClass() {
      return classNames(
        this.animated && this.show && "active",
        (this.animated || this.animatedParent) && "treeview-header"
      );
    }
  }
};

export default TreeviewItem;
export { TreeviewItem as mdbTreeviewItem };
</script>

<style scoped>
.active {
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
}

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
