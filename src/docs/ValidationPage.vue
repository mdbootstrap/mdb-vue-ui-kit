<template>
  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Form Validation</strong></h4>
      <a href="https://mdbootstrap.com/vue/components/form-validation/" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr />
    <container class="mt-5">
      <h1 class="my-5">Form Validation</h1>
      <!-- Custom styles -->
      <h2 class="my-5">Custom styles</h2>
      <form class="needs-validation" novalidate @submit="checkForm">
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationCustom01">First name</label>
            <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustom02">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustomUsername">Username</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
              </div>
              <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>
              <div class="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationCustom03">City</label>
            <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationCustom04">State</label>
            <input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationCustom05">Zip</label>
            <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required>
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check pl-0">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <btn type="submit">Submit form</btn>
      </form>

      <!-- Supported elements -->
      <hr class="my-5">
      <h2 class="my-5">Supported elements</h2>
      <form class="was-validated">
        <div class="custom-control custom-checkbox mb-3">
          <input type="checkbox" class="custom-control-input" id="customControlValidation1" required>
          <label class="custom-control-label" for="customControlValidation1">Check this custom checkbox</label>
          <div class="invalid-feedback">Example invalid feedback text</div>
        </div>

        <div class="custom-control custom-radio">
          <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required>
          <label class="custom-control-label" for="customControlValidation2">Toggle this custom radio</label>
        </div>
        <div class="custom-control custom-radio mb-3">
          <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required>
          <label class="custom-control-label" for="customControlValidation3">Or toggle this other custom radio</label>
          <div class="invalid-feedback">More example invalid feedback text</div>
        </div>

        <div class="form-group">
          <select class="custom-select browser-default" required>
            <option value="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="invalid-feedback">Example invalid custom select feedback</div>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="validatedCustomFile" required>
          <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
          <div class="invalid-feedback">Example invalid custom file feedback</div>
        </div>
      </form>
      <!-- Tooltips -->
      <hr class="my-5">
      <h2 class="my-5">Tooltips</h2>
      <form class="needs-validation" novalidate @submit="checkForm">
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationTooltip01">First name</label>
            <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
            <div class="valid-tooltip">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationTooltip02">Last name</label>
            <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required>
            <div class="valid-tooltip">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationTooltipUsername">Username</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
              </div>
              <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required>
              <div class="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationTooltip03">City</label>
            <input type="text" class="form-control" id="validationTooltip03" placeholder="City" required>
            <div class="invalid-tooltip">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationTooltip04">State</label>
            <input type="text" class="form-control" id="validationTooltip04" placeholder="State" required>
            <div class="invalid-tooltip">
              Please provide a valid state.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationTooltip05">Zip</label>
            <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required>
            <div class="invalid-tooltip">
              Please provide a valid zip.
            </div>
          </div>
        </div>
        <btn type="submit">Submit form</btn>
      </form>
    </container>
  </container>
</template>

<script>
import { Container, Btn, Fa, Row } from "mdbvue";

export default {
  name: "InputsPage",
  components: {
    Container,
    Btn,
    Fa,
    Row
  },
  data() {
    return {
    };
  },
  methods: {
    checkForm(event) {
      event.preventDefault();
      event.target.classList.add('was-validated');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
