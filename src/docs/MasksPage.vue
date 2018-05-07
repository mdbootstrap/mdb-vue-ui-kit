<template>
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
</template>

<script>
import { ViewWrapper, MdMask, Container, Row, Column } from 'mdbvue';

export default {
  name: 'MasksPage',
  components: {
    ViewWrapper,
    MdMask,
    Container,
    Row,
    Column
  }
};
</script>

<style scoped>
</style>
