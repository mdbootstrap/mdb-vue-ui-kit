<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="grey-text"><strong>Cards </strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/cards/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <mdb-row class="mt-5">
      <mdb-col sm="4">
        <mdb-card>
          <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap" waves></mdb-card-image>
          <mdb-card-body>
            <mdb-card-title>Card with waves effect</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Button</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col sm="4">
        <mdb-card>
          <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></mdb-card-image>
          <mdb-card-body>
            <mdb-card-title>Basic card</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Button</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col sm="4">
        <mdb-card>
          <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%287%29.jpg" alt="Card image cap" waves></mdb-card-image>
          <mdb-card-body>
            <mdb-card-title>Card with waves effect</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Button</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
    <hr class="my-5"/>
    <h2>Card groups</h2>
    <mdb-row>
      <mdb-card-group>
        <mdb-card>
          <mdb-view hover>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Card image cap"></mdb-card-image>
            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Read more</mdb-btn>
          </mdb-card-body>
        </mdb-card>
        <mdb-card>
          <mdb-view hover>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="Card image cap"></mdb-card-image>
            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Read more</mdb-btn>
          </mdb-card-body>
        </mdb-card>
        <mdb-card>
          <mdb-view hover>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg" alt="Card image cap"></mdb-card-image>
            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Read more</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-card-group>
    </mdb-row>
    <hr class="my-5"/>
    <h2>Card decks</h2>
    <mdb-row>
      <mdb-card-group deck>
        <mdb-card>
          <mdb-view hover>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"></mdb-card-image>
            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Read more</mdb-btn>
          </mdb-card-body>
        </mdb-card>
        <mdb-card>
          <mdb-view hover>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap"></mdb-card-image>
            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Read more</mdb-btn>
          </mdb-card-body>
        </mdb-card>
        <mdb-card>
          <mdb-view hover>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap"></mdb-card-image>
            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Read more</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-card-group>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbView, mdbMask, mdbCardGroup, mdbIcon } from 'mdbvue';

export default {
  name: 'CardPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbCardGroup,
    mdbIcon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    margin: 0;
  }

</style>
