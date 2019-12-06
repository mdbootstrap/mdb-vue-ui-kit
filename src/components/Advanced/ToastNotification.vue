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
import mdbBtn from '../Components/Button';
import mdbIcon from '../Content/Fa';
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
      showNotification: this.show,
      interval: null
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
      let minutes, hours, days
      switch (true) {
        case time < 60:
          return `now`;
        case time < 3600:
          minutes = Math.floor(time / 60);
          return `${minutes} min ago`;
        case time >= 3600 && time < 86400:
          hours = Math.floor(time / 3600);
          return `${hours} h ago`;
        case time >= 86400:
          days = Math.floor(time / 86400);
          return `${days} d ago`;
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
    this.interval = window.setInterval(this.updateTime, 60000);
  },
  beforeDestroy(){
    window.clearInterval(this.interval);
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
