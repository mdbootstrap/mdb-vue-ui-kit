<template>
<div class="row">
  <div class="col-md-3 mt-5 mx-3">
    <list-group>
      <list-group-item :action="true" :active="true">Main Menu</list-group-item>
      <list-group-item :action="true">Messages <badge :pill="true">12</badge></list-group-item>
      <list-group-item :action="true">Sell Products</list-group-item>
      <list-group-item :action="true">Settings</list-group-item>
      <list-group-item :disabled="true">Can't Touch This</list-group-item>
    </list-group>
  </div>
</div>
</template>

<script>
import ListGroup from '../components/ListGroup.vue';
import ListGroupItem from '../components/ListGroupItem.vue';
import Badge from '../components/Badge.vue';

export default {
  name: 'ListGroupPage',
  components: {
    ListGroup,
    ListGroupItem,
    Badge
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
