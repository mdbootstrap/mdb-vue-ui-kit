<template>
  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Modals</strong></h4>
      <a href="https://mdbootstrap.com/vue/advanced/modals/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr />
    <container class="mt-5">
      <h4>Basic example</h4>
      <btn color="primary" @click.native="showModal = true">Launch demo modal</btn>
      <modal v-if="showModal" @close="showModal = false">
        <modal-header>
          <modal-title>Modal title</modal-title>
        </modal-header>
        <modal-body>...</modal-body>
        <modal-footer>
          <btn color="secondary" @click.native="showModal = false">Close</btn>
          <btn color="primary">Save changes</btn>
        </modal-footer>
      </modal>

      <h4 class="mt-4">Sizes</h4>
      <btn color="primary" @click.native="showModal2 = true">Small modal</btn>
      <modal size="sm" v-if="showModal2" @close="showModal2 = false">
        <modal-header>
          <modal-title>Modal title</modal-title>
        </modal-header>
        <modal-body>...</modal-body>
        <modal-footer>
          <btn color="secondary" size="sm" @click.native="showModal2 = false">Close</btn>
          <btn color="primary" size="sm">Save changes</btn>
        </modal-footer>
      </modal>
      <btn color="primary" @click.native="showModal3 = true">Large modal</btn>
      <modal size="lg" v-if="showModal3" @close="showModal3 = false">
        <modal-header>
          <modal-title>Modal title</modal-title>
        </modal-header>
        <modal-body>...</modal-body>
        <modal-footer>
          <btn color="secondary" @click.native="showModal3 = false">Close</btn>
          <btn color="primary">Save changes</btn>
        </modal-footer>
      </modal>
      <btn color="primary" @click.native="showModal4 = true">Fluid modal</btn>
      <modal size="fluid" v-if="showModal4" @close="showModal4 = false">
        <modal-header>
          <modal-title>Modal title</modal-title>
        </modal-header>
        <modal-body>...</modal-body>
        <modal-footer>
          <btn color="secondary" @click.native="showModal4 = false">Close</btn>
          <btn color="primary">Save changes</btn>
        </modal-footer>
      </modal>

      <h4 class="mt-4">Position</h4>
      <btn color="primary" @click.native="showModal5 = true">Top right</btn>
      <modal side position="top-right" v-if="showModal5" @close="showModal5 = false">
        <modal-header>
          <modal-title>Modal title</modal-title>
        </modal-header>
        <modal-body>...</modal-body>
        <modal-footer>
          <btn color="secondary" @click.native="showModal5 = false">Close</btn>
          <btn color="primary">Save changes</btn>
        </modal-footer>
      </modal>
      <btn color="primary" @click.native="showModal6 = true">Bottom left</btn>
      <modal side position="bottom-left" v-if="showModal6" @close="showModal6 = false">
        <modal-header>
          <modal-title>Modal title</modal-title>
        </modal-header>
        <modal-body>...</modal-body>
        <modal-footer>
          <btn color="secondary" @click.native="showModal6 = false">Close</btn>
          <btn color="primary">Save changes</btn>
        </modal-footer>
      </modal>
      <h4 class="mt-4">Fluid modal</h4>
      <btn color="primary" @click.native="showModal7 = true">Right</btn>
      <modal fullHeight position="right" v-if="showModal7" @close="showModal7 = false">
        <modal-header>
          <modal-title>Modal title</modal-title>
        </modal-header>
        <modal-body>...</modal-body>
        <modal-footer>
          <btn color="secondary" @click.native="showModal7 = false">Close</btn>
          <btn color="primary">Save changes</btn>
        </modal-footer>
      </modal>
      <btn color="primary" @click.native="showModal8 = true">Bottom</btn>
      <modal fullHeight position="bottom" v-if="showModal8" @close="showModal8 = false">
        <modal-header>
          <modal-title>Modal title</modal-title>
        </modal-header>
        <modal-body>...</modal-body>
        <modal-footer>
          <btn color="secondary" @click.native="showModal8 = false">Close</btn>
          <btn color="primary">Save changes</btn>
        </modal-footer>
      </modal>

      <h4 class="mt-4">Frame modal</h4>
      <btn color="primary" @click.native="showModal9 = true">Bottom</btn>
      <modal frame position="bottom" v-if="showModal9" @close="showModal9 = false">
        <modal-body class="text-center">
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
          <btn color="secondary" @click.native="showModal9 = false">Close</btn>
          <btn color="primary">Save changes</btn>
        </modal-body>
      </modal>
      <btn color="primary" @click.native="showModal10 = true">Top</btn>
      <modal frame position="top" v-if="showModal10" @close="showModal10 = false">
        <modal-body class="text-center">
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
          <btn color="secondary" @click.native="showModal10 = false">Close</btn>
          <btn color="primary">Save changes</btn>
        </modal-body>
      </modal>

      <h4 class="mt-4">Remove backdrop</h4>
      <btn color="primary" @click.native="showModal11 = true">Launch modal</btn>
      <modal removeBackdrop side position="top-right" v-if="showModal11" @close="showModal11 = false">
        <modal-header>
          <modal-title>Modal title</modal-title>
        </modal-header>
        <modal-body>...</modal-body>
        <modal-footer>
          <btn color="secondary" @click.native="showModal11 = false">Close</btn>
          <btn color="primary">Save changes</btn>
        </modal-footer>
      </modal>

      <h4 class="mt-4">Scrolling </h4>
      <btn color="primary" @click.native="showModal12 = true">Launch modal</btn>
      <modal v-if="showModal12" @close="showModal12 = false">
        <modal-header>
          <modal-title>Modal title</modal-title>
        </modal-header>
        <modal-body>
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
        </modal-body>
        <modal-footer>
          <btn color="secondary" @click.native="showModal12 = false">Close</btn>
          <btn color="primary">Save changes</btn>
        </modal-footer>
      </modal>

      <h4 class="mt-4">Centered</h4>
      <btn color="primary" @click.native="showModal13 = true">Launch modal</btn>
      <modal centered v-if="showModal13" @close="showModal13 = false">
        <modal-header>
          <modal-title>Modal title</modal-title>
        </modal-header>
        <modal-body>...</modal-body>
        <modal-footer>
          <btn color="secondary" @click.native="showModal13 = false">Close</btn>
          <btn color="primary">Save changes</btn>
        </modal-footer>
      </modal>

      <h4 class="mt-4">Tooltips and popovers</h4>
      <btn color="primary" @click.native="showModal14 = true">Launch modal</btn>
      <modal v-if="showModal14" @close="showModal14 = false">
        <modal-header>
          <modal-title>Modal title</modal-title>
        </modal-header>
        <modal-body>
          <modal-title>Popover in modal</modal-title>
          <div>This
            <popover trigger="click" :options="{placement: 'right'}">
              <div class="popover">
                <div class="popover-header">
                  Popover title
                </div>
                <div class="popover-body">
                  Popover body content is set in this attribute.
                </div>
              </div>
              <btn slot="reference" color="default">
                Button
              </btn>
            </popover>
            triggers a popover on click.
          </div>
          <hr/>
          <modal-title>Tooltips in a modal</modal-title>
          <tooltip trigger="hover" :options="{placement: 'top'}">
            <div class="tooltip">
              Tooltip
            </div>
            <a slot="reference">
              This link
            </a>
          </tooltip>
          and
          <tooltip trigger="hover" :options="{placement: 'top'}">
            <div class="tooltip">
              Tooltip
            </div>
            <a slot="reference">
              that link
            </a>
          </tooltip>
          have tooltips on hover.
        </modal-body>
        <modal-footer>
          <btn color="secondary" @click.native="showModal14 = false">Close</btn>
          <btn color="primary">Save changes</btn>
        </modal-footer>
      </modal>

      <h4 class="mt-4">Using the grid</h4>
      <btn color="primary" @click.native="showModal15 = true">Launch modal</btn>
      <modal v-if="showModal15" @close="showModal15 = false">
        <modal-header>
          <modal-title>Modal title</modal-title>
        </modal-header>
        <modal-body>
          <container fluid class="text-white">
            <row>
              <column md="4" class="bg-info">.col-md-4</column>
              <column md="4" class="ml-auto bg-info">.col-md-4 .ml-auto</column>
            </row>
            <br />
            <row>
              <column md="3" class="ml-auto bg-info">.col-md-3 .ml-auto</column>
              <column md="2" class="ml-auto bg-info">.col-md-2 .ml-auto</column>
            </row>
            <row>
              <column md="6" class="ml-5 bg-info">.col-md-6 .ml-5</column>
            </row>
            <br />
            <row>
              <column sm="9" class="bg-info">
                Level 1: .col-sm-9
                <row>
                  <column sm="6" class="bg-info">
                    Level 2: .col-8 .col-sm-6
                  </column>
                  <column sm="6" class="bg-info">
                    Level 2: .col-4 .col-sm-6
                  </column>
                </row>
              </column>
            </row>
          </container>
        </modal-body>
        <modal-footer>
          <btn color="secondary" @click.native="showModal15 = false">Close</btn>
          <btn color="primary">Save changes</btn>
        </modal-footer>
      </modal>
      <h4 class="mt-4">Varying modal content</h4>
      <btn color="primary" @click.native="showModal16 = true">Open modal for {{mailAddress}}</btn>
      <modal v-if="showModal16" @close="showModal16 = false">
        <modal-header>
          <modal-title>New message to {{mailAddress}}</modal-title>
        </modal-header>
        <modal-body>
          <mdb-input type="text" :label="mailAddress"/>
          <md-textarea label="Message"/>
        </modal-body>
        <modal-footer>
          <btn color="secondary" @click.native="showModal16 = false">Close</btn>
          <btn color="primary">Send message</btn>
        </modal-footer>
      </modal>
    </container>
  </container>
</template>

<script>
import { Btn, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Tooltip, Popover, mdbInput, MdTextarea, Container, Row, Column, Fa } from 'mdbvue';

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
    Btn,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter,
    Tooltip,
    Popover,
    mdbInput,
    MdTextarea,
    Container,
    Row,
    Column,
    Fa
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
