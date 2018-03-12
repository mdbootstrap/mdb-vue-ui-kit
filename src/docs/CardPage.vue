<template>
  <container>
    <row class="mt-5">
      <column sm="4">
        <card>
          <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap" waves></card-img>
          <card-body>
            <h4 class="card-title">Card with waves effect</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <btn color="primary">Button</btn>
          </card-body>
        </card>
      </column>
      <column sm="4">
        <card>
          <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></card-img>
          <card-body>
            <h4 class="card-title">Basic card</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <btn color="primary">Button</btn>
          </card-body>
        </card>
      </column>
      <column sm="4">
        <card>
          <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%287%29.jpg" alt="Card image cap" waves></card-img>
          <card-body>
            <h4 class="card-title">Card with waves effect</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <btn color="primary">Button</btn>
          </card-body>
        </card>
      </column>
    </row>
  </container>
</template>

<script>
import Container from '../components/Container.vue';
import Row from '../components/Row.vue';
import Column from '../components/Col.vue';
import Card from '../components/Card.vue';
import CardImg from '../components/CardImg.vue';
import CardHeader from '../components/CardHeader.vue';
import CardBody from '../components/CardBody.vue';
import Btn from '../components/Button.vue';

export default {
  name: 'CardPage',
  components: {
    Container,
    Row,
    Column,
    Card,
    CardImg,
    CardHeader,
    CardBody,
    Btn
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
