<template>
  <container>
    <row>
      <column md="8" class="mx-auto">
        <jumbotron class="mt-5">
          <h1><Fa icon="cubes" class="grey-text" /> Components</h1>
          <ul class="list-unstyled example-components-list">
            <!-- FREE -->
            <h6>FREE</h6>
            <a href="#/components/badge"><li>Badge <fa icon="angle-right"/></li></a>
            <a href="#/components/button"><li>Button <fa icon="angle-right"/></li></a>
            <a href="#/components/breadcrumb"><li>Breadcrumb <fa icon="angle-right"/></li></a>
            <a href="#/components/card"><li>Cards <fa icon="angle-right"/></li></a>
            <a href="#/components/dropdown"><li>Dropdown <fa icon="angle-right"/></li></a>
            <a href="#/components/edge-header"><li>Edge Header <fa icon="angle-right"/></li></a>
            <a href="#/components/footer"><li>Footer <fa icon="angle-right"/></li></a>
            <a href="#/components/forms"><li>Forms <fa icon="angle-right"/></li></a>
            <a href="#/components/inputs"><li>Input <fa icon="angle-right"/></li></a>
            <a href="#/components/listgroup"><li>List Group <fa icon="angle-right"/></li></a>
            <a href="#/components/media"><li>Media <fa icon="angle-right"/></li></a>
            <a href="#/components/navbar"><li>Navbar <fa icon="angle-right"/></li></a>
            <a href="#/components/navigation"><li>Navigation <fa icon="angle-right"/></li></a>
            <a href="#/components/pagination"><li>Pagination <fa icon="angle-right"/></li></a>
            <a href="#/components/panel"><li>Panel <fa icon="angle-right"/></li></a>
            <a href="#/components/progress-bars"><li>Progress Bar <fa icon="angle-right"/></li></a>
            <a href="#/components/search"><li>Search <fa icon="angle-right"/></li></a>
          </ul>
        </jumbotron>
      </column>
    </row>
  </container>
</template>

<script>
import { Container, Row, Column, Fa, Jumbotron } from 'mdbvue';

export default {
  name: 'ComponentsPage',
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
