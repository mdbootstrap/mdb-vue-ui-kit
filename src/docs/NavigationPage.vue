<template>
  <div>
    <!--Navbar-->
    <navbar v-show="navbarType == 'regular-fixed'" position="top" style="margin-top: 60px" dark color="primary" name="Your Logo" href="#" scrolling>
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
          <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
      </navbar-collapse>
    </navbar>
    <!--/.Navbar-->
    <!--Navbar-->
    <navbar v-show="navbarType == 'regular-non-fixed'" style="margin-top: 5px" dark color="primary" name="Your Logo" href="#">
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
          <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
      </navbar-collapse>
    </navbar>
    <!--/.Navbar-->
    <!--Navbar-->
    <navbar class="fixed-transparent-navbar" v-show="navbarType == 'regular-fixed-transparent'" position="top" style="margin-top: 60px" dark name="Your Logo" href="#" scrolling transparent>
      <navbar-collapse>
        <navbar-nav>
          <navbar-item href="#" waves-fixed>Home</navbar-item>
          <navbar-item href="#" waves-fixed>Features</navbar-item>
          <navbar-item href="#" waves-fixed>Pricing</navbar-item>
        </navbar-nav>
        <!-- Search form -->
        <form>
          <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
      </navbar-collapse>
    </navbar>
    <!--/.Navbar-->
    <!--Navbar-->
    <navbar v-show="navbarType == 'regular-non-fixed-transparent'" style="margin-top: 5px; margin-bottom: -60px; z-index: 1" dark name="Your Logo" href="#" transparent>
      <navbar-collapse>
        <navbar-nav>
          <navbar-item href="#" waves-fixed>Home</navbar-item>
          <navbar-item href="#" waves-fixed>Features</navbar-item>
          <navbar-item href="#" waves-fixed>Pricing</navbar-item>
        </navbar-nav>
        <!-- Search form -->
        <form>
          <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
      </navbar-collapse>
    </navbar>
    <!--/.Navbar-->
    <div style="height: 100vh">
      <div v-show="content" class="view intro-2">
        <div class="full-bg-img">
          <div class="mask rgba-black-strong flex-center">
            <div class="container">
              <div class="white-text text-center wow fadeInUp">
                <h2>This is test message</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="position: absolute; left: 100px; top: 200px; z-index: 50">
      <btn size="sm" color="primary" @click.native="navbarType='regular-fixed', content=false">Regular fixed Navbar</btn>
      <btn size="sm" color="primary" @click.native="navbarType='regular-non-fixed', content=false">Regular non-fixed Navbar</btn>
      <btn size="sm" color="primary" @click.native="navbarType='regular-non-fixed', content=true">Full Page Intro with non-fixed Navbar</btn>
      <btn size="sm" color="primary" @click.native="navbarType='regular-fixed', content=true">Full Page Intro with fixed Navbar</btn>
      <btn size="sm" color="primary" @click.native="navbarType='regular-fixed-transparent', content=true">Full Page Intro with fixed, transparent Navbar</btn>
      <btn size="sm" color="primary" @click.native="navbarType='regular-non-fixed-transparent', content=true">Full Page Intro with non-fixed, transparent Navbar</btn>
    </div>
  </div>
</template>

<script>
import { Navbar, NavbarItem, NavbarNav, NavbarCollapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, mdbInput, Btn } from 'mdbvue';

export default {
  name: 'NavigationPage',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    mdbInput,
    Btn
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
