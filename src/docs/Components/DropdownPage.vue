<template>
  <mdb-container class="mb-5 pb-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Dropdowns</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/components/dropdowns/?utm_source=DemoApp&utm_medium=MDBVueFree"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <hr class="mb-5" />
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-dropdown>
          <mdb-dropdown-toggle color="default" slot="toggle">Basic dropdown</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item href="#">Action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Another action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Something else here</mdb-dropdown-item>
            <div class="dropdown-divider"></div>
            <mdb-dropdown-item href="#">Separated link</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </section>
    </section>
    <section class="demo-section">
      <h4>Sizing</h4>
      <section>
        <mdb-dropdown>
          <mdb-dropdown-toggle slot="toggle" color="danger" size="lg">Large button</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item to="/components">Action</mdb-dropdown-item>
            <mdb-dropdown-item to="/components">Another action</mdb-dropdown-item>
            <mdb-dropdown-item to="/components">Something else here</mdb-dropdown-item>
            <div class="dropdown-divider"></div>
            <mdb-dropdown-item to="/components">Separated link</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-dropdown>
          <mdb-dropdown-toggle slot="toggle" color="danger" size="sm">Small button</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item href="#">Action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Another action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Something else here</mdb-dropdown-item>
            <div class="dropdown-divider"></div>
            <mdb-dropdown-item href="#">Separated link</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </section>
    </section>
    <section class="demo-section">
      <h4>Dropup variation</h4>
      <section>
        <mdb-dropdown dropup>
          <mdb-dropdown-toggle slot="toggle" color="primary">Dropup</mdb-dropdown-toggle>
          <mdb-dropdown-menu dropup>
            <mdb-dropdown-item href="#">Action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Another action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Something else here</mdb-dropdown-item>
            <div class="dropdown-divider"></div>
            <mdb-dropdown-item href="#">Separated link</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </section>
    </section>
    <section class="demo-section">
      <h4>Alignment</h4>
      <section>
        <mdb-dropdown>
          <mdb-dropdown-toggle slot="toggle" color="primary">This dropdown's menu is right-aligned</mdb-dropdown-toggle>
          <mdb-dropdown-menu right>
            <mdb-dropdown-item href="#">Action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Another action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Something else here</mdb-dropdown-item>
            <div class="dropdown-divider"></div>
            <mdb-dropdown-item href="#">Separated link</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </section>
    </section>
    <section class="demo-section">
      <h4>Menu headers</h4>
      <section>
        <mdb-dropdown>
          <mdb-dropdown-toggle slot="toggle" color="primary">Dropdown</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <h6 class="dropdown-header">Dropdown header</h6>
            <mdb-dropdown-item href="#">Action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Another action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Something else here</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Separated link</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </section>
    </section>
    <section class="demo-section">
      <h4>Menu dividers</h4>
      <section>
        <mdb-dropdown>
          <mdb-dropdown-toggle slot="toggle" color="primary">Dropdown</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item href="#">Action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Another action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Something else here</mdb-dropdown-item>
            <div class="dropdown-divider"></div>
            <mdb-dropdown-item href="#">Separated link</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </section>
    </section>
    <section class="demo-section">
      <h4>Disabled menu items</h4>
      <section>
        <mdb-dropdown>
          <mdb-dropdown-toggle slot="toggle" color="primary">Dropdown</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Regular link</mdb-dropdown-item>
            <mdb-dropdown-item class="disabled">Disabled link</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Another link</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </section>
    </section>
    <section class="demo-section">
      <h4>Split button dropdowns</h4>
      <section>
        <mdb-btn color="danger" class="m-0">Action</mdb-btn>
        <mdb-dropdown split>
          <mdb-dropdown-toggle slot="toggle" color="danger" class="px-3"></mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item href="#">Action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Another action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Something else here</mdb-dropdown-item>
            <div class="dropdown-divider"></div>
            <mdb-dropdown-item href="#">Separated link</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </section>
    </section>
    <section class="demo-section">
      <h4>Dropup with split variation</h4>
      <section>
        <mdb-btn color="danger" class="m-0">Dropup</mdb-btn>
        <mdb-dropdown split dropup>
          <mdb-dropdown-toggle slot="toggle" color="danger" class="px-3"></mdb-dropdown-toggle>
          <mdb-dropdown-menu dropup>
            <mdb-dropdown-item href="#">Action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Another action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Something else here</mdb-dropdown-item>
            <div class="dropdown-divider"></div>
            <mdb-dropdown-item href="#">Separated link</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </section>
    </section>
    <section class="demo-section">
      <h4>Dropright variation</h4>
      <section>
        <mdb-btn color="danger" class="m-0">Dropright</mdb-btn>
        <mdb-dropdown btn-group split dropright>
          <mdb-dropdown-toggle slot="toggle" color="danger" class="px-3"></mdb-dropdown-toggle>
          <mdb-dropdown-menu dropright>
            <mdb-dropdown-item href="#">Action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Another action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Something else here</mdb-dropdown-item>
            <div class="dropdown-divider"></div>
            <mdb-dropdown-item href="#">Separated link</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </section>
    </section>
    <section class="demo-section">
      <h4>Dropleft variation</h4>
      <section>
        <mdb-dropdown btn-group dropleft style="padding-left: 200px">
          <mdb-dropdown-toggle slot="toggle" color="danger" class="px-3"></mdb-dropdown-toggle>
          <mdb-dropdown-menu dropleft>
            <mdb-dropdown-item href="#">Action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Another action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Something else here</mdb-dropdown-item>
            <div class="dropdown-divider"></div>
            <mdb-dropdown-item href="#">Separated link</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-btn color="danger" style="margin-left: -5px">Dropleft</mdb-btn>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="pb-1">Menu forms</h4>
      <section>
        <mdb-dropdown style="min-width: 400px" multiLevel>
          <mdb-dropdown-toggle slot="toggle" color="secondary">Dropdown link</mdb-dropdown-toggle>
          <mdb-dropdown-menu >
            <form class="px-2 py-2">
              <div class="form-group">
                <label for="exampleDropdownFormEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleDropdownFormEmail1"
                  placeholder="email@example.com"
                  @click.stop
                />
              </div>
              <div class="form-group">
                <label for="exampleDropdownFormPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleDropdownFormPassword1"
                  placeholder="Password"
                  @click.stop
                />
              </div>
              <div class="custom-control custom-checkbox" @click.stop>
                <input type="checkbox" class="custom-control-input" id="12" @change="$emit('click', $event)">
                <label class="custom-control-label" for="12">Remember me</label>
            </div>
              <mdb-btn type="submit" color="primary">Sign in</mdb-btn>
            </form>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">New around here? Sign up</a>
            <a class="dropdown-item" href="#">Forgot password?</a>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </section>
    </section>
    <section class="demo-section">
      <h4>Active menu items</h4>
      <section>
        <mdb-dropdown>
          <mdb-dropdown-toggle slot="toggle" color="primary">Dropdown</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item href="#">Action</mdb-dropdown-item>
            <mdb-dropdown-item active>Another action</mdb-dropdown-item>
            <mdb-dropdown-item href="#">Something else here</mdb-dropdown-item>
            <div class="dropdown-divider"></div>
            <mdb-dropdown-item href="#">Separated link</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </section>
    </section>
    <section class="demo-section">
      <h4>Multilevel menu</h4>
      <section>
        <mdb-dropdown multiLevel>
          <mdb-dropdown-toggle slot="toggle" color="mdb-color">Click me</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item tag="div" class="p-0" submenu>
              <mdb-dropdown class="w-100">
                <mdb-dropdown-item slot="toggle" submenuIcon="caret-right">Click me</mdb-dropdown-item>
                <mdb-dropdown-menu class="ml-2 rounded-0 border-0 z-depth-1">
                  <mdb-dropdown-item href="#">Item 1</mdb-dropdown-item>
                  <mdb-dropdown-item href="#">Item 2</mdb-dropdown-item>
                  <mdb-dropdown-item href="#">Item 3</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-dropdown-item>
            <mdb-dropdown-item class="p-0" submenu>
              <mdb-dropdown class="w-100">
                <mdb-dropdown-item slot="toggle" submenuIcon="caret-right">Click me</mdb-dropdown-item>
                <mdb-dropdown-menu class="ml-2 rounded-0 border-0 z-depth-1">
                  <mdb-dropdown-item href="#">Item 1</mdb-dropdown-item>
                  <mdb-dropdown-item href="#">Item 2</mdb-dropdown-item>
                  <mdb-dropdown-item href="#">Item 3</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
  mdbBtn,
  mdbInput,
  mdbRow,
  mdbIcon
} from "mdbvue";

export default {
  name: "DropdownPage",
  components: {
    mdbContainer,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbBtn,
    mdbInput,
    mdbRow,
    mdbIcon
  },
  methods: {
    checkClick(e) {
      console.log(e.target);
    }
  }
};
</script>

<style scoped>
</style>
