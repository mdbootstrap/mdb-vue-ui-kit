<template>
  <container class="mt-5">
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Tooltips</strong></h4>
      <a href="https://mdbootstrap.com/vue/advanced/tooltips/" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr />
    <div class="mt-5 pt-5 d-flex justify-content-center">
      <tooltip trigger="hover" :options="{placement: 'top'}">
        <div class="tooltip">
          Who's there?
        </div>
        <btn slot="reference" color="primary">
          Knock Knock
        </btn>
      </tooltip>
    </div>
  </container>
</template>

<script>
import { Tooltip, Container, Btn, Fa, Row } from 'mdbvue';

export default {
  name: 'TooltipPage',
  components: {
    Tooltip,
    Container,
    Btn,
    Fa,
    Row
  },
};
</script>
