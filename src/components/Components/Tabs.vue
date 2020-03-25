<template>
  <div>
    <component :is="tag" :class="className" :style="'z-index:' + zIndex">
      <li v-for="(link, index) in filteredLinks" class="nav-item" :key="index">
        <mdb-dropdown v-if="link.dropdown" :style="justify && {display: 'block'}">
          <mdb-dropdown-toggle tag="a" :class="link.class" :color="!pills ? color : ''" slot="toggle" navLink>{{
            link.text
          }}</mdb-dropdown-toggle>
          <mdb-dropdown-menu :color="color">
            <div v-for="(item, index) in link.dropdownItems" :key="index">
              <div v-if="item.divider" class="dropdown-divider" />
              <mdb-dropdown-item :href="item.href" :target="item.target" v-else>{{ item.text }}</mdb-dropdown-item>
            </div>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <a
          v-else
          :class="[
            'nav-link ripple-parent',
            index === activeTab && 'active',
            link.disabled === true && 'disabled'
          ]"
          href="#"
          role="tab"
          @click.prevent="changeTab(index)"
          @click="wave"
        >
          <mdb-icon
            v-if="link.icon"
            :icon="link.icon"
            :fab="link.fab"
            :far="link.far"
            :fal="link.fal"
            :fad="link.fad"
            :fas="!link.fab && !link.far && !link.fal && !link.fad"
            :class="[link.bigIcon ? 'pb-2' : 'pr-1', link.iconClass]"
            :size="link.bigIcon && '2x'"
          />
          <br v-if="link.bigIcon" />
          {{ link.text }}
        </a>
      </li>
    </component>
    <div
      :class="contentClass"
      v-if="content || hasSlots"
      :style="{
        'z-index': zIndex - 1,
        height: height,
        transition: `height ${transitionDuration}s ${transitionStyle}`
      }"
    >
      <transition-group
        @enter="enter"
        @leave="leave"
      >
        <div
          class="tab-pane animated fadeIn"
          v-for="link in filteredLinks"
          :key="link.index"
          v-show="link.index === activeTab"
          :style="{
            position: `${link.index === activeTab ? 'relative' : 'absolute'};`,
            top: 0,
            left: 0,
            'z-index': `${link.index === activeTab ? '1' : '-1'}`,
            transitionDuration: transitionDuration,
            transitionStyle: transitionStyle
          }"
        >
          <p
            v-if="content"
            class="p-0 m-0"
            v-html="content[link.index]"
          />
          <slot v-else :name="link.slot || link.text"></slot>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import waves from "../../mixins/waves";
import { mdbDropdown } from "./Dropdown";
import { mdbDropdownToggle } from "./DropdownToggle";
import { mdbDropdownMenu } from "./DropdownMenu";
import { mdbDropdownItem } from "./DropdownItem";
import { mdbIcon } from "../Content/Fa";

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
      default: "ul"
    },
    links: {
      type: [String, Array],
      default: () => []
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
    },
    fill: {
      type: Boolean
    },
    transitionDuration: {
      type: Number,
      default: 0.4
    },
    transitionStyle: {
      type: String,
      default: "ease-out"
    },
    minHeight: {
      type: Number,
      default: 0
    },
    gradient: {
      type: String
    },
    rounded: {
      type: Boolean
    },
    outline: {
      type: String
    }
  },
  data() {
    return {
      activeTab: -1,
      tabLinks: [],
      height: "100px"
    };
  },
  computed: {
    filteredLinks() {
      if (typeof this.links === "string") {
        this.tabLinks.push({ text: this.links });
      } else {
        this.tabLinks = [...this.links];
      }
      return this.tabLinks.map((link, index) => {
        link.index = index;
        return link;
      });
    },
    hasSlots() {
      return Object.entries(this.$slots).length !== 0 && this.$slots.constructor === Object;
    },
    className() {
      return [
        "nav",
        this.default && "nav-tabs",
        this.tabs && "nav-tabs md-tabs",
        this.justify && "nav-justified",
        this.pills && "nav-pills md-pills",
        this.fill && "nav-fill",
        this.vertical && "flex-column",
        this.pills && this.color
          ? "pills-" + this.color
          : !this.pills && this.color
          ? "tabs-" + this.color
          : null,
        this.pills && this.gradient
          ? "pills-" + this.gradient + "-gradient"
          : null,
        this.rounded && "pills-rounded",
        this.outline && "pills-outline-" + this.outline,
        this.header && "nav-pills card-header-pills",
        this.navClass
      ];
    },
    contentClass() {
      return [
        "tab-content",
        this.card && "card",
        this.vertical && "vertical",
        this.border && "border-right border-bottom border-left rounded-bottom"
      ];
    }
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
      this.$emit("activeTab", this.activeTab);
    },
    enter(el, done) {
      setTimeout(() => {
        this.height = el.scrollHeight + "px";
      });
      done();
    },
    leave(el, done) {
      done();
    }
  },
  mounted() {
    this.activeTab = this.active;
  },
  watch: {
    active(value) {
      this.activeTab = value;
    }
  },
  mixins: [waves]
};

export default Tabs;
export { Tabs as mdbTabs };
</script>

<style scoped>
.tab-content > .tab-pane {
  display: block;
  top: 0;
}

.tab-content {
  overflow-y: hidden;
  position: relative;
  transition: all 0.4 linear !important;
  box-sizing: content-box;
}

.dropdown {
  display: block;
}
</style>
