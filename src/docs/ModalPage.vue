<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Modals</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/modals/basic/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container class="mt-5">
      <h4>Basic example</h4>
      <mdb-btn color="primary" @click.native="showModal = true">Launch demo modal</mdb-btn>
      <mdb-modal v-if="showModal" @close="showModal = false">
        <mdb-modal-header>
          <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>...</mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="success" @click.native="showModal2 = true">Show modal 2</mdb-btn>
          <mdb-btn color="secondary" @click.native="showModal = false">Close</mdb-btn>
          <mdb-btn color="primary">Save changes</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
      <h4 class="mt-4">Sizes</h4>
      <mdb-btn color="primary" @click.native="showModal2 = true">Small modal</mdb-btn>
      <mdb-modal size="sm" v-if="showModal2" @close="showModal2 = false">
        <mdb-modal-header>
          <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>...</mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" size="sm" @click.native="showModal2 = false">Close</mdb-btn>
          <mdb-btn color="primary" size="sm">Save changes</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
      <mdb-btn color="primary" @click.native="showModal3 = true">Large modal</mdb-btn>
      <mdb-modal size="lg" v-if="showModal3" @close="showModal3 = false">
        <mdb-modal-header>
          <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>...</mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="showModal3 = false">Close</mdb-btn>
          <mdb-btn color="primary">Save changes</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
      <mdb-btn color="primary" @click.native="showModal4 = true">Fluid modal</mdb-btn>
      <mdb-modal size="fluid" v-if="showModal4" @close="showModal4 = false">
        <mdb-modal-header>
          <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>...</mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="showModal4 = false">Close</mdb-btn>
          <mdb-btn color="primary">Save changes</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>

      <h4 class="mt-4">Position</h4>
      <mdb-btn color="primary" @click.native="showModal5 = true">Top right</mdb-btn>
      <mdb-modal side position="top-right" direction="right" v-if="showModal5" @close="showModal5 = false">
        <mdb-modal-header>
          <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>...</mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="showModal5 = false">Close</mdb-btn>
          <mdb-btn color="primary">Save changes</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
      <mdb-btn color="primary" @click.native="showModal6 = true">Bottom left</mdb-btn>
      <mdb-modal side position="bottom-left" direction="left" v-if="showModal6" @close="showModal6 = false">
        <mdb-modal-header>
          <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>...</mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="showModal6 = false">Close</mdb-btn>
          <mdb-btn color="primary">Save changes</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
      <h4 class="mt-4">Fluid modal</h4>
      <mdb-btn color="primary" @click.native="showModal7 = true">Right</mdb-btn>
      <mdb-modal fullHeight position="right" direction="right" v-if="showModal7" @close="showModal7 = false">
        <mdb-modal-header>
          <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>...</mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="showModal7 = false">Close</mdb-btn>
          <mdb-btn color="primary">Save changes</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
      <mdb-btn color="primary" @click.native="showModal8 = true">Bottom</mdb-btn>
      <mdb-modal fullHeight position="bottom" direction="bottom" v-if="showModal8" @close="showModal8 = false">
        <mdb-modal-header>
          <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>...</mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="showModal8 = false">Close</mdb-btn>
          <mdb-btn color="primary">Save changes</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>

      <h4 class="mt-4">Frame modal</h4>
      <mdb-btn color="primary" @click.native="showModal9 = true">Bottom</mdb-btn>
      <mdb-modal frame position="bottom" direction="bottom" v-if="showModal9" @close="showModal9 = false">
        <mdb-modal-body class="text-center">
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
          <mdb-btn color="secondary" @click.native="showModal9 = false">Close</mdb-btn>
          <mdb-btn color="primary">Save changes</mdb-btn>
        </mdb-modal-body>
      </mdb-modal>
      <mdb-btn color="primary" @click.native="showModal10 = true">Top</mdb-btn>
      <mdb-modal frame position="top" v-if="showModal10" @close="showModal10 = false">
        <mdb-modal-body class="text-center">
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
          <mdb-btn color="secondary" @click.native="showModal10 = false">Close</mdb-btn>
          <mdb-btn color="primary">Save changes</mdb-btn>
        </mdb-modal-body>
      </mdb-modal>

      <h4 class="mt-4">Remove backdrop</h4>
      <mdb-btn color="primary" @click.native="showModal11 = true">Launch modal</mdb-btn>
      <mdb-modal removeBackdrop side position="top-right" v-if="showModal11" @close="showModal11 = false">
        <mdb-modal-header>
          <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>...</mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="showModal11 = false">Close</mdb-btn>
          <mdb-btn color="primary">Save changes</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>

      <h4 class="mt-4">Scrolling </h4>
      <mdb-btn color="primary" @click.native="showModal12 = true">Launch modal</mdb-btn>
      <mdb-modal v-if="showModal12" @close="showModal12 = false">
        <mdb-modal-header>
          <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="showModal12 = false">Close</mdb-btn>
          <mdb-btn color="primary">Save changes</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>

      <h4 class="mt-4">Centered</h4>
      <mdb-btn color="primary" @click.native="showModal13 = true">Launch modal</mdb-btn>
      <mdb-modal centered v-if="showModal13" @close="showModal13 = false">
        <mdb-modal-header>
          <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>...</mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="showModal13 = false">Close</mdb-btn>
          <mdb-btn color="primary">Save changes</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>

      <h4 class="mt-4">Tooltips and popovers</h4>
      <mdb-btn color="primary" @click.native="showModal14 = true">Launch modal</mdb-btn>
      <mdb-modal v-if="showModal14" @close="showModal14 = false">
        <mdb-modal-header>
          <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <mdb-modal-title>Popover in modal</mdb-modal-title>
          <div>This
            <mdb-popover trigger="click" :options="{placement: 'right'}">
              <div class="popover">
                <div class="popover-header">
                  Popover title
                </div>
                <div class="popover-body">
                  Popover body content is set in this attribute.
                </div>
              </div>
              <mdb-btn slot="reference" color="default">
                Button
              </mdb-btn>
            </mdb-popover>
            triggers a popover on click.
          </div>
          <hr/>
          <mdb-modal-title>Tooltips in a modal</mdb-modal-title>
          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
            <div class="tooltip">
              Tooltip
            </div>
            <a slot="reference">
              This link
            </a>
          </mdb-tooltip>
          and
          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
            <div class="tooltip">
              Tooltip
            </div>
            <a slot="reference">
              that link
            </a>
          </mdb-tooltip>
          have tooltips on hover.
        </mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="showModal14 = false">Close</mdb-btn>
          <mdb-btn color="primary">Save changes</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>

      <h4 class="mt-4">Using the grid</h4>
      <mdb-btn color="primary" @click.native="showModal15 = true">Launch modal</mdb-btn>
      <mdb-modal v-if="showModal15" @close="showModal15 = false">
        <mdb-modal-header>
          <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <mdb-container fluid class="text-white">
            <mdb-row>
              <mdb-col md="4" class="bg-info">.col-md-4</mdb-col>
              <mdb-col md="4" class="ml-auto bg-info">.col-md-4 .ml-auto</mdb-col>
            </mdb-row>
            <br />
            <mdb-row>
              <mdb-col md="3" class="ml-auto bg-info">.col-md-3 .ml-auto</mdb-col>
              <mdb-col md="2" class="ml-auto bg-info">.col-md-2 .ml-auto</mdb-col>
            </mdb-row>
            <mdb-row>
              <mdb-col md="6" class="ml-5 bg-info">.col-md-6 .ml-5</mdb-col>
            </mdb-row>
            <br />
            <mdb-row>
              <mdb-col sm="9" class="bg-info">
                Level 1: .col-sm-9
                <mdb-row>
                  <mdb-col sm="6" class="bg-info">
                    Level 2: .col-8 .col-sm-6
                  </mdb-col>
                  <mdb-col sm="6" class="bg-info">
                    Level 2: .col-4 .col-sm-6
                  </mdb-col>
                </mdb-row>
              </mdb-col>
            </mdb-row>
          </mdb-container>
        </mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="showModal15 = false">Close</mdb-btn>
          <mdb-btn color="primary">Save changes</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
      <h4 class="mt-4">Varying modal content</h4>
      <mdb-btn color="primary" @click.native="showModal16 = true">Open modal for {{mailAddress}}</mdb-btn>
      <mdb-modal v-if="showModal16" @close="showModal16 = false">
        <mdb-modal-header>
          <mdb-modal-title>New message to {{mailAddress}}</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <mdb-input type="text" :label="mailAddress"/>
          <mdb-textarea label="Message"/>
        </mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="showModal16 = false">Close</mdb-btn>
          <mdb-btn color="primary">Send message</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbBtn, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTooltip, Popover, mdbInput, mdbTextarea, mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';

export default {
  name: 'ModalPage',
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false,
      showModal7: false,
      showModal8: false,
      showModal9: false,
      showModal10: false,
      showModal11: false,
      showModal12: false,
      showModal13: false,
      showModal14: false,
      showModal15: false,
      showModal16: false,
      mailAddress: '@mdo'
    };
  },
  components: {
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbTooltip,
    Popover,
    mdbInput,
    mdbTextarea,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
