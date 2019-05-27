<template>
  <mdb-container class="mt-5">
    <section class="demo-section">
      <mdb-row class="mt-5 align-items-center justify-content-start">
        <h4 class="demo-title"><strong>Tooltips</strong></h4>
        <a href="https://mdbootstrap.com/docs/vue/advanced/tooltips/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
      </mdb-row>
      <hr />
      <div class="mt-5 pt-5 d-flex justify-content-center">
        <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
          <span slot="tip">
            Who's there?
          </span>
          <mdb-btn slot="reference" color="primary">
            Knock Knock
          </mdb-btn>
        </mdb-tooltip>
      </div>
    </section>
    <section class="demo-section">
      <mdb-row class="mt-5 align-items-center justify-content-start">
        <h4 class="demo-title"><strong>Custom HTML</strong></h4>
        <a href="https://mdbootstrap.com/docs/vue/advanced/tooltips/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
      </mdb-row>
      <hr />
      <div class="mt-5 pt-5 d-flex justify-content-center">
        <mdb-tooltip trigger="hover" :options="{placement: 'right'}" :visible-arrow="false">
          <div slot="tip" class="card-container">
            <mdb-card testimonial>
              <mdb-card-up color="indigo" class="lighten-1"></mdb-card-up>
              <mdb-card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle"></mdb-card-avatar>
              <mdb-card-body>
                <mdb-card-title>Anna Doe</mdb-card-title>
                <hr />
                <p>
                  <mdb-icon icon="quote-left" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                  adipisci</p>
              </mdb-card-body>
            </mdb-card>
          </div>
          <mdb-btn slot="reference" color="primary">
            Hover over me
          </mdb-btn>
        </mdb-tooltip>
      </div>
    </section>
  </mdb-container>
</template>

<script>
import { mdbTooltip, mdbContainer, mdbBtn, mdbIcon, mdbRow, mdbCard, mdbCardUp, mdbCardAvatar, mdbCardBody, mdbCardTitle  } from 'mdbvue';

export default {
  name: 'TooltipPage',
  components: {
    mdbTooltip,
    mdbContainer,
    mdbBtn,
    mdbIcon,
    mdbRow,
    mdbCard,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardBody,
    mdbCardTitle,
  },
};
</script>
<style scoped>
  .card-container {
    max-width: 20vw;
  }
  .card {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>