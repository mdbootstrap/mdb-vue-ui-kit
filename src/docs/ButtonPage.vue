<template>
  <div class="text-center mt-5">
    <btn color="primary" size="lg">Button 1</btn>
    <btn color="info" size="lg">Button 2</btn>
    <btn color="success" size="lg">Button 3</btn>
    <btn color="danger" size="lg">Button 4</btn>
    <btn color="warning" size="lg">Button 5</btn>
    <btn size="lg">Button 6</btn>
  </div>
</template>

<script>
import { Btn } from 'mdbvue';

export default {
  name: 'ButtonPage',
  components: {
    Btn
  }
};
</script>

<style scoped>
</style>
