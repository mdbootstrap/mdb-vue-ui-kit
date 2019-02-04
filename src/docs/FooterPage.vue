<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Footer</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/navigation/footer/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <div class="mt-5">
      <h3 class="mx-3">Basic footer</h3>
      <mdb-footer color="blue" class="font-small pt-4 mt-4">
        <mdb-container class="text-left">
          <mdb-row>
            <mdb-col sm="6">
              <h5 class="title">Footer Content</h5>
              <p>Here you can use rows and columns here to organize your footer content.</p>
            </mdb-col>
            <mdb-col sm="6">
              <h5 class="title">Links</h5>
              <ul>
                <li class="list-unstyled"><a href="#!">Link 1</a></li>
                <li class="list-unstyled"><a href="#!">Link 2</a></li>
                <li class="list-unstyled"><a href="#!">Link 3</a></li>
                <li class="list-unstyled"><a href="#!">Link 4</a></li>
              </ul>
            </mdb-col>
          </mdb-row>
        </mdb-container>
        <div class="footer-copyright text-center py-3">
          <mdb-container fluid>
            &copy; 2018 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </mdb-container>
        </div>
      </mdb-footer>
    </div>
  </mdb-container>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';

export default {
  name: 'FooterPage',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
