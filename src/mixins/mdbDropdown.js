import { mixin as clickaway } from 'vue-clickaway';
import mdbClassMixin from './mdbClassMixin';
import Popper from "popper.js";

export const mdbDropdown = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    btnGroup: {
      type: Boolean
    },
    dropup: {
      type: Boolean,
      default: false
    },
    dropright: {
      type: Boolean,
      default: false
    },
    dropleft: {
      type: Boolean,
      default: false
    },
    end: {
      type: Boolean,
      default: false
    },
    split: {
      type: Boolean,
      default: false
    },
    multiLevel: {
      type: Boolean,
      default: false
    },
    updatePosition: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      toggle: false,
      popperJS: null,
      popperOptions: {
        placement: "bottom",
        eventsEnabled: false,
        modifiers: {
          offset: {
            offset: "0"
          }
        }
      }
    };
  },
  mixins: [clickaway, mdbClassMixin],
  methods: {
    away() {
      if (this.multiLevel) return;
      this.toggle = false;
    },
    multiAway() {
      if (this.multiLevel) this.toggle = false;
      else return;
    },
    createPopper() {
      this.$nextTick(() => {
        this.popperJS = new Popper(
          this.$refs.popper,
          this.$refs.options,
          this.popperOptions
        );
      });
    },
    updatePopper() {
      this.popperJS ? this.popperJS.scheduleUpdate() : this.createPopper();
    },
    enter(el) {
      el.style.opacity = 0;
    },
    afterEnter(el) {
      el.style.opacity = 1;
    },
    beforeLeave(el) {
      el.style.opacity = 0;
    },
  },
  computed: {
    className() {
      return [
        this.btnGroup ? 'btn-group' : 'dropdown',
        this.mdbClass,
        this.multiLevel && "multi-level-dropdown"
      ];
    },
    style() {
      return {
        'margin-left' : this.split && '-0.3rem'
      };
    }
  },
  mounted() {
    //offset

    let offset = this.dropright || this.dropleft ? "0px, 2px" : "0px, 0px"

    this.popperOptions.modifiers.offset.offset = offset;


    //placement

    let position = this.dropup ? "top" : this.dropright ? "right" : this.dropleft ? "left" : "bottom";

    //remove in major release check for right prop
    let right = false;
    const menu = this.$children.find(
      child => child.$el.className.indexOf("dropdown-menu") !== -1
    );

    if (menu) right = menu.right;
    
    let align = this.end || right ? "end" : "start";

    const placement = `${position}-${align}`;
    this.popperOptions.placement = placement;

    if (this.updatePosition) this.popperOptions.eventsEnabled = true;

    window.addEventListener('hashchange', this.away);

  },
  beforeDestroy() {
    window.removeEventListener('hashchange', this.away);
  },
  watch: {
    toggle(value) {
      if (value && !this.megaMenu) {
        this.updatePopper();
      }
    }
  }
};
