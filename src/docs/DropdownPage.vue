<template>
  <mdb-container class="mb-5 pb-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Dropdowns</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/dropdowns/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <mdb-container class="mt-5">
      <h4 class="pb-1">Basic example</h4>
      <mdb-dropdown>
        <mdb-dropdown-toggle slot="toggle">Basic dropdown</mdb-dropdown-toggle>
        <mdb-dropdown-menu>
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <div class="dropdown-divider"></div>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <h4 class="pt-4 pb-1">Sizing</h4>
      <mdb-dropdown>
        <mdb-dropdown-toggle slot="toggle" color="danger" size="lg">Large button</mdb-dropdown-toggle>
        <mdb-dropdown-menu>
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <div class="dropdown-divider"></div>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <mdb-dropdown>
        <mdb-dropdown-toggle slot="toggle" color="danger" size="sm">Small button</mdb-dropdown-toggle>
        <mdb-dropdown-menu>
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <div class="dropdown-divider"></div>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <h4 class="pt-4 pb-1">Dropup variation</h4>
      <mdb-dropdown dropup>
        <mdb-dropdown-toggle slot="toggle" color="primary">Dropup</mdb-dropdown-toggle>
        <mdb-dropdown-menu dropup>
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <div class="dropdown-divider"></div>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <h4 class="pt-4 pb-1">Alignment</h4>
      <mdb-dropdown>
        <mdb-dropdown-toggle slot="toggle" color="primary">This dropdown's menu is right-aligned</mdb-dropdown-toggle>
        <mdb-dropdown-menu right>
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <div class="dropdown-divider"></div>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <h4 class="pt-4 pb-1">Menu headers</h4>
      <mdb-dropdown>
        <mdb-dropdown-toggle slot="toggle" color="primary">Dropdown</mdb-dropdown-toggle>
        <mdb-dropdown-menu>
          <h6 class="dropdown-header">Dropdown header</h6>
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <h4 class="pt-4 pb-1">Menu dividers</h4>
      <mdb-dropdown>
        <mdb-dropdown-toggle slot="toggle" color="primary">Dropdown</mdb-dropdown-toggle>
        <mdb-dropdown-menu>
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <div class="dropdown-divider"></div>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <h4 class="pt-4 pb-1">Disabled menu items</h4>
      <mdb-dropdown>
        <mdb-dropdown-toggle slot="toggle" color="primary">Dropdown</mdb-dropdown-toggle>
        <mdb-dropdown-menu>
          <mdb-dropdown-item>Regular link</mdb-dropdown-item>
          <mdb-dropdown-item class="disabled">Disabled link</mdb-dropdown-item>
          <mdb-dropdown-item>Another link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <h4 class="pt-4 pb-1">Split button dropdowns</h4>
      <mdb-btn color="danger" class="m-0">Action</mdb-btn>
      <mdb-dropdown split>
        <mdb-dropdown-toggle slot="toggle" color="danger" class="px-3"></mdb-dropdown-toggle>
        <mdb-dropdown-menu>
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <div class="dropdown-divider"></div>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <h4 class="pt-4 pb-1">Dropup with split variation</h4>
      <mdb-btn color="danger" class="m-0">Dropup</mdb-btn>
      <mdb-dropdown split dropup>
        <mdb-dropdown-toggle slot="toggle" color="danger" class="px-3"></mdb-dropdown-toggle>
        <mdb-dropdown-menu dropup>
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <div class="dropdown-divider"></div>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <h4 class="pt-4 pb-1">Dropright variation</h4>
      <mdb-btn color="danger" class="m-0">Dropright</mdb-btn>
      <mdb-dropdown btn-group split dropright>
        <mdb-dropdown-toggle slot="toggle" color="danger" class="px-3"></mdb-dropdown-toggle>
        <mdb-dropdown-menu dropright>
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <div class="dropdown-divider"></div>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <h4 class="pt-4 pb-1" style="padding-left: 200px">Dropleft variation</h4>
      <mdb-dropdown btn-group dropleft style="padding-left: 200px">
        <mdb-dropdown-toggle slot="toggle" color="danger" class="px-3"></mdb-dropdown-toggle>
        <mdb-dropdown-menu dropleft>
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <div class="dropdown-divider"></div>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <mdb-btn color="danger" style="margin-left: -5px">Dropleft</mdb-btn>
      <h4 class="pb-1">Menu forms</h4>
      <mdb-dropdown>
        <mdb-dropdown-toggle slot="toggle" color="secondary">Dropdown link</mdb-dropdown-toggle>
        <mdb-dropdown-menu>
          <form class="px-4 py-3">
            <div class="form-group">
              <label for="exampleDropdownFormEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
            </div>
            <div class="form-group">
              <label for="exampleDropdownFormPassword1">Password</label>
              <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
            </div>
            <mdb-input type="checkbox" id="checkbox1" label="Remember me" />
            <mdb-btn type="submit" color="primary">Sign in</mdb-btn>
          </form>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">New around here? Sign up</a>
          <a class="dropdown-item" href="#">Forgot password?</a>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <h4 class="pt-4 pb-1">Active menu items</h4>
      <mdb-dropdown>
        <mdb-dropdown-toggle slot="toggle" color="primary">Dropdown</mdb-dropdown-toggle>
        <mdb-dropdown-menu>
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item active>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          <div class="dropdown-divider"></div>
          <mdb-dropdown-item>Separated link</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
    </mdb-container>
    <br/>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbBtn, mdbInput, mdbRow, mdbIcon } from 'mdbvue';

export default {
  name: 'DropdownPage',
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
  }
};
</script>

<style scoped>

</style>
