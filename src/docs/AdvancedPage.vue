<template>
  <container>
    <row>
      <column md="8" class="mx-auto">
        <jumbotron class="mt-3">
          <h1><Fa icon="code" class="grey-text" /> Advanced</h1>
          <ul class="list-unstyled example-components-list">
            <a href="#/components/carousel"><li>Carousel <fa icon="angle-right"/></li></a>
            <a href="#/components/chart"><li>Charts <fa icon="angle-right"/></li></a>
            <a href="#/components/collapse"><li>Collapse <fa icon="angle-right"/></li></a>
            <a href="#/components/popover"><li>Popover <fa icon="angle-right"/></li></a>
            <a href="#/components/tooltip"><li>Tooltip <fa icon="angle-right"/></li></a>
          </ul>
        </jumbotron>
      </column>
    </row>
  </container>
</template>

<script>
import Container from '../components/Container.vue';
import Row from '../components/Row.vue';
import Column from '../components/Col.vue';
import Fa from '../components/Fa.vue';
import Jumbotron from '../components/Jumbotron.vue';

export default {
  name: 'AdvancedPage',
  components: {
    Container,
    Row,
    Column,
    Fa,
    Jumbotron
  }
};
</script>

<style scoped>
.example-components-list {
  padding-top: 20px;
}

.example-components-list li {
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #f7f7f7;
  transition: .3s;
}

.example-components-list li:hover {
  background-color: #fafafa;
}

.example-components-list i {
  float: right;
  padding-top: 3px;
}
</style>