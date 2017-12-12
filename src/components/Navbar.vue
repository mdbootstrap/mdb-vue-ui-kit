<template>
  <nav :class="className" :is="tag">
    <a :href="href" class="navbar-brand">{{name}}
      <img v-if="src" :src="src" :alt="alt"/>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" :data-target="target" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation" v-on:click="toggle">
      <span class="navbar-toggler-icon"></span>
    </button>
    <slot></slot>
  </nav>
</template>


<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: 'nav'
    },
    expand: {
      type: String,
      default: 'large'
    },
    position: {
      type: String
    },
    href: {
      type: String,
    },
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
    name: {
      type: String,
    },
    target: {
      type: String,
      default: '#navbarSupportedContent'
    },
    scrolling: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      className: classNames(
      'navbar',
      'navbar-dark',
      this.expand === 'small' ? 'navbar-expand-sm' :
      this.expand === 'medium' ? 'navbar-expand-md' :
      this.expand === 'large' ? 'navbar-expand-lg' : 'navbar-expand-lx',
      this.position === 'top' ? 'fixed-top' :
      this.position === 'bottom' ? 'fixed-bottom' : '',
      this.scrolling ? 'scrolling-navbar' : ''
      ),
      scrolled: false,
      toggleClicked : true
    };
  },
  methods: {
    toggle(e) {
      if (this.toggleClicked) {
        this.collapse.classList.toggle('show-navbar');
        this.collapse.classList.remove('hide-navbar');
        this.collapse.classList.toggle('collapse');
        this.collapse.style.overflow = 'hidden';
        this.collapseOverflow = setTimeout(() => {
          this.collapse.style.overflow = 'initial';
        }, 300);
        this.toggleClicked = false;
      } else {
        this.collapse.classList.add('hide-navbar');
        this.collapse.classList.toggle('show-navbar');
        this.collapse.style.overflow = 'hidden';
        this.collapseOverflow = setTimeout(() => {
          this.collapse.classList.toggle('collapse');
          this.collapse.style.overflow = 'initial';
        }, 300);
        this.toggleClicked = true;
      }
    },
    handleScroll() {
      if (window.scrollY > 100 && this.scrolled === false) {
        this.$el.style.paddingTop = 5 + 'px';
        this.$el.style.paddingBottom = 5 + 'px';
        this.scrolled = true;
      } else if (window.scrollY < 100 && this.scrolled === true) {
        this.$el.style.paddingTop = 12 + 'px';
        this.$el.style.paddingBottom = 12 + 'px';
        this.scrolled = false;
      }
    }
  },
  mounted() {
    this.collapse = this.$el.children.navbarSupportedContent;
    this.collapse.classList.add('collapse');
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.scrolling-navbar {
  transition: padding .5s;
}
.nav-item {
  position: relative;
}
</style>
