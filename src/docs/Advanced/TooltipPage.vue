<template>
  <mdb-container class="mt-5">
    <section class="demo-section">
      <mdb-row class="mt-5 align-items-center justify-content-start">
        <h4 class="demo-title">
          <strong>Tooltips</strong>
        </h4>
        <a
          href="https://mdbootstrap.com/docs/vue/advanced/tooltips/?utm_source=DemoApp&utm_medium=MDBVueFree"
          waves-fixed
          class="border grey-text px-2 border-light rounded ml-2"
          target="_blank"
        >
          <mdb-icon icon="graduation-cap" class="mr-2" />Docs
        </a>
      </mdb-row>
    </section>
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <div class="mt-5 pt-5 d-flex justify-content-center">
          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
            <span slot="tip">Who's there?</span>
            <mdb-btn slot="reference" color="primary">Knock Knock</mdb-btn>
          </mdb-tooltip>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Custom HTML</h4>
      <section>
        <div class="mt-5 pt-5 d-flex justify-content-center">
          <mdb-tooltip trigger="click" :options="{placement: 'right'}" :maxWidth="400">
            <div slot="tip" class="card-container">
              <mdb-card class="m-1">
                <mdb-view hover>
                  <a href="#!">
                    <mdb-card-image
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
                      alt="Card image cap"
                    ></mdb-card-image>
                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                  </a>
                </mdb-view>
                <mdb-card-body>
                  <mdb-card-title>Custom content</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </div>
            <mdb-btn slot="reference" color="primary">Click me</mdb-btn>
          </mdb-tooltip>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Hidden arrow</h4>
      <section>
        <div class="mt-5 pt-5 d-flex justify-content-center">
          <mdb-tooltip trigger="hover" :options="{placement: 'top'}" :visible-arrow="false">
            <span slot="tip">Tooltip</span>
            <mdb-btn slot="reference" color="primary">Hover over me</mdb-btn>
          </mdb-tooltip>
        </div>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbTooltip,
  mdbContainer,
  mdbBtn,
  mdbIcon,
  mdbRow,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardImage,
  mdbCardText,
  mdbMask,
  mdbView
} from "mdbvue";

export default {
  name: "TooltipPage",
  components: {
    mdbTooltip,
    mdbContainer,
    mdbBtn,
    mdbIcon,
    mdbRow,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardImage,
    mdbCardText,
    mdbMask,
    mdbView
  }
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