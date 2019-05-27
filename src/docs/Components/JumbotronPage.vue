<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Jumbotron</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/jumbotron/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Jumbotron with a background image</h4>
      <section>
        <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)">
          <div class="text-white text-center py-5 px-4 my-5">
            <div>
              <h2 class="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Create your beautiful website with MDBootstrap</strong></h2>
              <p class="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
              </p>
              <mdb-btn outline="white" size="md" icon="clone">View project</mdb-btn>
            </div>
          </div>
        </mdb-card>
      </section>
    </section>
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-jumbotron class="mb-0">
          <h1 class="display-4">Hello, world!</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-4" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
          <mdb-btn color="primary" size="lg">Learn more</mdb-btn>
        </mdb-jumbotron>
      </section>
    </section>
    <section class="demo-section">
      <h4>Fluid jumbotron</h4>
      <section>
        <mdb-jumbotron fluid class="mb-0">
          <mdb-container>
            <h2 class="display-4">Fluid jumbotron</h2>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </mdb-container>
        </mdb-jumbotron>
      </section>
    </section>
    <section class="demo-section">
      <h4>Jumbotron with image</h4>
      <section>
        <mdb-jumbotron class="mb-0 text-center">
          <mdb-card-title class="pb-2 h4"><strong>My adventure</strong></mdb-card-title>
          <mdb-view class="my-4" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="">
            <a><mdb-mask waves overlay="white-slight"/></a>        
          </mdb-view>
          <h5 class="indigo-text h5 mb-4">Photography</h5>
          <p class="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
          <a class="fa-lg p-2 m-2 li-ic"><mdb-icon fab icon="linkedin-in" class="grey-text" /></a>
          <a class="fa-lg p-2 m-2 tw-ic"><mdb-icon fab icon="twitter" class="grey-text" /></a>
          <a class="fa-lg p-2 m-2 fb-ic"><mdb-icon fab icon="facebook-f" class="grey-text" /></a>
        </mdb-jumbotron>
      </section>
    </section>
    <section class="demo-section">
      <h4>Jumbotron with buttons</h4>
      <section>
        <mdb-jumbotron class="mb-0 text-center">
          <h2 class="card-title h2">Material Design for Bootstrap</h2>
          <p class="blue-text my-4 font-weight-bold">Powerful and free Material Design UI KIT</p>
          <mdb-row class="d-flex justify-content-center">
            <mdb-col xl="7" class="pb-2">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.</p>
            </mdb-col>
          </mdb-row>
          <hr class="my-4">
          <mdb-btn color="blue" icon="gem" iconRight>Buy now</mdb-btn>
          <mdb-btn outline="primary" icon="download" iconRight darkWaves>Download</mdb-btn>
        </mdb-jumbotron>
      </section>
    </section>
    <section class="demo-section">
      <h4>Jumbotron with image overlay</h4>
      <section>
        <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Others/forest2.jpg)">
          <div class="text-white text-center rgba-stylish-strong py-5 px-4">
            <div class="py-5">
              <h5 class="h5 orange-text"><i class="fas fa-camera-retro"></i> Photography</h5>
              <h2 class="card-title h2 my-4 py-2">Jumbotron with image overlay</h2>
              <p class="mb-4 pb-2 px-md-5 mx-md-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati vero aliquid libero doloribus ad, unde tempora maiores, ullam, modi qui quidem minima debitis perferendis vitae cumque et quo impedit.</p>
              <mdb-btn tag="a" gradient="peach" icon="clone">View project</mdb-btn>
            </div>
          </div>
        </mdb-card>
      </section>
    </section>
    <section class="demo-section">
      <h4>Jumbotron with news post</h4>
      <section>
        <mdb-jumbotron class="mb-0 text-center hoverable p-4">
          <mdb-row>
            <mdb-col md="4" offsetMd="1" class="m-3">
              <mdb-view src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" alt="Sample image for first version of blog listing">
                <a><mdb-mask waves overlay="white-slight"/></a>
              </mdb-view>
            </mdb-col>
            <mdb-col md="7" class="text-md-left ml-3 mt-3">
              <a href="#!" class="green-text">
                <h6 class="h6 pb-1"><mdb-icon icon="desktop" class="pr-1"/> Work</h6>
              </a>
              <h4 class="h4 mb-4">This is title of the news</h4>
              <p class="font-weight-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
              <p class="font-weight-normal">by <a><strong>Carine Fox</strong></a>, 19/08/2016</p>
              <mdb-btn color="success">Read more</mdb-btn>
            </mdb-col>
          </mdb-row>
        </mdb-jumbotron>
      </section>
    </section>
    <section class="demo-section">
      <h4>Dark background</h4>
      <section>
        <mdb-jumbotron class="mb-0 text-center mdb-color lighten-2 white-text">
          <h2 class="card-title h2">Material Design for Bootstrap</h2>
          <p class="my-4 font-weight-bold">Powerful and free Material Design UI KIT</p>
          <mdb-row class="d-flex justify-content-center">
            <mdb-col xl="7" class="pb-2">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.</p>
            </mdb-col>
          </mdb-row>
          <hr class="my-4 rgba-white-light">
          <div class="pt-2">
            <mdb-btn outline="white" icon="gem" iconRight>Buy now</mdb-btn>
            <mdb-btn outline="white" icon="download" iconRight>Download</mdb-btn>
          </div>
        </mdb-jumbotron>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbJumbotron, mdbBtn, mdbCard, mdbCardBody, mdbCardTitle, mdbView, mdbMask, mdbContainer, mdbIcon, mdbRow, mdbCol } from 'mdbvue';

export default {
  name: 'JumbotronPage',
  components: {
    mdbJumbotron,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbView,
    mdbMask,
    mdbContainer,
    mdbIcon,
    mdbRow,
    mdbCol
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
