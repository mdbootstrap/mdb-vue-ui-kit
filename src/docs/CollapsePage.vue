<template>
  <div>
    <button class="btn btn-primary" collapse @click.prevent="collapse1 = !collapse1">Collapse 1</button>
    <a href="#" class="btn btn-info" @click.prevent="collapse1 = !collapse1">Collapse 2</a>
    <transition name="slide-toggle">
        <div v-show="collapse1" class="collapse-item">
          <h5>Collapsing text</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'CollapsePage',
  data() {
    return {
      collapse1: false
    };
  }
};
</script>

<style scoped>
.collapse-item {
  overflow: hidden;
  padding-top: 10px;
}
.slide-toggle-enter-active,
.slide-toggle-leave-active {
  transition: max-height .5s ease-in;
}
.slide-toggle-enter-active {
  max-height: 500px;
}
.slide-toggle-enter,
.slide-toggle-leave-active {
  max-height: 0;
  margin: 0;
}
.slide-toggle-leave {
  max-height: 500px;
}
</style>
