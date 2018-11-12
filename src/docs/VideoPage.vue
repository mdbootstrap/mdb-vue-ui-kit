<template>
  <mdb-container class="text-center mt-5">
    <mdb-row class="mt-5">
      <h4 class="grey-text"><strong>Video </strong></h4>
      <a href="https://mdbootstrap.com/plugins/vue/video/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <h4 class="my-4 text-left">Responsive video</h4>
    <div class="embed-responsive embed-responsive-21by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&origin=https%3A%2F%2Fmdbootstrap.com"></iframe>
    </div>
    <mdb-row>
      <mdb-col md="6">
        <h4 class="my-4 text-left">YouTube Iframe</h4>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
        </div>
      </mdb-col>
      <mdb-col md="6">
        <h4 class="my-4 text-left">Vimeo Iframe</h4>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/137857207" allowfullscreen></iframe>
        </div>
      </mdb-col>
    </mdb-row>
    <h4 class="my-4 text-left">Video carousel</h4>
    <mdb-carousel :interval="8000" showControls showIndicators full>
      <mdb-carousel-item video src="https://mdbootstrap.com/img/video/Lines.mp4" mask="black-light" alt="First slide" auto loop>
        <mdb-carousel-caption title="Light mask"></mdb-carousel-caption>
      </mdb-carousel-item>
      <mdb-carousel-item video src="https://mdbootstrap.com/img/video/animation-intro.mp4" mask="black-slight" alt="Second slide" auto loop>
        <mdb-carousel-caption title="Super light mask"></mdb-carousel-caption>
      </mdb-carousel-item>
      <mdb-carousel-item video src="https://mdbootstrap.com/img/video/Nature-Sunset.mp4" mask="black-strong" alt="Third slide" auto loop>
        <mdb-carousel-caption title="Strong mask"></mdb-carousel-caption>
      </mdb-carousel-item>
    </mdb-carousel>
    <h4 class="my-4 text-left">Video with autoplay option</h4>
    <video class="video-fluid z-depth-1" autoplay loop controls muted>
      <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
    </video>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbCarousel, mdbCarouselItem, mdbCarouselCaption } from 'mdbvue';

export default {
  name: 'VideoPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    margin: 0;
  }

</style>
