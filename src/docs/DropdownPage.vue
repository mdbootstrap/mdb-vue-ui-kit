<template>
  <div>
    <dropdown btn-group>
      <dropdown-toggle>DROPDOWN</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Link 1</dropdown-item>
        <dropdown-item>Link 2</dropdown-item>
        <dropdown-item>Link 3</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <dropdown btn-group>
      <dropdown-toggle color="success">DROPDOWN</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Link 1</dropdown-item>
        <dropdown-item>Link 2</dropdown-item>
        <dropdown-item>Link 3</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <dropdown btn-group>
      <dropdown-toggle color="indigo">DROPDOWN</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Link 1</dropdown-item>
        <dropdown-item>Link 2</dropdown-item>
        <dropdown-item>Link 3</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <dropdown btn-group>
      <dropdown-toggle color="danger">DROPDOWN</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Link 1</dropdown-item>
        <dropdown-item>Link 2</dropdown-item>
        <dropdown-item>Link 3</dropdown-item>
      </dropdown-menu>
    </dropdown>
    <dropdown btn-group>
      <dropdown-toggle color="info">DROPDOWN</dropdown-toggle>
      <dropdown-menu>
        <dropdown-item>Link 1</dropdown-item>
        <dropdown-item>Link 2</dropdown-item>
        <dropdown-item>Link 3</dropdown-item>
      </dropdown-menu>
    </dropdown>
  </div>
</template>

<script>
import container from '@/components/Container';
import button from '@/components/Button';
import dropdown from '@/components/Dropdown';
import dropdownToggle from '@/components/DropdownToggle';
import dropdownMenu from '@/components/DropdownMenu';
import dropdownItem from '@/components/DropdownItem';

export default {
  name: 'DropdownPage',
  data() {
    return {
    };
  },
  methods: {
    toggleMenu(element) {
      if (element.className == 'dropdown-menu d-none') {
        element.className = 'dropdown-menu d-block';
      } else {
        element.className = 'dropdown-menu d-none';
      }
    }
  },
  created() {
    this.$on('drop', function(toggle) {
      this.toggle = toggle;
      this.toggleMenu(this.toggle);
    });
  },
  components: {
    'Container': container,
    'Btn': button,
    'Dropdown': dropdown,
    'DropdownToggle': dropdownToggle,
    'DropdownMenu': dropdownMenu,
    'DropdownItem': dropdownItem
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
