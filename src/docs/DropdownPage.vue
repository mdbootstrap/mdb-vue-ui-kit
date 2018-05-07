<template>
  <container class="mt-5">
    <h4 class="pb-1">Basic example</h4>
    <dropdown btn-group>
      <dropdown-toggle @click.native="toggleDropdown(0)">Basic dropdown</dropdown-toggle>
      <dropdown-menu v-show="active[0]" class="collapse-item">
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Sizing</h4>
    <dropdown btn-group>
      <dropdown-toggle color="danger" @click.native="toggleDropdown(1)" size="lg">Large button</dropdown-toggle>
      <dropdown-menu v-show="active[1]">
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <dropdown btn-group>
      <dropdown-toggle color="danger" @click.native="toggleDropdown(2)" size="sm">Small button</dropdown-toggle>
      <dropdown-menu v-show="active[2]">
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Dropup variation</h4>
    <dropdown btn-group dropup>
      <dropdown-toggle @click.native="toggleDropdown(3)" color="primary">Dropup</dropdown-toggle>
      <dropdown-menu v-show="active[3]" dropup class="collapse-item">
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Alignment</h4>
    <dropdown btn-group>
      <dropdown-toggle @click.native="toggleDropdown(4)" color="primary">This dropdown's menu is right-aligned</dropdown-toggle>
      <dropdown-menu v-show="active[4]" right class="collapse-item">
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Menu headers</h4>
    <dropdown>
      <dropdown-toggle @click.native="toggleDropdown(5)" color="primary">Dropdown</dropdown-toggle>
      <dropdown-menu v-show="active[5]" class="collapse-item">
        <h6 class="dropdown-header">Dropdown header</h6>
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Menu dividers</h4>
    <dropdown>
      <dropdown-toggle @click.native="toggleDropdown(6)" color="primary">Dropdown</dropdown-toggle>
      <dropdown-menu v-show="active[6]" class="collapse-item">
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Disabled menu items</h4>
    <dropdown>
      <dropdown-toggle @click.native="toggleDropdown(7)" color="primary">Dropdown</dropdown-toggle>
      <dropdown-menu v-show="active[7]" class="collapse-item">
        <dropdown-item>Regular link</dropdown-item>
        <dropdown-item class="disabled">Disabled link</dropdown-item>
        <dropdown-item>Another link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Split button dropdowns</h4>
    <dropdown btn-group>
      <btn color="danger">Action</btn>
    </dropdown>
    <dropdown btn-group split>
      <dropdown-toggle @click.native="toggleDropdown(8)" color="danger" class="px-3"></dropdown-toggle>
      <dropdown-menu v-show="active[8]" class="collapse-item">
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Dropup with split variation</h4>
    <dropdown btn-group>
      <btn color="danger">Dropup</btn>
    </dropdown>
    <dropdown btn-group split dropup>
      <dropdown-toggle @click.native="toggleDropdown(9)" color="danger" class="px-3"></dropdown-toggle>
      <dropdown-menu v-show="active[9]" dropup class="collapse-item">
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1">Dropright variation</h4>
    <dropdown btn-group>
      <btn color="danger">Dropright</btn>
    </dropdown>
    <dropdown btn-group split dropright>
      <dropdown-toggle @click.native="toggleDropdown(10)" color="danger" class="px-3"></dropdown-toggle>
      <dropdown-menu v-show="active[10]" dropright class="collapse-item">
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <h4 class="pt-4 pb-1" style="padding-left: 200px">Dropleft variation</h4>
    <dropdown btn-group dropleft style="padding-left: 200px">
      <dropdown-toggle @click.native="toggleDropdown(11)" color="danger" class="px-3"></dropdown-toggle>
      <dropdown-menu v-show="active[11]" dropleft class="collapse-item">
        <dropdown-item>Action</dropdown-item>
        <dropdown-item>Another action</dropdown-item>
        <dropdown-item>Something else here</dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item>Separated link</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <dropdown btn-group split>
      <btn color="danger">Dropleft</btn>
    </dropdown>
    <h4 class="pb-1">Menu forms</h4>
    <dropdown>
      <dropdown-toggle @click.native="toggleDropdown(12)" color="secondary">Dropdown link</dropdown-toggle>
      <dropdown-menu v-show="active[12]" class="collapse-item">
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
      <dropdown-toggle @click.native="toggleDropdown(13)" color="primary">Dropdown</dropdown-toggle>
      <dropdown-menu v-show="active[13]" class="collapse-item">
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
  data() {
    return {
      active: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false
      }
    };
  },
  components: {
    Container,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Btn,
    MdInput
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
