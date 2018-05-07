<template>
  <container>
    <!--Navbar-->
    <navbar position="top" style="margin-top: 60px" dark color="primary" name="Your Logo" href="#" scrolling>
      <navbar-collapse>
        <navbar-nav>
          <navbar-item href="#" waves-fixed>Home</navbar-item>
          <navbar-item href="#" waves-fixed>Features</navbar-item>
          <navbar-item href="#" waves-fixed>Pricing</navbar-item>
          <!-- Dropdown -->
          <dropdown tag="li" class="nav-item">
            <dropdown-toggle @click.native="toggleDropdown(0)" tag="a" navLink color="primary" waves-fixed>Dropdown</dropdown-toggle>
            <dropdown-menu v-show="active[0]">
              <dropdown-item>Action</dropdown-item>
              <dropdown-item>Another action</dropdown-item>
              <dropdown-item>Something else here</dropdown-item>
            </dropdown-menu>
          </dropdown>
        </navbar-nav>
        <!-- Search form -->
        <form>
          <md-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
      </navbar-collapse>
    </navbar>
    <!--/.Navbar-->
    <div style="height: 1600px; padding-top: 100px">
      <h4>&#8659; Scroll down &#8659;</h4>
    </div>
  </container>
</template>

<script>
import { Navbar, NavbarItem, NavbarNav, NavbarCollapse, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, MdInput } from 'mdbvue';

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
    MdInput
  },
  data() {
    return {
      active: {
        0: false
      }
    };
  },
  methods: {
    toggleDropdown(index) {
      for (let i = 0; i < Object.keys(this.active).length; i++) {
        if (index !== i) {
          this.active[i] = false;
        }
      }
      this.active[index] = !this.active[index];
    },
    allDropdownsClose(target) {
      for (let i = 0; i < Object.keys(this.active).length; i++) {
        this.active[i] = false;
      }
    },
    onClick(e) {
      let parent = e.target;
      let body = document.getElementsByTagName('body')[0];
      while (parent !== body) {
        if (parent.classList.contains('dropdown') || parent.classList.contains('btn-group')) {
          return;
        }
        parent = parent.parentNode;
      }
      this.allDropdownsClose(e.target);
    }
  },
  mounted() {
    document.addEventListener('click', this.onClick);
  },
  destroyed() {
    document.removeEventListener('click', this.onClick);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
