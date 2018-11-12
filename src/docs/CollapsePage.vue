<template>
  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Collapse</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/collapse/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr class="mb-4"/>
    <h3>Basic example</h3>
    <collapse :toggleTag="['a', 'button']" :togglers="2" :toggleClass="['btn btn-primary', 'btn-primary']" :toggleText="['Collapse link', 'Collapse button']">
      <h5 class="pt-3">Collapsing text</h5>
      <p class="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    </collapse>
    <h3 class="mt-5">Multiple targets</h3>
    <btn color="primary" @click.native.prevent="collapse2 === true ? collapse2 = false : collapse2 = true">Toggle first element</btn>
    <btn color="primary" @click.native.prevent="collapse3 === true ? collapse3 = false : collapse3 = true">Toggle second element</btn>
    <btn color="primary" @click.native.prevent="[collapse2 === true ? collapse2 = false : collapse2 = true] && [collapse3 === true ? collapse3 = false : collapse3 = true]">Toggle both elements</btn>
    <row>
      <column sm="6">
        <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
          <card v-if="collapse2" class="collapse-item mt-2">
            <card-body>
              <h5 class="pt-2">Collapsing text</h5>
              <p class="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </card-body>
          </card>
        </transition>
      </column>
      <column sm="6">
        <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
          <card v-if="collapse3" class="collapse-item mt-2">
            <card-body>
              <h5 class="pt-2">Collapsing text</h5>
              <p class="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </card-body>
          </card>
        </transition>
      </column>
    </row>
  </container>
</template>

<script>
import { Collapse, Btn, Container, Column, Row, Card, CardBody, Fa } from 'mdbvue';

export default {
  name: 'CollapsePage',
  components: {
    Collapse,
    Btn,
    Container,
    Column,
    Row,
    Card,
    CardBody,
    Fa
  },
  data() {
    return {
      collapse2: false,
      collapse3: false
    };
  },
  methods: {
    beforeEnter(el) {
      this.elHeight = el.scrollHeight;
    },
    enter(el) {
      el.style.height = this.elHeight+'px';
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
