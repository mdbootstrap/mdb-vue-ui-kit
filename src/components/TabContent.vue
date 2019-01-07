<template>
  <component :is="tag" :class="className">
    <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
      <slot class="fade"></slot>
    </transition>
  </component>
</template>

<script>
import classNames from 'classnames';

const TabContent = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    leave(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    }
  },
  computed: {
    className() {
      return classNames(
        'tab-content',
        this.vertical && 'vertical'
      );
    }
  }
};

export default TabContent;
export { TabContent as mdbTabContent };
</script>

<style scoped>
.fade {
  opacity: 1;
  transition: 0.3s;
}
</style>
