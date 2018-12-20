<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Collapse</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/collapse/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4"/>
    <h3>Basic example</h3>
    <mdb-collapse :toggleTag="['a', 'button']" :togglers="2" :toggleClass="['btn btn-primary', 'btn-primary']" :toggleText="['Collapse link', 'Collapse button']">
      <h5 class="pt-3">Collapsing text</h5>
      <p class="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    </mdb-collapse>
    <h3 class="mt-5">Multiple targets</h3>
    <mdb-btn color="primary" @click.native.prevent="collapse2 === true ? collapse2 = false : collapse2 = true">Toggle first element</mdb-btn>
    <mdb-btn color="primary" @click.native.prevent="collapse3 === true ? collapse3 = false : collapse3 = true">Toggle second element</mdb-btn>
    <mdb-btn color="primary" @click.native.prevent="[collapse2 === true ? collapse2 = false : collapse2 = true] && [collapse3 === true ? collapse3 = false : collapse3 = true]">Toggle both elements</mdb-btn>
    <mdb-row>
      <mdb-col sm="6">
        <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
          <mdb-card v-if="collapse2" class="collapse-item mt-2">
            <mdb-card-body>
              <h5 class="pt-2">Collapsing text</h5>
              <p class="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </mdb-card-body>
          </mdb-card>
        </transition>
      </mdb-col>
      <mdb-col sm="6">
        <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
          <mdb-card v-if="collapse3" class="collapse-item mt-2">
            <mdb-card-body>
              <h5 class="pt-2">Collapsing text</h5>
              <p class="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </mdb-card-body>
          </mdb-card>
        </transition>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbCollapse, mdbBtn, mdbContainer, mdbCol, mdbRow, mdbCard, mdbCardBody, mdbIcon } from 'mdbvue';

export default {
  name: 'CollapsePage',
  components: {
    mdbCollapse,
    mdbBtn,
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbCard,
    mdbCardBody,
    mdbIcon
  },
  data() {
    return {
      collapse2: false,
      collapse3: false
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.height = 0;
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave(el) {
      el.style.height = 0;
    }
  }
};
</script>

<style scoped>
.collapse-item {
  overflow: hidden;
  height: 0;
  padding: 0;
  transition: height .5s;
}
</style>
