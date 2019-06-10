<template>
  <div style="margin-top: -15px">
    <mdb-edge-header color="teal darken-2">
      <div class="category-page-background"></div>
    </mdb-edge-header>
    <mdb-container class="free-bird">
      <mdb-row>
        <mdb-col md="8" class="mx-auto">
          <mdb-jumbotron class="pt-4">
            <h2 class="pb-4"><mdb-icon icon="cubes" class="text-danger mr-2" /><strong>Components</strong></h2>
            <h6 class="my-3">FREE</h6>
            <mdb-list-group>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/alerts">
                <h5 class="justify-content-between d-flex align-items-center">
                  Alerts<mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/badge">
                <h5 class="justify-content-between d-flex align-items-center">
                  Badge<mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/button">
                <h5 class="justify-content-between d-flex align-items-center">
                  Button <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/button-group">
                <h5 class="justify-content-between d-flex align-items-center">
                  Buttons Group <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/card">
                <h5 class="justify-content-between d-flex align-items-center">
                  Cards <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/dropdown">
                <h5 class="justify-content-between d-flex align-items-center">
                  Dropdown <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/edge-header">
                <h5 class="justify-content-between d-flex align-items-center">
                  Edge Header <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/jumbotron">
                <h5 class="justify-content-between d-flex align-items-center">
                Jumbotron <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/listgroup">
                <h5 class="justify-content-between d-flex align-items-center">
                  List Group <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/spinners">
                <h5 class="justify-content-between d-flex align-items-center">
                  Loaders / Spinners <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/media">
                <h5 class="justify-content-between d-flex align-items-center">
                  Media <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/pagination">
                <h5 class="justify-content-between d-flex align-items-center">
                  Pagination <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/panel">
                <h5 class="justify-content-between d-flex align-items-center">
                  Panels <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/progress-bars">
                <h5 class="justify-content-between d-flex align-items-center">
                  Progress Bar <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/slider">
                <h5 class="justify-content-between d-flex align-items-center">
                  Slider <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/tabs">
                <h5 class="justify-content-between d-flex align-items-center">
                  Tabs <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/components/stretched-link">
                <h5 class="justify-content-between d-flex align-items-center">
                  Stretched Link <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>

            </mdb-list-group>
            
          </mdb-jumbotron>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbJumbotron, mdbNavItem, mdbListGroup, mdbEdgeHeader } from 'mdbvue';

export default {
  name: 'ComponentsPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbJumbotron,
    mdbNavItem,
    mdbListGroup,
    mdbEdgeHeader
  }
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

.category-page-background {
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background: url('https://mdbootstrap.com/wp-content/uploads/2016/11/mdb-pro-min-1.jpg') center;
  background-size: cover;
}

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
