<template>
  <div>
    <!--Navbar-->
    <mdb-navbar v-show="navbarType == 'regular-fixed'" position="top" style="margin-top: 60px" dark color="primary" name="Your Logo" href="#" scrolling>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
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
    <!--Navbar-->
    <mdb-navbar v-show="navbarType == 'regular-non-fixed'" style="margin-top: 5px" dark color="primary" name="Your Logo" href="#">
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
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
    <!--Navbar-->
    <mdb-navbar class="fixed-transparent-navbar" v-show="navbarType == 'regular-fixed-transparent'" position="top" style="margin-top: 60px" dark name="Your Logo" href="#" scrolling transparent>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
        </mdb-navbar-nav>
        <!-- Search form -->
        <form>
          <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <!--Navbar-->
    <mdb-navbar v-show="navbarType == 'regular-non-fixed-transparent'" style="margin-top: 5px; margin-bottom: -60px; z-index: 1" dark name="Your Logo" href="#" transparent>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
        </mdb-navbar-nav>
        <!-- Search form -->
        <form>
          <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <div style="height: 100vh">
      <div v-show="content" class="view intro-2">
        <div class="full-bg-img">
          <div class="mask rgba-black-strong flex-center">
            <div class="container">
              <div class="white-text text-center wow fadeInUp">
                <h2>This is just a test message</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="position: absolute; left: 100px; top: 200px; z-index: 50">
      <mdb-btn size="sm" color="primary" @click.native="navbarType='regular-fixed', content=false">Regular fixed mdbNavbar</mdb-btn>
      <mdb-btn size="sm" color="primary" @click.native="navbarType='regular-non-fixed', content=false">Regular non-fixed mdbNavbar</mdb-btn>
      <mdb-btn size="sm" color="primary" @click.native="navbarType='regular-non-fixed', content=true">Full Page Intro with non-fixed mdbNavbar</mdb-btn>
      <mdb-btn size="sm" color="primary" @click.native="navbarType='regular-fixed', content=true">Full Page Intro with fixed mdbNavbar</mdb-btn>
      <mdb-btn size="sm" color="primary" @click.native="navbarType='regular-fixed-transparent', content=true">Full Page Intro with fixed, transparent mdbNavbar</mdb-btn>
      <mdb-btn size="sm" color="primary" @click.native="navbarType='regular-non-fixed-transparent', content=true">Full Page Intro with non-fixed, transparent mdbNavbar</mdb-btn>
    </div>
  </div>
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle, mdbInput, mdbBtn } from 'mdbvue';

export default {
  name: 'NavigationPage',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbInput,
    mdbBtn
  },
  data() {
    return {
      navbarType: 'regular-fixed',
      content: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  background: url("https://mdbootstrap.com/img/Photos/Others/img (42).jpg")no-repeat center center;
  background-size: cover;
  height: 100%;
}
</style>

<style>
.navbar .dropdown-menu a:hover {
  color: inherit !important;
}
.navbar.fixed-transparent-navbar {
  transition: 1s !important;
}
.navbar.fixed-transparent-navbar.scrolling-navbar.top-nav-collapse {
  background-color: #4285F4 !important;
}
</style>
