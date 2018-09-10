<template>
  <nav :class="navClass" :is="tag" :style="navStyles">
    <button class="navbar-toggler" type="button" data-toggle="collapse" :data-target="target" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <slot></slot>
  </nav>
</template>


<script>
import classNames from 'classnames';

const Navbar = {
  props: {
    tag: {
      type: String,
      default: 'nav'
    },
    expand: {
      type: String,
      default: 'large'
    },
    dark: {
      type: Boolean,
      default: false
    },
    position: {
      type: String
    },
    target: {
      type: String,
      default: '#navbarSupportedContent'
    },
    scrolling: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    transparent: {
      type: Boolean
    },
    navStyle: {
      type: String
    }
  },
  data() {
    return {
      scrolled: false,
      toggleClicked : true,
    };
  },
  computed: {
    navClass() {
      return  classNames(
        'navbar',
        this.dark ? 'navbar-dark' : 'navbar-light',
        this.color && !this.transparent ? this.color + '-color' : '',
        this.expand === 'small' ? 'navbar-expand-sm' :
          this.expand === 'medium' ? 'navbar-expand-md' :
            this.expand === 'large' ? 'navbar-expand-lg' : 'navbar-expand-lx',
        this.position === 'top' ? 'fixed-top' :
          this.position === 'bottom' ? 'fixed-bottom' : '',
        this.scrolling ? 'scrolling-navbar' : ''
      );
    },
    navStyles() {
      return (
        this.navStyle
      );
    }
  },
  methods: {
    toggle() {
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
    close() {
      this.collapse.classList.add('hide-navbar');
      this.collapse.classList.remove('show-navbar');
      this.collapse.style.overflow = 'hidden';
      this.collapseOverflow = setTimeout(() => {
        this.collapse.classList.add('collapse');
        this.collapse.style.overflow = 'initial';
      }, 300);
      this.toggleClicked = true;
    },
    handleScroll() {
      if (this.scrolling) {
        if (window.scrollY > 100 && this.scrolled === false) {
          this.$el.style.paddingTop = 5 + 'px';
          this.$el.style.paddingBottom = 5 + 'px';
          if (this.transparent) this.$el.classList.add(`${this.color}-color`);
          this.scrolled = true;
        } else if (window.scrollY < 100 && this.scrolled === true) {
          this.$el.style.paddingTop = 12 + 'px';
          this.$el.style.paddingBottom = 12 + 'px';
          if (this.transparent) this.$el.classList.remove(`${this.color}-color`);
          this.scrolled = false;
        }
      }
    },
    onClick(e) {
      if (e.target.classList.contains('navbar-toggler') || e.target.parentNode.classList.contains('navbar-toggler')) {
        this.toggle();
      } else if (this.toggleClicked === false) {
        let target = e.target;
        let body = document.getElementsByTagName('body')[0];
        if (!target.classList.contains('navbar-link')) {
          while (target !== body) {
            if (target.classList.contains('navbar')) {
              return;
            }
            target = target.parentNode;
          }
        }
        this.close();
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.onClick);
    this.collapse = this.$el.children.navbarSupportedContent;
    this.collapse.classList.add('collapse');
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    document.removeEventListener('click', this.onClick);
    window.removeEventListener('scroll', this.handleScroll);
  }
};

export default Navbar;
export { Navbar as mdbNavbar };
</script>

<style scoped>
.scrolling-navbar {
  transition: padding .5s;
}
.nav-item {
  position: relative;
}
.navbar-toggler {
  order: 1;
}
.navbar-collapse {
  order: 2;
}
</style>
