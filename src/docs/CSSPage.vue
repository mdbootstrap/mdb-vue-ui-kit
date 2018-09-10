<template>
  <container>
    <row>
      <column md="8" class="mx-auto">
        <jumbotron class="mt-5">
          <h1 class="pb-2"><Fa icon="css3" class="grey-text mr-2" /> CSS</h1>
          <h6 class="my-3">FREE</h6>
          <list-group>
            <navbar-item class="list-group-item list-group-item-action" router href="/css/hover">
              <h5 class="justify-content-between d-flex align-items-center">
                Hover effects<fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/css/icons">
              <h5 class="justify-content-between d-flex align-items-center">
                Icons <fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/css/jumbotron">
              <h5 class="justify-content-between d-flex align-items-center">
                Jumbotron <fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/css/masks">
              <h5 class="justify-content-between d-flex align-items-center">
                Masks <fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/css/table">
              <h5 class="justify-content-between d-flex align-items-center">
                Table <fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/css/table-additional">
              <h5 class="justify-content-between d-flex align-items-center">
                Table Additional <fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/css/table-responsive">
              <h5 class="justify-content-between d-flex align-items-center">
                Table Responsive <fa icon="angle-right"/>
              </h5>
            </navbar-item>
          </list-group>
        </jumbotron>
      </column>
    </row>
  </container>
</template>

<script>
import { Container, Row, Column, Fa, Jumbotron, ListGroup, NavbarItem } from 'mdbvue';

export default {
  name: 'CSSPage',
  components: {
    Container,
    Row,
    Column,
    Fa,
    Jumbotron,
    ListGroup,
    NavbarItem
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

.nav-link.navbar-link h5 {
  color: #212529;
}
</style>
