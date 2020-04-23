import mdbIcon from "../components/Content/Fa";
export default {
  components: { mdbIcon },
  props: {
    value: {
      type: Number,
      default: 1
    },
    simpleV: {
      type: Boolean,
      default: false
    },
    steps: {
      type: [Array, Number],
      required: true
    },
  },
  data() {
    return {
      activeStep: 1
    };
  },
  computed: {
    simpleClass() {
      return this.simpleV
        ? "stepper stepper-vertical"
        : "stepper stepper-horizontal";
    },
    numOfSteps() {
      if (typeof this.steps === "number") return this.steps;
      return this.steps.length;
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.height = '0';
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave(el) {
      el.style.height = '0';
    },
    setStepHeight() {
      if (!this.$refs.stepContent) return;

      this.$refs.stepContent.forEach(step => {
        step.style.height = step.scrollHeight + 'px';
      })
    }
  },
  beforeMount() {
    this.activeStep = this.value;
  },
  mounted() {
    if(this.simpleV) {
      this.setStepHeight();
    }
  },
  watch: {
    activeStep(active) {
      this.$emit("input", active);
    },
    value(value) {
      this.changeActiveStep(value);
    },
    steps() {
      this.setStepHeight();
    }
  },
}
