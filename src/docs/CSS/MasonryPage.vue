<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Masonry</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/layout/masonry/?utm_source=DemoApp&utm_medium=MDBVueFree" class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a>
    </mdb-row>
    <hr class="mb-5"/>
    <section class="demo-section">
      <h4>Basic layout</h4>
      <section>
        <mdb-masonry :numCols="3" :maxHeight="1000">
          <mdb-masonry-item :order="0" :itemStyle="{'height': '163px'}">1</mdb-masonry-item>
          <mdb-masonry-item :order="1" :itemStyle="{'height': '495px'}">2</mdb-masonry-item>
          <mdb-masonry-item :order="2" :itemStyle="{'height': '120px'}">3</mdb-masonry-item>
          <mdb-masonry-item :order="0" :itemStyle="{'height': '309px'}">4</mdb-masonry-item>
          <mdb-masonry-item :order="1" :itemStyle="{'height': '317px'}">5</mdb-masonry-item>
          <mdb-masonry-item :order="2" :itemStyle="{'height': '277px'}">6</mdb-masonry-item>
          <mdb-masonry-item :order="0" :itemStyle="{'height': '339px'}">7</mdb-masonry-item>
          <mdb-masonry-item :order="1" :itemStyle="{'height': '491px'}">8</mdb-masonry-item>
          <mdb-masonry-item :order="2" :itemStyle="{'height': '281px'}">9</mdb-masonry-item>
          <mdb-masonry-item :order="0" :itemStyle="{'height': '499px'}">10</mdb-masonry-item>
          <mdb-masonry-item :order="1" :itemStyle="{'height': '490px'}">11</mdb-masonry-item>
          <mdb-masonry-item :order="2" :itemStyle="{'height': '289px'}">12</mdb-masonry-item>
          <mdb-masonry-item :order="0" :itemStyle="{'height': '356px'}">13</mdb-masonry-item>
          <mdb-masonry-item :order="1" :itemStyle="{'height': '406px'}">14</mdb-masonry-item>
          <mdb-masonry-item :order="2" :itemStyle="{'height': '196px'}">15</mdb-masonry-item>
        </mdb-masonry>
      </section>
    </section>
    <section class="demo-section">
      <h4>Horizontal option</h4>
      <section>
        <mdb-masonry horizontal>
          <mdb-masonry-item :itemStyle="{'width': '222px'}">1</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'width': '102px'}">2</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'width': '155px'}">3</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'width': '365px'}">4</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'width': '132px'}">5</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'width': '106px'}">6</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'width': '199px'}">7</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'width': '164px'}">8</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'width': '424px'}">9</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'width': '467px'}">10</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'width': '350px'}">11</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'width': '296px'}">12</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'width': '440px'}">13</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'width': '110px'}">14</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'width': '413px'}">15</mdb-masonry-item>
        </mdb-masonry>
      </section>
    </section>
    <section class="demo-section">
      <h4>Flexbox option</h4>
      <section>
        <mdb-masonry flexbox :maxHeight="1000">
          <mdb-masonry-item :itemStyle="{'height': '222px'}">1</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'height': '102px'}">2</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'height': '155px'}">3</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'height': '365px'}">4</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'height': '132px'}">5</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'height': '106px'}">6</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'height': '199px'}">7</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'height': '164px'}">8</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'height': '424px'}">9</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'height': '467px'}">10</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'height': '350px'}">11</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'height': '296px'}">12</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'height': '440px'}">13</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'height': '110px'}">14</mdb-masonry-item>
          <mdb-masonry-item :itemStyle="{'height': '413px'}">15</mdb-masonry-item>
        </mdb-masonry>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbMasonry, mdbMasonryItem, mdbContainer, mdbRow, mdbIcon } from 'mdbvue';
export default {
  name: 'MansonryPage',
  components: {
    mdbMasonry,
    mdbMasonryItem,
    mdbContainer,
    mdbRow,
    mdbIcon
  }
};
</script>

<style scoped>
.masonry-with-columns div {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00997B;
  color: white;
  margin: 0.5rem;
  font-weight: 900;
  font-size: 2rem; 
} 
.masonry-horizontal div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background: #9B1B30;
  color: white;
  margin: 0.5rem;
  font-weight: 900;
  font-size: 2rem;
}
.masonry-with-flex div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  background: #975A58;
  color: white;
  margin: 0.5rem;
  font-weight: 900;
  font-size: 2rem;
}
</style>