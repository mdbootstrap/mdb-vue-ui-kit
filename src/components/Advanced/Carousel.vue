<template>
  <component :is="tag" :class="className">
    <carousel-navigation v-if="showControls && multi" :top="multi" :testimonial="testimonial" :leftIcon="leftIcon" :rightIcon="rightIcon" :floating="floating" :navClass="navClass" @changeSlide="handleChangeSlide"></carousel-navigation>
    <carousel-indicators v-if="showIndicators && !thumbnails">
      <carousel-indicator v-for="(item, index) in items" :key="index" :index="index" :active="active(index)" :indicatorClass="indicatorClass" @changeSlide="handleChangeSlide"/>
    </carousel-indicators>
    <carousel-inner v-if="touch" v-touch:swipe.left="slideLeft" v-touch:swipe.right="slideRight">
      <slot></slot>
    </carousel-inner>
    <carousel-inner v-else :active="page">
      <slot></slot>
    </carousel-inner>
    <carousel-indicators v-if="showIndicators && thumbnails">
      <carousel-indicator  v-for="(item, index) in items" :key="index" :index="index" :active="active(index)" :indicatorClass="indicatorClass" @changeSlide="handleChangeSlide" :src="thumbnailsSrc[index]" :indicatorStyle="indicatorStyle"/>
    </carousel-indicators>
    <carousel-navigation :testimonial="testimonial" v-if="showControls && !multi" @changeSlide="handleChangeSlide"></carousel-navigation>
  </component>
</template>

<script>
import classNames from 'classnames';
import CarouselNavigation from './CarouselNavigation';
import CarouselInner from './CarouselInner';
import CarouselIndicators from './CarouselIndicators';
import CarouselIndicator from './CarouselIndicator';

const Carousel ={
  components: {
    CarouselNavigation,
    CarouselInner,
    CarouselIndicators,
    CarouselIndicator
  },
  props: {
    tag: {
      type: String,
      default: "div"
    },
    interval: {
      type: [Number, Boolean],
      default: 10000
    },
    full: {
      type: Boolean,
      default: false
    },
    half: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    },
    multi: {
      type: Boolean,
      default: false
    },
    thumbnails: {
      type: Boolean,
      default: false
    },
    testimonial: {
      type: Boolean,
      default: false
    },
    showIndicators: {
      type: Boolean
    },
    showControls: {
      type: Boolean
    },
    slide: {
      type: Boolean
    },
    leftIcon: {
      type: String,
      default: 'chevron-left'
    },
    rightIcon: {
      type: String,
      default: 'chevron-right'
    },
    floating: {
      type: Boolean,
      default: true
    },
    navClass: {
      type: String
    },
    indicatorClass: {
      type: String
    },
    indicatorStyle: {
      type: [Object]
    },
    touch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      page: 0,
      items: [],
      thumbnailsSrc: []
    };
  },
  methods: {
    slideEffect() {
      let page = this.page;
      this.items.forEach(function(item, index) {
        let slideIndex = page - index;
        if (slideIndex < 0) {
          item.style.position = 'absolute';
          item.style.left = '100%';
        } else if (slideIndex > 0) {
          item.style.position = 'absolute';
          item.style.left = '-100%';
        } else {
          item.style.position = 'relative';
          item.style.left = 0;
        }
      });
    },
    changeSlide(index) {
      if (this.slide) {
        this.page = index;
        this.slideEffect();
      } 
      else {
        this.items[this.page].classList.remove('active');
        this.page = index;
        this.items[this.page].classList.add('active');
      }
     
    },
    slidePage(target) {
      if (target === "next") {
        if (this.page < this.itemsNumber) {
          this.changeSlide(this.page + 1);
        } else {
          this.changeSlide(0);
        }
      } else if (target === "prev") {
        if (this.page == 0) {
          this.changeSlide(this.itemsNumber);
        } else {
          this.changeSlide(this.page - 1);
        }
      } else {
        this.changeSlide(target);
      }
    },
    autoSlide() {
      if (this.interval) {
        this.startSlide = setInterval(() => {
          this.slidePage('next');
        }, this.interval);
      }
    },
    handleChangeSlide(showSlide) {
      this.slidePage(showSlide.slideIndex);
      clearInterval(this.startSlide);
      this.autoSlide();
    },
    active(index) {
      if (index == this.page) return true;
    },
    slideLeft() {
      this.slidePage('next');
    },
    slideRight() {
      this.slidePage('prev');
    },
  },
  mounted() {
    let items = [];
    let thumbnails = [];
    let itemsNumber = 0;
    this.$slots.default.forEach(function(slot){
      if (slot.elm.nodeType !== 3) {
        items.push(slot.elm);
        thumbnails.push(slot.componentInstance.src);
        itemsNumber++;
      }
    });
    this.items = items;
    this.itemsNumber = itemsNumber - 1;
    this.thumbnailsSrc = thumbnails;
    if (this.slide) {
      this.items.forEach(function(item, index) {
        item.classList.add('active', 'carousel-slide-item');
      });
      this.slideEffect();
    } else {
      this.items[this.page].classList.add('active');
    }
    this.autoSlide();
  },
  computed: {
    className() {
      return classNames(
        'carousel',
        this.multi ? 'carousel-multi-item' : 'carousel-fade',
        this.half && 'half',
        this.full && 'full',
        this.fade && 'carousel-fade',
        this.thumbnails && 'carousel-thumbnails',
        this.testimonial && 'testimonial-carousel'
      );
    }
  }
};

export default Carousel;
export { Carousel as mdbCarousel };
</script>

<style>
.carousel-inner {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.carousel-fade .carousel-item {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: block !important;
  opacity: 0;
  z-index: 0;
  transition: transform 0ms ease-in-out, opacity 0.8s ease-out;
}

.carousel-fade .carousel-item.active {
  position: relative;
  z-index: 1;
  opacity: 1;
}

.carousel-control-prev, .carousel-control-next, .carousel-item-prev, .carousel-item-next {
  position: absolute;
  z-index: 2;
}

.carousel-multi-item .carousel-slide-item {
  transition: left 0.5s;
  top: 0;
}

</style>

<style scoped>
.full, .full .carousel-item{
  height: 100% !important;
}

.half {
  height: 50%;
}
</style>
