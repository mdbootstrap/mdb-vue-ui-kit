<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Input Groups </strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/input-group/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />

    <mdb-row class="mt-5">
      <mdb-col md="6" class="mb-md-0 mb-4">
        <h2 class="secondary-heading mb-3">Default input groups</h2>
        <p>Default styling for Bootstrap Input Group component</p>
        <section class="preview">

          <mdb-input placeholder="Username" basic class="mb-3">
            <span class="input-group-text" slot="prepend">@</span>
          </mdb-input>
          <mdb-input placeholder="Recipient's Username" basic class="mb-3">
            <span class="input-group-text" slot="append">@example.com</span>
          </mdb-input>
          <label for="vanity">Your vanity URL</label>
          <mdb-input id="vanity" basic class="mb-3">
            <span class="input-group-text" slot="prepend">https://example.com/users/</span>
          </mdb-input>
          <mdb-input basic class="mb-3">
            <span class="input-group-text" slot="prepend">$</span>
            <span class="input-group-text" slot="append">.00</span>
          </mdb-input>
          <mdb-input type="textarea" basic>
            <span class="input-group-text" slot="prepend">With textarea</span>
          </mdb-input>

        </section>
      </mdb-col>

      <mdb-col md="6" class="mb-md-0 mb-4">
        <h2 class="secondary-heading mb-3">Material input groups</h2>
        <p>Material Design styling for Bootstrap Input Group component</p>

        <section class="preview">

          <mdb-input placeholder="Username" class="mb-3 mt-0">
            <span class="input-group-text md-addon" slot="prepend">@</span>
          </mdb-input>
          <mdb-input placeholder="Recipient's Username" class="mb-3">
            <span class="input-group-text md-addon" slot="append">@example.com</span>
          </mdb-input>
          <label for="vanity">Your vanity URL</label>
          <mdb-input id="vanity" class="mb-3 mt-0">
            <span class="input-group-text md-addon" slot="prepend">https://example.com/users/</span>
          </mdb-input>
          <mdb-input class="mb-2 mt-0">
            <span class="input-group-text md-addon" slot="prepend">$</span>
            <span class="input-group-text md-addon" slot="append">.00</span>
          </mdb-input>
          <mdb-input type="textarea" class="my-0">
            <span class="input-group-text md-addon" slot="prepend">With textarea</span>
          </mdb-input>

        </section>

      </mdb-col>
    </mdb-row>

    <hr class="my-5" />
    <h2 class="mt-5 mb-3">Sizing</h2>

    <mdb-row>
      <mdb-col md="6">
        <section class="preview">
          <mdb-input size="sm" basic class="mb-3">
            <span class="input-group-text" slot="prepend">Small</span>
          </mdb-input>
          <mdb-input basic class="mb-3">
            <span class="input-group-text" slot="prepend">Default</span>
          </mdb-input>
          <mdb-input size="lg" basic class="mb-3">
            <span class="input-group-text" slot="prepend">Large</span>
          </mdb-input>
        </section>
      </mdb-col>

      <mdb-col md="6">
        <section class="preview">
          <mdb-input size="sm" class="my-0">
            <span class="input-group-text md-addon" slot="prepend">Small</span>
          </mdb-input>
          <mdb-input class="my-0">
            <span class="input-group-text md-addon" slot="prepend">Default</span>
          </mdb-input>
          <mdb-input size="lg" class="my-0">
            <span class="input-group-text md-addon" slot="prepend">Large</span>
          </mdb-input>
        </section>
      </mdb-col>
    </mdb-row>

    <hr class="my-5"/>

    <h2>Multiple inputs</h2>
    <mdb-row>
      <mdb-col md="6">

        <section class="preview">
          <mdb-input basic aria-label="First name">
            <span class="input-group-text" slot="prepend">First and last name</span>
            <mdb-input noWrapper aria-label="Last name"/>
          </mdb-input>
        </section>
      </mdb-col>

      <mdb-col md="6">
        <section class="preview">
          <mdb-input aria-label="First name" class="my-0" placeholder="Type sth">
            <span class="input-group-text md-addon" slot="prepend">First and last name</span>
            <mdb-input noWrapper aria-label="Last name" placeholder="Type sth"/>
          </mdb-input>
        </section>
      </mdb-col>
    </mdb-row>

    <hr class="my-5"/>
    <h2 class="mb-3">Multiple addons</h2>

      <mdb-row>
        <mdb-col md="6">

          <section class="preview">

            <mdb-input basic class="mb-3">
              <span class="input-group-text" slot="prepend">$</span>
              <span class="input-group-text" slot="prepend">0.00</span>
            </mdb-input>
            <mdb-input basic>
              <span class="input-group-text" slot="append">$</span>
              <span class="input-group-text" slot="append">0.00</span>
            </mdb-input>

          </section>
        </mdb-col>
        <mdb-col md="6">
          <section class="preview">

            <mdb-input class="mt-0 mb-2">
              <span class="input-group-text md-addon" slot="prepend">$</span>
              <span class="input-group-text md-addon" slot="prepend">0.00</span>
            </mdb-input>
            <mdb-input class="mt-0 mb-2">
              <span class="input-group-text md-addon" slot="append">$</span>
              <span class="input-group-text md-addon" slot="append">0.00</span>
            </mdb-input>

          </section>
        </mdb-col>
      </mdb-row>

    <hr class="my-5"/>
    <h2 class="mb-3">Button addons</h2>

      <mdb-row>
        <mdb-col md="6">

          <section class="preview">

            <mdb-input basic class="mb-3" ariaLabel="Example text with button addon" ariaDescribedBy="button-addon1">
              <mdb-btn outline="primary" size="md" group slot="prepend" id="button-addon1">button</mdb-btn>
            </mdb-input>

            <mdb-input basic class= "mb-3" placeholder="Recipient's username" ariaDescribedBy="button-addon2">
              <mdb-btn outline="default" size="md" group slot="append" id="button-addon2">button</mdb-btn>
            </mdb-input>

            <mdb-input basic class="mb-3" ariaLabel="Example text with button addon" ariaDescribedBy="button-addon3" prependSlotID="button-addon3">
              <mdb-btn outline="secondary" size="md" group slot="prepend">button</mdb-btn>
              <mdb-btn outline="secondary" size="md" group slot="prepend">button</mdb-btn>
            </mdb-input>

            <mdb-input basic class="mb-3" placeholder="Recipient's username" ariaLabel="Recipient's username with two button addons" ariaDescribedBy="button-addon4" appendSlotID="button-addon4">
              <mdb-btn outline="info" size="md" group slot="append">button</mdb-btn>
              <mdb-btn outline="info" size="md" group slot="append">button</mdb-btn>
            </mdb-input>

          </section>
        </mdb-col>
        <mdb-col md="6">
          <section class="preview">

            <mdb-input class="mt-0 mb-3" ariaLabel="Example text with button addon" ariaDescribedBy="button-addon1">
              <mdb-btn color="default" size="md" group slot="prepend" id="button-addon1">button</mdb-btn>
            </mdb-input>

            <mdb-input class="mt-0 mb-3" placeholder="Recipient's username" ariaDescribedBy="button-addon2">
              <mdb-btn color="secondary" size="md" group slot="append" id="button-addon2">button</mdb-btn>
            </mdb-input>

            <mdb-input class="mt-0 mb-3" ariaLabel="Example text with button addon" ariaDescribedBy="button-addon3" prependSlotID="button-addon3">
              <mdb-btn color="info" size="md" group slot="prepend">button</mdb-btn>
              <mdb-btn color="info" size="md" group slot="prepend">button</mdb-btn>
            </mdb-input>

            <mdb-input class="mt-0 mb-3" placeholder="Recipient's username" ariaLabel="Recipient's username with two button addons" ariaDescribedBy="button-addon4" appendSlotID="button-addon4">
              <mdb-btn color="primary" size="md" group slot="append">button</mdb-btn>
              <mdb-btn color="primary" size="md" group slot="append">button</mdb-btn>
            </mdb-input>

          </section>
        </mdb-col>
      </mdb-row>

    <hr class="my-5"/>
    <h2 class="mb-3">Buttons with dropdowns</h2>

      <mdb-row>
        <mdb-col md="12">

          <section class="preview">

            <mdb-input basic class="mb-3" ariaLabel="Example text with button addon" ariaDescribedBy="button-addon1">
              <mdb-dropdown slot="prepend">
                <mdb-dropdown-toggle color="primary" size="md" slot="toggle" class="z-depth-0">dropdown</mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                  <mdb-dropdown-item>Action</mdb-dropdown-item>
                  <mdb-dropdown-item>Another action</mdb-dropdown-item>
                  <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                  <div class="dropdown-divider"></div>
                  <mdb-dropdown-item>Separated link</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-input>

            <mdb-input basic class="mb-3" ariaLabel="Example text with button addon" ariaDescribedBy="button-addon1">
              <mdb-dropdown slot="append">
                <mdb-dropdown-toggle color="default" size="md" slot="toggle" class="z-depth-0">dropdown</mdb-dropdown-toggle>
                <mdb-dropdown-menu color="default">
                  <mdb-dropdown-item>Action</mdb-dropdown-item>
                  <mdb-dropdown-item>Another action</mdb-dropdown-item>
                  <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                  <div class="dropdown-divider"></div>
                  <mdb-dropdown-item>Separated link</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-input>

          </section>
        </mdb-col>
      </mdb-row>

      <hr class="my-5"/>
      <h2 class="mb-3">Segmented buttons</h2>

      <mdb-row>
        <mdb-col md="12">

          <section class="preview">

            <mdb-input basic class="mb-3" ariaLabel="Example text with button addon" ariaDescribedBy="button-addon1">
              <mdb-btn outline="primary" slot="prepend" group>action</mdb-btn>
              <mdb-dropdown slot="prepend">
                <mdb-dropdown-toggle slot="toggle" outline="primary" class="z-depth-0 px-2" size="md"></mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                  <mdb-dropdown-item>Action</mdb-dropdown-item>
                  <mdb-dropdown-item>Another action</mdb-dropdown-item>
                  <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                  <div class="dropdown-divider"></div>
                  <mdb-dropdown-item>Separated link</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-input>

            <mdb-input basic class="mb-3" ariaLabel="Example text with button addon" ariaDescribedBy="button-addon1">
              <mdb-btn outline="info" slot="append" group>action</mdb-btn>
              <mdb-dropdown slot="append" >
                <mdb-dropdown-toggle slot="toggle" outline="info" class="z-depth-0 px-2" size="md"></mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                  <mdb-dropdown-item>Action</mdb-dropdown-item>
                  <mdb-dropdown-item>Another action</mdb-dropdown-item>
                  <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                  <div class="dropdown-divider"></div>
                  <mdb-dropdown-item>Separated link</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-input>

          </section>
        </mdb-col>
      </mdb-row>

      <hr class="my-5"/>
      <h2 class="secondary-heading mb-3">Custom forms</h2>
      <h4 class="mb-3">Custom select</h4>

      <mdb-row class="mb-5">
        <mdb-col md="12">
          <section class="preview">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Options</label>
                </div>
                <select class="browser-default custom-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div class="input-group mb-3">
                <select class="browser-default custom-select" id="inputGroupSelect02">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div class="input-group-append">
                  <label class="input-group-text" for="inputGroupSelect02">Options</label>
                </div>
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <mdb-btn size="md" outline="mdb-color" group>button</mdb-btn>
                </div>
                <select class="browser-default custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div class="input-group">
                <select class="browser-default custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div class="input-group-append">
                  <mdb-btn size="md" outline="mdb-color" group>button</mdb-btn>
                </div>
              </div>

          </section>
        </mdb-col>
      </mdb-row>

      <h4 class="mb-3">Custom file input</h4>

      <mdb-row>
        <mdb-col md="12">
          <section class="preview">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                  <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                </div>
              </div>

              <div class="input-group mb-3">
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="inputGroupFile02">
                  <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose
                    file</label>
                </div>
                <div class="input-group-append">
                  <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
                </div>
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <mdb-btn size="md" outline="mdb-color" group>button</mdb-btn>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03">
                  <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
                </div>
              </div>

              <div class="input-group">
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
                  <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                </div>
                <div class="input-group-append">
                  <mdb-btn size="md" outline="mdb-color" group>button</mdb-btn>
                </div>
              </div>

          </section>
        </mdb-col>
      </mdb-row>

      <hr class="my-5"/>

      <h2 class="mt-5 mb-2">Examples & customizations</h2>
      <h4 class="mb-3">Colorful input groups</h4>

        <mdb-row>
          <mdb-col md="12">
            <section class="preview">

              <mdb-input basic placeholder="Username" class="mb-3 mt-0 md-form form-sm form-1" inputClass="amber-border">
                <span class="input-group-text amber lighten-3 black-text" slot="prepend">@</span>
              </mdb-input>

              <mdb-input basic class="mb-2 mt-0 md-form form-1 form-sm" inputClass="red-border">
                <span class="input-group-text red lighten-3 black-text" slot="prepend">$</span>
                <span class="input-group-text red lighten-3 black-text" slot="prepend">0.00</span>
              </mdb-input>

              <mdb-input basic class="mb-2 mt-0 md-form form-2 form-sm" inputClass="lime-border" ariaLabel="Amount (to the nearest dollar)">
                <span class="input-group-text lime lighten-2 black-text" slot="prepend">$</span>
                <span class="input-group-text lime lighten-2 black-text" slot="append">.00</span>
              </mdb-input>

              <mdb-input basic placeholder="Recipient's Username" class="mb-3 md-form form-sm form-3" ariaDescribedBy="basic-addon12" inputClass="purple-border">
                <span class="input-group-text purple lighten-3 black-text" slot="append" id="basic-addon12">@example.com</span>
              </mdb-input>

              <label for="vanity">Your vanity URL</label>
              <mdb-input basic id="vanity" class="mb-3 mt-0 md-form form-sm form-1" ariaDescribedBy="basic-addon33" inputClass="blue-border">
                <span class="input-group-text blue lighten-3 black-text" slot="prepend" id="basic-addon33">https://example.com/users/</span>
              </mdb-input>

            </section>
          </mdb-col>
        </mdb-row>

  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbCol, mdbInput, mdbBtn, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem } from 'mdbvue';

