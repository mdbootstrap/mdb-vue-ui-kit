import mdbBtn from "../components/Components/Button";
import mdbView from "../components/CSS/ViewWrapper";
import mdbMask from "../components/CSS/Mdmask";

export default {
  components: {
    mdbBtn,
    mdbView,
    mdbMask
  },
  props: {
    tag: {
      type: String,
      default: "div"
    },
    value: {
      type: Number,
      default: 0
    },
    interval: {
      type: Number
    },
    items: {
      type: [Array, Number],
      required: true
    },
    slide: {
      type: Boolean,
      default: false
    },
    controlls: {
      type: Boolean,
      default: false
    },
    controllIcons: {
      type: Array
    },
    indicators: {
      type: Boolean,
      default: false
    },
    loader: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeItem: 0,
      prevItem: null,
      prevDirection: null,
      slidingInterval: null,
      queue: 0,
      leaveClass: "fadeOut",
      enterClass: "fadeIn",
      transition: false,
      isLoading: this.loader
    };
  },
  computed: {
    customSlots() {
      if (typeof this.items === "number") return true;
      return false;
    },
  },
  methods: {
    changeActiveItem(index) {
      if (index === this.activeItem) return;

      const last = this.numOfItems - 1;
      this.prevItem = this.activeItem;

      this.transition = true;

      if (!this.slide) {

        this.leaveClass = "fadeOut";
        this.enterClass = "fadeIn";

        let next = index < 0 ? last : index > last ? 0 : index;

        this.activeItem = next;

        setTimeout(() => {
          this.transition = false;
        }, 1000);

        return;
      }

      let direction = index > this.activeItem ? 1 : -1;
      let diff = index - this.activeItem;

      if (!this.slide) {
        this.leaveClass = "fadeOut";
        this.enterClass = "fadeIn";
      } else if (direction > 0) {
        this.leaveClass =
          this.one && this.visibleItems !== 1
            ? "slideOutOneLeft"
            : "slideOutLeft";
        this.enterClass =
          this.one && this.visibleItems !== 1
            ? "slideInOneRight"
            : "slideInRight";
      } else {
        this.leaveClass =
          this.one && this.visibleItems !== 1
            ? "slideOutOneRight"
            : "slideOutRight";
        this.enterClass =
          this.one && this.visibleItems !== 1
            ? "slideInOneLeft"
            : "slideInLeft";
      }

      let next =
        this.activeItem + direction < 0
          ? last
          : this.activeItem + direction > last
          ? 0
          : this.activeItem + direction;

      this.activeItem = next;

      diff -= direction;

      setTimeout(() => {
        if (diff === 0) this.transition = false;
        else this.changeActiveItem(index);
      }, 1000);
    },
    changeItem(index) {
      if (this.transition && this.queue < 3 && this.queue > -3) {
        this.queue += index - this.activeItem;
      } else {
        this.changeActiveItem(index);
      }
    },
    clearQueue() {
      if (this.queue > 0) {
        this.changeItem(this.activeItem + 1);
        this.queue -= 1;
      } else if (this.queue === 0) return;
      else {
        this.changeItem(this.activeItem - 1);
        this.queue += 1;
      }
    },
  },
  mounted() {
    this.activeItem = this.value;

    if (this.interval) {
      this.slidingInterval = window.setTimeout(
        () => this.changeActiveItem(this.activeItem + 1),
        this.interval
      );
    }
  },
  beforeDestroy() {
    if (this.interval) window.clearInterval(this.slidingInterval);
  },
  watch: {
    activeItem(val) {
      this.$emit("input", val);
      if (this.interval) {
        window.clearTimeout(this.slidingInterval);
        this.slidingInterval = window.setTimeout(
          () => this.changeActiveItem(this.activeItem + 1),
          this.interval
        );
      }
    },
    value(val) {
      if (val === this.activeItem) return;
      this.changeActiveItem(val);
    },
    transition(value) {
      if (!value && this.queue !== 0) {
        const step = this.queue / Math.abs(this.queue);

        this.changeActiveItem(this.activeItem + step);

        this.queue -= step;
      }
    },
  }
};
