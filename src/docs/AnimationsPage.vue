<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">Animations</h4>
      <a
        href="https://mdbootstrap.com/docs/vue/css/animations/"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2"/>Docs
      </a>
    </mdb-row>
    <hr>
    <section class="demo-section">
      <h4>Basic example</h4>
      <section class="img-container">
        <img
          src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png"
          alt="Transparent MDB Logo"
          id="animated-img"
          class="animated bounce"
        >
      </section>
    </section>
    <section class="demo-section">
      <h4>Looped animation</h4>
      <section>
        <img
          src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png"
          alt="Transparent MDB Logo"
          id="animated-img"
          class="animated rubberBand infinite loop-container"
        >
      </section>
    </section>
    <section class="demo-section" >
      <h4>Animations activated on scroll</h4>
      <section>
        <div class="mb-5">
          <mdb-row class="mb-4">
            <mdb-col>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                alt="Sample image"
                class="img-fluid"
                v-animateOnScroll="'bounceInLeft'"
              >
            </mdb-col>
            <mdb-col>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
                alt="Sample image"
                class="img-fluid"
                v-animateOnScroll="'tada'"
              >
            </mdb-col>
            <mdb-col>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                alt="Sample image"
                class="img-fluid"
                v-animateOnScroll="'fadeInLeft'"
              >
            </mdb-col>
          </mdb-row>
          <mdb-row class="mb-4">
            <mdb-col>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                alt="Sample image"
                class="img-fluid"
                v-animateOnScroll="'fadeInRight'"
              >
            </mdb-col>
            <mdb-col>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg"
                alt="Sample image"
                class="img-fluid"
                v-animateOnScroll="'fadeIn'"
              >
            </mdb-col>
            <mdb-col>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                alt="Sample image"
                class="img-fluid"
                v-animateOnScroll="'rollIn'"
              >
            </mdb-col>
          </mdb-row>
        </div>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbIcon,
  animateOnScroll
} from "mdbvue";

export default {
  name: "AnimationsPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  },
  directives: {
    animateOnScroll
  }
};
</script>

<style scoped>
.img-container {
  padding: 5rem;
  display: flex;
  justify-content: center;
}
.loop-container {
  padding: 3rem;
}

</style>
