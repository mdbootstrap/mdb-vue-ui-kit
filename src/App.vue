<template>
  <div id="app" class="flyout">
    <mdb-navbar id="main-navbar" dark position="top" color="stylish" scrolling :scrollingOffset="20">
      <mdb-navbar-brand to="/" waves class="font-weight-bold">
        MDB Vue
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item exact to="/"><strong>Home</strong></mdb-nav-item>
          <mdb-nav-item to="/css"><strong>CSS</strong></mdb-nav-item>
          <mdb-nav-item to="/components"><strong>Components</strong></mdb-nav-item>
          <mdb-nav-item to="/advanced"><strong>Advanced</strong></mdb-nav-item>
          <mdb-nav-item to="/navigation"><strong>Navigation</strong></mdb-nav-item>
          <mdb-nav-item to="/forms"><strong>Forms</strong></mdb-nav-item>
          <mdb-nav-item to="/tables"><strong>Tables</strong></mdb-nav-item>
          <mdb-nav-item to="/modals"><strong>Modals</strong></mdb-nav-item>
          <mdb-nav-item to="/plugins"><strong>Plugins & addons</strong></mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <main :style="{marginTop: '60px'}">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <mdb-footer color="stylish-color">
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

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