export default {
  name: 'InputGroupPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbCol,
    mdbInput,
    mdbBtn,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem
  },
  data() {
    return {
      options1: [
        { text: 'Choose...', value: null, selected: true, disabled: true },
        { text: 'One', value: 'One' },
        { text: 'Two', value: 'Two' },
        { text: 'Three', value: 'Three' },
      ]
    };
  },
  methods: {
    checkboxChange (val) {
      console.log(val);
    },
  }
};
</script>

<style>
section.preview {
    border: 1px solid #e0e0e0;
    padding: 15px;
}
.input-group.md-form.form-sm.form-1 input {
    border: 1px solid #bdbdbd;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
.input-group.md-form.form-sm.form-1 input[type=text]:focus:not([readonly]).red-border  {
    border: 1px solid #ef9a9a;
    box-shadow: none;
  }
.input-group.md-form.form-sm.form-1 input[type=text]:focus:not([readonly]).amber-border  {
    border: 1px solid #ffca28;
    box-shadow: none;
  }
.input-group.md-form.form-sm.form-1 input[type=text]:focus:not([readonly]).blue-border  {
    border: 1px solid #64b5f6;
    box-shadow: none;
  }
.input-group.md-form.form-sm.form-2 input {
	border: 1px solid #bdbdbd;
}
.input-group.md-form.form-sm.form-2 input[type=text]:focus:not([readonly]).lime-border  {
	border: 1px solid #cddc39;
	box-shadow: none;
}
.input-group.md-form.form-sm.form-3 input {
	border: 1px solid #bdbdbd;
	border-top-left-radius: 0.25rem;
	border-bottom-left-radius: 0.25rem;
}
.input-group.md-form.form-sm.form-3 input[type=text]:focus:not([readonly]).purple-border  {
	border: 1px solid #ce93d8;
	box-shadow: none;
}
</style>
