<template>
  <component :is="tag" :class="outerAccodionClasses" role="tablist">
      <slot></slot>
    <accordion-pane
      v-for="(pane, index) in panes"
      :key="index"
      :title="pane.title"
      :content="pane.content"
      @pane-clicked="handlePaneOpened(index)"
      :isOpen="openPaneNum==index"
      :type="style"
      :color="shades"
      :order="index"
      :icon="pane.icon"
      :options="pane.options"
      :hamburger="hamburger"
      >
      </accordion-pane>
  </component>
</template>

<script>
import classNames from 'classnames';
import AccordionPane from './AccordionPane';

const Accordion = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    default: {
      type: Boolean,
      defaul: true
    },
    open: {
      type: Number,
      default: null
    },
    panes: {
      type: [Object, Array]
    },
    material: {
      type: Boolean,
      default: false
    },
    gradient: {
      type: Boolean,
      default: false
    },
    picture: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    shades: {
      type: String,
      default: null
    },
    photoBg: {
      type: Boolean,
      default: false
    },
    table: {
      type: Boolean,
      default: false
    },
    hamburger: {
      type: Boolean
    }
  },
  data() {
    return {
      openPaneNum: null
    };
  },
  components: {
    AccordionPane
  },
  mounted() {
    if (this.open!==null) {
      this.openPaneNum = this.open;
    }
  },
  methods: {
    handlePaneOpened(num) {
      if (this.openPaneNum == num) {return (this.openPaneNum = null);};
      this.openPaneNum = num;
    }
  },
  computed: {
    outerAccodionClasses() {
      return classNames(
        'accordion',
        this.material && 'md-accordion',
        this.gradient && 'md-accordion accordion-2',
        this.picture && 'md-accordion accordion-1',
        this.icon && 'md-accordion accordion-3 z-depth-1-half',
        this.shades && 'md-accordion accordion-4',
        this.photoBg && 'md-accordion accordion-5',
        this.table && 'md-accordion accordion-blocks'
      );
    },
    style() {
      let styleName;
      this.material && (styleName="material");
      this.gradient && (styleName="gradient");
      this.picture && (styleName="picture");
      this.icon && (styleName="icon");
      this.shades && (styleName="color");
      this.photoBg && (styleName="photoBg");
      this.photoBg && (styleName="photoBg");
      this.table && (styleName="table");
      return styleName;
    }
  }
};

export default Accordion;
export { Accordion as mdbAccordion };
</script>

<style scoped>
</style>
