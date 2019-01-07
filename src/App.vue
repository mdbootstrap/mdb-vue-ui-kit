<template>
  <div id="app" class="flyout">
    <mdb-navbar dark position="top" class="default-color" scrolling>
      <mdb-navbar-brand href="#/" style="font-weight: bolder;">
        MDB Vue
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item router exact href="/" waves-fixed>Home</mdb-nav-item>
          <mdb-nav-item router href="/css" waves-fixed>CSS</mdb-nav-item>
          <mdb-nav-item router href="/components" waves-fixed>Components</mdb-nav-item>
          <mdb-nav-item router href="/advanced" waves-fixed>Advanced</mdb-nav-item>
          <mdb-nav-item router href="/navigation" waves-fixed>Navigation</mdb-nav-item>
          <mdb-nav-item router href="/forms" waves-fixed>Forms</mdb-nav-item>
          <mdb-nav-item router href="/tables" waves-fixed>Tables</mdb-nav-item>
          <mdb-nav-item router href="/modals" waves-fixed>Modals</mdb-nav-item>
          <mdb-nav-item router href="/plugins" waves-fixed>Plugins & addons</mdb-nav-item>
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

</style>
