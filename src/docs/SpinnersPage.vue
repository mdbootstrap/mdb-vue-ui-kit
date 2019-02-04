<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Loaders / Spinners</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/spinners/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <section class="demo-section">
      <h4>Default loader</h4>
      <section>
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Loader colors</h4>
      <section>
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-success" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-dark" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Growing spinner</h4>
      <section>
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </section>
      <section class="mt-1">
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Margin</h4>
      <section>
        <div class="spinner-border m-5" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Flex</h4>
      <section>
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </section>
      <section class="mt-1">
        <div class="d-flex align-items-center">
          <strong>Loading...</strong>
          <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Floats</h4>
      <section>
        <div class="clearfix">
          <div class="spinner-border float-right" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Text align</h4>
      <section>
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Loader sizing</h4>
      <section>
        <div class="spinner-border spinner-border-sm" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow spinner-grow-sm" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Loader speed</h4>
      <section>
        <div class="spinner-border fast" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow fast" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Buttons</h4>
      <section>
        <mdb-btn color="primary" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span class="sr-only">Loading...</span>
        </mdb-btn>
        <mdb-btn color="primary" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Loading...
        </mdb-btn>
      </section>
      <section class="mt-1">
        <mdb-btn color="primary" disabled>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          <span class="sr-only">Loading...</span>
        </mdb-btn>
        <mdb-btn color="primary" disabled>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          Loading...
        </mdb-btn>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbBtn } from 'mdbvue';

export default {
  name: 'SpinnersPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbBtn
  }
};
</script>

<style scoped>
</style>
