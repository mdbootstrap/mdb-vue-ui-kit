<template>
  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Modal forms</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/modals/basic/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>

    <hr />
    <h2>Simple login modal</h2>
    <btn rounded color="default" @click.native="login=true">launch login modal <fa icon="eye" class="ml-1"/></btn>
    <modal v-if="login" @close="login = false">
      <modal-header class="text-center">
        <modal-title tag="h4" bold class="w-100">Sign in</modal-title>
      </modal-header>
      <modal-body class="mx-3 grey-text">
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input label="Your password" icon="lock" type="password"/>
      </modal-body>
      <modal-footer center>
        <btn @click.native="login = false">Login</btn>
      </modal-footer>
    </modal>

        <hr />
        <h2>Simple register modal</h2>

    <btn rounded color="default" @click.native="register = true">launch register modal <fa icon="eye" class="ml-1"/></btn>
      <modal v-if="register" @close="register = false">
      <modal-header class="text-center">
        <modal-title tag="h4" bold class="w-100">Sign up</modal-title>
      </modal-header>
      <modal-body class="mx-3 grey-text">
        <mdb-input label="Your name" icon="user" class="mb-5"/>
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input label="Your password" icon="lock" type="password"/>
      </modal-body>
      <modal-footer center>
        <btn @click.native="register = false" color="deep-orange">Sign Up</btn>
      </modal-footer>
    </modal>

    <hr />
        <h2>Simple subscription modal</h2>

    <btn rounded color="default" @click.native="subs = true">launch subscrition modal <fa icon="eye" class="ml-1"/></btn>
      <modal v-if="subs" @close="subs = false">
      <modal-header class="text-center">
        <modal-title tag="h4" bold class="w-100">Subscribe</modal-title>
      </modal-header>
      <modal-body class="mx-3 grey-text">
        <mdb-input label="Your name" icon="user" class="mb-5"/>
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
      </modal-body>
      <modal-footer center>
        <btn @click.native="subs = false" color="indigo">Send <fa icon="paper-plane-o" class="ml-1"/></btn>
      </modal-footer>
    </modal>

        <hr />
        <h2>Simple contact modal</h2>

        <btn rounded color="default" @click.native="contact = true">launch contact form modal <fa icon="eye" class="ml-1"/></btn>
          <modal v-if="contact" @close="contact = false">
          <modal-header class="text-center">
            <modal-title tag="h4" bold class="w-100">Write to us</modal-title>
          </modal-header>
          <modal-body class="mx-3 grey-text">
            <mdb-input label="Your name" icon="user" class="mb-5"/>
            <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
            <mdb-input label="Subject" icon="tag" class="mb-5"/>
            <md-textarea icon="pencil" label="Your message"/>
          </modal-body>
          <modal-footer center>
            <btn @click.native="contact = false" color="unique">Send <fa icon="paper-plane-o" class="ml-1"/></btn>
          </modal-footer>
        </modal>

        <hr />
        <h2>Modal with avatar</h2>

        <!-- AVATAR IS PRO -->
        <btn rounded color="default" @click.native="avatar = true">launch avatar modal <fa icon="eye" class="ml-1"/></btn>
        <modal v-if="avatar" @close="avatar = false" avatar size="sm">
          <modal-header :close="false">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="img-fluid z-depth-1-half rounded-circle mb-2">
          </modal-header>
          <modal-body class="mb-1 text-center">
            <h5 class="mt-1 mb-2">Maria Doe</h5>
            <mdb-input label="Enter password" type="password"/>
            <div class="mt-5 text-center">
              <btn color="cyan" icon="sign-in" iconRight iconClass="ml-1">Login</btn>
            </div>
          </modal-body>
        </modal>


        <hr />
        <h2>Subscription modal with header</h2>

          <btn rounded color="default" @click.native="header = true">launch header form modal <fa icon="eye" class="ml-1"/></btn>
          <modal v-if="header" @close="header = false" warning>
          <modal-header class="text-center">
            <modal-title tag="h4" bold class="w-100">Subscribe</modal-title>
          </modal-header>
          <modal-body class="mx-3">
            <mdb-input label="Your name" icon="user" class="mb-5" iconClass="grey-text"/>
            <mdb-input label="Your email" icon="envelope" type="email" class="mb-5" iconClass="grey-text"/>
          </modal-body>
          <modal-footer center>
            <btn @click.native="header = false" outline="warning">Send <fa icon="paper-plane-o" class="ml-1"/></btn>
          </modal-footer>
        </modal>


        <hr />
        <h2>Elagant modal login</h2>

        <btn rounded color="default" @click.native="elegant = true">launch elegant login modal <fa icon="eye" class="ml-1"/></btn>
        <modal v-if="elegant" @close="elegant = false" elegant>
          <modal-header class="text-center">
            <modal-title tag="h3" bold class="w-100 my-3">Sign in</modal-title>
          </modal-header>
          <modal-body class="mx-3">
            <mdb-input label="Your email" type="email" class="mb-5 grey-text"/>
            <mdb-input label="Enter password" type="password" class="pb-3">
        </mdb-input>
              <p class="font-small blue-text d-flex justify-content-end mb-5">
                Forgot <a class="ml-1"> Password?</a>
              </p>

            <div class="text-center mb-3">
              <btn gradient="blue" block rounded>Sign In</btn>
            </div>
            <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">or Sign in with:</p>
            <row center class="my-3">
              <btn color="white" rounded class="mr-md-3 z-depth-1a"><fa icon="facebook"/></btn>
              <btn color="white" rounded class="mr-md-3 z-depth-1a"><fa icon="twitter"/></btn>
              <btn color="white" rounded class="mr-md-3 z-depth-1a"><fa icon="google-plus"/></btn>
            </row>
          </modal-body>
          <modal-footer class="mx-5 pt-3 mb-1" end>
            <p class="font-small grey-text">Not a member? <a class="blue-text ml-1">Sign Up</a></p>
          </modal-footer>
        </modal>


        <hr />
        <h2>Dark modal register</h2>

        <btn rounded color="default" @click.native="dark = true">launch dark register modal <fa icon="eye" class="ml-1"/></btn>

        <modal v-if="dark" @close="dark = false" dark bgSrc="https://mdbootstrap.com/img/Photos/Others/pricing-table%20(7).jpg">
        <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
          <modal-header class="text-center pb-4">
            <modal-title tag="h3" bold class="w-100 my-3 white-text"><strong>SIGN</strong> <a class="green-text font-weight-bold"><strong>UP</strong></a>
            </modal-title>
          </modal-header>
          <modal-body>
            <mdb-input label="Your email" type="email" class="mb-5" labelColor="white"/>
            <mdb-input label="Your password" type="password" class="pb-3" labelColor="white"/>
            <mdb-input type="checkbox" id="checkbox1" label="Accept the" labelClass="font-small" class="pb-4" wrapperClass="pl-0">
              <a href="#" class="green-text font-weight-bold font-small" style="margin-left: -3rem"> Terms and Conditions</a>
            </mdb-input>
            <row center class="mb-5">
              <column col="3" md="12">
              <btn block color="success" rounded>Sign up</btn>
              </column>
            </row>

            <row end class="my-3 pt-3 white-text font-small">

Have an account? <a href="#" class="green-text ml-1 font-weight-bold"> Log in</a>

</row>
          </modal-body>
        </div>
        </modal>


        <hr />


  </container>
</template>

<script>
import { Container, Row, Column, Fa, Btn, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, mdbInput, MdTextarea } from 'mdbvue';
export default {
  name:'ModalFormsPage',
  components: {
    Container,
    Row,
    Column,
    Fa,
    Btn,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter,
    mdbInput,
    MdTextarea
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
