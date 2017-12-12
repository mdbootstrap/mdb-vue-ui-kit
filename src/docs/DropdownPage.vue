<template>
  <div>
    <dropdown btn-group>
      <dropdown-toggle>DROPDOWN 1</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Link 1</dropdown-item>
        <dropdown-item>Link 2</dropdown-item>
        <dropdown-item>Link 3</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <dropdown btn-group>
      <dropdown-toggle color="primary">DROPDOWN 2</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Link 1</dropdown-item>
        <dropdown-item>Link 2</dropdown-item>
        <dropdown-item>Link 3</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <dropdown btn-group>
      <dropdown-toggle color="indigo">DROPDOWN 3</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Link 1</dropdown-item>
        <dropdown-item>Link 2</dropdown-item>
        <dropdown-item>Link 3</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <dropdown btn-group>
      <dropdown-toggle color="danger">DROPDOWN 4</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Link 1</dropdown-item>
        <dropdown-item>Link 2</dropdown-item>
        <dropdown-item>Link 3</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <dropdown btn-group>
      <dropdown-toggle color="info">DROPDOWN 5</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Link 1</dropdown-item>
        <dropdown-item>Link 2</dropdown-item>
        <dropdown-item>Link 3</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <br><br>
    <dropdown btn-group>
      <btn>Action</btn>
      <dropdown-toggle size="lg" class="px-3"></dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Link 1</dropdown-item>
        <dropdown-item>Link 2</dropdown-item>
        <dropdown-item>Link 3</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <br><br>
    <dropdown btn-group dropup>
      <btn>Action</btn>
      <dropdown-toggle size="lg" class="px-3"></dropdown-toggle>
      <dropdown-menu dropup>
        <dropdown-item>Link 1</dropdown-item>
        <dropdown-item>Link 2</dropdown-item>
        <dropdown-item>Link 3</dropdown-item>
      </dropdown-menu>
    </dropdown>
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue';
import DropdownToggle from '@/components/DropdownToggle.vue';
import DropdownMenu from '@/components/DropdownMenu.vue';
import DropdownItem from '@/components/DropdownItem.vue';
import drop from '../mixins/drop';
import Btn from '@/components/Button.vue';

export default {
  name: 'DropdownPage',
  data() {
    return {
    };
  },
  components: {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Btn
  },
  mixins: [drop]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
