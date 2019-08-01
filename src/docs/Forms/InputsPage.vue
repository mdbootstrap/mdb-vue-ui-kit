<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Inputs</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/inputs/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-row>
      <mdb-col sm="6">
        <section class="demo-section">
          <h4>Material design inputs</h4>
          <section>
            <mdb-input type="text" label="Basic example" />
            <mdb-input m="t5" size="sm" type="text" label="Small input"/>
            <mdb-input m="t5" size="lg" type="text" label="Large input"/>
            <mdb-input m="t5" type="text" label="Input with icon" icon="envelope" />
            <mdb-input m="t5" type="text" label="Example label" placeholder="Placeholder" />
            <mdb-input m="t5" type="text" label="Disabled" disabled />
            <mdb-input m="t5" type="email" label="Your e-mail" />
            <mdb-input m="t5" type="password" label="Password" />
            <mdb-input m="t5" type="number" label="Number" @input="handleInput" />
            <mdb-input m="t5" type="text" label="Random example" :value="test" @input="handleInput" @change="handleInput" />
            <mdb-btn @click="changeValue" size="sm" color="primary">Update value</mdb-btn>
            <mdb-textarea label="Textarea" />
          </section>
        </section>
      </mdb-col>
      <mdb-col sm="6">
        <section class="demo-section">
          <h4>Default inputs</h4>
          <section>
            <div>
              <label for="exampleForm2">Default input</label>
              <input type="text" id="exampleForm2" class="form-control">
            </div>
            <h5 class="mt-5 mb-3">Sizing</h5>
            <div>
              <input class="form-control form-control-lg" type="text" placeholder="Large input"/>
              <br/>
              <input class="form-control" type="text" placeholder="Medium input"/>
              <br/>
              <input class="form-control form-control-sm" type="text" placeholder="Small input"/>
            </div>
            <h5 class="mt-5 mb-3">Disabled input</h5>
            <div>
              <label for="inputDisabledEx2" class="disabled">Example label</label>
              <input type="text" id="inputDisabledEx2" class="form-control" disabled>
            </div>
            <h5 class="mt-5 mb-3">Form layouts</h5>
            <div>
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
          </section>
        </section>
      </mdb-col>
    </mdb-row>
  
    <section class="demo-section">
      <h4>Outline inputs</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-input type="text" label="Basic example" outline />
            <mdb-input size="lg" type="text" label="Large outline input" outline />
            <mdb-input size="sm" type="text" label="Small outline input" outline />
            <mdb-input type="email" label="E-mail address" icon="envelope" small="We'll never share your email with anyone." outline />
            <mdb-input type="text" label="Disabled input" outline disabled />
            <mdb-input type="textarea" label="Outline textarea" outline :rows="3" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
  
    <section class="demo-section">
      <h4>Inputs with background and animated border</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-input type="text" label="Example label" bg />
            <mdb-input type="text" label="Large input" bg size="lg" />
            <mdb-input type="text" label="Small input" bg size="sm" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <mdb-row>
      <mdb-col sm="6">
        <section class="demo-section">
          <h4>Material numeric inputs</h4>
          <section>
            <mdb-input type="number" :max="10" label="max. 10" minus @input="handleInput"/>
            <mdb-input type="number" :min="0" label="step 0.2" :max="10" :step="0.2" v-model="numericValue"/>
            <mdb-input type="number" :min="0" :max="10" placeholder="placeholder" label="placeholder"/>
            <mdb-input type="number" icon="plus" label="icon"/>
          </section>
        </section>
      </mdb-col>
      <mdb-col sm="6">
        <section class="demo-section">
          <h4>Outline numeric inputs</h4>
          <section>
            <mdb-input outline type="number" :max="10" label="max. 10" minus @input="handleInput"/>
            <mdb-input outline type="number" :min="0" label="step 0.2" :max="10" :step="0.2"/>
            <mdb-input outline type="number" :min="0" :max="10" placeholder="placeholder"/>
            <mdb-input outline type="number" icon="plus" label="icon"/>
          </section>
        </section>
      </mdb-col>
    </mdb-row>

    <section class="demo-section">
      <h4>Form grid</h4>
      <section>
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
      </section>
    </section>
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
      test: 'Test value',
      numericValue: 5.3
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
