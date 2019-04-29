<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">Stretched Link </h4>
      <a href="https://mdbootstrap.com/docs/vue/utilities/stretched-link/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Card with stretched link</h4>
      <section>
        <mdb-col md="4">
          <mdb-card>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>Basic card</mdb-card-title>
              <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
              <mdb-stretched-link href="#!" class="stretched-link">Go somewhere</mdb-stretched-link>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </section>
    </section>
    <section class="demo-section">
      <h4>Media with stretched link</h4>
      <section>
         <mdb-media class="position-relative">
          <mdb-media-image src="https://mdbootstrap.com/img/Photos/Others/placeholder4.jpg" class="d-flex mr-3" alt="Generic placeholder image" />
          <mdb-media-body>
            <h5 class="mt-0 font-weight-bold">Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
            congue felis in faucibus.
          </mdb-media-body>
          <mdb-stretched-link href="#!" class="stretched-link">Go somewhere</mdb-stretched-link>
        </mdb-media>
      </section>
    </section>
    <section class="demo-section">
      <h4>Columns with stretched link</h4>
      <section>
        <mdb-row>
          <mdb-col md="6">
            <img class="w-100" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="image">
          </mdb-col>
          <mdb-col>
            <h5 class="mt-0">Columns with stretched link</h5>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus
              odio,
              vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
              Donec
              lacinia congue felis in faucibus.</p>
            <mdb-stretched-link href="#!" class="stretched-link">Go somewhere</mdb-stretched-link>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
  </mdb-container>
</template>

<script>
  import { mdbContainer, mdbCard, mdbIcon, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbStretchedLink, mdbCol, mdbRow, mdbMedia, mdbMediaImage, mdbMediaBody } from 'mdbvue';

  export default {
    name: 'StretchedLinkPage',
    components: {
      mdbContainer,
      mdbCol,
      mdbRow,
      mdbCard,
      mdbCardImage,
      mdbCardBody,
      mdbCardTitle,
      mdbCardText,
      mdbBtn,
      mdbStretchedLink,
      mdbMedia,
      mdbMediaImage,
      mdbMediaBody, 
      mdbIcon
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
