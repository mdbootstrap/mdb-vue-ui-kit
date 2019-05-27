<template>
  <component :is="tag" :class="className" @click="(e) => handleClick(e)" ref="navItem">
    <router-link tag="a" v-if="to" :exact="exact" active-class='active' exact-active-class='active' :class='anchorClassName' :to="to" :target="tab">
      <slot></slot>
    </router-link>
    <a v-else :href="href" :class="anchorClassName" :target="tab">
      <slot></slot>
    </a>
  </component>

</template>

<script>
import classNames from 'classnames';
import waves from '../../mixins/waves';

const NavbarItem = {
  props: {
    tag: {
      type: String,
      default: 'li'
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean
    },
    exact: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
    },
    newTab: {
      type: Boolean,
      default: false
    },
    to: [String, Object],
    waves: {
      type: Boolean,
      default: true
    },
    wavesFixed: {
      type: Boolean,
      default: false
    },
    anchorClass: {
      type: String
    }
  },
  data() {
    return {
      isNavFixed: false
    };
  },
  computed: {
    className() {
      return classNames(
        'nav-item',
        this.waves && 'ripple-parent'
      );
    },
    anchorClassName() {
      return classNames({
        'nav-link': true,
        'navbar-link': true,
        'disabled': this.disabled,
        'active': this.active,
      },
      this.anchorClass
      );
    },
    tab() {
      if (this.newTab) {
        return "_blank";
      } return false;
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
      this.wave(e);
    }
  },
  mounted() {
    let el = this.$refs.navItem;
    while (el.parentNode) {
      if (el.className.includes('fixed')) {
        this.isNavFixed = true;
        break;
      }
      el = el.parentNode;
    };
  },
  mixins: [waves]
};

export default NavbarItem;
export { NavbarItem as mdbNavItem };
</script>

<style scoped>

</style>
