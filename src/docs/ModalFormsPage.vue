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
        <h2>Elagant modal login</h2>

        <mdb-btn rounded color="default" @click.native="elegant = true">launch elegant login modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
        <mdb-modal v-if="elegant" @close="elegant = false" elegant>
          <mdb-modal-header class="text-center">
            <mdb-modal-title tag="h3" bold class="w-100 my-3">Sign in</mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body class="mx-3">
            <mdb-input label="Your email" type="email" class="mb-5 grey-text"/>
            <mdb-input label="Enter password" type="password" class="pb-3">
        </mdb-input>
              <p class="font-small blue-text d-flex justify-content-end mb-5">
                Forgot <a class="ml-1"> Password?</a>
              </p>

            <div class="text-center mb-3">
              <mdb-btn gradient="blue" block rounded>Sign In</mdb-btn>
            </div>
            <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">or Sign in with:</p>
            <mdb-row center class="my-3">
              <mdb-btn color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon icon="facebook"/></mdb-btn>
              <mdb-btn color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon icon="twitter"/></mdb-btn>
              <mdb-btn color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon icon="google-plus"/></mdb-btn>
            </mdb-row>
          </mdb-modal-body>
          <mdb-modal-footer class="mx-5 pt-3 mb-1" end>
            <p class="font-small grey-text">Not a member? <a class="blue-text ml-1">Sign Up</a></p>
          </mdb-modal-footer>
        </mdb-modal>

        <hr />
        <h2>Dark modal register</h2>

        <mdb-btn rounded color="default" @click.native="dark = true">launch dark register modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>

        <mdb-modal v-if="dark" @close="dark = false" dark bgSrc="https://mdbootstrap.com/img/Photos/Others/pricing-table%20(7).jpg">
        <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
          <mdb-modal-header class="text-center pb-4">
            <mdb-modal-title tag="h3" bold class="w-100 my-3 white-text"><strong>SIGN</strong> <a class="green-text font-weight-bold"><strong>UP</strong></a>
            </mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body>
            <mdb-input label="Your email" type="email" class="mb-5" labelColor="white"/>
            <mdb-input label="Your password" type="password" class="pb-3" labelColor="white"/>
            <mdb-input type="checkbox" id="checkbox1" label="Accept the" labelClass="font-small" class="pb-4" wrapperClass="pl-0">
              <a href="#" class="green-text font-weight-bold font-small" style="margin-left: -3rem"> Terms and Conditions</a>
            </mdb-input>
            <mdb-row center class="mb-5">
              <mdb-col col="3" md="12">
              <mdb-btn block color="success" rounded>Sign up</mdb-btn>
              </mdb-col>
            </mdb-row>
            <mdb-row end class="my-3 pt-3 white-text font-small">
              Have an account? <a href="#" class="green-text ml-1 font-weight-bold"> Log in</a>
            </mdb-row>
          </mdb-modal-body>
        </div>
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
      cascading: false,
      avatar: false,
      header: false,
      elegant: false,
      dark: false,
      tabs: 1,
      isChecked: false
    };
  }
};
</script>
