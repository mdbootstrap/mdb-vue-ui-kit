<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Alerts</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/alerts/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <h4 class="mb-3">Basic examples</h4>

    <mdb-alert color="primary">
      This is a primary alert—check it out!
    </mdb-alert>
    <mdb-alert color="secondary">
      This is a secondary alert—check it out!
    </mdb-alert>
    <mdb-alert color="success">
      This is a success alert—check it out!
    </mdb-alert>
    <mdb-alert color="danger">
      This is a danger alert—check it out!
    </mdb-alert>
    <mdb-alert color="warning">
      This is a warning alert—check it out!
    </mdb-alert>
    <mdb-alert color="info">
      This is a info alert—check it out!
    </mdb-alert>
    <mdb-alert color="light">
      This is a light alert—check it out!
    </mdb-alert>
    <mdb-alert color="dark">
      This is a dark alert—check it out!
    </mdb-alert>

    <h4 class="mt-5 mb-3">Alert link color</h4>
    <mdb-alert color="primary">
      This is a primary alert with <a href="#!" class="alert-link">an example link</a>. Give it a click if you like.
    </mdb-alert>
    <mdb-alert color="secondary">
      This is a primary alert with <a href="#!" class="alert-link">an example link</a>. Give it a click if you like.
    </mdb-alert>
    <mdb-alert color="success">
      This is a primary alert with <a href="#!" class="alert-link">an example link</a>. Give it a click if you like.
    </mdb-alert>
    <mdb-alert color="danger">
      This is a primary alert with <a href="#!" class="alert-link">an example link</a>. Give it a click if you like.
    </mdb-alert>
    <mdb-alert color="warning">
      This is a primary alert with <a href="#!" class="alert-link">an example link</a>. Give it a click if you like.
    </mdb-alert>
    <mdb-alert color="info">
      This is a primary alert with <a href="#!" class="alert-link">an example link</a>. Give it a click if you like.
    </mdb-alert>
    <mdb-alert color="light">
      This is a primary alert with <a href="#!" class="alert-link">an example link</a>. Give it a click if you like.
    </mdb-alert>
    <mdb-alert color="dark">
      This is a primary alert with <a href="#!" class="alert-link">an example link</a>. Give it a click if you like.
    </mdb-alert>

    <h4 class="mt-5 mb-3">Alert additional content</h4>
    <mdb-alert color="success">
      <h4 class="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr>
      <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </mdb-alert>

    <h4 class="mt-5 mb-3">Dismissing</h4>

    <mdb-alert color="warning"
           v-if="p1"
          @closeAlert="p1=false"
          leaveAnimation="tada"
          dismiss>
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    </mdb-alert>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbAlert } from 'mdbvue';

export default {
  name: 'AlertPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbAlert
  },
  data() {
    return {
      p1: true,
    };
  },
};
</script>
