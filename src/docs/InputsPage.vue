<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Inputs</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/inputs/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container class="mt-5">
      <h4><strong>Material design inputs</strong></h4>
      <div style="margin-top:3rem;max-width:20rem">
        <mdb-input type="text" label="Basic example" :value="test" @input="handleInput" @change="handleInput" />
        <mdb-btn @click="changeValue">Update value</mdb-btn>
        <mdb-input size="sm" type="text" label="Small input"/>
      </div>
      <div style="margin-top:3rem;max-width:20rem">
        <mdb-input type="text" label="Input with icon" icon="envelope" />
      </div>
      <div style="margin-top:3rem;max-width:20rem">
        <mdb-input type="text" label="Example label" placeholder="Placeholder" />
      </div>
      <div style="margin-top:3rem;max-width:20rem">
        <mdb-input type="text" label="Basic example" disabled />
      </div>
      <div style="margin-top:3rem;max-width:20rem">
        <mdb-input type="email" label="Your e-mail" />
      </div>
      <div style="margin-top:3rem;max-width:20rem">
        <mdb-input type="password" label="Password" />
      </div>
      <div style="margin-top:3rem;max-width:20rem">
        <mdb-input type="number" label="Number" @input="handleInput" />
      </div>
      <div style="margin-top:3rem;max-width:20rem">
        <mdb-textarea label="Textarea" />
      </div>
      <h4 class="mt-5 mb-3"><strong>Numeric inputs</strong></h4>
      <div style="margin-top:3rem;max-width:20rem">
        <mdb-numeric-input :max="10" :emptyValue="5" minus @input="handleInput" /><br/>
        <mdb-numeric-input :min="0" :max="10" :precision="1" :emptyValue="5.3" /><br/>
        <mdb-numeric-input :min="0" :max="10" placeholder="placeholder" />
      </div>
      <h4 class="mt-5 mb-3"><strong>Default inputs</strong></h4>
      <div style="max-width:20rem">
        <label for="exampleForm2">Default input</label>
        <input type="text" id="exampleForm2" class="form-control">
      </div>
      <h5 class="mt-5 mb-3">Sizing</h5>
      <div style="max-width:20rem">
        <input class="form-control form-control-lg" type="text" placeholder="Large input"/>
        <br/>
        <input class="form-control" type="text" placeholder="Medium input"/>
        <br/>
        <input class="form-control form-control-sm" type="text" placeholder="Small input"/>
      </div>
      <h5 class="mt-5 mb-3">Disabled input</h5>
      <div style="max-width:20rem">
        <label for="inputDisabledEx2" class="disabled">Example label</label>
        <input type="text" id="inputDisabledEx2" class="form-control" disabled>
      </div>
      <h5 class="mt-5 mb-3">Form layouts</h5>
      <div style="max-width:20rem">
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Example label</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Another label</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
          </div>
        </form>
      </div>
      <h5 class="mt-5 mb-3">Form grid</h5>
      <div style="max-width:20rem">
        <form>
          <mdb-row>
            <mdb-col>
              <input type="text" class="form-control" placeholder="First name">
            </mdb-col>
            <mdb-col>
              <input type="text" class="form-control" placeholder="Last name">
            </mdb-col>
          </mdb-row>
        </form>
      </div>
      <br/>
      <form>
        <div class="form-row">
          <mdb-col md="6" class="form-group">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
          </mdb-col>
          <mdb-col md="6" class="form-group">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
          </mdb-col>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
        </div>
        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
        </div>
        <div class="form-row">
          <mdb-col md="6" class="form-group">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" placeholder="New York City">
          </mdb-col>
          <mdb-col md="6" class="form-group">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" placeholder="11206-1117">
          </mdb-col>
        </div>
        <button type="submit" class="btn btn-primary btn-md">Sign in</button>
      </form>
      <br/>
      <form>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <mdb-col sm="10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
          </mdb-col>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <mdb-col sm="10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
          </mdb-col>
        </div>
        <div class="form-group row">
          <mdb-col sm="10">
            <button type="submit" class="btn btn-primary btn-md">Sign in</button>
          </mdb-col>
        </div>
      </form>
      <br/>
      <form>
        <div class="form-row">
          <mdb-col col="7">
            <input type="text" class="form-control" placeholder="City">
          </mdb-col>
          <mdb-col>
            <input type="text" class="form-control" placeholder="State">
          </mdb-col>
          <mdb-col>
            <input type="text" class="form-control" placeholder="Zip">
          </mdb-col>
        </div>
      </form>
      <br/>
      <form>
          <div class="form-row align-items-center">
              <div class="col-auto">
                  <label class="sr-only" for="inlineFormInput">Name</label>
                  <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe">
              </div>

              <div class="col-auto">
                  <label class="sr-only" for="inlineFormInputGroup">Username</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">@</div>
                      </div>
                      <input type="text" class="form-control py-0" id="inlineFormInputGroup" placeholder="Username">
                  </div>
              </div>

              <div class="col-auto">
                  <button type="submit" class="btn btn-primary btn-md mt-0">Submit</button>
              </div>
          </div>
      </form>
      <br/>
      <form class="form-inline">
          <label class="sr-only" for="inlineFormInputName2">Name</label>
          <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">
          <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
          <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                  <div class="input-group-text">@</div>
              </div>
              <input type="text" class="form-control py-0" id="inlineFormInputGroupUsername2" placeholder="Username">
          </div>
          <div class="form-check mb-2 mr-sm-2">
              <input class="form-check-input" type="checkbox" id="inlineFormCheck">
              <label class="form-check-label" for="inlineFormCheck">
                  Remember me
              </label>
          </div>

          <button type="submit" class="btn btn-primary btn-md mt-0">Submit</button>
      </form>
      <br/>
      <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
      </div>
      <br/>
      <label for="inputPassword5">Password</label>
      <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
      <small id="passwordHelpBlock" class="form-text text-muted">
          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
      </small>
      <br/>
      <form class="form-inline">
          <div class="form-group">
              <label for="inputPassword6">Password</label>
              <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
              <small id="passwordHelpInline" class="text-muted">
                  Must be 8-20 characters long.
              </small>
          </div>
      </form>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbCol, mdbInput, mdbTextarea, mdbContainer, mdbNumericInput, mdbRow, mdbIcon, mdbBtn } from "mdbvue";

export default {
  name: "InputsPage",
  components: {
    mdbCol,
    mdbInput,
    mdbTextarea,
    mdbContainer,
    mdbNumericInput,
    mdbRow,
    mdbIcon,
    mdbBtn
  },
  data() {
    return {
      test: 'Test value'
    };
  },
  methods: {
    handleInput (val) {
      console.log(val);
    },
    changeValue() {
      this.test = 'Random value: ' + Math.round(Math.random() * 100);
    }
  }
};
</script>

<style scoped>

</style>
