<template>
  <row class="mt-5">
    <column col="4"></column>
    <column col="4" class="mt-5 pt-5">
      <tooltip trigger="hover" :options="{placement: 'top'}">
        <div class="tooltip">
          Who's there?
        </div>
        <btn slot="reference" color="primary">
          Knock Knock
        </btn>
      </tooltip>
    </column>
    <column col="4"></column>
  </row>
</template>

<script>
import Tooltip from "../components/Tooltip";
import Row from "../components/Row";
import Column from "../components/Col";
import Btn from '../components/Button';

export default {
  name: 'TooltipPage',
  components: {
    tooltip: Tooltip,
    Row,
    Column,
    Btn
  },
};
</script>
