<template>
  <container>
    <!--Navbar-->
    <navbar position="top" style="margin-top: 60px" dark color="primary" scrolling>
      <!-- Navbar brand -->
      <mdb-navbar-brand href="https://mdbootstrap.com/">
        <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="">
      </mdb-navbar-brand>
      <navbar-collapse>
        <navbar-nav>
          <navbar-item href="#" waves-fixed>Home</navbar-item>
          <navbar-item href="#" waves-fixed>Features</navbar-item>
          <navbar-item href="#" waves-fixed>Pricing</navbar-item>
          <!-- Dropdown -->
          <dropdown tag="li" class="nav-item">
            <dropdown-toggle slot="toggle" tag="a" navLink color="primary" waves-fixed>Dropdown</dropdown-toggle>
            <dropdown-menu>
              <dropdown-item>Action</dropdown-item>
              <dropdown-item>Another action</dropdown-item>
              <dropdown-item>Something else here</dropdown-item>
            </dropdown-menu>
          </dropdown>
        </navbar-nav>
        <!-- Search form -->
        <form>
          <md-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
      </navbar-collapse>
    </navbar>
    <!--/.Navbar-->
    <div style="height: 1600px; padding-top: 100px">
      <h4>&#8659; Scroll down &#8659;</h4>
    </div>
  </container>
</template>

<script>
import { Navbar, NavbarItem, NavbarNav, NavbarCollapse, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, MdInput, mdbNavbarBrand } from 'mdbvue';

export default {
  name: 'NavbarPage',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    MdInput,
    mdbNavbarBrand
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
