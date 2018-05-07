<template>
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
</template>

<script>
import { ProgressWrapper, ProgressBar, Container } from 'mdbvue';

export default {
  name: 'ProgressBarsPage',
  components: {
    ProgressWrapper,
    ProgressBar,
    Container
  }
};
</script>

<style scoped>
</style>
