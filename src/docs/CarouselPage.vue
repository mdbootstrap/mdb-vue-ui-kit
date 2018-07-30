<template>
  <carousel :interval="8000" showControls showIndicators full>
    <carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" mask="black-light" alt="First slide">
      <carousel-caption title="Light mask" text="First text"></carousel-caption>
    </carousel-item>
    <carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" mask="black-strong" alt="Second slide">
      <carousel-caption title="Strong mask" text="Second text"></carousel-caption>
    </carousel-item>
    <carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" mask="black-slight" alt="Third slide">
      <carousel-caption title="Super light mask" text="Third text"></carousel-caption>
    </carousel-item>
  </carousel>
</template>

<script>
import { Carousel, CarouselItem, CarouselCaption } from 'mdbvue';

export default {
  name: 'CarouselPage',
  components: {
    Carousel,
    CarouselItem,
    CarouselCaption
  }
};
</script>

<style scoped>
</style>
