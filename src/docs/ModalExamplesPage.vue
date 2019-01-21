<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Modal Examples</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/modals/basic/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />

    <mdb-row>
      <mdb-col col="3">
    <mdb-btn color="default" @click="cookies=true" class="mb-3">cookies</mdb-btn>
    <mdb-modal v-if="cookies" removeBackdrop fullHeight position="bottom">
      <mdb-modal-body>
        <mdb-row center class="align-items-center">
          <p class="pr-2 mb-0">We use cookies to improve your website experience</p>
          <mdb-btn color="primary" @click="cookies = false" icon="book" iconClass="ml-1" iconRight>Learn more</mdb-btn>
          <mdb-btn outline="primary" @click="cookies = false">Ok, thanks</mdb-btn>
        </mdb-row>
      </mdb-modal-body>
    </mdb-modal>

    <mdb-btn color="default" class="mb-3" @click="coupon=true">Coupon</mdb-btn>
    <mdb-modal v-if="coupon" @close="coupon = false" removeBackdrop fullHeight position="top" success>
      <mdb-modal-body>
        <mdb-row center class="align-items-center" >
          <h2><mdb-badge>v52gs1</mdb-badge></h2>
          <p class="pt-3 mx-4">We have a gift for you! Use this code to get a
            <strong>10% discount</strong>.</p>
          <mdb-btn color="success" @click="coupon = false" icon="book" iconClass="ml-1" iconColor="white" iconRight>Get it</mdb-btn>
          <mdb-btn outline="success" @click="coupon = false">No, thanks</mdb-btn>
        </mdb-row>
      </mdb-modal-body>
    </mdb-modal>

    <mdb-btn color="default" class="mb-3" @click="discount=true">Discount</mdb-btn>
    <mdb-modal v-if="discount" @close="discount = false" removeBackdrop side position="bottom-right" danger>
      <mdb-modal-header>
        <p class="heading">Discount offer:
          <strong>10% off</strong>
        </p>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-row>
          <mdb-col col="3">
            <mdb-icon icon="gift" size="4x"/>
          </mdb-col>
          <mdb-col col="9">
            <p>
              Sharing is caring. Therefore, from time to time we like to give our visitors small gifts. Today is one of those days.</p>
            <p>
              <strong>Copy the following code and use it at the checkout. It's valid for
                <u>one day</u>.</strong>
            </p>
            <h2>
              <mdb-badge>v52gs1</mdb-badge>
            </h2>
          </mdb-col>
        </mdb-row>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn color="danger" tag="a" href="https://mdbootstrap.com/product/vue-bootstrap-pro/" target="_blank" icon="gem" iconClass="ml-1" far iconColor="white" iconRight>Get it</mdb-btn>
        <mdb-btn outline="danger" @click="discount = false">No, thanks</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

    <mdb-btn color="default" class="mb-3" @click="related=true">Related content</mdb-btn>
    <mdb-modal v-if="related" @close="related = false" removeBackdrop side position="bottom-right" info>
      <mdb-modal-header>
        <p class="heading">Related article</p>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-row>
          <mdb-col col="5">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(55).jpg" class="img-fluid" alt="Baloon floating in Mind-Space">
          </mdb-col>
          <mdb-col col="7">
            <p><strong>My travel to paradise</strong></p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit [...]</p>
            <mdb-btn color="primary">Read more</mdb-btn>
          </mdb-col>
        </mdb-row>
      </mdb-modal-body>
    </mdb-modal>

    <mdb-btn color="default" class="mb-3" @click="abandoned=true">Abandoned card</mdb-btn>
    <mdb-modal v-if="abandoned" @close="abandoned = false" removeBackdrop side position="bottom-right" info>
      <mdb-modal-header>
        <p class="heading">Product in the cart</p>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-row>
          <mdb-col col="3">
            <p class="text-center mt-3"><mdb-icon icon="shopping-cart" size="4x"/></p>
          </mdb-col>
          <mdb-col col="9">
            <p>Do you need more time to make a purchase decision?</p>
            <p>No pressure, your product will be waiting for you in the cart.</p>
          </mdb-col>
        </mdb-row>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn tag="a" color="primary">Go to cart</mdb-btn>
        <mdb-btn tag="a" outline="primary" @click="abandoned=false">Cancel</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>


    <mdb-btn color="default" class="mb-3" @click="confirm=true">Confirm delete</mdb-btn>
    <mdb-modal v-if="confirm" @close="confirm = false" size="sm" class="text-center" danger>
      <mdb-modal-header center :close="false">
        <p class="heading">Are you sure?</p>
      </mdb-modal-header>
      <mdb-modal-body>
         <mdb-icon icon="times" size="4x" class="animated rotateIn"/>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn outline="danger" @click="confirm=false">Yes</mdb-btn>
        <mdb-btn color="danger" @click="confirm=false">No</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

    <mdb-btn color="default" class="mb-3 mr-5" @click="poll=true">Poll</mdb-btn>
    <mdb-modal v-if="poll" @close="poll = false" fullHeight info removeBackdrop>
      <mdb-modal-header center :close="false">
        <p class="heading lead">Feedback request</p>
      </mdb-modal-header>
      <mdb-modal-body>
        <div class="text-center">
          <mdb-icon icon="file-text-o" size="4x" class="mb-3 animated rotateIn"/>
          <p><strong>Your opinion matters</strong></p>
          <p>Have some ideas how to improve our product?
          <strong>Give us your feedback.</strong></p>
        </div>
        <hr/>
        <p class="text-center">
          <strong>Your rating</strong>
        </p>

        <mdb-input type="radio"
          id="option1-1"
          name="option1"
          value="option1"
          label="Very good"
        />
        <mdb-input type="radio"
          id="option1-2"
          name="option1"
          value="option2"
          label="Good"
        />
        <mdb-input type="radio"
          id="option1-3"
          name="option1"
          value="option3"
          label="Mediocre"
        />
        <mdb-input type="radio"
          id="option1-4"
          name="option1"
          value="option4"
          label="Bad"
        />
        <mdb-input type="radio"
          id="option1-5"
          name="option1"
          value="option5"
          label="Very bad"
        />
        <p class="text-center">
          <strong>What could we improve?</strong>
        </p>
        <mdb-textarea :rows="3" label="Your message"/>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn color="primary" @click="poll=false" icon="paper-plane" iconRight iconClass="ml-1 white-text">Send</mdb-btn>
        <mdb-btn outline="primary" @click="poll=false">Cancel</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

    <mdb-btn color="default" class="mb-3 mr-5" @click="cart=true">Cart</mdb-btn>
    <mdb-modal v-if="cart" @close="cart = false" class="text-center">
      <mdb-modal-header>
        <h4 class="modal-title" id="myModalLabel">Your cart</h4>
      </mdb-modal-header>
      <mdb-modal-body>
         <mdb-tbl hover>
           <mdb-tbl-head>
            <tr>
              <th>#</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
           </mdb-tbl-head>
           <mdb-tbl-body>
            <tr>
              <th scope="row">1</th>
              <td>Product 1</td>
              <td>100$</td>
              <td><a><mdb-icon icon="times"/></a></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Product 2</td>
              <td>100$</td>
              <td><a><mdb-icon icon="times"/></a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Product 3</td>
              <td>100$</td>
              <td><a><mdb-icon icon="times"/></a></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Product 4</td>
              <td>100$</td>
              <td><a><mdb-icon icon="times"/></a></td>
            </tr>
            <tr class="total">
              <th scope="row">5</th>
              <td>Total</td>
              <td>400$</td>
              <td></td>
            </tr>
           </mdb-tbl-body>
         </mdb-tbl>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn outline="primary" @click="cart=false">Close</mdb-btn>
        <mdb-btn color="primary" @click="cart=false">Checkout</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>


    <mdb-btn color="default" class="mb-3" @click="push=true">Push</mdb-btn>
    <mdb-modal v-if="push" @close="push = false" class="text-center" info>
      <mdb-modal-header center :close="false">
        <p class="heading">Be always up to date</p>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-icon icon="bell" size="4x" class="animated rotateIn mb-4"/>
        <p>Do you want to receive the push notification about the newest posts?</p>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn outline="primary" @click="push=false" tag="a" href="https://mdbootstrap.com/docs/vue/newsletter/" target="_blank">Yes</mdb-btn>
        <mdb-btn color="primary" @click="push=false">No</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
      </mdb-col>
    </mdb-row>

  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter, mdbModalTitle, mdbBadge, mdbInput, mdbTextarea, mdbTbl, mdbTblHead, mdbTblBody, mdbCarousel, mdbCarouselItem, mdbCarouselIndicators, mdbCarouselIndicator, mdbAccordion, mdbCardBody } from 'mdbvue';

export default {
  name: 'ModalExamplesPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter,
    mdbModalTitle,
    mdbBadge,
    mdbInput,
    mdbTextarea,
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselIndicators,
    mdbCarouselIndicator,
    mdbAccordion,
    mdbCardBody,
  },
  data() {
    return {
      cookies: false,
      coupon: false,
      discount: false,
      related: false,
      abandoned: false,
      confirm: false,
      poll: false,
      cart: false,
      push: false,
      product: false,
      share: false
    };
  }
};
</script>

<style>

</style>
