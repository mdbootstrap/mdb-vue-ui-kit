<template>
  <div id="app" class="flyout">
    <navbar dark position="top" class="default-color" scrolling>
      <mdb-navbar-brand href="#/" style="font-weight: bolder;">
        MDB Vue
      </mdb-navbar-brand>
      <navbar-collapse>
        <navbar-nav right>
          <navbar-item router exact href="/" waves-fixed>Home</navbar-item>
          <navbar-item router href="/css" waves-fixed>CSS</navbar-item>
          <navbar-item router href="/components" waves-fixed>Components</navbar-item>
          <navbar-item router href="/advanced" waves-fixed>Advanced</navbar-item>
          <navbar-item router href="/navigation" waves-fixed>Navigation</navbar-item>
          <navbar-item router href="/forms" waves-fixed>Forms</navbar-item>
          <navbar-item router href="/tables" waves-fixed>Tables</navbar-item>
          <navbar-item router href="/modals" waves-fixed>Modals</navbar-item>
          <navbar-item router href="/addons" waves-fixed>Addons</navbar-item>
        </navbar-nav>
      </navbar-collapse>
    </navbar>
    <main :style="{marginTop: '60px'}">
      <router-view></router-view>
    </main>
    <Footer color="default-color">
      <p class="footer-copyright mb-0 py-3 text-center">
        &copy; {{new Date().getFullYear()}} Copyright: <a href="https://www.mdbootstrap.com/?utm_source=DemoApp&utm_medium=MDBVue"> MDBootstrap.com </a>
      </p>
    </Footer>
  </div>
</template>

<script>
import { Navbar, NavbarItem, NavbarNav, NavbarCollapse, mdbNavbarBrand, Footer } from 'mdbvue';

export default {
  name: 'app',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    mdbNavbarBrand,
    Footer
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
