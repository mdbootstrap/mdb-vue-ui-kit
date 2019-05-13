<template>
  <div id="app" class="flyout">
    <mdb-navbar id="main-navbar" dark position="top" color="default" scrolling :scrollingOffset="20">
      <mdb-navbar-brand to="/" waves style="font-weight: bolder;">
        MDB Vue
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item exact to="/">Home</mdb-nav-item>
          <mdb-nav-item to="/css">CSS</mdb-nav-item>
          <mdb-nav-item to="/components">Components</mdb-nav-item>
          <mdb-nav-item to="/advanced">Advanced</mdb-nav-item>
          <mdb-nav-item to="/navigation">Navigation</mdb-nav-item>
          <mdb-nav-item to="/forms">Forms</mdb-nav-item>
          <mdb-nav-item to="/tables">Tables</mdb-nav-item>
          <mdb-nav-item to="/modals">Modals</mdb-nav-item>
          <mdb-nav-item to="/plugins">Plugins & addons</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <main :style="{marginTop: '60px'}">
      <router-view></router-view>
    </main>
    <mdb-footer color="default-color">
      <p class="footer-copyright mb-0 py-3 text-center">
        &copy; {{new Date().getFullYear()}} Copyright: <a href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVue"> MDBootstrap.com</a>
      </p>
    </mdb-footer>
  </div>
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter } from 'mdbvue';

export default {
  name: 'app',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbFooter
  }
};

</script>

<style>
.flyout {
	display:flex;
	flex-direction: column;
	min-height:100vh;
	justify-content: space-between;
}
.active{
  background-color: rgba(255, 255, 255, 0.1);
}
.demo-section {
  padding: 20px 0;
}
.demo-section > section {
  border: 1px solid #e0e0e0;
  padding: 15px;
}
.demo-section > h4 {
  font-weight: bold;
  margin-bottom: 20px;
}
.demo-title {
  color: #9e9e9e;
  font-weight: 700;
  margin-bottom: 0;
  padding-left: 15px;
}
</style>
