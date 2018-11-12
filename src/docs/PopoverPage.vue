<template>
  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Popovers</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/popovers/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr />
    <row class="mt-5">
      <column col="4"></column>
      <column col="4" class="mt-5 pt-5">
        <popover trigger="click" :options="{placement: 'top'}" class="mt-5">
          <div class="popover">
            <div class="popover-header">
              Yup.
            </div>
            <div class="popover-body">
              It's over.
            </div>
          </div>
          <btn slot="reference" color="default">
            Pop pop
          </btn>
        </popover>
      </column>
    </row>
  </container>
</template>


<script>
import { Popover, Row, Column, Btn, Container, Fa } from 'mdbvue';

export default {
  name: 'PopoverPage',
  data() {
    return {zzz: false};
  },
  components: {
    Popover,
    Row,
    Column,
    Btn,
    Container,
    Fa
  },
};
</script>

<style>

</style>
