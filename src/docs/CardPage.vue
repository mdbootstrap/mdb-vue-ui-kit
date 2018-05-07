<template>
  <container>
    <row class="mt-5">
      <column sm="4">
        <card>
          <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap" waves></card-img>
          <card-body>
            <card-title>Card with waves effect</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
            <btn color="primary">Button</btn>
          </card-body>
        </card>
      </column>
      <column sm="4">
        <card>
          <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></card-img>
          <card-body>
            <card-title>Basic card</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
            <btn color="primary">Button</btn>
          </card-body>
        </card>
      </column>
      <column sm="4">
        <card>
          <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%287%29.jpg" alt="Card image cap" waves></card-img>
          <card-body>
            <card-title>Card with waves effect</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
            <btn color="primary">Button</btn>
          </card-body>
        </card>
      </column>
    </row>
  </container>
</template>

<script>
import { Container, Row, Column, Card, CardImg, CardHeader, CardBody, CardTitle, CardText, Btn } from 'mdbvue';

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
    CardTitle,
    CardText,
    Btn
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
