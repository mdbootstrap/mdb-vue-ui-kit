<template>
  <div>
    <component :is="tag" :class="className" :style="'z-index:' + zIndex">
      <li v-for="(link, index) in links" class="nav-item" :key="index">
        <mdb-dropdown v-if="link.dropdown">
          <mdb-dropdown-toggle slot="toggle" navLink>{{link.text}}</mdb-dropdown-toggle>
          <mdb-dropdown-menu :color="color">
            <div v-for="(item, index) in link.dropdownItems" :key="index">
              <div v-if="item.divider" class="dropdown-divider" />
              <mdb-dropdown-item v-else>{{item.text}}</mdb-dropdown-item>
            </div>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <a v-else :class="['nav-link ripple-parent', index === activeTab && 'active', link.disabled === true && 'disabled']" href="#" role="tab" @click.prevent="changeTab(index)" @click="wave">
          <mdb-icon v-if="link.icon" :icon="link.icon" :class="link.bigIcon ? 'pb-2' : 'pr-1'" size="2x" />
          <br v-if="link.bigIcon" />
          {{link.text}}
        </a>
      </li>
    </component>
    <div :class="contentClass" :style="'z-index:' + (zIndex - 1)">
      <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
        <div class="tab-pane" v-for="(pane, index) in content" :key="index" v-if="index === activeTab">
          <p class="p-0 m-0" v-html="pane" ref="pane" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import classNames from 'classnames';
import waves from '../mixins/waves';
import { mdbDropdown } from './Dropdown';
import { mdbDropdownToggle } from './DropdownToggle';
import { mdbDropdownMenu } from './DropdownMenu';
import { mdbDropdownItem } from './DropdownItem';
import { mdbIcon } from './Fa';

const Tabs = {
  components: {
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbIcon
  },
  props: {
    tag: {
      type: String,
      default: 'ul'
    },
    links: {
      type: [String, Array]
    },
    active: {
      type: Number,
      default: 0
    },
    content: {
      type: [String, Array]
    },
    color: {
      type: String
    },
    pills: {
      type: Boolean
    },
    tabs: {
      type: Boolean
    },
    vertical: {
      type: Boolean
    },
    justify: {
      type: Boolean
    },
    header: {
      type: Boolean
    },
    navClass: {
      type: String
    },
    card: {
      type: Boolean
    },
    zIndex: {
      type: Number,
      default: 1
    },
    border: {
      type: Boolean
    },
    default: {
      type: Boolean
    }
  },
  data() {
    return {
      activeTab: this.active,
      waves: true
    };
  },
  computed: {
    className() {
      return classNames(
        'nav',
        this.default && 'nav-tabs',
        this.tabs && 'nav-tabs md-tabs',
        this.justify && 'nav-justified',
        this.pills && 'md-pills',
        this.vertical && 'flex-column',
        this.pills && this.color ? 'pills-'+this.color : !this.pills && this.color ? 'tabs-'+this.color  : false,
        this.header && 'nav-pills card-header-pills',
        this.navClass
      );
    },
    contentClass() {
      return classNames(
        'tab-content',
        this.card && 'card',
        this.vertical && 'vertical',
        this.border && 'border-right border-bottom border-left rounded-bottom'
      );
    }
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
      this.$emit('activeTab', this.activeTab);
    },
    beforeEnter(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    leave(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    }
  },
  mixins: [waves]
};

export default Tabs;
export { Tabs as mdbTabs };
</script>

<style scoped>
.tab-content>.tab-pane {
  display: block;
  top: 0;
  transition: 0.3s ease-out;
}
</style>
