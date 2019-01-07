<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Modal forms</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/modals/basic/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>

    <hr />
    <h2>Simple login modal</h2>
    <mdb-btn rounded color="default" @click.native="login=true">launch login modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
    <mdb-modal v-if="login" @close="login = false">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">Sign in</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3 grey-text">
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input label="Your password" icon="lock" type="password"/>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn @click.native="login = false">Login</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

        <hr />
        <h2>Simple register modal</h2>

    <mdb-btn rounded color="default" @click.native="register = true">launch register modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
      <mdb-modal v-if="register" @close="register = false">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">Sign up</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3 grey-text">
        <mdb-input label="Your name" icon="user" class="mb-5"/>
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input label="Your password" icon="lock" type="password"/>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn @click.native="register = false" color="deep-orange">Sign Up</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

    <hr />
        <h2>Simple subscription modal</h2>

    <mdb-btn rounded color="default" @click.native="subs = true">launch subscrition modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
      <mdb-modal v-if="subs" @close="subs = false">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">Subscribe</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3 grey-text">
        <mdb-input label="Your name" icon="user" class="mb-5"/>
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn @click.native="subs = false" color="indigo">Send <mdb-icon icon="paper-plane-o" class="ml-1"/></mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

        <hr />
        <h2>Simple contact modal</h2>

        <mdb-btn rounded color="default" @click.native="contact = true">launch contact form modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
          <mdb-modal v-if="contact" @close="contact = false">
          <mdb-modal-header class="text-center">
            <mdb-modal-title tag="h4" bold class="w-100">Write to us</mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body class="mx-3 grey-text">
            <mdb-input label="Your name" icon="user" class="mb-5"/>
            <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
            <mdb-input label="Subject" icon="tag" class="mb-5"/>
            <mdb-textarea icon="pencil" label="Your message"/>
          </mdb-modal-body>
          <mdb-modal-footer center>
            <mdb-btn @click.native="contact = false" color="unique">Send <mdb-icon icon="paper-plane-o" class="ml-1"/></mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>

        <hr />
        <h2>Subscription modal with header</h2>

          <mdb-btn rounded color="default" @click.native="header = true">launch header form modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
          <mdb-modal v-if="header" @close="header = false" warning>
          <mdb-modal-header class="text-center">
            <mdb-modal-title tag="h4" bold class="w-100">Subscribe</mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body class="mx-3">
            <mdb-input label="Your name" icon="user" class="mb-5" iconClass="grey-text"/>
            <mdb-input label="Your email" icon="envelope" type="email" class="mb-5" iconClass="grey-text"/>
          </mdb-modal-body>
          <mdb-modal-footer center>
            <mdb-btn @click.native="header = false" outline="warning">Send <mdb-icon icon="paper-plane-o" class="ml-1"/></mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>

    <hr />
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbInput, mdbTextarea } from 'mdbvue';
export default {
  name:'ModalFormsPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbInput,
    mdbTextarea
  },
  data() {
    return {
      login: false,
      register: false,
      subs: false,
      contact: false,
      header: false,
      isChecked: false
    };
  }
};
</script>
