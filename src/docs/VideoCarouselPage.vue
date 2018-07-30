<template>
  <carousel :interval="8000" showControls showIndicators full>
    <carousel-item video src="https://mdbootstrap.com/img/video/Tropical.mp4" alt="First slide" auto loop>
    </carousel-item>
    <carousel-item video src="https://mdbootstrap.com/img/video/forest.mp4" alt="Second slide" auto loop>
    </carousel-item>
    <carousel-item video src="https://mdbootstrap.com/img/video/Agua-natural.mp4" alt="Third slide" auto loop>
    </carousel-item>
  </carousel>
</template>

<script>
import { Carousel, CarouselItem, CarouselCaption } from 'mdbvue';

export default {
  name: 'VideoCarouselPage',
  components: {
    Carousel,
    CarouselItem,
    CarouselCaption
  }
};
</script>

<style scoped>
</style>
