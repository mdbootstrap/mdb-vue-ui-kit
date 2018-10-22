<template>
  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Modal Examples</strong></h4>
      <a href="https://mdbootstrap.com/vue/advanced/modals/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr />

    <row>
      <column col="3">
    <btn color="default" @click="cookies=true" class="mb-3">cookies</btn>
    <modal v-if="cookies" removeBackdrop fullHeight position="bottom">
      <modal-body>
        <row center class="align-items-center">
          <p class="pr-2 mb-0">We use cookies to improve your website experience</p>
          <btn color="primary" @click="cookies = false" icon="book" iconClass="ml-1" iconRight>Learn more</btn>
          <btn outline="primary" @click="cookies = false">Ok, thanks</btn>
        </row>
      </modal-body>
    </modal>

    <btn color="default" class="mb-3" @click="coupon=true">Coupon</btn>
    <modal v-if="coupon" @close="coupon = false" removeBackdrop fullHeight position="top" success>
      <modal-body>
        <row center class="align-items-center" >
          <h2><badge>v52gs1</badge></h2>
          <p class="pt-3 mx-4">We have a gift for you! Use this code to get a
            <strong>10% discount</strong>.</p>
          <btn color="success" @click="coupon = false" icon="book" iconClass="ml-1" iconColor="white" iconRight>Get it</btn>
          <btn outline="success" @click="coupon = false">No, thanks</btn>
        </row>
      </modal-body>
    </modal>

    <btn color="default" class="mb-3" @click="discount=true">Discount</btn>
    <modal v-if="discount" @close="discount = false" removeBackdrop side position="bottom-right" danger>
      <modal-header>
        <p class="heading">Discount offer:
          <strong>10% off</strong>
        </p>
      </modal-header>
      <modal-body>
        <row>
          <column col="3">
            <fa icon="gift" size="4x"/>
          </column>
          <column col="9">
            <p>
              Sharing is caring. Therefore, from time to time we like to give our visitors small gifts. Today is one of those days.</p>
            <p>
              <strong>Copy the following code and use it at the checkout. It's valid for
                <u>one day</u>.</strong>
            </p>
            <h2>
              <badge>v52gs1</badge>
            </h2>
          </column>
        </row>
      </modal-body>
      <modal-footer center>
        <btn color="danger" tag="a" href="https://mdbootstrap.com/product/vue-bootstrap-pro/" target="_blank" icon="diamond" iconClass="ml-1" iconColor="white" iconRight>Get it</btn>
        <btn outline="danger" @click="discount = false">No, thanks</btn>
      </modal-footer>
    </modal>

    <btn color="default" class="mb-3" @click="related=true">Related content</btn>
    <modal v-if="related" @close="related = false" removeBackdrop side position="bottom-right" info>
      <modal-header>
        <p class="heading">Related article</p>
      </modal-header>
      <modal-body>
        <row>
          <column col="5">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(55).jpg" class="img-fluid" alt="Baloon floating in Mind-Space">
          </column>
          <column col="7">
            <p><strong>My travel to paradise</strong></p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit [...]</p>
            <btn color="primary">Read more</btn>
          </column>
        </row>
      </modal-body>
    </modal>

    <btn color="default" class="mb-3" @click="abandoned=true">Abandoned card</btn>
    <modal v-if="abandoned" @close="abandoned = false" removeBackdrop side position="bottom-right" info>
      <modal-header>
        <p class="heading">Product in the cart</p>
      </modal-header>
      <modal-body>
        <row>
          <column col="3">
            <p class="text-center mt-3"><fa icon="shopping-cart" size="4x"/></p>
          </column>
          <column col="9">
            <p>Do you need more time to make a purchase decision?</p>
            <p>No pressure, your product will be waiting for you in the cart.</p>
          </column>
        </row>
      </modal-body>
      <modal-footer center>
        <btn tag="a" color="primary">Go to cart</btn>
        <btn tag="a" outline="primary" @click="abandoned=false">Cancel</btn>
      </modal-footer>
    </modal>


    <btn color="default" class="mb-3" @click="confirm=true">Confirm delete</btn>
    <modal v-if="confirm" @close="confirm = false" size="sm" class="text-center" danger>
      <modal-header center :close="false">
        <p class="heading">Are you sure?</p>
      </modal-header>
      <modal-body>
         <fa icon="times" size="4x" class="animated rotateIn"/>
      </modal-body>
      <modal-footer center>
        <btn outline="danger" @click="confirm=false">Yes</btn>
        <btn color="danger" @click="confirm=false">No</btn>
      </modal-footer>
    </modal>

    <btn color="default" class="mb-3 mr-5" @click="poll=true">Poll</btn>
    <modal v-if="poll" @close="poll = false" fullHeight info removeBackdrop>
      <modal-header center :close="false">
        <p class="heading lead">Feedback request</p>
      </modal-header>
      <modal-body>
        <div class="text-center">
          <fa icon="file-text-o" size="4x" class="mb-3 animated rotateIn"/>
          <p><strong>Your opinion matters</strong></p>
          <p>Have some ideas how to improve our product?
          <strong>Give us your feedback.</strong></p>
        </div>
        <hr/>
        <p class="text-center">
          <strong>Your rating</strong>
        </p>

        <Input type="radio"
          id="option1-1"
          name="option1"
          value="option1"
          label="Very good"
        />
        <Input type="radio"
          id="option1-2"
          name="option1"
          value="option2"
          label="Good"
        />
        <Input type="radio"
          id="option1-3"
          name="option1"
          value="option3"
          label="Mediocre"
        />
        <Input type="radio"
          id="option1-4"
          name="option1"
          value="option4"
          label="Bad"
        />
        <Input type="radio"
          id="option1-5"
          name="option1"
          value="option5"
          label="Very bad"
        />
        <p class="text-center">
          <strong>What could we improve?</strong>
        </p>
        <md-textarea :rows="3" label="Your message"/>
      </modal-body>
      <modal-footer center>
        <btn color="primary" @click="poll=false" icon="paper-plane" iconRight iconClass="ml-1 white-text">Send</btn>
        <btn outline="primary" @click="poll=false">Cancel</btn>
      </modal-footer>
    </modal>

    <btn color="default" class="mb-3 mr-5" @click="cart=true">Cart</btn>
    <modal v-if="cart" @close="cart = false" class="text-center">
      <modal-header>
        <h4 class="modal-title" id="myModalLabel">Your cart</h4>
      </modal-header>
      <modal-body>
         <tbl hover>
           <tbl-head>
            <tr>
              <th>#</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
           </tbl-head>
            <tr>
              <th scope="row">1</th>
              <td>Product 1</td>
              <td>100$</td>
              <td><a><i class="fa fa-remove"></i></a></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Product 2</td>
              <td>100$</td>
              <td><a><i class="fa fa-remove"></i></a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Product 3</td>
              <td>100$</td>
              <td><a><i class="fa fa-remove"></i></a></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Product 4</td>
              <td>100$</td>
              <td><a><i class="fa fa-remove"></i></a></td>
            </tr>
            <tr class="total">
              <th scope="row">5</th>
              <td>Total</td>
              <td>400$</td>
              <td></td>
            </tr>
           <tbl-body>
           </tbl-body>
         </tbl>
      </modal-body>
      <modal-footer>
        <btn outline="primary" @click="cart=false">Close</btn>
        <btn color="primary" @click="cart=false">Checkout</btn>
      </modal-footer>
    </modal>


    <btn color="default" class="mb-3" @click="push=true">Push</btn>
    <modal v-if="push" @close="push = false" class="text-center" info>
      <modal-header center :close="false">
        <p class="heading">Be always up to date</p>
      </modal-header>
      <modal-body>
        <fa icon="bell" size="4x" class="animated rotateIn mb-4"/>
        <p>Do you want to receive the push notification about the newest posts?</p>
      </modal-body>
      <modal-footer center>
        <btn outline="primary" @click="push=false" tag="a" href="https://mdbootstrap.com/vue/newsletter/" target="_blank">Yes</btn>
        <btn color="primary" @click="push=false">No</btn>
      </modal-footer>
    </modal>

      </column>
    </row>
  </container>
</template>

<script>
import {Container, Row, Column, Fa, Btn, Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle, Badge, Input, MdTextarea, Tbl, TblHead, TblBody, Carousel, CarouselItem, CarouselIndicators, CarouselIndicator, Accordion, CardBody } from 'mdbvue';

export default {
  name: 'ModalExamplesPage',
  components: {
    Container,
    Row,
    Column,
    Fa,
    Btn,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalTitle,
    Badge,
    Input,
    MdTextarea,
    Tbl,
    TblHead,
    TblBody,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselIndicator,
    Accordion,
    CardBody
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
      panes: [
        {
          title: 'Description',
          content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
        }, {
          title: 'Details',
          content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
        },
        {
          title: 'Shipping',
          content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
        }
      ],
      colors: [
        "White",
        "Black",
        "Pink"
      ],
      sizes: [
        "XS",
        "S",
        "L"
      ],
      share: false
    };
  }
};
</script>

<style>

</style>
