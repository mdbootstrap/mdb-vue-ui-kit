<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">Buttons Group </h4>
      <a href="https://mdbootstrap.com/docs/vue/components/button-group/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-btn-group>
          <mdb-btn color="primary">Left</mdb-btn>
          <mdb-btn color="primary">Middle</mdb-btn>
          <mdb-btn color="primary">Right</mdb-btn>
        </mdb-btn-group>
      </section>
    </section>
    <section class="demo-section">
      <h4>Button toolbar</h4>
      <section>
        <mdb-btn-toolbar>
          <mdb-btn-group class="mr-2">
            <mdb-btn>1</mdb-btn>
            <mdb-btn>2</mdb-btn>
            <mdb-btn>3</mdb-btn>
            <mdb-btn>4</mdb-btn>
          </mdb-btn-group>
          <mdb-btn-group class="mr-2">
            <mdb-btn>5</mdb-btn>
            <mdb-btn>6</mdb-btn>
            <mdb-btn>7</mdb-btn>
          </mdb-btn-group>
          <mdb-btn-group>
            <mdb-btn>8</mdb-btn>
          </mdb-btn-group>
        </mdb-btn-toolbar>
      </section>
    </section>
    <section class="demo-section">
      <h4>Sizing</h4>
      <section>
        <mdb-btn-group size="lg">
          <mdb-btn color="unique" size="lg">Left</mdb-btn>
          <mdb-btn color="unique" size="lg">Middle</mdb-btn>
          <mdb-btn color="unique" size="lg">Right</mdb-btn>
        </mdb-btn-group>
        <br><br>
        <mdb-btn-group>
          <mdb-btn color="unique">Left</mdb-btn>
          <mdb-btn color="unique">Middle</mdb-btn>
          <mdb-btn color="unique">Right</mdb-btn>
        </mdb-btn-group>
        <br><br>
        <mdb-btn-group size="sm">
          <mdb-btn color="unique" size="sm">Left</mdb-btn>
          <mdb-btn color="unique" size="sm">Middle</mdb-btn>
          <mdb-btn color="unique" size="sm">Right</mdb-btn>
        </mdb-btn-group>
      </section>
    </section>
    <section class="demo-section">
      <h4>Nesting</h4>
      <section>
        <mdb-btn-group>
          <mdb-btn color="info">1</mdb-btn>
          <mdb-btn color="info">2</mdb-btn>
          <mdb-btn-group>
            <mdb-dropdown>
              <mdb-dropdown-toggle color="info" slot="toggle">Dropdown</mdb-dropdown-toggle>
              <mdb-dropdown-menu color="info">
                <mdb-dropdown-item>Dropdown link</mdb-dropdown-item>
                <mdb-dropdown-item>Dropdown link</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-btn-group>
        </mdb-btn-group>
      </section>
    </section>
    <section class="demo-section">
      <h4>Vertical variation</h4>
      <section>
        <mdb-btn-group vertical>
          <mdb-btn color="amber" class="mb-0">Button</mdb-btn>
          <mdb-btn color="amber" class="mb-0">Button</mdb-btn>
          <mdb-btn color="amber" class="mb-0">Button</mdb-btn>
          <mdb-btn color="amber" class="mb-0">Button</mdb-btn>
          <mdb-btn color="amber" class="mb-0">Button</mdb-btn>
          <mdb-btn color="amber">Button</mdb-btn>
        </mdb-btn-group>
        <mdb-btn-group vertical class="ml-5">
          <mdb-btn color="indigo" class="ml-0 mb-0">Button</mdb-btn>
          <mdb-btn color="indigo" class="ml-0 mb-0">Button</mdb-btn>
          <mdb-btn-group>
            <mdb-dropdown>
              <mdb-dropdown-toggle color="indigo" slot="toggle">Dropdown</mdb-dropdown-toggle>
              <mdb-dropdown-menu color="indigo">
                <mdb-dropdown-item>Dropdown link</mdb-dropdown-item>
                <mdb-dropdown-item>Dropdown link</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-btn-group>
          <mdb-btn-group>
            <mdb-dropdown>
              <mdb-dropdown-toggle color="indigo" slot="toggle">Dropdown</mdb-dropdown-toggle>
              <mdb-dropdown-menu color="indigo">
                <mdb-dropdown-item>Dropdown link</mdb-dropdown-item>
                <mdb-dropdown-item>Dropdown link</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-btn-group>
          <mdb-btn color="indigo" class="ml-0 mb-0">Button</mdb-btn>
          <mdb-btn color="indigo" class="ml-0">Button</mdb-btn>
        </mdb-btn-group>
      </section>
    </section>
    <section class="demo-section">
      <h4>Additional button group</h4>
      <section>
        <mdb-btn-group>
          <mdb-btn color="cyan">Left</mdb-btn>
          <mdb-btn color="cyan">Middle</mdb-btn>
          <mdb-btn color="cyan">Right</mdb-btn>
        </mdb-btn-group>
        <br><br>
        <mdb-btn-group>
          <mdb-btn gradient="aqua">Left</mdb-btn>
          <mdb-btn gradient="aqua">Middle</mdb-btn>
          <mdb-btn gradient="aqua">Right</mdb-btn>
        </mdb-btn-group>
        <br><br>
        <mdb-btn-group>
          <mdb-btn color="indigo" fab icon="instagram" iconClass="fa-sm">Left</mdb-btn>
          <mdb-btn color="indigo" fab icon="twitter" iconClass="fa-sm">Middle</mdb-btn>
          <mdb-btn color="indigo" fab icon="snapchat-ghost" iconClass="fa-sm">Right</mdb-btn>
        </mdb-btn-group>
        <br><br>
        <mdb-btn-group>
          <mdb-btn outline="mdb-color" darkWaves fab icon="instagram" iconClass="fa-sm">Left</mdb-btn>
          <mdb-btn outline="mdb-color" darkWaves fab icon="twitter" iconClass="fa-sm">Middle</mdb-btn>
          <mdb-btn outline="mdb-color" darkWaves fab icon="snapchat-ghost" iconClass="fa-sm">Right</mdb-btn>
        </mdb-btn-group>
      </section>
    </section>
    <section class="demo-section">
      <h4>Multicolored button group</h4>
      <section>
        <mdb-btn-group>
          <mdb-btn color="primary" size="lg">Left</mdb-btn>
          <mdb-btn color="warning" size="lg">Middle</mdb-btn>
          <mdb-btn color="danger" size="lg">Right</mdb-btn>
        </mdb-btn-group>
        <br><br>
        <mdb-btn-group>
          <mdb-btn color="primary">Left</mdb-btn>
          <mdb-btn color="warning">Middle</mdb-btn>
          <mdb-btn color="danger">Right</mdb-btn>
        </mdb-btn-group>
        <br><br>
        <mdb-btn-group>
          <mdb-btn color="primary" size="sm">Left</mdb-btn>
          <mdb-btn color="warning" size="sm">Middle</mdb-btn>
          <mdb-btn color="danger" size="sm">Right</mdb-btn>
        </mdb-btn-group>
        <br><br>
        <mdb-btn-group vertical>
          <mdb-btn color="primary" class="mb-0">Button</mdb-btn>
          <mdb-btn color="pink" class="mb-0">Button</mdb-btn>
          <mdb-btn color="success" class="mb-0">Button</mdb-btn>
          <mdb-btn color="warning" class="mb-0">Button</mdb-btn>
          <mdb-btn color="danger" class="mb-0">Button</mdb-btn>
        </mdb-btn-group>
        <br><br>
        <mdb-btn-toolbar>
          <mdb-btn-group class="mr-2">
            <mdb-btn color="mdb-color lighten-2">1</mdb-btn>
            <mdb-btn color="indigo lighten-2">2</mdb-btn>
            <mdb-btn color="blue lighten-2">3</mdb-btn>
            <mdb-btn color="light-blue lighten-2">4</mdb-btn>
            <mdb-btn color="cyan lighten-2">5</mdb-btn>
          </mdb-btn-group>
        </mdb-btn-toolbar>
        <br>
        <mdb-btn-toolbar>
          <mdb-btn-group class="mr-2">
            <mdb-btn color="mdb-color lighten-2" icon="star" />
            <mdb-btn color="indigo lighten-2" icon="heart" />
            <mdb-btn color="blue lighten-2" icon="user" />
            <mdb-btn color="light-blue lighten-2" fab icon="twitter" />
          </mdb-btn-group>
        </mdb-btn-toolbar>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbBtn, mdbBtnGroup, mdbBtnToolbar, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbContainer, mdbIcon, mdbRow } from 'mdbvue';

export default {
  name: 'ButtonsGroupPage',
  components: {
    mdbBtn,
    mdbBtnGroup,
    mdbBtnToolbar,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbContainer,
    mdbIcon,
    mdbRow
  }
};
</script>

<style scoped>
.btn-group-lg .btn, .btn-group-sm .btn {
  border-radius: 2px;
}
</style>
