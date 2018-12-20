<template>

  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Panels</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/panels/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <mdb-row>
      <mdb-col col="4">
        <mdb-card class="card-body" style="width: 22rem; margin-top: 1rem;">
          <mdb-card-title>Panel Title</mdb-card-title>
          <mdb-card-text>Some quick example text to build on the panel title and make up the bulk of the panel's content.</mdb-card-text>
          <div class="flex-row">
            <a>Card link</a>
            <a style="margin-left: 1.25rem">Another link</a>
          </div>
        </mdb-card>
      </mdb-col>
    </mdb-row>
    <mdb-row class="mt-4">
      <mdb-card>
        <mdb-card-body>
          This is some text within a panel body.
        </mdb-card-body>
      </mdb-card>
    </mdb-row>
    <mdb-row class="mt-4">
      <mdb-card style="width: 18rem;">
        <mdb-card-body>
          <mdb-card-title>Panel title</mdb-card-title>
          <mdb-card-title tag="h6" sub class="mb-2 text-muted">Panel title</mdb-card-title>
          <mdb-card-text>Some quick example text to build on the panel title and make up the bulk of the panel's content. </mdb-card-text>
          <a href="#" class="card-link">Panel link</a>
          <a href="#" class="card-link">Another link</a>
        </mdb-card-body>
      </mdb-card>
    </mdb-row>
    <mdb-row class="mt-4">
      <mdb-card style="width: 18rem;">
        <mdb-list-group>
          <mdb-list-group-item>Cras justo odio</mdb-list-group-item>
          <mdb-list-group-item>Dapibus ac facilisis in</mdb-list-group-item>
          <mdb-list-group-item>Vestibulum at eros</mdb-list-group-item>
        </mdb-list-group>
      </mdb-card>
    </mdb-row>
    <mdb-row class="mt-4">
      <mdb-card style="width: 22rem;">
        <mdb-card-header color="deep-orange lighten-1">Featured</mdb-card-header>
        <mdb-card-body>
          <mdb-card-title>Special title treatment</mdb-card-title>
          <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
          <mdb-btn color="deep-orange">go somewhere</mdb-btn>
        </mdb-card-body>
      </mdb-card>
    </mdb-row>

    <mdb-row class="mt-4">
      <mdb-card style="width: 22rem;">
        <mdb-card-header color="primary-color" tag="h3">Featured</mdb-card-header>
        <mdb-card-body>
          <mdb-card-title>Special title treatment</mdb-card-title>
          <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
          <mdb-btn color="primary">go somewhere</mdb-btn>
        </mdb-card-body>
      </mdb-card>
    </mdb-row>

    <mdb-row class="mt-4">
      <mdb-card style="width: 22rem;" class="text-center">
        <mdb-card-header color="success-color">Featured</mdb-card-header>
        <mdb-card-body>
          <mdb-card-title>Special title treatment</mdb-card-title>
          <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
          <mdb-btn color="success" size="sm">go somewhere</mdb-btn>
        </mdb-card-body>
        <mdb-card-footer color="success-color">2 days ago</mdb-card-footer>
      </mdb-card>
    </mdb-row>

    <mdb-row class="my-4">
      <mdb-col sm="6">
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title>Special title treatment</mdb-card-title>
            <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
            <mdb-btn color="primary">go somewhere</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>

      <mdb-col sm="6">
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title>Special title treatment</mdb-card-title>
            <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
            <mdb-btn color="primary">go somewhere</mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>

    <mdb-row class="mt-4">
      <mdb-card class="w-75 mb-4">
        <mdb-card-body>
          <mdb-card-title>Special title treatment</mdb-card-title>
          <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
          <mdb-btn color="primary">go somewhere</mdb-btn>
        </mdb-card-body>
      </mdb-card>

      <mdb-card class="w-50">
        <mdb-card-body>
          <mdb-card-title>Special title treatment</mdb-card-title>
          <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
          <mdb-btn color="primary">go somewhere</mdb-btn>
        </mdb-card-body>
      </mdb-card>
    </mdb-row>
    <mdb-row class="mt-4">
      <mdb-card style="width: 20rem;">
        <mdb-card-body>
          <mdb-card-title>Special title treatment</mdb-card-title>
          <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
          <mdb-btn color="primary">go somewhere</mdb-btn>
        </mdb-card-body>
      </mdb-card>
    </mdb-row>
    <mdb-row class="mt-4">
      <mdb-card style="width: 18rem;">
        <mdb-card-body>
          <mdb-card-title>Special title treatment</mdb-card-title>
          <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
          <mdb-btn color="primary">go somewhere</mdb-btn>
        </mdb-card-body>
      </mdb-card>
    </mdb-row>

    <mdb-row class="mt-4">
      <mdb-card class="text-center" style="width: 18rem; margin-top: 1rem;">
        <mdb-card-body>
          <mdb-card-title>Special title treatment</mdb-card-title>
          <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
          <mdb-btn color="primary">go somewhere</mdb-btn>
        </mdb-card-body>
      </mdb-card>
    </mdb-row>

    <mdb-row class="mt-4">
      <mdb-card class="text-right" style="width: 18rem; margin-top: 1rem;">
        <mdb-card-body>
          <mdb-card-title>Special title treatment</mdb-card-title>
          <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
          <mdb-btn color="primary">go somewhere</mdb-btn>
        </mdb-card-body>
      </mdb-card>
    </mdb-row>
    <mdb-row class="mt-4">
      <mdb-card class="text-center">
        <mdb-card-header>
          <ul class="nav nav-tabs card-header-tabs">
            <mdb-nav-item active to="#">Active</mdb-nav-item>
            <mdb-nav-item to="#">Link</mdb-nav-item>
            <mdb-nav-item disabled to="#">Disabled</mdb-nav-item>
          </ul>
        </mdb-card-header>
        <mdb-card-body>
          <mdb-card-title>Special title treatment</mdb-card-title>
          <mdb-card-text>With supporting text below as a natural lead-in to additional content.</mdb-card-text>
          <mdb-btn color="primary">go somewhere</mdb-btn>
        </mdb-card-body>
      </mdb-card>
    </mdb-row>

    <mdb-row class="my-4">
      <mdb-col md="6">

        <mdb-card color="indigo" class="text-center">
          <mdb-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </mdb-card-body>
        </mdb-card>

        <br/>

        <mdb-card color="pink lighten-2" class="text-center">
          <mdb-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </mdb-card-body>
        </mdb-card>

        <br/>

        <mdb-card color="info-color" class="text-center">
          <mdb-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </mdb-card-body>
        </mdb-card>

      </mdb-col>
      <mdb-col md="6">

        <mdb-card color="red lighten-1" class="text-center">
          <mdb-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </mdb-card-body>
        </mdb-card>

        <br/>

        <mdb-card color="success-color" class="text-center">
          <mdb-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </mdb-card-body>
        </mdb-card>

        <br/>

        <mdb-card color="mdb-color lighten-2" class="text-center">
          <mdb-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </mdb-card-body>
        </mdb-card>

      </mdb-col>
    </mdb-row>
    <mdb-row class="mt-4">
      <mdb-col>
        <mdb-card border="primary" class="mb-3" style="max-width: 18rem;">
          <mdb-card-header>Header</mdb-card-header>
          <mdb-card-body class="text-primary">
            <mdb-card-title tag="h5">Primary card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
          </mdb-card-body>
        </mdb-card>

        <mdb-card border="secondary" class="mb-3" style="max-width: 18rem;">
          <mdb-card-header>Header</mdb-card-header>
          <mdb-card-body class="text-secondary">
            <mdb-card-title tag="h5">Secondary card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
          </mdb-card-body>
        </mdb-card>

        <mdb-card border="success" class="mb-3" style="max-width: 18rem;">
          <mdb-card-header>Header</mdb-card-header>
          <mdb-card-body class="text-success">
            <mdb-card-title tag="h5">Success card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
          </mdb-card-body>
        </mdb-card>

        <mdb-card border="danger" class="mb-3" style="max-width: 18rem;">
          <mdb-card-header>Header</mdb-card-header>
          <mdb-card-body class="text-danger">
            <mdb-card-title tag="h5">Danger card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
          </mdb-card-body>
        </mdb-card>

        <mdb-card border="warning" class="mb-3" style="max-width: 18rem;">
          <mdb-card-header>Header</mdb-card-header>
          <mdb-card-body class="text-warning">
            <mdb-card-title tag="h5">Warning card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
          </mdb-card-body>
        </mdb-card>

        <mdb-card border="info" class="mb-3" style="max-width: 18rem;">
          <mdb-card-header>Header</mdb-card-header>
          <mdb-card-body class="text-info">
            <mdb-card-title tag="h5">Info card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
          </mdb-card-body>
        </mdb-card>

        <mdb-card border="light" class="mb-3" style="max-width: 18rem;">
          <mdb-card-header>Header</mdb-card-header>
          <mdb-card-body>
            <mdb-card-title tag="h5">Light card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
          </mdb-card-body>
        </mdb-card>

        <mdb-card border="dark" class="mb-3" style="max-width: 18rem;">
          <mdb-card-header>Header</mdb-card-header>
          <mdb-card-body class="text-dark">
            <mdb-card-title tag="h5">Dark card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
        <mdb-card border="success" style="max-width: 18rem;">
          <mdb-card-header transparent border="success">Header</mdb-card-header>
          <mdb-card-body class="text-success">
            <mdb-card-title tag="h5">Success card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
          </mdb-card-body>
          <mdb-card-footer transparent border="success">Footer</mdb-card-footer>
        </mdb-card>
      </mdb-col>
    </mdb-row>
    <mdb-row class="mt-4">
      <mdb-card-group>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This content is
              a little bit longer.</mdb-card-text>
            <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This panel has supporting text below as a natural lead-in to additional content.</mdb-card-text>
            <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This panel has even
              longer content than the first to show that equal height action.</mdb-card-text>
            <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
      </mdb-card-group>
    </mdb-row>
    <mdb-row class="mt-4">
      <mdb-card-group>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This content is
              a little bit longer.</mdb-card-text>
          </mdb-card-body>
          <mdb-card-footer small muted>Last updated 3 mins ago</mdb-card-footer>
        </mdb-card>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This panel has supporting text below as a natural lead-in to additional content.</mdb-card-text>
          </mdb-card-body>
          <mdb-card-footer small muted>Last updated 3 mins ago</mdb-card-footer>
        </mdb-card>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This panel has even
              longer content than the first to show that equal height action.</mdb-card-text>
          </mdb-card-body>
          <mdb-card-footer small muted>Last updated 3 mins ago</mdb-card-footer>
        </mdb-card>
      </mdb-card-group>
    </mdb-row>
    <mdb-row class="mt-4">
      <mdb-card-group deck>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This content is
              a little bit longer.</mdb-card-text>
          </mdb-card-body>
          <mdb-card-footer small muted>Last updated 3 mins ago</mdb-card-footer>
        </mdb-card>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This panel has supporting text below as a natural lead-in to additional content.</mdb-card-text>
          </mdb-card-body>
          <mdb-card-footer small muted>Last updated 3 mins ago</mdb-card-footer>
        </mdb-card>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This panel has even
              longer content than the first to show that equal height action.</mdb-card-text>
          </mdb-card-body>
          <mdb-card-footer small muted>Last updated 3 mins ago</mdb-card-footer>
        </mdb-card>
      </mdb-card-group>
    </mdb-row>
    <mdb-row class="mt-4">
      <mdb-card-group column>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title that wraps to a new line</mdb-card-title>
            <mdb-card-text>This is a longer panel with supporting text below as a natural lead-in to additional content. This content is
              a little bit longer.</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
        <mdb-card class="p-3">
          <blockquote class="blockquote mb-0 card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <mdb-footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </mdb-footer>
          </blockquote>
        </mdb-card>
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This panel has supporting text below as a natural lead-in to additional content.</mdb-card-text>
            <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text>
          </mdb-card-body>
        </mdb-card>

        <mdb-card color="primary-color" text="white" class="text-center p-3">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
            <mdb-footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </mdb-footer>
          </blockquote>
        </mdb-card>

        <mdb-card class="text-center">
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This panel has supporting text below as a natural lead-in to additional content.</mdb-card-text>
            <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text>
          </mdb-card-body>
        </mdb-card>

        <mdb-card class="text-right p-3">
          <blockquote class="blockquote mb-0 card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <mdb-footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </mdb-footer>
          </blockquote>
        </mdb-card>

        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h5">Panel title</mdb-card-title>
            <mdb-card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This panel has even
              longer content than the first to show that equal height action.</mdb-card-text>
            <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text>
          </mdb-card-body>
        </mdb-card>

      </mdb-card-group>
    </mdb-row>

    <mdb-jumbotron class="mt-4">
      <h1 class="h1-responsive">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-2" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.
      </p>
      <mdb-btn color="primary" size="lg">Learn more</mdb-btn>
    </mdb-jumbotron>
  </mdb-container>
</template>


<script>
import { mdbContainer,  mdbRow, mdbCol, mdbBtn, mdbCard, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardBody, mdbCardHeader, mdbListGroup, mdbListGroupItem, mdbNavItem, mdbCardGroup, mdbJumbotron, mdbIcon, mdbFooter } from 'mdbvue';

export default {
  name: 'PanelPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbCard,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardBody,
    mdbCardHeader,
    mdbListGroup,
    mdbListGroupItem,
    mdbNavItem,
    mdbCardGroup,
    mdbJumbotron,
    mdbIcon,
    mdbFooter
  },
  data(){
    return {

    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
