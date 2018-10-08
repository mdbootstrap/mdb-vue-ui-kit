<template>
  <card :class="cardClass">
    <card-header role="tab" @click.native="toggleVisible" :class="headerClass">
      <slot name="title"></slot>

      <!-- DEFAULT HEADER -->
      <h5 :class="headingClass" v-if="type === 'default'">
        <button class="btn btn-link" type="button" data-toggle="collapse" :data-expanded="isOpen" v-html="title">
        {{title}}
        </button>
      </h5>
      <!-- ICON HEADER -->
      <a v-else-if="type==='icon'" data-toggle="collapse" :aria-expanded="isOpen" :class="{collapsed: !isOpen}" >
        <h3 :class="headingClass" v-html="title">
          {{title}}
          <fa icon="angle-down" class="rotate-icon" size="2x"/>
        </h3>
      </a>
      <!-- COLOR SHADES OR PHOTOBG HEADER -->
      <a v-else-if="type==='color' || type==='photoBg'" data-toggle="collapse" :aria-expanded="isOpen" :class="{collapsed: !isOpen}" >
        <fa v-show="type==='photoBg'" :icon="icon" size="2x" class="p-3 mr-4 float-left black-text"/>
        <h4 :class="headingClass" v-html="title">
          {{title}}
        </h4>
      </a>

      <!-- FALLBACK HEADER -->
      <a v-else data-toggle="collapse" :aria-expanded="isOpen" :class="{collapsed: !isOpen}" class="fix">
        <h5 :class="headingClass">
          <span v-html="title">{{title}}</span>
          <fa icon="angle-down" class="rotate-icon" v-if="type!=='picture'"/>
        </h5>
      </a>

    </card-header>
    <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
      <card-body v-if="isOpen" class="collapse-item" :class="bodyClass" ref="body">
        <p :class="paragraphClass" v-html="content" v-if="content">
        {{content}}
        </p>
        <slot></slot>
      </card-body>
    </transition>
  </card>
</template>

<script>
import Card from './Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import Fa from './Fa';
import Dropdown from './Dropdown';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';
import DropdownItem from './DropdownItem';
import classNames from 'classnames';

const AccordionPane = {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    isOpen: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    content: {
      type: String
    },
    order: {
      type: Number
    },
    color: {
      type: String,
      default: ''
    },
    icon: {
      type: String
    }
  },
  components: {
    Card,
    CardHeader,
    CardBody,
    Fa,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
  },
  data() {
    return {

    };
  },
  methods: {
    toggleVisible() {
      this.$emit('pane-clicked', this);
    },
    beforeEnter(el) {
      this.elHeight = el.scrollHeight;
    },
    enter(el) {
      el.style.height = this.elHeight+'px';
    },
    beforeLeave(el) {
      el.style.height = 0;
    }
  },
  computed: {
    cardClass() {
      return classNames(
        this.type === 'default' && 'z-depth-0 bordered',
        this.type === 'color' && 'border-0',
        this.type === 'photoBg' && 'mb-4'
      );
    },
    headerClass() {
      return classNames(
        this.type==='gradient' && 'rgba-stylish-strong z-depth-1 mb-1',
        this.type==='picture' && 'blue lighten-3 z-depth-1',
        this.type==='color' && `z-depth-1 ${this.color} lighten-${4-this.order}`,
        this.type==='photoBg' && 'p-0'
      );
    },
    headingClass() {
      return classNames(
        'mb-0',
        this.type==='gradient' && 'white-text text-uppercase font-thin',
        this.type==='picture' && 'text-uppercase py-1 font-weight-bold white-text',
        this.type==='icon' && 'mt-3 red-text',
        this.type==='color' && 'black-text text-center font-weight-bold text-uppercase',
        this.type==='photoBg' && 'text-uppercase white-text py-3 mt-1',
        this.type==='table' && 'mt-1'
      );
    },
    bodyClass() {
      return classNames(
        this.type==='color' && `rgba-${this.color}-strong white-text`,
        this.type==='gradient' && 'mb-1 rgba-grey-light white-text',
        this.type==='photoBg' && 'rgba-black-light white-text z-depth-1'
      );
    },
    paragraphClass() {
      return classNames(
        this.type=='default' ? 'p-3': 'p-4'
      );
    },

  }
};
export default AccordionPane;
export { AccordionPane as mdbAccordionPane };
</script>

<style scoped>
a.fix:not([href]):not([tabindex]){
  color: #007bff;
}
a.fix:not([href]):not([tabindex]):hover {
  color: #0056b3;
}
.collapse-item {
  overflow: hidden;
  height: 0;
  padding: 0;
  transition: height .5s;
}
</style>
