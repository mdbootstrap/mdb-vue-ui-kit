<template>
  <div class="container">
    <!--Navbar-->
    <navbar position="top" className="indigo" name="Your Logo" href="#">
      <navbar-collapse>
        <navbar-nav>
          <navbar-item href="#" :active="true">Home</navbar-item>
          <navbar-item href="#">Features</navbar-item>
          <navbar-item href="#">Pricing</navbar-item>
          <!-- Dropdown -->
          <navbar-item-dropdown label="Dropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </navbar-item-dropdown>
          <!-- </ul> -->
          <!-- Links -->
        </navbar-nav>
          <!-- Search form -->
        <form class="form-inline">
          <input class="form-control mr-auto p-2" type="text" placeholder="Search" aria-label="Search">
        </form>
      </navbar-collapse>
        <!-- Collapsible content -->
    </navbar>
    <!--/.Navbar-->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import NavbarItem from '@/components/NavbarItem';
import NavbarItemDropdown from '@/components/NavbarItemDropdown';
import NavbarNav from '@/components/NavbarNav';
import NavbarCollapse from '@/components/NavbarCollapse';

export default {
  name: 'NavbarPage',
  components: {
    Navbar,
    NavbarItem,
    NavbarItemDropdown,
    NavbarNav,
    NavbarCollapse
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar .dropdown-menu a:hover {
    color: inherit !important;
  }
</style>
