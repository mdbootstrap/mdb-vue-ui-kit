<template>
  <!-- simpleV -->
  <div v-if="simpleV" class="row" :class="{'mt-5': simpleV}">
    <div class="col-md-12">
      <ul :class="simpleClass" class="stepper-linear">
        <li
          v-for="(step, i) in steps"
          :key="i"
          class="step"
          :class="{'active': i + 1 === activeStep}"
        >
          <a class="ripple-parent w-100" @click="changeActiveStep(i + 1)">
            <span class="circle" :class="{'success-color': i + 1 < activeStep}">
              <mdb-icon v-if="i + 1 < activeStep" icon="check" />
              <span v-else>{{i+1}}</span>
            </span>
            <div class="label">{{step.name || `Step ${i + 1}`}}</div>
          </a>
          <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
            :duration="{ enter: 600, leave: 300 }"
          >
            <div
              class="step-content w-100"
              v-if="i + 1 === activeStep"
              ref="stepContent"
            >{{step.content}}</div>
          </transition>
        </li>
      </ul>
    </div>
  </div>

  <!-- simpleV -->

  <!-- simpleH -->

  <div v-else-if="simpleH" class="row">
    <div class="col-md-12">
      <ul :class="simpleClass">
        <li
          v-for="(step, i) in steps"
          :key="i"
          class="horizontal-step step"
          :class="{'active': i + 1 === activeStep}"
        >
          <a class="ripple-parent w-100" @click="changeActiveStep(i + 1)">
            <span class="circle" :class="{'success-color': i + 1 < activeStep}">
              <mdb-icon v-if="i + 1 < activeStep" icon="check" />
              <span v-else>{{i+1}}</span>
            </span>
            <span class="label">{{step.name || `Step ${i + 1}`}}</span>
          </a>
          <span :style="i+1 === numOfSteps && 'background-color: transparent'" class="simple-line"></span>
        </li>
      </ul>
      <div
        v-for="(step, i) in steps"
        :key="i"
        class="step"
        :class="{'active': i + 1 === activeStep}"
        style="overflow: hidden;"
      >
        <transition enter-active-class="animated slideInLeft">
          <div class="step-content w-100" v-if="i + 1 === activeStep">{{step.content}}</div>
        </transition>
      </div>
    </div>
  </div>
  <!-- simpleH -->
</template>

<script>
import mdbStepper from "../../mixins/mdbStepper";
const Stepper = {
  props: {
    simpleH: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    changeActiveStep(i) {
      this.activeStep = i;
    }
  },
  mixins: [mdbStepper]
};

export default Stepper;
export { Stepper as mdbStepper };
</script>
<style scoped>
.simple-line {
  height: 1px;
  width: calc(100% - 20px);
  background-color: rgba(0, 0, 0, 0.2);
}

.stepper-vertical .step a:hover {
  background-color: rgba(0, 0, 0, 0.06) !important;
}
.horizontal-step:hover {
  background-color: initial;
}

.horizontal-step a:hover {
  background-color: rgba(0, 0, 0, 0.06);
}

.step a {
  transition: background-color 0.2s linear;
}

.stepper-vertical .step-content {
  height: 0;
  overflow: hidden;
  transition: all 0.5s ease-out;
}

.stepper-horizontal .step-content {
  max-width: 0px;
  overflow: hidden;
  transition: all 0.5s ease-out;
}

.stepper-horizontal li:not(:last-child):after {
  display: none;
}
</style>