<template>
  <div style="margin-top: -15px">
    <mdb-edge-header color="teal darken-2">
      <div class="category-page-background"></div>
    </mdb-edge-header>
    <mdb-container class="free-bird">
      <mdb-row>
        <mdb-col md="8" class="mx-auto">
          <mdb-jumbotron class="pt-4">
            <h2 class="pb-4"><mdb-icon icon="bars" class="text-danger mr-2" /><strong>Navigation</strong></h2>
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
              <mdb-nav-item class="list-group-item list-group-item-action" @click.native="slideDownNav = !slideDownNav" :class="slideDownNav && 'grey lighten-2'">
                <h5 class="justify-content-between d-flex align-items-center">
                  Navigation <mdb-icon icon="angle-right" class="animate-icon" :class="slideDownNav && 'rotate-90'" />
                </h5>
              </mdb-nav-item>
              <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
                <mdb-list-group v-if="slideDownNav" class="collapse-item">
                  <mdb-nav-item to="/navigation/navigation-v1" class="list-group-item list-group-item-action">
                    <h6 class="justify-content-between d-flex align-items-center pl-4">
                      Regular fixed navbar
                    </h6>
                  </mdb-nav-item>
                  <mdb-nav-item to="/navigation/navigation-v2" class="list-group-item list-group-item-action">
                    <h6 class="justify-content-between d-flex align-items-center pl-4">
                      Regular non-fixed navbar
                    </h6>
                  </mdb-nav-item>
                  <mdb-nav-item to="/navigation/navigation-v3" class="list-group-item list-group-item-action">
                    <h6 class="justify-content-between d-flex align-items-center pl-4">
                      Transparent fixed navbar
                    </h6>
                  </mdb-nav-item>
                  <mdb-nav-item to="/navigation/navigation-v4" class="list-group-item list-group-item-action">
                    <h6 class="justify-content-between d-flex align-items-center pl-4">
                      Transparent non-fixed navbar
                    </h6>
                  </mdb-nav-item>
                </mdb-list-group>
              </transition>
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
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbJumbotron, mdbNavItem, mdbListGroup, mdbCollapse, mdbEdgeHeader } from 'mdbvue';

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
    mdbCollapse,
    mdbEdgeHeader
  },
  data() {
    return {
      slideDownNav: false,
      slideDownDoubleNav: false
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
