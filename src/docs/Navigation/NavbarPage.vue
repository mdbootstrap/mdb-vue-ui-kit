<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Navbar</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/navigation/navbar/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container>
      <!--Navbar-->
      <mdb-navbar  style="margin-top: 60px" dark color="primary" scrolling>
        <!-- mdbNavbar brand -->
        <mdb-navbar-brand href="https://mdbootstrap.com/">
          <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="">
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav left>
            <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
            <!-- mdbDropdown -->
            <mdb-dropdown tag="li" class="nav-item">
              <mdb-dropdown-toggle slot="toggle" tag="a" navLink color="primary" waves-fixed>Dropdown</mdb-dropdown-toggle>
              <mdb-dropdown-menu>
                <mdb-dropdown-item>Action</mdb-dropdown-item>
                <mdb-dropdown-item>Another action</mdb-dropdown-item>
                <mdb-dropdown-item>Something else here</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-navbar-nav>
          <!-- Search form -->
          <form>
            <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
          </form>
        </mdb-navbar-toggler>
      </mdb-navbar>
      <!--/.Navbar-->
      <div style="height: 1600px; padding-top: 100px">
        <h4>&#8659; Scroll down &#8659;</h4>
      </div>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbContainer, mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle, mdbInput, mdbNavbarBrand, mdbIcon, mdbRow } from 'mdbvue';

export default {
  name: 'NavbarPage',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbContainer,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbInput,
    mdbNavbarBrand,
    mdbIcon,
    mdbRow
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
