<template>
  <container>
    <row>
      <column md="8" class="mx-auto">
        <jumbotron class="mt-5">
          <h1><Fa icon="css3" class="grey-text" /> CSS</h1>
          <ul class="list-unstyled example-components-list">
            <h6>FREE</h6>
            <a href="#/css/hover"><li>Hover effects<fa icon="angle-right"/></li></a>
            <a href="#/css/icons"><li>Icons <fa icon="angle-right"/></li></a>
            <a href="#/css/jumbotron"><li>Jumbotron <fa icon="angle-right"/></li></a>
            <a href="#/css/masks"><li>Masks <fa icon="angle-right"/></li></a>
            <a href="#/css/table"><li>Table <fa icon="angle-right"/></li></a>
            <a href="#/css/table-additional"><li>Table Additional <fa icon="angle-right"/></li></a>
            <a href="#/css/table-responsive"><li>Table Responsive <fa icon="angle-right"/></li></a>
          </ul>
        </jumbotron>
      </column>
    </row>
  </container>
</template>

<script>
import { Container, Row, Column, Fa, Jumbotron } from 'mdbvue';

export default {
  name: 'CSSPage',
  components: {
    Container,
    Row,
    Column,
    Fa,
    Jumbotron
  }
};
</script>

<style scoped>
.example-components-list {
  padding-top: 20px;
}

.example-components-list li {
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #f7f7f7;
  transition: .3s;
}

.example-components-list h6 {
  padding: 20px 10px 5px 10px;
  color: grey;
}

.example-components-list li:hover {
  background-color: #fafafa;
}

.example-components-list i {
  float: right;
  padding-top: 3px;
}
</style>
