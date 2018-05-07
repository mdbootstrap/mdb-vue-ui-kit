<template>
  <carousel :interval="8000" class="mt-5 mx-5" @defineInterval="handleIntervalChange" full>
    <carousel-indicators>
      <carousel-indicator :index="0" :class="{active: show[0]}" @changeSlide="handleChangeSlide"></carousel-indicator>
      <carousel-indicator :index="1" :class="{active: show[1]}" @changeSlide="handleChangeSlide"></carousel-indicator>
      <carousel-indicator :index="2" :class="{active: show[2]}" @changeSlide="handleChangeSlide"></carousel-indicator>
    </carousel-indicators>
    <carousel-inner>
      <carousel-item :class="{active: show[0]}" video src="https://mdbootstrap.com/img/video/Tropical.mp4" alt="First slide" auto loop>
      </carousel-item>
      <carousel-item :class="{active: show[1]}" video src="https://mdbootstrap.com/img/video/forest.mp4" alt="Second slide" auto loop>
      </carousel-item>
      <carousel-item :class="{active: show[2]}" video src="https://mdbootstrap.com/img/video/Agua-natural.mp4" alt="Third slide" auto loop>
      </carousel-item>
    </carousel-inner>
    <carousel-navigation @changeSlide="handleChangeSlide"></carousel-navigation>
  </carousel>
</template>

<script>
import { Carousel, CarouselIndicators, CarouselIndicator, CarouselInner, CarouselItem, CarouselNavigation, CarouselCaption, ViewWrapper, MdMask } from 'mdbvue';

export default {
  name: 'VideoCarouselPage',
  components: {
    Carousel,
    CarouselIndicators,
    CarouselIndicator,
    CarouselInner,
    CarouselItem,
    CarouselNavigation,
    CarouselCaption,
    ViewWrapper,
    MdMask
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
    },
    handleChangeSlide(showSlide) {
      this.slidePage(showSlide.slideIndex);
      clearInterval(this.slide);
      this.autoSlide();
    },
    handleIntervalChange(defineInterval) {
      this.interval = defineInterval.newInterval;
    }
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
