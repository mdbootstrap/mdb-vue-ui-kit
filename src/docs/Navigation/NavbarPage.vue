<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Navbar</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/navigation/navbar/?utm_source=DemoApp&utm_medium=MDBVueFree"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Scrolling</h4>
      <section>
        <mdb-navbar dark color="primary" scrolling>
          <!-- mdbNavbar brand -->
          <mdb-navbar-brand tag="a" target="_blank" href="https://mdbootstrap.com/">
            <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt />
          </mdb-navbar-brand>
          <mdb-navbar-toggler>
            <mdb-navbar-nav left>
              <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
              <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
              <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
              <!-- mdbDropdown -->
              <mdb-dropdown tag="li" class="nav-item">
                <mdb-dropdown-toggle
                  slot="toggle"
                  tag="a"
                  navLink
                  color="primary"
                  waves-fixed
                >Dropdown</mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                  <mdb-dropdown-item>Action</mdb-dropdown-item>
                  <mdb-dropdown-item>Another action</mdb-dropdown-item>
                  <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-navbar-nav>
            <!-- Search form -->
            <form>
              <mdb-input
                type="text"
                class="text-white"
                placeholder="Search"
                aria-label="Search"
                label
                navInput
                waves
                waves-fixed
              />
            </form>
          </mdb-navbar-toggler>
        </mdb-navbar>
      </section>
    </section>
    <section class="demo-section">
      <h4>Light</h4>
      <section>
        <mdb-navbar color="warning" light>
          <mdb-navbar-brand href="https://mdbootstrap.com/">Navbar</mdb-navbar-brand>
          <mdb-navbar-toggler>
            <mdb-navbar-nav>
              <mdb-nav-item href="#" active>Home</mdb-nav-item>
              <mdb-nav-item href="#">Features</mdb-nav-item>
              <mdb-nav-item href="#">Pricing</mdb-nav-item>
              <mdb-dropdown tag="li" class="nav-item">
                <mdb-dropdown-toggle
                  tag="a"
                  navLink
                  color="warning"
                  slot="toggle"
                  waves-fixed
                >Dropdown</mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                  <mdb-dropdown-item>Action</mdb-dropdown-item>
                  <mdb-dropdown-item>Another action</mdb-dropdown-item>
                  <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-navbar-nav>
            <form>
              <mdb-input
                type="text"
                class="text-white"
                placeholder="Search"
                aria-label="Search"
                label
                navInput
                waves
                waves-fixed
              />
            </form>
          </mdb-navbar-toggler>
        </mdb-navbar>
      </section>
    </section>
    <section class="demo-section">
      <h4>Alignment</h4>
      <section>
        <mdb-navbar expand="large" dark color="stylish">
          <mdb-navbar-brand href="#">Navbar</mdb-navbar-brand>
          <mdb-navbar-toggler>
            <mdb-navbar-nav>
              <mdb-nav-item href="#" active>Home</mdb-nav-item>
              <mdb-nav-item href="#">Link</mdb-nav-item>
              <mdb-nav-item class="disabled" href="#">Disabled</mdb-nav-item>
              <mdb-dropdown tag="li" class="nav-item">
                <mdb-dropdown-toggle
                  tag="a"
                  navLink
                  color="stylish"
                  slot="toggle"
                  waves-fixed
                >Dropdown</mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                  <mdb-dropdown-item>Action</mdb-dropdown-item>
                  <mdb-dropdown-item>Another action</mdb-dropdown-item>
                  <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-navbar-nav>
          </mdb-navbar-toggler>
        </mdb-navbar>
      </section>
      <section>
        <mdb-navbar expand="large" dark color="indigo">
          <mdb-navbar-brand href="#">Navbar</mdb-navbar-brand>
          <mdb-navbar-toggler>
            <mdb-navbar-nav right>
              <mdb-nav-item href="#" active>Home</mdb-nav-item>
              <mdb-nav-item href="#">Link</mdb-nav-item>
              <mdb-nav-item class="disabled" href="#">Disabled</mdb-nav-item>
              <mdb-dropdown tag="li" class="nav-item">
                <mdb-dropdown-toggle
                  tag="a"
                  navLink
                  color="indigo"
                  slot="toggle"
                  waves-fixed
                >Dropdown</mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                  <mdb-dropdown-item>Action</mdb-dropdown-item>
                  <mdb-dropdown-item>Another action</mdb-dropdown-item>
                  <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-navbar-nav>
          </mdb-navbar-toggler>
        </mdb-navbar>
      </section>
    </section>
    <section class="demo-section">
      <h4>Disabled</h4>
      <section>
        <mdb-navbar color="info" dark>
          <mdb-navbar-brand href="#">Navbar</mdb-navbar-brand>
          <mdb-navbar-toggler>
            <mdb-navbar-nav>
              <mdb-nav-item href="#" class="active">Home</mdb-nav-item>
              <mdb-nav-item href="#">Features</mdb-nav-item>
              <mdb-nav-item href="#">Pricing</mdb-nav-item>
              <mdb-nav-item class="disabled" href="#">Disabled</mdb-nav-item>
            </mdb-navbar-nav>
          </mdb-navbar-toggler>
        </mdb-navbar>
      </section>
    </section>
    <section class="demo-section">
      <h4>Forms</h4>
      <section>
        <mdb-navbar color="success" dark>
          <mdb-form-inline>
            <mdb-input
              type="text"
              class="text-white"
              placeholder="Search"
              aria-label="Search"
              label
              navInput
              waves
              waves-fixed
            />
            <mdb-btn outline="white" size="sm" class="my-0" type="submit">Search</mdb-btn>
          </mdb-form-inline>
        </mdb-navbar>
      </section>
      <section>
        <mdb-navbar color="secondary" dark class="justify-content-between">
          <mdb-navbar-brand href="#">Navbar</mdb-navbar-brand>
          <mdb-form-inline>
            <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <mdb-btn outline="white" size="sm" class="my-0" type="submit">Search</mdb-btn>
          </mdb-form-inline>
        </mdb-navbar>
      </section>
      <section>
        <mdb-navbar color="secondary-color-dark" dark>
          <mdb-form-inline>
            <mdb-input placeholder="Username" class="mt-0">
              <span class="input-group-text" slot="prepend">@</span>
            </mdb-input>
          </mdb-form-inline>
        </mdb-navbar>
      </section>
      <section>
        <mdb-navbar color="default">
          <mdb-form-inline>
            <mdb-btn outline="white" type="button">Search</mdb-btn>
            <mdb-btn outline="white" size="sm" type="button">Search</mdb-btn>
          </mdb-form-inline>
        </mdb-navbar>
      </section>
    </section>
    <!-- <mdb-navbar expand="large" dark color="purple">
      <mdb-navbar-brand href="#">Navbar</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item href="#" active>Home</mdb-nav-item>
          <mdb-nav-item href="#">Link</mdb-nav-item>
          <mdb-nav-item class="disabled" href="#">Disabled</mdb-nav-item>
          <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink color="stylish" slot="toggle" waves-fixed>Dropdown</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item>Action</mdb-dropdown-item>
              <mdb-dropdown-item>Another action</mdb-dropdown-item>
              <mdb-dropdown-item>Something else here</mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </mdb-navbar-nav>
        <mdb-navbar-nav right>
          <mdb-nav-item>
            1
            <mdb-icon icon="envelope" />
          </mdb-nav-item>
          <mdb-dropdown tag="li" class="nav-item avatar" anchorClass="p-0">
            <mdb-dropdown-toggle tag="a" navLink color="stylish" slot="toggle" waves-fixed>
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                class="rounded-circle z-depth-0"
                alt="avatar image"
                height="35"
              />
            </mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item>Action</mdb-dropdown-item>
              <mdb-dropdown-item>Another action</mdb-dropdown-item>
              <mdb-dropdown-item>Something else here</mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar> -->
  </mdb-container>
</template>

<script>
import {
  mdbNavbar,
  mdbBtn,
  mdbFormInline,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbContainer,
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbInput,
  mdbNavbarBrand,
  mdbIcon,
  mdbRow
} from "mdbvue";

export default {
  name: "NavbarPage",
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbContainer,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbInput,
    mdbNavbarBrand,
    mdbIcon,
    mdbRow,
    mdbBtn,
    mdbFormInline
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
