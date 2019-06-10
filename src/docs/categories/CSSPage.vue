<template>
  <div style="margin-top: -15px">
    <mdb-edge-header color="teal darken-2">
      <div class="category-page-background"></div>
    </mdb-edge-header>
    <mdb-container class="free-bird">
      <mdb-row>
        <mdb-col md="8" class="mx-auto">
          <mdb-jumbotron class="pt-4">
            <h2 class="pb-4"><mdb-icon fab icon="css3" class="text-danger mr-2" /><strong>CSS</strong></h2>
            <h6 class="my-3">FREE</h6>
            <mdb-list-group>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/css/animations">
                <h5 class="justify-content-between d-flex align-items-center">
                  Animations<mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/css/background">
                <h5 class="justify-content-between d-flex align-items-center">
                  Background Image<mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/css/gradient">
                <h5 class="justify-content-between d-flex align-items-center">
                  Gradient<mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/css/hover">
                <h5 class="justify-content-between d-flex align-items-center">
                  Hover effects<mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/css/icons">
                <h5 class="justify-content-between d-flex align-items-center">
                  Icons <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/css/masks">
                <h5 class="justify-content-between d-flex align-items-center">
                  Masks <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/css/masonry">
                <h5 class="justify-content-between d-flex align-items-center">
                  Masonry <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/css/scrollbar">
                <h5 class="justify-content-between d-flex align-items-center">
                  Scrollbar <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/css/table">
                <h5 class="justify-content-between d-flex align-items-center">
                  Table <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/css/table-additional">
                <h5 class="justify-content-between d-flex align-items-center">
                  Table Additional <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/css/table-responsive">
                <h5 class="justify-content-between d-flex align-items-center">
                  Table Responsive <mdb-icon icon="angle-right"/>
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
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbJumbotron, mdbListGroup, mdbNavItem, mdbEdgeHeader } from 'mdbvue';

export default {
  name: 'CSSPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbJumbotron,
    mdbListGroup,
    mdbNavItem,
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
