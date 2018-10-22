<template>
  <container>
    <row>
      <column md="8" class="mx-auto">
        <jumbotron class="mt-5">
          <h1 class="pb-2"><Fa icon="cubes" class="grey-text mr-2" />Components</h1>
          <h6 class="my-3">FREE</h6>
          <list-group>
            <!-- FREE -->
            <navbar-item class="list-group-item list-group-item-action" router href="/components/badge">
              <h5 class="justify-content-between d-flex align-items-center">
                Badge<fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/components/button">
              <h5 class="justify-content-between d-flex align-items-center">
                Button <fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/components/card">
              <h5 class="justify-content-between d-flex align-items-center">
                Cards <fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/components/dropdown">
              <h5 class="justify-content-between d-flex align-items-center">
                Dropdown <fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/components/edge-header">
              <h5 class="justify-content-between d-flex align-items-center">
                Edge Header <fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/components/iframe">
              <h5 class="justify-content-between d-flex align-items-center">
                iFrame<fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/components/listgroup">
              <h5 class="justify-content-between d-flex align-items-center">
                List Group <fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/components/media">
              <h5 class="justify-content-between d-flex align-items-center">
                Media <fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/components/notification">
              <h5 class="justify-content-between d-flex align-items-center">
                Notification <fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/components/pagination">
              <h5 class="justify-content-between d-flex align-items-center">
                Pagination <fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/components/panel">
              <h5 class="justify-content-between d-flex align-items-center">
                Panel <fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/components/progress-bars">
              <h5 class="justify-content-between d-flex align-items-center">
                Progress Bar <fa icon="angle-right"/>
              </h5>
            </navbar-item>
            <navbar-item class="list-group-item list-group-item-action" router href="/components/slider">
              <h5 class="justify-content-between d-flex align-items-center">
                Slider <fa icon="angle-right"/>
              </h5>
            </navbar-item>
          </list-group>
        </jumbotron>
      </column>
    </row>
  </container>
</template>

<script>
import { Container, Row, Column, Fa, Jumbotron, NavbarItem, ListGroup } from 'mdbvue';

export default {
  name: 'ComponentsPage',
  components: {
    Container,
    Row,
    Column,
    Fa,
    Jumbotron,
    NavbarItem,
    ListGroup
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
