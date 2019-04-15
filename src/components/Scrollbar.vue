<template>
  <VuePerfectScrollbar :class="className" @mouseenter.native="hover" @mouseleave.native="hoverOut" :settings="settings" :style="scrollStyles">
    <slot></slot>
  </VuePerfectScrollbar>
</template>

<script>
import classNames from 'classnames';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

const Scrollbar = {
  components: {
    VuePerfectScrollbar
  },
  props: {
    wheelSpeed: {
      type: Number,
      default: 1
    },
    wheelPropagation: {
      type: Boolean,
      default: false
    },
    swipeEasing: {
      type: Boolean,
      default: true
    },
    minScrollbarLength: {
      type: Number,
      default: null
    },
    maxScrollbarLength: {
      type: Number,
      default: null
    },
    scrollingThreshold: {
      type: Number,
      default: 1000
    },
    useBothWheelAxes: {
      type: Boolean,
      default: false
    },
    suppressScrollX: {
      type: Boolean,
      default: false
    },
    suppressScrollY: {
      type: Boolean,
      default: false
    },
    scrollXMarginOffset: {
      type: Number,
      default: 0
    },
    scrollYMarginOffset: {
      type: Number,
      default: 0
    },
    scrollClass: {
      type: String
    },
    scrollStyle: {
      type: String
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      name: 'Scrollbar',
      yRail: null,
      settings: {
        wheelSpeed: this.wheelSpeed,
        wheelPropagation: this.wheelPropagation,
        swipeEasing: this.swipeEasing,
        minScrollbarLength: this.minScrollbarLength,
        maxScrollbarLength: this.maxScrollbarLength,
        scrollingThreshold: this.scrollingThreshold,
        useBothWheelAxes: this.useBothWheelAxes,
        suppressScrollX: this.suppressScrollX,
        suppressScrollY: this.suppressScrollY,
        scrollXMarginOffset: this.scrollXMarginOffset,
        scrollYMarginOffset: this.scrollYMarginOffset
      }
    };
  },
  computed: {
    className() {
      return classNames(
        this.scrollClass
      );
    },
    scrollStyles() {
      return this.scrollStyle;
    }
  },
  methods: {
    hover() {
      this.yRail.style.opacity = 1;
    },
    hoverOut() {
      this.yRail.style.opacity = 0;
    },
    setStyle(prop, value){
      this.$el.style[prop] = value;
    }
  },
  mounted() {
    this.yRail = document.querySelector('.ps__scrollbar-y-rail');
    this.yRail.classList.remove('ps__scrollbar-y-rail');
    this.yRail.classList.add('ps-y-rail');
    this.setStyle('width', this.width);
    this.setStyle('height', this.height);
  }
};

export default Scrollbar;
export { Scrollbar as mdbScrollbar };
</script>

<style>
.ps-y-rail {
  display: block;
  position: absolute;
  background: transparent;
  opacity: 0;
  transition: background-color .2s linear, opacity .2s linear;
  right: 0;
  width: 15px;
  z-index: 999;
}
.ps-y-rail > .ps__scrollbar-y {
  position: absolute;
  background-color: #aaa;
  border-radius: 6px;
  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;
  right: 2px;
  width: 6px;
}
.ps-y-rail:hover {
  background: #eee;
}
.ps-y-rail:hover > .ps__scrollbar-y {
  width: 11px;
}
.ps-y-rail:active {
  background: #eee;
  opacity: 1 !important;
}
.ps-y-rail:active > .ps__scrollbar-y {
  width: 11px;
}
</style>
