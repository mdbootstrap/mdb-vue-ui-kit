<template>
  <container class="mt-5">
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
import { Tooltip, Container, Btn } from 'mdbvue';

export default {
  name: 'TooltipPage',
  components: {
    Tooltip,
    Container,
    Btn
  },
};
</script>
