<template>
<row class="mt-5">
  <column col="4">
  </column>
  <column col="4">
    <card align="center">
      <card-header>Success!</card-header>
      <card-body>
        <h3 class="card-title">This is a card</h3>
        <p class="card-text">And here comes some special text, just for you.</p>
        <btn color="deep-purple" size="sm">Go somewhere</btn>
      </card-body>
      <card-footer><p class="mb-0">Please enjoy this footer</p></card-footer>
    </card>
  </column>
    <column col="4">
  </column>
</row>
</template>

<script>
import { Row, Column, Btn, Card, CardFooter, CardBody, CardHeader } from 'mdbvue';

export default {
  name: 'PanelPage',
  components: {
    Row,
    Column,
    Btn,
    Card,
    CardFooter,
    CardBody,
    CardHeader,
  },
  data(){
    return {

    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
