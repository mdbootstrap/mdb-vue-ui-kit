<template>
  <transition
    appear
    name="slide">
    <component v-show="show" :is="tag" :style="style">
      <img class="masonry-image" v-if="src" :src="src">
      <slot v-else></slot>
    </component>
  </transition>
</template>

<script>
const MasonryItem = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    order: {
      type: [String, Number],
      default: "" || 0
    },
    itemStyle: {
      type: Object
    },
    src: String
  },
  data() {
    return {
      small: false,
      medium: false,
      show: true
    };
  },
  computed: {
    style() {
      const styles = this.small ? {...this.itemStyle, "width": "100%"} : this.medium ? {...this.itemStyle, "width" : "50%"} : this.itemStyle;
      return {
        order: this.order,
        ...styles
      };
    },
    isResponsive() {
      return this.$parent.responsive;
    }
  },
  methods: {
    checkScreenSize() {
      if (window.innerWidth < 600) {
        this.small = true;
        this.medium = false;
      }
      else if (window.innerWidth < 1200) {
        this.medium = true;
        this.small = false;
      }
      else {
        this.small = false;
        this.medium = false;
      }
    }
  },
  mounted() {
    if (this.isResponsive) {
      this.checkScreenSize();
      window.addEventListener("resize", this.checkScreenSize);
    }
  },
 
  beforeDestroy() {
    if (this.isResponsive) {
      window.removeEventListener("resize", this.checkScreenSize);
    }
  },
  watch: {
    small(val, oldValue) {
      if (val !== oldValue) {
        this.show = false;
        setTimeout(() => {this.show = true;}, 300);
      }
    },
    medium(val, oldValue) {
      if (val !== oldValue) {
        this.show = false;
        setTimeout(() => {this.show = true;}, 300);
      }
    }
  }
};

export default MasonryItem;
export { MasonryItem as mdbMasonryItem };
</script>

<style scoped>
.masonry-with-columns div {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
}

.masonry-image {
  width: 100%;
}

.slide-enter-active {
  transition: all 0.8s ease;
}
.slide-leave-active {
  transition: all 0.8s ease;
}

.slide-enter {
  transform: translateX(10px);
  /* opacity: 0; */
}
</style>
