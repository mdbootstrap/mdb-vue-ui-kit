<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Video Carousel</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/carousel/#video/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />
    <mdb-carousel :interval="8000" showControls showIndicators full>
      <mdb-carousel-item video src="https://mdbootstrap.com/img/video/Tropical.mp4" alt="First slide" auto loop/>
      <mdb-carousel-item video src="https://mdbootstrap.com/img/video/forest.mp4" alt="Second slide" auto loop/>
      <mdb-carousel-item video src="https://mdbootstrap.com/img/video/Agua-natural.mp4" alt="Third slide" auto loop/>
    </mdb-carousel>
  </mdb-container>
</template>

<script>
import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbContainer, mdbRow, mdbIcon } from 'mdbvue';

export default {
  name: 'VideoCarouselPage',
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbContainer,
    mdbRow,
    mdbIcon
  }
};
</script>

<style scoped>
</style>
