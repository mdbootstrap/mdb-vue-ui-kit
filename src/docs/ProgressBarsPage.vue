<template>
  <div class="container">
    <progress-wrapper>
      <progress-bar :value="0"></progress-bar>
    </progress-wrapper>
    <progress-wrapper>
      <progress-bar :value="25" color="indigo" striped animated>25%</progress-bar>
    </progress-wrapper>
    <progress-wrapper>
      <progress-bar :value="50" color="warning" striped animated>50%</progress-bar>
    </progress-wrapper>
    <progress-wrapper>
      <progress-bar :value="75" color="info" striped animated>75%</progress-bar>
    </progress-wrapper>
    <progress-wrapper>
      <progress-bar :value="100" color="danger" striped animated>100%</progress-bar>
    </progress-wrapper>
  </div>
</template>

<script>
import ProgressWrapper from '../components/ProgressWrapper.vue';
import ProgressBar from '../components/ProgressBar.vue';

export default {
  name: 'ProgressBarsPage',
  components: {
    ProgressWrapper,
    ProgressBar
  }
};
</script>

<style scoped>
</style>
