<template>
  <transition
    :enter-active-class="enterAnimationClasses"
    :leave-active-class="leaveAnimationClasses"
    @before-enter="beforeEnterHook"
    @enter="enterHook"
    @after-enter="afterEnterHook"
    @enter-cancelled="enterCancelledHook"

    @before-leave="beforeLeaveHook"
    @leave="leaveHook"
    @after-leave="afterLeaveHook"
    @leave-cancelled="leaveCancelledHook">
  <div :class="alertClasses" role="alert">
    <slot></slot>
    <button v-if="dismiss" @click="closeAlert" type="button" :class="closeIconClass" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  </transition>
</template>

<script>
const Alert =  {
  name: 'Alert',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    isOpen: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
    },
    dismiss: {
      type: Boolean
    },
    closeClass: {
      type: [String, Array, Object]
    },
    leaveAnimation: {
      type: String
    },
    enterAnimation: {
      type: String
    }

  },
  data() {
    return {
      // isOpen: true
    };
  },
  methods: {
    closeAlert() {
      this.$emit('closeAlert', this);
    },
    beforeEnterHook(){this.$emit("beforeEnter", this);},
    enterHook(){this.$emit("enter", this);},
    afterEnterHook(){this.$emit("afterEnter", this);},
    enterCancelledHook(){this.$emit("enterCancelled", this);},
    beforeLeaveHook(){
      this.$emit("beforeLeave", this);},
    leaveHook(){
      this.$emit("leave", this);},
    afterLeaveHook(){
      this.$parent.$emit("afterLeave", this);
    },
    leaveCancelledHook(){this.$emit("leaveCancelled", this);},
  },
  computed: {
    alertClasses() {
      return [
        'alert',
        this.color && `alert-${this.color}`
      ];
    },
    closeIconClass() {
      return [
        'close',
        this.closeClass
      ];
    },
    enterAnimationClasses() {
      return `animated ${this.enterAnimation}`;
    },
    leaveAnimationClasses() {
      return `animated ${this.leaveAnimation}`;
    }
  }
};

export default Alert;
export { Alert as mdbAlert };
</script>

<style>

</style>
