<template>
  <container>
    <!--Navbar-->
    <navbar position="top" class="indigo navbar-dark" name="Your Logo" href="#" scrolling>
      <navbar-collapse>
        <navbar-nav>
          <navbar-item href="#" active waves-fixed>Home</navbar-item>
          <navbar-item href="#" waves-fixed>Features</navbar-item>
          <navbar-item href="#" waves-fixed>Pricing</navbar-item>
          <!-- Dropdown -->
          <dropdown tag="li" class="nav-item">
            <dropdown-toggle tag="a" navLink color="indigo" waves-fixed>Dropdown</dropdown-toggle>
            <dropdown-menu>
              <dropdown-item>Action</dropdown-item>
              <dropdown-item>Another action</dropdown-item>
              <dropdown-item>Something else here</dropdown-item>
            </dropdown-menu>
          </dropdown>
        </navbar-nav>
          <!-- Search form -->
        <form class="form-inline">
          <mdinput type="text" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
      </navbar-collapse>
    </navbar>
    <div>
      <br><br><br><br><br>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
      <h2>Scroll down</h2>
    </div>
    <!--/.Navbar-->
  </container>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import NavbarItem from '../components/NavbarItem.vue';
import NavbarNav from '../components/NavbarNav.vue';
import NavbarCollapse from '../components/NavbarCollapse.vue';
import Container from '../components/Container.vue';
import Dropdown from '../components/Dropdown.vue';
import DropdownItem from '../components/DropdownItem.vue';
import DropdownMenu from '../components/DropdownMenu.vue';
import DropdownToggle from '../components/DropdownToggle.vue';
import drop from '../mixins/drop';
import Mdinput from '../components/MdInput.vue';

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
    Mdinput
  },
  mixins: [drop]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar .dropdown-menu a:hover {
    color: inherit !important;
  }
</style>
