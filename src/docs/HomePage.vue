<template>
    <div>
      <EdgeHeader color="teal darken-1"/>
      <div class="container free-bird">
        <row>
          <column md="10" class="mx-auto float-none white z-depth-1 py-2 px-2">
            <card-body>
              <h2 class="h2-responsive"><strong>MDB Vue</strong></h2>
              <p class="pb-4">Vue Bootstrap with Material Design</p>
            </card-body>
          </column>
        </row>
      </div>
      <container>
        <row>
          <column md="10" class="mx-auto mt-4 text-center">
            <p class="pt-4">Google has designed a Material Design to make the web more beautiful and more user-friendly.</p>
            <p>Twitter has created a Bootstrap to support you in faster and easier development of responsive and effective websites.</p>
            <p>We present you a framework containing the best features of both of them - Material Design for Bootstrap.</p>
          </column>
        </row>
        <hr/>
      <h3 class="pt-5 text-center">See it in action</h3>
      <row>
        <column md="4" class="text-center home-feature-box">
          <a href="#/css">
            <fa icon="css3" class="pink-text" />
            <span>CSS</span>
          </a>
        </column>
        <column md="4" class="text-center home-feature-box">
          <a href="#/components">
            <fa icon="cubes" class="blue-text" />
            <span>COMPONENTS</span>
          </a>
        </column>
        <column md="4" class="text-center home-feature-box">
          <a href="#/advanced">
            <fa icon="code" class="green-text" />
            <span>ADVANCED</span>
          </a>
        </column>
      </row>
      <ul class="py-2 text-center">
        <li><btn tag="a" size="sm" color="default" href="#/components/grid" target="_blank">Grid</btn></li>
        <li><btn tag="a" size="sm" color="default" href="#/components/liveDemo" target="_blank">Live Demo</btn></li>
      </ul>
      </container>
    </div>
</template>

<script>
import { Container, Column, Row, Fa, Navbar, NavbarItem, NavbarNav, NavbarCollapse, Btn, EdgeHeader, CardBody } from 'mdbvue';

export default {
  name: 'HomePage',
  components: {
    Container,
    Column,
    Row,
    Fa,
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Btn,
    EdgeHeader,
    CardBody
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.home-feature-box {
  padding: 40px 0;
}

.home-feature-box i {
  font-size: 6rem;
}

.home-feature-box span {
  display: block;
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #42b983;
}

</style>
