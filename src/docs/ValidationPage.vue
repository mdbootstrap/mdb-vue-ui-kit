<template>
  <container class="mt-5">
    <h4><strong>Material design inputs</strong></h4>
    <form id="1" @submit="checkForm">
      <md-input label="Your name (must be at least three letters)"
                name="name"
                id="name"
                v-model="name"
                :valid="valid1"/>
      <btn type="submit">Submit</btn>
    </form>
    <!-- Default form inline -->
  </container>
</template>

<script>
import { MdInput, Container, Btn, } from "mdbvue";

export default {
  name: "InputsPage",
  components: {
    MdInput,
    Container,
    Btn
  },
  data() {
    return {
      name: null,
      valid1: false
    };
  },
  methods: {
    checkForm(e) {
      if (this.name.length < 3) {
        this.valid1 = true;
        console.log(this.name.length);
      }
      e.preventDefault();
    }
  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
