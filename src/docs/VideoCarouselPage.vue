<template>
  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Video Carousel</strong></h4>
      <a href="https://mdbootstrap.com/vue/advanced/carousel/#video/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr class="mb-4" />
    <carousel :interval="8000" showControls showIndicators full>
      <carousel-item video src="https://mdbootstrap.com/img/video/Tropical.mp4" alt="First slide" auto loop>
      </carousel-item>
      <carousel-item video src="https://mdbootstrap.com/img/video/forest.mp4" alt="Second slide" auto loop>
      </carousel-item>
      <carousel-item video src="https://mdbootstrap.com/img/video/Agua-natural.mp4" alt="Third slide" auto loop>
      </carousel-item>
    </carousel>
  </container>
</template>

<script>
import { Carousel, CarouselItem, CarouselCaption, Container, Row, Fa } from 'mdbvue';

export default {
  name: 'VideoCarouselPage',
  components: {
    Carousel,
    CarouselItem,
    CarouselCaption,
    Container,
    Row,
    Fa
  }
};
</script>

<style scoped>
</style>
