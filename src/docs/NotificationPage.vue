<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Notification</strong></h4>
      <a href="https://mdbootstrap.com/vue/components/notification/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <h4 class="mb-3">Basic examples</h4>

    <div class="alert alert-primary" role="alert">
      This is a primary alert—check it out!
    </div>
    <div class="alert alert-secondary" role="alert">
      This is a secondary alert—check it out!
    </div>
    <div class="alert alert-success" role="alert">
      This is a success alert—check it out!
    </div>
    <div class="alert alert-danger" role="alert">
      This is a danger alert—check it out!
    </div>
    <div class="alert alert-warning" role="alert">
      This is a warning alert—check it out!
    </div>
    <div class="alert alert-info" role="alert">
      This is a info alert—check it out!
    </div>
    <div class="alert alert-light" role="alert">
      This is a light alert—check it out!
    </div>
    <div class="alert alert-dark" role="alert">
      This is a dark alert—check it out!
    </div>

    <h4 class="mt-5 mb-3">Notification link color</h4>
    <div class="alert alert-primary" role="alert">
      This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-secondary" role="alert">
      This is a secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-success" role="alert">
      This is a success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-danger" role="alert">
      This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-warning" role="alert">
      This is a warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-info" role="alert">
      This is a info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-light" role="alert">
      This is a light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div class="alert alert-dark" role="alert">
      This is a dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>

    <h4 class="mt-5 mb-3">Notification additional content</h4>
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr>
      <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>


  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';

export default {
  name: 'NotificationPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  },
  data() {
    return {
    };
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
