<template>
  <div id="app" class="flyout">
    <navbar dark position="top" class="default-color" name="MDB Vue" href="#/" scrolling>
      <navbar-collapse>
        <navbar-nav right>
          <navbar-item href="#/" waves-fixed>Home</navbar-item>
          <navbar-item href="#/css" waves-fixed>CSS</navbar-item>
          <navbar-item href="#/components" waves-fixed>Components</navbar-item>
          <navbar-item href="#/advanced" waves-fixed>Advanced</navbar-item>
        </navbar-nav>
      </navbar-collapse>
    </navbar>
    <main :style="{marginTop: '60px'}">
      <router-view></router-view>
    </main>
    <Ftr color="default-color">
      <p class="footer-copyright mb-0 py-3 text-center">
        &copy; {{new Date().getFullYear()}} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </p>
    </Ftr>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NavbarItem from '@/components/NavbarItem.vue';
import NavbarNav from '@/components/NavbarNav.vue';
import NavbarCollapse from '@/components/NavbarCollapse.vue';
import Ftr from '@/components/Footer.vue';
import EdgHd from '@/components/EdgeHeader.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Ftr,
    EdgHd,
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

</style>
