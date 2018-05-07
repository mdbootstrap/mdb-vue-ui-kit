<template>
  <div class="text-center mt-5">
    <h4 class="pb-2">Basic example</h4>
    <btn color="primary" size="lg">Primary button</btn>
    <btn color="info" size="lg">Info button</btn>
    <btn color="success" size="lg">Success button</btn>
    <btn color="danger" size="lg">Danger button</btn>
    <btn color="warning" size="lg">Warning button</btn>
    <btn size="lg">Default button</btn>
    <h4 class="pt-5 pb-2">Outline buttons</h4>
    <btn outline="primary" darkWaves size="lg">Primary button</btn>
    <btn outline="info" darkWaves size="lg">Info button</btn>
    <btn outline="success" darkWaves size="lg">Success button</btn>
    <btn outline="danger" darkWaves size="lg">Danger button</btn>
    <btn outline="warning" darkWaves size="lg">Warning button</btn>
    <btn outline="default" darkWaves size="lg">Default button</btn>
    <h4 class="pt-5 pb-2">Buttons with icons</h4>
    <btn icon="user" icon-left>Left</btn>
    <btn icon="user" icon-right>Right</btn>
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
