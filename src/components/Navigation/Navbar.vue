<template>
  <component :class="navClass" :is="tag" @click="close">
    <button v-if="toggler" :class="navTogglerClass" type="button" data-toggle="collapse" :data-target="target" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation" @click.stop="onClick">
      <div v-if="animation" ref="animatedIcon" :class="`animated-icon${animation}`"><span></span><span></span><span></span><span v-if="animation === '2'"></span></div>
      <span v-else :class="navTogglerIcon">
        <mdb-icon v-if="hamburger" :icon="togglerIcon" :class="togglerIconClass" :size="togglerSize" :far="far" :fal="fal" :fab="fab" :fad="fad"/>
      </span>
    </button>
    <slot></slot>
  </component>
</template>

<script>
import classNames from 'classnames';
import mdbIcon from '../Content/Fa';

const Navbar = {
  components: {
    mdbIcon
  },
  props: {
    tag: {
      type: String,
      default: 'nav'
    },
    animation: {
      type: [Number, String],
      default: null
    },
    animated: {
      type: Boolean
    },
    color: {
      type: String
    },
    dark: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    double: {
      type: Boolean,
      default: false
    },
    expand: {
      type: String,
      default: 'large'
    },
    hamburger: {
      type: Boolean
    },
    navIconClass: {
      type: String
    },
    position: {
      type: String
    },
    target: {
      type: String,
      default: 'navbarSupportedContent'
    },
    togglerClass: {
      type: String
    },
    transparent: {
      type: Boolean
    },
    scrolling: {
      type: Boolean,
      default: false
    },
    scrollingOffset: {
      type: Number,
      default: 100
    },
    center: {
      type: Boolean,
      default: false
    },
    toggler: {
      type: Boolean,
      default: true
    },
    togglerIcon: {
      type: String,
      default: 'bars'
    },
    togglerSize: {
      type: String,
      default: '1x'
    },
    far: {
      type: Boolean,
      default: false
    },
    fal: {
      type: Boolean,
      default: false
    },
    fab: {
      type: Boolean,
      default: false
    },
    fad: {
      type: Boolean,
      default: false
    },
    togglerIconClass: String
  },
  data() {
    return {
      scrolled: false,
      toggleClicked : true,
    };
  },
  computed: {
    navClass() {
      let navColors = ["primary", "secondary", "danger", "warning", "success", "info", "default", "elegant", "stylish", "unique", "special"];
      return classNames(
        'navbar',
        this.dark && 'navbar-dark',
        this.light && 'navbar-light',
        this.color && !this.transparent &&navColors.indexOf(this.color) !== -1 ? this.color + '-color' : '',
        this.color && !this.transparent &&navColors.indexOf(this.color) === -1 ? this.color : '',
        this.expand === 'small' || this.expand === "sm" ? 'navbar-expand-sm' :
          this.expand === 'medium' || this.expand === "md" ? 'navbar-expand-md' :
            this.expand === 'large' || this.expand === "lg" ? 'navbar-expand-lg' : 'navbar-expand-lx',
        this.position === 'top' ? 'fixed-top' :
          this.position === 'bottom' ? 'fixed-bottom' : '',
        this.scrolling && 'scrolling-navbar',
        this.double && 'double-nav',
        this.center && 'justify-content-center'
      );
    },
    navTogglerIcon() {
      return classNames(
        this.hamburger ? '' : 'navbar-toggler-icon',
        this.navIconClass
      );
    },
    navTogglerClass() {
      return classNames(
        'navbar-toggler',
        this.togglerClass
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
        if (this.animation) {
          this.$refs.animatedIcon.classList.add('open');
        }
        this.toggleClicked = false;
      } else {
        this.collapse.classList.add('hide-navbar');
        this.collapse.classList.toggle('show-navbar');
        this.collapse.style.overflow = 'hidden';
        this.collapseOverflow = setTimeout(() => {
          this.collapse.classList.toggle('collapse');
          this.collapse.style.overflow = 'initial';
        }, 300);
        if (this.animation) {
          this.$refs.animatedIcon.classList.remove('open');
        }
        this.toggleClicked = true;
      }
    },
    close(e) {
      if (window.innerWidth > 990 || !this.toggler) return;
      if (e.target.classList.contains('dropdown-toggle')) return;
      if (e.target.tagName === 'INPUT') return;
      this.collapse.classList.add('hide-navbar');
      this.collapse.classList.remove('show-navbar');
      this.collapse.style.overflow = 'hidden';
      this.collapseOverflow = setTimeout(() => {
        this.collapse.classList.add('collapse');
        this.collapse.style.overflow = 'initial';
      }, 300);
      if (this.animation) {
        this.$refs.animatedIcon.classList.remove('open');
      }
      this.toggleClicked = true;
    },
    handleScroll() {
      if (this.scrolling) {
        if (window.scrollY > this.scrollingOffset && this.scrolled === false) {
          this.$el.style.paddingTop = 5 + 'px';
          this.$el.style.paddingBottom = 5 + 'px';
          if (this.transparent) this.$el.classList.add(`${this.color}-color`);
          this.$el.classList.add('top-nav-collapse');
          this.scrolled = true;
        } else if (window.scrollY < this.scrollingOffset && this.scrolled === true) {
          this.$el.style.paddingTop = 12 + 'px';
          this.$el.style.paddingBottom = 12 + 'px';
          if (this.transparent) this.$el.classList.remove(`${this.color}-color`);
          this.$el.classList.remove('top-nav-collapse');
          this.scrolled = false;
        }
      }
    },
    onClick(e) {
      if (e.target.classList.contains('navbar-toggler') || e.target.parentNode.classList.contains('navbar-toggler')) {
        this.toggle();
      }
    },
    searchForCollapseContent(node) {
      if ((typeof node.attributes === 'undefined') || (typeof node.attributes.id === 'undefined')) return;
      if (node.id === this.target) {
        this.collapse = node;
        this.collapse.classList.add('collapse');
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.$slots.default.forEach(child => {
      if (child.elm.id === this.target) {
        this.collapse = child.elm;
        this.collapse.classList.add('collapse');
      } else {
        this.children = child.elm.childNodes;
        this.children.forEach(nextChild => {
          this.searchForCollapseContent(nextChild);
          nextChild.childNodes.forEach(nextChild2 => {
            this.searchForCollapseContent(nextChild2);
            nextChild2.childNodes.forEach(nextChild3 => {
              this.searchForCollapseContent(nextChild3);
            });
          });
        });
      }
    });
  },
  destroy() {
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
.navbar-toggler i {
  pointer-events: none;
}

/* Icon 1 */

.animated-icon1, .animated-icon2, .animated-icon3 {
  width: 30px;
  height: 20px;
  position: relative;
  margin: 0px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

.animated-icon1 span, .animated-icon2 span, .animated-icon3 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
  pointer-events: none;
}

.animated-icon1 span {
    background: #e65100;
}

.animated-icon2 span {
    background: #e3f2fd;
}

.animated-icon3 span {
    background: #f3e5f5;
}

.animated-icon1 span:nth-child(1) {
  top: 0px;
}

.animated-icon1 span:nth-child(2) {
  top: 10px;
}

.animated-icon1 span:nth-child(3) {
  top: 20px;
}

.animated-icon1.open span:nth-child(1) {
  top: 11px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

.animated-icon1.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.animated-icon1.open span:nth-child(3) {
  top: 11px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

/* Icon 3*/

.animated-icon2 span:nth-child(1) {
  top: 0px;
}

.animated-icon2 span:nth-child(2), .animated-icon2 span:nth-child(3) {
  top: 10px;
}

.animated-icon2 span:nth-child(4) {
  top: 20px;
}

.animated-icon2.open span:nth-child(1) {
  top: 11px;
  width: 0%;
  left: 50%;
}

.animated-icon2.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.animated-icon2.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.animated-icon2.open span:nth-child(4) {
  top: 11px;
  width: 0%;
  left: 50%;
}

/* Icon 4 */

.animated-icon3 span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.animated-icon3 span:nth-child(2) {
  top: 10px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.animated-icon3 span:nth-child(3) {
  top: 20px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.animated-icon3.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 0px;
  left: 8px;
}

.animated-icon3.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

.animated-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 21px;
  left: 8px;
}

.navbar {
  transition: 1s;
}
</style>
