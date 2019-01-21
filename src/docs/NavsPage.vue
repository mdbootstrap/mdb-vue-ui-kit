<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">Navs </h4>
      <a href="https://mdbootstrap.com/docs/vue/navigation/navs/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-navbar class="grey lighten-4 py-4">
          <mdb-navbar-nav nav>
            <mdb-nav-item href="#" active>Active</mdb-nav-item>
            <mdb-nav-item href="#">Link</mdb-nav-item>
            <mdb-nav-item href="#">Link</mdb-nav-item>
            <mdb-nav-item href="#" disabled>Disabled</mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar>
      </section>
    </section>
    <section class="demo-section">
      <h4>Horizontal alignment</h4>
      <section>
        <mdb-navbar class="grey lighten-4 py-4">
          <mdb-navbar-nav nav center>
            <mdb-nav-item href="#" active>Active</mdb-nav-item>
            <mdb-nav-item href="#">Link</mdb-nav-item>
            <mdb-nav-item href="#">Link</mdb-nav-item>
            <mdb-nav-item href="#" disabled>Disabled</mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar>
        <br>
        <mdb-navbar class="grey lighten-4 py-4">
          <mdb-navbar-nav nav right>
            <mdb-nav-item href="#" active>Active</mdb-nav-item>
            <mdb-nav-item href="#">Link</mdb-nav-item>
            <mdb-nav-item href="#">Link</mdb-nav-item>
            <mdb-nav-item href="#" disabled>Disabled</mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar>
      </section>
    </section>
    <section class="demo-section">
      <h4>Vertical alignment</h4>
      <section>
        <mdb-navbar class="blue lighten-5 py-4">
          <mdb-navbar-nav nav vertical>
            <mdb-nav-item href="#" active>Active</mdb-nav-item>
            <mdb-nav-item href="#">Link</mdb-nav-item>
            <mdb-nav-item href="#">Link</mdb-nav-item>
            <mdb-nav-item href="#" disabled>Disabled</mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar>
      </section>
    </section>
    <section class="demo-section">
      <h4>Navs with bold font</h4>
      <section>
        <mdb-navbar class="grey lighten-4 py-4">
          <mdb-navbar-nav nav vertical class="font-weight-bold">
            <mdb-nav-item href="#" active>Active</mdb-nav-item>
            <mdb-nav-item href="#">Link</mdb-nav-item>
            <mdb-nav-item href="#">Link</mdb-nav-item>
            <mdb-nav-item href="#" disabled>Disabled</mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar>
        <br>
        <mdb-navbar class="grey lighten-4 py-4">
          <mdb-navbar-nav nav class="font-weight-bold">
            <mdb-nav-item href="#" active>Active</mdb-nav-item>
            <mdb-nav-item href="#">Link</mdb-nav-item>
            <mdb-nav-item href="#">Link</mdb-nav-item>
            <mdb-nav-item href="#" disabled>Disabled</mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar>
      </section>
    </section>
    <section class="demo-section">
      <h4>Navs with various font and background color</h4>
      <section>
        <mdb-row>
          <mdb-col md="4">
            <mdb-navbar class="pink lighten-3 py-4">
              <mdb-navbar-nav nav vertical class="font-weight-bold">
                <mdb-nav-item href="#" active anchorClass="white-text">Active</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
              </mdb-navbar-nav>
            </mdb-navbar>
          </mdb-col>
          <mdb-col md="4">
            <mdb-navbar class="amber lighten-3 py-4">
              <mdb-navbar-nav nav vertical class="font-weight-bold">
                <mdb-nav-item href="#" active anchorClass="dark-grey-text">Active</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="dark-grey-text">Link</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="dark-grey-text">Link</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="dark-grey-text">Link</mdb-nav-item>
              </mdb-navbar-nav>
            </mdb-navbar>
          </mdb-col>
          <mdb-col md="4">
            <mdb-navbar class="cyan lighten-3 py-4">
              <mdb-navbar-nav nav vertical class="font-weight-bold">
                <mdb-nav-item href="#" anchorClass="indigo-text" active>Active</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="indigo-text">Link</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="indigo-text">Link</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="indigo-text">Link</mdb-nav-item>
              </mdb-navbar-nav>
            </mdb-navbar>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Navs with gradient background</h4>
      <section>
        <mdb-row>
          <mdb-col md="6">
            <mdb-navbar class="peach-gradient lighten-3 py-4 mb-4">
              <mdb-navbar-nav nav class="font-weight-bold">
                <mdb-nav-item href="#" active anchorClass="white-text">Active</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
              </mdb-navbar-nav>
            </mdb-navbar>
          </mdb-col>
          <mdb-col md="6">
            <mdb-navbar class="purple-gradient lighten-3 py-4 mb-4">
              <mdb-navbar-nav nav class="font-weight-bold">
                <mdb-nav-item href="#" active anchorClass="white-text">Active</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
              </mdb-navbar-nav>
            </mdb-navbar>
          </mdb-col>
          <mdb-col md="6">
            <mdb-navbar class="aqua-gradient lighten-3 py-4 mb-4">
              <mdb-navbar-nav nav class="font-weight-bold">
                <mdb-nav-item href="#" active anchorClass="white-text">Active</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
              </mdb-navbar-nav>
            </mdb-navbar>
          </mdb-col>
          <mdb-col md="6">
            <mdb-navbar class="blue-gradient lighten-3 py-4 mb-4">
              <mdb-navbar-nav nav class="font-weight-bold">
                <mdb-nav-item href="#" active anchorClass="white-text">Active</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
                <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
              </mdb-navbar-nav>
            </mdb-navbar>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbNavbar, mdbNavbarNav, mdbNavItem, mdbContainer, mdbIcon, mdbRow, mdbCol } from 'mdbvue';

export default {
  name: 'NavsPage',
  components: {
    mdbNavbar,
    mdbNavbarNav,
    mdbNavItem,
    mdbContainer,
    mdbIcon,
    mdbRow,
    mdbCol
  }
};
</script>

<style scoped>
.nav a.white-text:hover {
color: #e0e0e0!important;
}
.nav a.dark-grey-text:hover {
color: #78909c!important;
}
.nav a.indigo-text:hover {
color: #7986cb!important;
}
</style>
