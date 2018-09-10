<template>
  <container>
      <row class="mt-5 align-items-center justify-content-start">
        <h4 style="margin: 0" class="grey-text"><strong>Carousel</strong></h4>
        <a href="https://mdbootstrap.com/vue/advanced/carousel/" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
      </row>
      <hr />
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
    </container>
</template>

<script>
import { Carousel, CarouselItem, CarouselCaption, Row, Fa, Container } from 'mdbvue';

export default {
  name: 'CarouselPage',
  components: {
    Carousel,
    CarouselItem,
    CarouselCaption,
    Row,
    Fa,
    Container
  }
};
</script>

<style scoped>
</style>
