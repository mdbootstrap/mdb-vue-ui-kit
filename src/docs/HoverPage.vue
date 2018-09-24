<template>
  <container class="mt-5">
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Hover Effects</strong></h4>
      <a href="https://mdbootstrap.com/hover-effects/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr />
    <container fluid class="my-5">
      <row class="mx-5">
        <column lg="4" md="12">
          <view-wrapper hover src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg">
            <md-mask overlay="red-strong" flexCenter text="Strong overlay"></md-mask>
          </view-wrapper>
        </column>
        <column lg="4" md="12">
          <view-wrapper hover src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg">
            <md-mask overlay="red-light" flexCenter text="Light overlay"></md-mask>
          </view-wrapper>
        </column>
        <column lg="4" md="12">
          <view-wrapper hover src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg">
            <md-mask overlay="red-slight" flexCenter text="Slight overlay"></md-mask>
          </view-wrapper>
        </column>
      </row>
      <row class="mx-5 mt-5">
        <column md="6">
          <view-wrapper zoom hover src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg">
            <md-mask flexCenter text="Zoom effect"></md-mask>
          </view-wrapper>
        </column>
        <column md="6" class="text-center">
          <h4 class="text-center">Shadow effect</h4>
          <img class="img-fluid rounded-circle hoverable" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(132).jpg" alt="shadow effect"/>
        </column>
      </row>
    </container>
  </container>
</template>

<script>
import { Container, Row, Column, ViewWrapper, MdMask, Fa } from 'mdbvue';

export default {
  name: 'GridPage',
  components: {
    Container,
    Row,
    Column,
    ViewWrapper,
    MdMask,
    Fa
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
