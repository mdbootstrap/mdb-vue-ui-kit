<template>
  <transition enter-active-class="animated fadeIn" leave-active-class="animated ">
    <div v-if="showing" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <mdb-icon class="mr-2" :icon="icon" :color="iconColor" :size="iconSize"></mdb-icon>
        <strong class="mr-auto">{{title}}</strong>
        <small v-if="time" class="text-muted">{{calculatedTime}}</small>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" @click="closeToast"><mdb-icon size="xs" icon="times"/></button>
      </div>
      <div class="toast-body">
        {{message}}
      </div>
    </div>
  </transition>
</template>


<script>
import { mdbBtn, mdbIcon } from 'mdbvue';
const ToastNotification = {
  name: 'Notification',
  components: {
    mdbBtn,
    mdbIcon
  },
  props: {
    time: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: "square"
    },
    iconSize: {
      type: String,
      default: 'lg'
    },
    iconColor: {
      type: String,
      default: 'primary'
    },
    received: Date
  },
  data(){
    return {
      currentTime: '',
      startTime: '',
      showNotification: this.show
    };
  },
  computed: {
    showing: {
      get() {
        return this.showNotification;
      },
      set(newVal) {
        this.showNotification = newVal;
      }
    },
    calculatedTime(){
      let time = (this.currentTime - this.startTime)/1000;
      return this.formatTime(time);
    }
  },
  methods: {
    updateTime(){
      this.currentTime = new Date().getTime();
    },
    formatTime(time){
      switch (true) {
        case (time === 0):
          return `now`;
        case (time < 60):
          let second = Math.floor(time);
          return `${second} seconds ago`;
        case (time < 120):
          return `1 minute ago`;
        case (time < 3600):
          let minutes = Math.floor(time/60);
          return `${minutes} minutes ago`;
        case (time === 3600):
          return `1 hour ago`;
        case (time > 3600 && time < 86400):
          let hours = Math.floor(time/3600);
          return `${hours} hours ago`;
        case (time === 86400):
          return `a day ago`;
        case (time > 86400):
          let days = Math.floor(time/86400);
          return `${days} days ago`;
      }
    },
    closeToast(){
      this.showing = false;
    },
  },
  mounted(){
    let timeReceived = this.received || new Date();
    this.startTime = timeReceived.getTime();
    this.currentTime = new Date().getTime();
    window.setInterval(this.updateTime, 60000);
  },
  beforeDestroy(){
    window.clearInterval(this.updateTime);
  }
};

export default ToastNotification;
export { ToastNotification as mdbToastNotification };
</script>
<style scoped>
  .toast {
    opacity: 1;
  }
  .text-muted {
    padding-left: 10px;
  }
</style>
