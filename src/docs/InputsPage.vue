<template>
  <container class="mt-5">
    <h4><strong>Material design inputs</strong></h4>
    <div style="margin-top:3rem;max-width:20rem">
      <md-input type="text" label="Basic example"/>
      <md-input size="sm" type="text" label="Small input"/>
    </div>
    <div style="margin-top:3rem;max-width:20rem">
      <md-input type="text" label="Input with icon" icon="envelope" />
    </div>
    <div style="margin-top:3rem;max-width:20rem">
      <md-input type="text" label="Example label" placeholder="Placeholder" />
    </div>
    <div style="margin-top:3rem;max-width:20rem">
      <md-input type="text" label="Basic example" disabled />
    </div>
    <div style="margin-top:3rem;max-width:20rem">
      <md-input type="email" label="Your e-mail" />
    </div>
    <div style="margin-top:3rem;max-width:20rem">
      <md-input type="password" label="Password" />
    </div>
    <div style="margin-top:3rem;max-width:20rem">
      <md-textarea label="Textarea" />
    </div>
    <h4 class="mt-5 mb-3"><strong>Numeric inputs</strong></h4>
    <div style="margin-top:3rem;max-width:20rem">
      <numeric-input :max="10" :emptyValue="5" minus /><br/>
      <numeric-input :min="0" :max="10" :precision="1" :emptyValue="5.3" /><br/>
      <numeric-input :min="0" :max="10" placeholder="placeholder" />
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
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name">
          </div>
        </div>
      </form>
    </div>
    <br/>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
        </div>
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
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity" placeholder="New York City">
        </div>
        <div class="form-group col-md-6">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip" placeholder="11206-1117">
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-md">Sign in</button>
    </form>
    <br/>
    <form>
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-primary btn-md">Sign in</button>
        </div>
      </div>
    </form>
    <br/>
    <form>
      <!-- Grid row -->
      <div class="form-row">
          <!-- Grid column -->
        <div class="col-7">
          <!-- Default input -->
          <input type="text" class="form-control" placeholder="City">
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col">
          <!-- Default input -->
          <input type="text" class="form-control" placeholder="State">
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col">
          <!-- Default input -->
          <input type="text" class="form-control" placeholder="Zip">
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </form>
    <br/>
    <!-- Default auto-sizing form -->
    <form>
        <!-- Grid row -->
        <div class="form-row align-items-center">
            <!-- Grid column -->
            <div class="col-auto">
                <!-- Default input -->
                <label class="sr-only" for="inlineFormInput">Name</label>
                <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe">
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-auto">
                <!-- Default input -->
                <label class="sr-only" for="inlineFormInputGroup">Username</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">@</div>
                    </div>
                    <input type="text" class="form-control py-0" id="inlineFormInputGroup" placeholder="Username">
                </div>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-auto">
                <button type="submit" class="btn btn-primary btn-md mt-0">Submit</button>
            </div>
        </div>
        <!-- Grid row -->
    </form>
    <!-- Default auto-sizing form -->
    <br/>
    <!-- Default inline form -->
    <form class="form-inline">
        <!-- Default input -->
        <label class="sr-only" for="inlineFormInputName2">Name</label>
        <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">
        <!-- Default input -->
        <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
        <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
                <div class="input-group-text">@</div>
            </div>
            <input type="text" class="form-control py-0" id="inlineFormInputGroupUsername2" placeholder="Username">
        </div>
        <!-- Checkbox -->
        <div class="form-check mb-2 mr-sm-2">
            <input class="form-check-input" type="checkbox" id="inlineFormCheck">
            <label class="form-check-label" for="inlineFormCheck">
                Remember me
            </label>
        </div>

        <button type="submit" class="btn btn-primary btn-md mt-0">Submit</button>
    </form>
    <!-- Default inline form -->
    <br/>
    <!-- Default textarea -->
    <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
    </div>
    <br/>
    <!-- Default input with help text-->
    <label for="inputPassword5">Password</label>
    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
    <small id="passwordHelpBlock" class="form-text text-muted">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
    </small>
    <br/>
    <!-- Default form inline -->
    <form class="form-inline">
        <!-- Default input with help text -->
        <div class="form-group">
            <label for="inputPassword6">Password</label>
            <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
            <small id="passwordHelpInline" class="text-muted">
                Must be 8-20 characters long.
            </small>
        </div>
        <!-- Default input with help text -->
    </form>
    <!-- Default form inline -->
  </container>
</template>

<script>
import { MdInput, MdTextarea, Container, NumericInput } from "mdbvue";

export default {
  name: "InputsPage",
  components: {
    MdInput,
    MdTextarea,
    Container,
    NumericInput
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
