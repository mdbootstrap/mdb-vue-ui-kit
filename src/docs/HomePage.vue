<template>
    <div>
      <mdb-edge-header color="teal darken-1"/>
      <div class="container free-bird">
        <mdb-row>
          <mdb-col md="10" class="mx-auto float-none white z-depth-1 py-2 px-2">
            <mdb-card-body>
              <h2 class="h2-responsive pb-4"><strong>MDB Vue Demo App</strong></h2>
              <p>Vue Bootstrap with Material Design</p>
              <p class="pb-4">This application shows the actual use of MDB Vue components in the application.</p>
              <mdb-row class="d-flex flex-row justify-content-center">
                <a href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVue" waves-fixed class="border nav-link border-light rounded mr-1" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Official documentation</a>
                <!-- <mdb-btn tag="a" size="sm" color="default" href="#/components/liveDemo" target="_blank">Live Demo</mdb-btn> -->
              </mdb-row>
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </div>
      <mdb-container>
        <div>
          <h2 class="text-center mt-5 font-weight-bold">Why is it so great?</h2>
          <mdb-col md="10" class="mx-auto text-center">
            <p class="pt-4">Google has designed a Material Design to make the web more beautiful and more user-friendly.</p>
            <p>Twitter has created a Bootstrap to support you in faster and easier development of responsive and effective websites.</p>
            <p>We present you a framework containing the best features of both of them - Material Design for Bootstrap.</p>
          </mdb-col>
        </div>
        <hr class="my-5">
        <mdb-row>
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="css3" size="2x" class="pink-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">CSS</h4>
              <p class="grey-text">Animations, colours, shadows, skins and many more! Get to know all our css styles in one place.</p>
              <mdb-nav-item router href="/css" waves-fixed><mdb-btn size="sm" color="teal darken-1">Learn more</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="cubes" size="2x" class="blue-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">COMPONENTS</h4>
              <p class="grey-text">Ready-to-use components that you can use in your applications. Both basic and extended versions!</p>
              <mdb-nav-item router href="/components" waves-fixed><mdb-btn size="sm" color="default">Learn more</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="code" size="2x" class="green-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">ADVANCED</h4>
              <p class="grey-text">Advanced components such as charts, carousels, tooltips and popovers. All in Material Design version.</p>
              <mdb-nav-item router href="/advanced" waves-fixed><mdb-btn size="sm" color="teal darken-1">Learn more</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
        </mdb-row>
        <hr class="my-5">
        <mdb-row>
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="bars" size="2x" class="pink-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">NAVIGATION</h4>
              <p class="grey-text">Ready-to-use navigation layouts, navbars, breadcrumbs and much more! Learn more about our navigation components.</p>
              <mdb-nav-item router href="/navigation" waves-fixed><mdb-btn size="sm" color="teal darken-1">Learn more</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="edit" size="2x" class="blue-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">FORMS</h4>
              <p class="grey-text">Inputs, autocomplete, selecst, date and time pickers. Everything in one place is ready to use!</p>
              <mdb-nav-item router href="/forms" waves-fixed><mdb-btn size="sm" color="default">Learn more</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="table" size="2x" class="green-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">TABLES</h4>
              <p class="grey-text">Basic and advanced tables. Responsive, datatables, with sorting, searching and export to csv.</p>
              <mdb-nav-item router href="/tables" waves-fixed><mdb-btn size="sm" color="teal darken-1">Learn more</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
        </mdb-row>
        <hr class="my-5">
        <mdb-row class="mb-4">
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="window-restore" size="2x" class="pink-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">MODALS</h4>
              <p class="grey-text">Models used to display advanced messages to the user. Cookies, logging in, registration and much more.</p>
              <mdb-nav-item router href="/modals" waves-fixed><mdb-btn size="sm" color="teal darken-1">Learn more</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="arrows" size="2x" class="blue-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">ADDONS</h4>
              <p class="grey-text">Find out more about our extended components.</p>
              <mdb-nav-item router href="/addons" waves-fixed><mdb-btn size="sm" color="default">Learn more</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="th" size="2x" class="green-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">SECTIONS</h4>
              <p class="grey-text">E-commerce, contact, blog and much more sections. All ready to use in seconds.</p>
              <mdb-nav-item router href="/sections" waves-fixed><mdb-btn size="sm" color="teal darken-1">Learn more</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
</template>

<script>
import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbBtn, mdbEdgeHeader, mdbCardBody } from 'mdbvue';

export default {
  name: 'HomePage',
  components: {
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbIcon,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBtn,
    mdbEdgeHeader,
    mdbCardBody
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.home-feature-box {
  padding: 40px 0;
}

.home-feature-box i {
  font-size: 6rem;
}

.home-feature-box span {
  display: block;
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #42b983;
}

</style>
