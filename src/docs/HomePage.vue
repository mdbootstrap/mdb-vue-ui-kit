<template>
    <div style="margin-top: -15px">
      <mdb-edge-header color="teal darken-2">
        <div class="home-page-background"></div>
      </mdb-edge-header>
      <mdb-container class="free-bird">
        <mdb-row>
          <mdb-col md="10" class="mx-auto white z-depth-1 py-2 px-2">
            <mdb-card-body>
              <h2 class="pb-4"><strong>MDB Vue Demo App</strong></h2>
              <mdb-row>
                <mdb-col md="3">
                  <img src="../assets/logo-mdb-vue-small.png" class="img-fluid"/>
                </mdb-col>
                <mdb-col md="9">
                  <p class="pb-4">Vue Bootstrap with Material Design.<br>
                  This demo shows the actual use of MDB Vue components in the application.</p>
                </mdb-col>
              </mdb-row>
              <mdb-row class="d-flex flex-row justify-content-center">
                <a href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVue" class="nav-link border m-2 font-weight-bold rounded" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Official documentation</a>
                <a href="https://mdbootstrap.com/products/vue-ui-kit/" class="nav-link border m-2 indigo-text font-weight-bold rounded" target="_blank"><mdb-icon icon="gem" far class="mr-2"/>PRO</a>
                <a href="https://mdbootstrap.com/docs/vue/getting-started/download/" class="nav-link border indigo-text m-2 font-weight-bold rounded" target="_blank"><mdb-icon icon="download" class="mr-2"/>FREE</a>
              </mdb-row>
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <mdb-container>
        <h2 class="text-center mt-5 font-weight-bold">Why is it so great?</h2>
        <mdb-col md="10" class="mx-auto text-center text-muted mb-5">
          <p>Google has designed a Material Design to make the web more beautiful and more user-friendly.<br>
          Twitter has created a Bootstrap to support you in faster and easier development of responsive and effective websites.<br>
          We present you a framework containing the best features of both of them - Material Design for Bootstrap.</p>
        </mdb-col>
        <mdb-row>
          <mdb-col md="4" class="mb-5">
            <mdb-card class="animated fadeInLeft">
              <mdb-card-image src="https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title><mdb-icon fab icon="css3" class="pink-text" /><strong> CSS</strong></mdb-card-title>
                <mdb-card-text>Animations, colors, shadows, skins and many more! Get to know all our css styles in one place.</mdb-card-text>
                <mdb-nav-item to="/css" class="float-right" anchorClass="p-0"><mdb-btn color="elegant">More</mdb-btn></mdb-nav-item>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-card class="animated fadeIn">
              <mdb-card-image src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title><mdb-icon icon="cubes" class="blue-text" /><strong> COMPONENTS</strong></mdb-card-title>
                <mdb-card-text>Ready-to-use components that you can use in your applications. Both basic and extended versions!</mdb-card-text>
                <mdb-nav-item to="/components" class="float-right" anchorClass="p-0"><mdb-btn color="elegant">More</mdb-btn></mdb-nav-item>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-card class="animated fadeInRight">
              <mdb-card-image src="https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title><mdb-icon icon="code" class="green-text" /><strong> ADVANCED</strong></mdb-card-title>
                <mdb-card-text>Advanced components such as charts, carousels, tooltips and popovers. All in Material Design version.</mdb-card-text>
                <mdb-nav-item to="/advanced" class="float-right" anchorClass="p-0"><mdb-btn color="elegant">More</mdb-btn></mdb-nav-item>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col md="4" class="mb-5">
            <mdb-card v-animateOnScroll="{animation: 'fadeInLeft', delay: 400}">
              <mdb-card-image src="https://mdbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title><mdb-icon icon="bars" class="pink-text" /><strong> NAVIGATION</strong></mdb-card-title>
                <mdb-card-text>Ready-to-use navigation layouts, navbars, breadcrumbs and much more! More about our navigation components.</mdb-card-text>
                <mdb-nav-item to="/navigation" class="float-right" anchorClass="p-0"><mdb-btn color="elegant">More</mdb-btn></mdb-nav-item>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-card v-animateOnScroll="{animation: 'fadeIn'}">
              <mdb-card-image src="https://mdbootstrap.com/wp-content/uploads/2015/08/forms.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title><mdb-icon icon="edit" class="blue-text" /><strong> FORMS</strong></mdb-card-title>
                <mdb-card-text>Inputs, autocomplete, selecst, date and time pickers. Everything in one place is ready to use!</mdb-card-text>
                <mdb-nav-item to="/forms" class="float-right" anchorClass="p-0"><mdb-btn color="elegant">More</mdb-btn></mdb-nav-item>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-card v-animateOnScroll="{animation: 'fadeInRight', delay: 200}">
              <mdb-card-image src="https://mdbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title><mdb-icon icon="table" class="green-text" /><strong> TABLES</strong></mdb-card-title>
                <mdb-card-text>Basic and advanced tables. Responsive, datatables, with sorting, searching and export to csv.</mdb-card-text>
                <mdb-nav-item to="/tables" class="float-right" anchorClass="p-0"><mdb-btn color="elegant">More</mdb-btn></mdb-nav-item>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <mdb-row class="mb-4">
          <mdb-col md="4" class="mb-5">
            <mdb-card v-animateOnScroll="{animation: 'fadeInLeft', delay: 400}">
              <mdb-card-image src="https://mdbootstrap.com/wp-content/uploads/2018/02/modal-new.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title><mdb-icon icon="window-restore" class="pink-text" /><strong> MODALS</strong></mdb-card-title>
                <mdb-card-text>Modals are great for displaying advanced messages to the user. Cookies, logging in, registration and much more.</mdb-card-text>
                <mdb-nav-item to="/modals" class="float-right" anchorClass="p-0"><mdb-btn color="elegant">More</mdb-btn></mdb-nav-item>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-card v-animateOnScroll="{animation: 'fadeIn'}">
              <mdb-card-image src="https://mdbootstrap.com/img/Marketing/docs/social/main-addons.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title><mdb-icon icon="plus-square" class="blue-text" /><strong> PLUGINS & ADDONS</strong></mdb-card-title>
                <mdb-card-text>Find out more about our extended components.</mdb-card-text>
                <mdb-nav-item to="/plugins" class="float-right" anchorClass="p-0"><mdb-btn color="elegant">More</mdb-btn></mdb-nav-item>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
</template>

<script>
import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbBtn, mdbEdgeHeader, mdbCard, mdbCardImage, mdbCardTitle, mdbCardText, mdbCardBody, animateOnScroll } from 'mdbvue';

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
    mdbCard,
    mdbCardImage, 
    mdbCardTitle,
    mdbCardText,
    mdbCardBody
  },
  directives: {
    animateOnScroll
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

.home-page-background {
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background: url('https://mdbootstrap.com/wp-content/uploads/2016/11/mdb-pro-min-1.jpg') center;
  background-size: cover;
}

</style>
