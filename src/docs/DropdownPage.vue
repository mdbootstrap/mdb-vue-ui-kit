<template>
  <container class="mt-5">
    <h4 class="pb-1">Basic example</h4>
    <dropdown>
      <dropdown-toggle slot="toggle">Basic dropdown</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Sizing</h4>
    <dropdown>
      <dropdown-toggle slot="toggle" color="danger" size="lg">Large button</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <dropdown>
      <dropdown-toggle slot="toggle" color="danger" size="sm">Small button</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Dropup variation</h4>
    <dropdown dropup>
      <dropdown-toggle slot="toggle" color="primary">Dropup</dropdown-toggle>
      <dropdown-menu dropup>
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Alignment</h4>
    <dropdown>
      <dropdown-toggle slot="toggle" color="primary">This dropdown's menu is right-aligned</dropdown-toggle>
      <dropdown-menu right>
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Menu headers</h4>
    <dropdown>
      <dropdown-toggle slot="toggle" color="primary">Dropdown</dropdown-toggle>
      <dropdown-menu>
        <h6 class="dropdown-header">Dropdown header</h6>
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Menu dividers</h4>
    <dropdown>
      <dropdown-toggle slot="toggle" color="primary">Dropdown</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Disabled menu items</h4>
    <dropdown>
      <dropdown-toggle slot="toggle" color="primary">Dropdown</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Regular link</dropdown-item>
        <dropdown-item class="disabled">Disabled link</dropdown-item>
        <dropdown-item>Another link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Split button dropdowns</h4>
    <btn color="danger" class="m-0">Action</btn>
    <dropdown split>
      <dropdown-toggle slot="toggle" color="danger" class="px-3"></dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Dropup with split variation</h4>
    <btn color="danger" class="m-0">Dropup</btn>
    <dropdown split dropup>
      <dropdown-toggle slot="toggle" color="danger" class="px-3"></dropdown-toggle>
      <dropdown-menu dropup>
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Dropright variation</h4>
    <btn color="danger" class="m-0">Dropright</btn>
    <dropdown btn-group split dropright>
      <dropdown-toggle slot="toggle" color="danger" class="px-3"></dropdown-toggle>
      <dropdown-menu dropright>
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1" style="padding-left: 200px">Dropleft variation</h4>
    <dropdown btn-group dropleft style="padding-left: 200px">
      <dropdown-toggle slot="toggle" color="danger" class="px-3"></dropdown-toggle>
      <dropdown-menu dropleft>
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <btn color="danger" style="margin-left: -5px">Dropleft</btn>
    <h4 class="pb-1">Menu forms</h4>
    <dropdown>
      <dropdown-toggle slot="toggle" color="secondary">Dropdown link</dropdown-toggle>
      <dropdown-menu>
        <form class="px-4 py-3">
          <div class="form-group">
            <label for="exampleDropdownFormEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
          </div>
          <div class="form-group">
            <label for="exampleDropdownFormPassword1">Password</label>
            <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
          </div>
          <MdInput type="checkbox" id="checkbox1" label="Remember me" />
          <btn type="submit" color="primary">Sign in</btn>
        </form>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">New around here? Sign up</a>
        <a class="dropdown-item" href="#">Forgot password?</a>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Active menu items</h4>
    <dropdown>
      <dropdown-toggle slot="toggle" color="primary">Dropdown</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Action</dropdown-item>
        <dropdown-item active>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </container>
</template>

<script>
import { Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Btn, MdInput } from 'mdbvue';

export default {
  name: 'DropdownPage',
  components: {
    Container,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Btn,
    MdInput
  }
};
</script>

<style scoped>
</style>
