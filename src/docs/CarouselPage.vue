<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Carousel</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/carousel/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-carousel :interval="8000" showControls showIndicators full>
      <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" mask="black-light" alt="First slide">
        <mdb-carousel-caption title="Light mask" text="First text"></mdb-carousel-caption>
      </mdb-carousel-item>
      <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" mask="black-strong" alt="Second slide">
        <mdb-carousel-caption title="Strong mask" text="Second text"></mdb-carousel-caption>
      </mdb-carousel-item>
      <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" mask="black-slight" alt="Third slide">
        <mdb-carousel-caption title="Super light mask" text="Third text"></mdb-carousel-caption>
      </mdb-carousel-item>
    </mdb-carousel>
  </mdb-container>
</template>

<script>
import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbRow, mdbIcon, mdbContainer } from 'mdbvue';

export default {
  name: 'CarouselPage',
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbRow,
    mdbIcon,
    mdbContainer
  }
};
</script>

<style scoped>
</style>
