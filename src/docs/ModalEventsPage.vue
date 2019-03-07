<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Modal events</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/modals/basic/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>{{text}}</a>
    </mdb-row>
    <hr class="my-5"/>

    <h4>Show</h4>
    <mdb-btn rounded color="default" @click.native="show=true">launch success modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
    <mdb-modal v-if="show" @show="handleShow" @close="show = false" success>
      <mdb-modal-header>
        <mdb-modal-title>Success Modal</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body  class="text-center">
          <mdb-icon icon="check" size="4x" class="mb-3 animated rotateIn"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla aperiam
                blanditiis ad consequatur in dolores culpa, dignissimos, eius non possimus fugiat.
                Esse ratione fuga, enim, ab officiis totam.
          </p>
        </mdb-modal-body>
        <mdb-modal-footer center>
          <mdb-btn color="primary" @click.native="show = false">Get it now <mdb-icon icon="diamond" class="ml-1" color="white"/></mdb-btn>
          <mdb-btn outline="primary" @click.native="show = false">No, thanks</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>

    <hr class="my-5"/>
    <h4>Shown</h4>

    <mdb-btn rounded color="default" @click.native="shown=true">launch info modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
    <mdb-modal v-if="shown" @shown="handleShown" @close="shown = false" info>
      <mdb-modal-header>
        <mdb-modal-title>Info Modal</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <img src="https://mdbootstrap.com/wp-content/uploads/2016/11/admin-dashboard-bootstrap.jpg" alt="modal" class="img-fluid"/>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt vero illo error eveniet cum.
        </p>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn color="primary" @click.native="shown = false">Get it now <mdb-icon icon="diamond" class="ml-1" color="white"/></mdb-btn>
        <mdb-btn outline="primary" @click.native="shown = false">No, thanks</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

    <hr class="my-5"/>
    <h4>Hide</h4>

    <mdb-btn rounded color="default" @click.native="hide=true">launch danger modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
    <mdb-modal v-if="hide" @hide="handleHide" @close="hide = false" danger>
      <mdb-modal-header>
        <mdb-modal-title>Danger Modal</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-row>
          <mdb-col col="3" class="text-center"><mdb-icon icon="shopping-cart" size="4x"/></mdb-col>
          <mdb-col col="9">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, molestiae provident temporibus sunt earum.</p>
            <h2><badge>v52gs1</badge></h2>
          </mdb-col>
        </mdb-row>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn color="primary" @click.native="hide = false">Get it now <mdb-icon icon="diamond" class="ml-1" color="white"/></mdb-btn>
        <mdb-btn outline="primary" @click.native="hide = false">No, thanks</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

    <hr class="my-5"/>
    <h4>Hidden</h4>

    <mdb-btn rounded color="default" @click.native="hidden=true">launch warning modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
    <mdb-container @hidden="handleHidden">
      <mdb-modal v-if="hidden" @close="hidden = false" warning>
        <mdb-modal-header>
          <mdb-modal-title>Warning Modal</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <mdb-row>
            <mdb-col col="3" class="text-center">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" alt="Michal Szymanski - founder of Material Design for Bootstrap" class="img-fluid z-depth-1-half rounded-circle mb-2">
                    <p class="title mb-0">Jane</p>
                    <p class="text-muted " style="font-size: 13px">Consultant</p>
            </mdb-col>
            <mdb-col col="9">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, molestiae provident temporibus sunt earum.</p>
              <p class="card-text"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong></p>
            </mdb-col>
          </mdb-row>
        </mdb-modal-body>
        <mdb-modal-footer center>
          <mdb-btn color="primary" @click.native="hidden = false">Get it now <mdb-icon icon="diamond" class="ml-1" color="white"/></mdb-btn>
          <mdb-btn outline="primary" @click.native="hidden = false">No, thanks</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbBtn, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbCol, mdbBadge } from 'mdbvue';
export default {
  name:'ModalEventsPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbCol,
    mdbBadge
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
    }
  }
};
</script>

