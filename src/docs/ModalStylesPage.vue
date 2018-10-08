<template>
  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Modal events</strong></h4>
      <a href="/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr class="my-5"/>

    <h4>Success</h4>
    <btn rounded color="default" @click.native="success=true">launch success modal <fa icon="eye" class="ml-1"/></btn>
    <modal v-if="success" @close="success = false" success>
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
          <btn color="success" @click.native="success = false">Get it now <fa icon="diamond" class="ml-1" color="white"/></btn>
          <btn outline="success" @click.native="success = false">No, thanks</btn>
        </modal-footer>
      </modal>

    <hr class="my-5"/>
    <h4>Info</h4>

    <btn rounded color="default" @click.native="info=true">launch info modal <fa icon="eye" class="ml-1"/></btn>
    <modal v-if="info" @close="info = false" info>
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
        <btn color="primary" @click.native="info = false">Get it now <fa icon="diamond" class="ml-1" color="white"/></btn>
        <btn outline="primary" @click.native="info = false">No, thanks</btn>
      </modal-footer>
    </modal>

    <hr class="my-5"/>
    <h4>Danger</h4>

    <btn rounded color="default" @click.native="danger=true">launch danger modal <fa icon="eye" class="ml-1"/></btn>
    <modal v-if="danger" @close="danger = false" danger>
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
        <btn color="danger" @click.native="danger = false">Get it now <fa icon="diamond" class="ml-1" color="white"/></btn>
        <btn outline="danger" @click.native="danger = false">No, thanks</btn>
      </modal-footer>
    </modal>

    <hr class="my-5"/>
    <h4>Warning</h4>

    <btn rounded color="default" @click.native="warning = true">launch warning modal <fa icon="eye" class="ml-1"/></btn>
    <modal v-if="warning" @close="warning = false" warning>
      <modal-header>
        <modal-title>Warning Modal</modal-title>
      </modal-header>
      <modal-body>
        <row>
          <column col="3" class="text-center">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" alt="Michal Szymanski - founder of Material Design for Bootstrap" class="img-fluid z-depth-1-half rounded-circle mb-2">
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
        <btn color="warning" @click.native="warning = false">Get it now <fa icon="diamond" class="ml-1" color="white"/></btn>
        <btn outline="warning" @click.native="warning = false">No, thanks</btn>
      </modal-footer>
    </modal>
  </container>
</template>

<script>
import { Container, Row, Fa, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Btn, Badge, Column } from 'mdbvue';
export default {
  name:'ModalStylesPage',
  components: {
    Container,
    Row,
    Fa,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter,
    Btn,
    Badge,
    Column
  },
  data() {
    return {
      success: false,
      info: false,
      danger: false,
      warning: false
    };
  }
};
</script>

