<template>
  <mdb-container>
    <mdb-row>
      <mdb-col md="8" class="mx-auto">
        <mdb-jumbotron class="mt-5">
          <h1 class="pb-2"><mdb-icon icon="bars" class="grey-text mr-2" />Navigation</h1>
          <h6 class="my-3">FREE</h6>
          <mdb-list-group>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/navigation/breadcrumb">
              <h5 class="justify-content-between d-flex align-items-center">
                Breadcrumb <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/navigation/footer">
              <h5 class="justify-content-between d-flex align-items-center">
                Footer <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/navigation/hamburger">
              <h5 class="justify-content-between d-flex align-items-center">
                Hamburger Menu <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/navigation/navbar">
              <h5 class="justify-content-between d-flex align-items-center">
                Navbar <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/navigation/navigation">
              <h5 class="justify-content-between d-flex align-items-center">
                Navigation <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/navigation/navs">
              <h5 class="justify-content-between d-flex align-items-center">
                Navs <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
          </mdb-list-group>
        </mdb-jumbotron>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbJumbotron, mdbNavItem, mdbListGroup, mdbCollapse } from 'mdbvue';

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
    mdbCollapse
  },
  data() {
    return {
      slideDown: false
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.height = 0;
    },
    enter(el) {
      el.style.height = (el.scrollHeight * 2.5) + 'px';
    },
    beforeLeave(el) {
      el.style.height = 0;
    }
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

.nav-link.navbar-link h5, .nav-link.navbar-link h6 {
  color: #212529;
}

.animate-icon {
  transition: transform 0.2s;
}
.rotate-90 {
  transform: rotate(90deg);
}

.collapse-item {
  overflow: hidden;
  height: 0;
  padding: 0;
  transition: height .5s;
}
</style>
