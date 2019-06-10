<template>
  <div style="margin-top: -15px">
    <mdb-edge-header color="teal darken-2">
      <div class="category-page-background"></div>
    </mdb-edge-header>
    <mdb-container class="free-bird">
      <mdb-row>
        <mdb-col md="8" class="mx-auto">
          <mdb-jumbotron class="pt-4">
            <h2 class="pb-4"><mdb-icon icon="edit" class="text-danger mr-2" /><strong>Forms</strong></h2>
            <h6 class="my-3">FREE</h6>
            <mdb-list-group>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/forms/forms">
              <h5 class="justify-content-between d-flex align-items-center">
                Forms <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/forms/inputs">
              <h5 class="justify-content-between d-flex align-items-center">
                Input <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/forms/group">
              <h5 class="justify-content-between d-flex align-items-center">
                Input Group <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/forms/search">
              <h5 class="justify-content-between d-flex align-items-center">
                Search <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/forms/select">
              <h5 class="justify-content-between d-flex align-items-center">
                Select <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/forms/switch">
              <h5 class="justify-content-between d-flex align-items-center">
                Switch <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/forms/validation">
              <h5 class="justify-content-between d-flex align-items-center">
                Validation<mdb-icon icon="angle-right"/>
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
