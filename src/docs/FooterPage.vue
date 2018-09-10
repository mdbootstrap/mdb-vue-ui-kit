<template>
  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Footer</strong></h4>
      <a href="https://mdbootstrap.com/vue/components/footer/" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr />
    <div class="mt-5">
      <h3 class="mx-3">Basic footer</h3>
      <Footer color="blue" class="font-small pt-4 mt-4">
        <container class="text-left">
          <row>
            <column sm="6">
              <h5 class="title">Footer Content</h5>
              <p>Here you can use rows and columns here to organize your footer content.</p>
            </column>
            <column sm="6">
              <h5 class="title">Links</h5>
              <ul>
                <li class="list-unstyled"><a href="#!">Link 1</a></li>
                <li class="list-unstyled"><a href="#!">Link 2</a></li>
                <li class="list-unstyled"><a href="#!">Link 3</a></li>
                <li class="list-unstyled"><a href="#!">Link 4</a></li>
              </ul>
            </column>
          </row>
        </container>
        <div class="footer-copyright text-center py-3">
          <container fluid>
            &copy; 2018 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </container>
        </div>
      </Footer>
    </div>
  </container>
</template>

<script>
import { Footer, Container, Row, Column, Fa } from 'mdbvue';

export default {
  name: 'FooterPage',
  components: {
    Footer,
    Container,
    Row,
    Column,
    Fa
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
