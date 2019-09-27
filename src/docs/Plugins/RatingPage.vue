<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Rating</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/plugins/vue/rating/?utm_source=DemoApp&utm_medium=MDBVueFree"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-rating v-model="basicRating"/>
        <p class="pt-2"><strong>Your feedback:</strong> {{basicRating}}</p>
      </section>
    </section>
    <section class="demo-section">
      <h4>Custom icons</h4>
      <section>
        <mdb-rating far :options="options" :activeFar="false"/>
      </section>
    </section>
    <section class="demo-section">
      <h4>Face rating</h4>
      <section>
        <mdb-rating far icon="meh-blank" :activeFar="true" :options="faceOptions" iconActiveClass="black-text"/>
      </section>
      <section class="mt-3">
        <mdb-rating far icon="meh-blank" :activeFar="false" :options="colorfulFaceOptions"/>
      </section>
    </section>
    <section class="demo-section">
      <h4>Rating with feedback</h4>
      <section class="d-flex justify-content-center">
        <mdb-rating feedback @submit="submitFeedback"/>
      </section>
    </section>
    <section class="demo-section">
      <h4>Disabled</h4>
      <section>
        <mdb-rating disabled :value="3"/>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbRating } from "mdbvue";
export default {
  name: "RatingPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbRating
  },
  data() {
    return {
      basicRating: 3,
      options: [
        {
          feedback: "Very bad",
          iconActiveClass: "yellow-text-dark-4",
        },
        {
          feedback: "Poor",
          iconActiveClass: "yellow-text-dark-3",
        },
        {
          feedback: "OK",
          iconActiveClass: "yellow-text-dark-2",
        },
        {
          feedback: "Good",
          iconActiveClass: "yellow-text-dark-1",
        },
        {
          feedback: "Excellent",
        }
      ],
      faceOptions: [
        {
          feedback: "Very bad",
          icon: "sad-cry",
        },
        {
          feedback: "Poor",
          icon: "frown",
        },
        {
          feedback: "OK",
          icon: "meh",
        },
        {
          feedback: "Good",
          icon: "smile",
        },
        {
          feedback: "Excellent",
          icon: "laugh-beam",
        }
      ],
      colorfulFaceOptions: [
        {
          feedback: "Very bad",
          icon: "sad-cry",
          iconActiveClass: "red-text"
        },
        {
          feedback: "Poor",
          icon: "frown",
          iconActiveClass: "orange-text"
        },
        {
          feedback: "OK",
          icon: "meh",
          iconActiveClass: "yellow-text"
        },
        {
          feedback: "Good",
          icon: "smile",
          iconActiveClass: "lime-text"
        },
        {
          feedback: "Excellent",
          icon: "laugh-beam",
          iconActiveClass: "green-text"
        }
      ]
    };
  },
  methods: {
    submitFeedback(message){
      console.log(message);
    }
  }
};
</script>

<style>

.yellow-text-dark-2 {
  color: #d7c952!important;
}
.yellow-text-dark-3 {
  color: #9b9247!important;
}
.yellow-text-dark-4 {
  color: #827c47!important;
}
.yellow-text-dark-1 {
  color: #e9d947!important;
}
</style>
