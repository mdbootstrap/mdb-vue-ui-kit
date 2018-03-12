<template>
  <carousel :interval="8000" class="mt-5 mx-5">
    <carousel-indicators>
      <carousel-indicator :index="0" :class="{active: show[0]}"></carousel-indicator>
      <carousel-indicator :index="1" :class="{active: show[1]}"></carousel-indicator>
      <carousel-indicator :index="2" :class="{active: show[2]}"></carousel-indicator>
    </carousel-indicators>
    <carousel-inner>
      <carousel-item :class="{active: show[0]}" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" alt="First slide">
        <carousel-caption title="Carousel Caption" text="First text"></carousel-caption>
      </carousel-item>
      <carousel-item :class="{active: show[1]}" src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg" alt="Seccond slide">
        <carousel-caption title="Carousel Caption" text="Second text"></carousel-caption>
      </carousel-item>
      <carousel-item :class="{active: show[2]}" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Third slide">
        <carousel-caption title="Carousel Caption" text="Third text"></carousel-caption>
      </carousel-item>
    </carousel-inner>
    <carousel-navigation></carousel-navigation>
  </carousel>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import CarouselIndicators from '../components/CarouselIndicators.vue';
import CarouselIndicator from '../components/CarouselIndicator.vue';
import CarouselInner from '../components/CarouselInner.vue';
import CarouselItem from '../components/CarouselItem.vue';
import CarouselNavigation from '../components/CarouselNavigation.vue';
import CarouselCaption from '../components/CarouselCaption.vue';
import ViewWrapper from '../components/ViewWrapper.vue';
import Mdmask from '../components/Mdmask.vue';

export default {
  name: 'CarouselPage',
  components: {
    Carousel,
    CarouselIndicators,
    CarouselIndicator,
    CarouselInner,
    CarouselItem,
    CarouselNavigation,
    CarouselCaption,
    ViewWrapper,
    Mdmask
  },
  data() {
    return {
      page: 0,
      items: '',
      interval: 10000,
      show: { 0: true, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false }
    };
  },
  methods: {
    slidePage(target) {
      if (target === "next") {
        if (this.page < this.items) {
          this.show[this.page] = false;
          this.page++;
          this.show[this.page] = true;
        } else {
          this.show[this.page] = false;
          this.page = 0;
          this.show[this.page] = true;
        }
      } else if (target === "prev") {
        if (this.page == 0) {
          this.show[this.page] = false;
          this.page = this.items;
          this.show[this.page] = true;
        } else {
          this.show[this.page] = false;
          this.page--;
          this.show[this.page] = true;
        }
      } else {
        this.show[this.page] = false;
        this.page = target;
        this.show[this.page] = true;
      }
    },
    autoSlide() {
      this.slide = setInterval(() => {
        this.slidePage('next');
      }, this.interval);
    }
  },
  created() {
    this.$on('changeSlide', function(showSlide) {
      this.slidePage(showSlide.slideIndex);
      clearInterval(this.slide);
      this.autoSlide();
    });
    this.$on('defineInterval', function(defineInterval) {
      this.interval = defineInterval.newInterval;
    });
  },
  mounted() {
    this.items = this.$el.querySelectorAll('.carousel-item').length - 1;
    this.autoSlide();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel {
  overflow: hidden;
}

.carousel-inner {
  position: relative;
  overflow: hidden;
}

.carousel-item {
  display: block !important;
  visibility: hidden;
  height: 0;
  opacity: 0;
  transition: transform 0ms ease-in-out, opacity .6s ease-in;
  transform: translate3d(0, 0, 0) !important;
}

.carousel-item.active {
  opacity: 1;
  left: auto;
  height: auto;
  visibility: visible;
  transform: translate3d(0, 0, 0) !important;
}
</style>
