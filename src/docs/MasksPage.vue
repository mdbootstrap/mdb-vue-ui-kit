<template>
  <container class="mt-5">
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Masks</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/css/masks/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr />
    <container>
        <row class="mt-5">
          <column col="12" sm="6" class="py-2">
            <view-wrapper src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
              <md-mask flex-center waves text="waves"></md-mask>
            </view-wrapper>
          </column>
          <column col="12" sm="6" class="py-2">
            <view-wrapper src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
              <md-mask flex-center pattern="3" text="pattern = &quot;3&quot;"></md-mask>
            </view-wrapper>
          </column>
          <column col="12" sm="6">
            <view-wrapper src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
              <md-mask flex-center waves overlay="blue-strong" text="overlay = &quot;blue-strong&quot; waves"></md-mask>
            </view-wrapper>
          </column>
          <column col="12" sm="6">
            <view-wrapper src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
              <md-mask flex-center waves pattern="5" text="pattern = &quot;5&quot; waves"></md-mask>
            </view-wrapper>
          </column>
        </row>
    </container>
  </container>
</template>

<script>
import { ViewWrapper, MdMask, Container, Row, Column, Fa } from 'mdbvue';

export default {
  name: 'MasksPage',
  components: {
    ViewWrapper,
    MdMask,
    Container,
    Row,
    Column,
    Fa
  }
};
</script>

<style scoped>
</style>
