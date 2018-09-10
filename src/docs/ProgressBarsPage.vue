<template>
  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Progress Bar</strong></h4>
      <a href="https://mdbootstrap.com/vue/components/progress-bars/" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr class="mb-5" />
    <container class="mt-5">
      <h4 class="pb-2">Basic examples</h4>
      <progress-wrapper class="mt-2" :height="20">
        <progress-bar :value="0"></progress-bar>
      </progress-wrapper>
      <progress-wrapper class="mt-2" :height="20">
        <progress-bar :value="25" color="blue"></progress-bar>
      </progress-wrapper>
      <progress-wrapper class="mt-2" :height="20">
        <progress-bar :value="50" color="blue"></progress-bar>
      </progress-wrapper>
      <progress-wrapper class="mt-2" :height="20">
        <progress-bar :value="75" color="blue"></progress-bar>
      </progress-wrapper>
      <progress-wrapper class="mt-2" :height="20">
        <progress-bar :value="100" color="blue"></progress-bar>
      </progress-wrapper>
    </container>
  </container>
</template>

<script>
import { ProgressWrapper, ProgressBar, Container, Row, Fa  } from 'mdbvue';

export default {
  name: 'ProgressBarsPage',
  components: {
    ProgressWrapper,
    ProgressBar,
    Container,
    Row,
    Fa
  }
};
</script>

<style scoped>
</style>
