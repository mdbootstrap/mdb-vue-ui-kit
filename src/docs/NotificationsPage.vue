<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">Notifications</h4>
      <a
        href="https://mdbootstrap.com/docs/vue/advanced/notifications/"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2"/>Docs
      </a>
    </mdb-row>
    <hr>
    <section class="demo-section">
      <h4>Bootstrap notification</h4>
      <section>
        <mdb-toast-notification title="Bootstrap notification" message="Hello world!" :show="show" :received="date"></mdb-toast-notification>
      </section>
    </section>
    <section class="demo-section">
      <h4>Custom icons</h4>
      <section>
        <mdb-toast-notification icon="envelope" iconColor="default" title="3 unread messages" message="..." :show="show"></mdb-toast-notification>
      </section>
    </section>
    <section class="demo-section">
      <h4>Stacking</h4>
      <section>
        <mdb-toast-notification title="Bootstrap notification" message="Hello world!" :show="show"></mdb-toast-notification>
        <mdb-toast-notification title="Bootstrap notification" message="Hello world!" :show="show"></mdb-toast-notification>
        <mdb-toast-notification title="Bootstrap notification" message="Hello world!" :time="false" :show="show"></mdb-toast-notification>
      </section>
    </section>
    <section class="demo-section">
      <h4>Placement</h4>
      <section class="background">
        <div class="container">
          <div class="placement">
            <mdb-toast-notification v-for="message in messages" :key="message.id" :title="message.title" :message="message.message" :icon="message.icon" :iconColor="message.color" :show="show"/>
          </div>
        </div>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbToastNotification,
  mdbContainer,
  mdbBtn,
  mdbRow,
  mdbIcon,
} from "mdbvue";

export default {
  name: "NotificationsFreePage",
  components: {
    mdbToastNotification,
    mdbContainer,
    mdbBtn,
    mdbRow,
    mdbIcon,
  },
  data() {
    return {
      show: true,
      date: new Date('2019-04-16 16:00'),
      messages: [
        {
          title: "alert", 
          message: "important meeting in 15 minutes!", 
          icon: 'exclamation',
          color: 'danger'
        }, 
        {
          title: "new message", 
          message: "Can you buy carrots on your way home?", 
          icon: "envelope"
        },
        {
          title: "alarm", 
          message: "it's 7 o'clock!", 
          icon: 'bell',
          color: 'elegant'
        }, 
      ]
    };
  }
};
</script>

<style scoped>
.container {
  position: relative;
  min-height: 340px;
}
.placement {
  position: absolute;
  right: 0;
}
.background {
  background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img (122).jpg");
}
</style>
