<template>
  <div>
    <!--Navbar-->
    <mdb-navbar dark color="primary" name="Your Logo" href="#">
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item to="/navigation/navigation-v1">Version 1</mdb-nav-item>
          <mdb-nav-item to="/navigation/navigation-v2" active>Version 2</mdb-nav-item>
          <mdb-nav-item to="/navigation/navigation-v3">Version 3</mdb-nav-item>
          <mdb-nav-item to="/navigation/navigation-v4">Version 4</mdb-nav-item>
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
    <div style="height: 90vh; margin-bottom: -25px">
      <div class="view intro-2">
        <div class="full-bg-img">
          <div class="mask rgba-black-strong flex-center">
            <div class="container">
              <div class="white-text text-center">
                <h2 class="font-weight-bold">Regular non-fixed navbar</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  mounted() {
    document.getElementById("main-navbar").style.height = '60px';
  },
  beforeDestroy() {
    document.getElementById("main-navbar").style.height = null;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  background: url("https://mdbootstrap.com/img/Photos/Others/img (43).jpg")no-repeat center center;
  background-size: cover;
  height: 100%;
}
</style>
