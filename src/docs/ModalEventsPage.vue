<template>
  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Modal events</strong></h4>
      <a href="/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>{{text}}</a>
    </row>
    <hr class="my-5"/>

    <h4>Show</h4>
    <btn rounded color="default" @click.native="show=true">launch success modal <fa icon="eye" class="ml-1"/></btn>
    <modal v-if="show" @show="handleShow" @close="show = false" success>
      <modal-header>
        <modal-title>Success Modal</modal-title>
        </modal-header>
        <modal-body  class="text-center">
          <fa icon="check" size="4x" class="mb-3 animated rotateIn"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla aperiam
                blanditiis ad consequatur in dolores culpa, dignissimos, eius non possimus fugiat.
                Esse ratione fuga, enim, ab officiis totam.
          </p>
        </modal-body>
        <modal-footer center>
          <btn color="primary" @click.native="show = false">Get it now <fa icon="diamond" class="ml-1" color="white"/></btn>
          <btn outline="primary" @click.native="show = false">No, thanks</btn>
        </modal-footer>
      </modal>

    <hr class="my-5"/>
    <h4>Shown</h4>

    <btn rounded color="default" @click.native="shown=true">launch info modal <fa icon="eye" class="ml-1"/></btn>
    <modal v-if="shown" @shown="handleShown" @close="shown = false" info>
      <modal-header>
        <modal-title>Info Modal</modal-title>
      </modal-header>
      <modal-body>
        <img src="https://mdbootstrap.com/wp-content/uploads/2016/11/admin-dashboard-bootstrap.jpg" alt="modal" class="img-fluid"/>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt vero illo error eveniet cum.
        </p>
      </modal-body>
      <modal-footer center>
        <btn color="primary" @click.native="shown = false">Get it now <fa icon="diamond" class="ml-1" color="white"/></btn>
        <btn outline="primary" @click.native="shown = false">No, thanks</btn>
      </modal-footer>
    </modal>

    <hr class="my-5"/>
    <h4>Hide</h4>

    <btn rounded color="default" @click.native="hide=true">launch danger modal <fa icon="eye" class="ml-1"/></btn>
    <modal v-if="hide" @hide="handleHide" @close="hide = false" danger>
      <modal-header>
        <modal-title>Danger Modal</modal-title>
      </modal-header>
      <modal-body>
        <row>
          <column col="3" class="text-center"><fa icon="shopping-cart" size="4x"/></column>
          <column col="9">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, molestiae provident temporibus sunt earum.</p>
            <h2><badge>v52gs1</badge></h2>
          </column>
        </row>
      </modal-body>
      <modal-footer center>
        <btn color="primary" @click.native="hide = false">Get it now <fa icon="diamond" class="ml-1" color="white"/></btn>
        <btn outline="primary" @click.native="hide = false">No, thanks</btn>
      </modal-footer>
    </modal>

    <hr class="my-5"/>
    <h4>Hidden</h4>

    <btn rounded color="default" @click.native="hidden=true">launch warning modal <fa icon="eye" class="ml-1"/></btn>
    <modal v-if="hidden" @hidden="handleHidden" @close="hidden = false" warning>
      <modal-header>
        <modal-title>Warning Modal</modal-title>
      </modal-header>
      <modal-body>
        <row>
          <column col="3" class="text-center">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="img-fluid z-depth-1-half rounded-circle mb-2">
                  <p class="title mb-0">Jane</p>
                  <p class="text-muted " style="font-size: 13px">Consultant</p>
          </column>
          <column col="9">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, molestiae provident temporibus sunt earum.</p>
            <p class="card-text"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong></p>
          </column>
        </row>
      </modal-body>
      <modal-footer center>
        <btn color="primary" @click.native="hidden = false">Get it now <fa icon="diamond" class="ml-1" color="white"/></btn>
        <btn outline="primary" @click.native="hidden = false">No, thanks</btn>
      </modal-footer>
    </modal>
  </container>
</template>

<script>
import { Container, Row, Fa, Btn, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Column, Badge} from 'mdbvue';
export default {
  name:'ModalEventsPage',
  components: {
    Container,
    Row,
    Fa,
    Btn,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter,
    Column,
    Badge
  },
  data() {
    return {
      show: false,
      shown: false,
      hide: false,
      hidden: false,
      text: 'Docs'
    };
  },
  methods: {
    handleShow() {
      /* eslint-disable no-alert*/
      alert('show!');
    },
    handleShown() {
      /* eslint-disable no-alert*/
      alert('shown!');
    },
    handleHide() {
      /* eslint-disable no-alert*/
      alert('hide!');
    },
    handleHidden() {
      /* eslint-disable no-alert*/
      alert('hidden!');
      console.log('was the /hidden/ event acted upon?');
    }
  }
};
</script>

