<template>

  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Panels</strong></h4>
      <a href="https://mdbootstrap.com/vue/components/panels/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr class="mb-5" />
    <row>
      <column col="4">
        <card class="card-body" style="width: 22rem; margin-top: 1rem;">
          <card-title>Panel Title</card-title>
          <card-text>Some quick example text to build on the panel title and make up the bulk of the panel's content.</card-text>
          <div class="flex-row">
            <a>Card link</a>
            <a style="margin-left: 1.25rem">Another link</a>
          </div>
        </card>
      </column>
    </row>
    <row class="mt-4">
      <card>
        <card-body>
          This is some text within a panel body.
        </card-body>
      </card>
    </row>
    <row class="mt-4">
      <card style="width: 18rem;">
        <card-body>
          <card-title>Panel title</card-title>
          <card-title tag="h6" sub class="mb-2 text-muted">Panel title</card-title>
          <card-text>Some quick example text to build on the panel title and make up the bulk of the panel's content. </card-text>
          <a href="#" class="card-link">Panel link</a>
          <a href="#" class="card-link">Another link</a>
        </card-body>
      </card>
    </row>
    <row class="mt-4">
      <card style="width: 18rem;">
        <list-group>
          <list-group-item>Cras justo odio</list-group-item>
          <list-group-item>Dapibus ac facilisis in</list-group-item>
          <list-group-item>Vestibulum at eros</list-group-item>
        </list-group>
      </card>
    </row>
    <row class="mt-4">
      <card style="width: 22rem;">
        <card-header color="deep-orange lighten-1">Featured</card-header>
        <card-body>
          <card-title>Special title treatment</card-title>
          <card-text>With supporting text below as a natural lead-in to additional content.</card-text>
          <btn color="deep-orange">go somewhere</btn>
        </card-body>
      </card>
    </row>

    <row class="mt-4">
      <card style="width: 22rem;">
        <card-header color="primary-color" tag="h3">Featured</card-header>
        <card-body>
          <card-title>Special title treatment</card-title>
          <card-text>With supporting text below as a natural lead-in to additional content.</card-text>
          <btn color="primary">go somewhere</btn>
        </card-body>
      </card>
    </row>

    <row class="mt-4">
      <card style="width: 22rem;" class="text-center">
        <card-header color="success-color">Featured</card-header>
        <card-body>
          <card-title>Special title treatment</card-title>
          <card-text>With supporting text below as a natural lead-in to additional content.</card-text>
          <btn color="success" size="sm">go somewhere</btn>
        </card-body>
        <card-footer color="success-color">2 days ago</card-footer>
      </card>
    </row>

    <row class="my-4">
      <column sm="6">
        <card>
          <card-body>
            <card-title>Special title treatment</card-title>
            <card-text>With supporting text below as a natural lead-in to additional content.</card-text>
            <btn color="primary">go somewhere</btn>
          </card-body>
        </card>
      </column>

      <column sm="6">
        <card>
          <card-body>
            <card-title>Special title treatment</card-title>
            <card-text>With supporting text below as a natural lead-in to additional content.</card-text>
            <btn color="primary">go somewhere</btn>
          </card-body>
        </card>
      </column>
    </row>

    <row class="mt-4">
      <card class="w-75 mb-4">
        <card-body>
          <card-title>Special title treatment</card-title>
          <card-text>With supporting text below as a natural lead-in to additional content.</card-text>
          <btn color="primary">go somewhere</btn>
        </card-body>
      </card>

      <card class="w-50">
        <card-body>
          <card-title>Special title treatment</card-title>
          <card-text>With supporting text below as a natural lead-in to additional content.</card-text>
          <btn color="primary">go somewhere</btn>
        </card-body>
      </card>
    </row>
    <row class="mt-4">
      <card style="width: 20rem;">
        <card-body>
          <card-title>Special title treatment</card-title>
          <card-text>With supporting text below as a natural lead-in to additional content.</card-text>
          <btn color="primary">go somewhere</btn>
        </card-body>
      </card>
    </row>
    <row class="mt-4">
      <card style="width: 18rem;">
        <card-body>
          <card-title>Special title treatment</card-title>
          <card-text>With supporting text below as a natural lead-in to additional content.</card-text>
          <btn color="primary">go somewhere</btn>
        </card-body>
      </card>
    </row>

    <row class="mt-4">
      <card class="text-center" style="width: 18rem; margin-top: 1rem;">
        <card-body>
          <card-title>Special title treatment</card-title>
          <card-text>With supporting text below as a natural lead-in to additional content.</card-text>
          <btn color="primary">go somewhere</btn>
        </card-body>
      </card>
    </row>

    <row class="mt-4">
      <card class="text-right" style="width: 18rem; margin-top: 1rem;">
        <card-body>
          <card-title>Special title treatment</card-title>
          <card-text>With supporting text below as a natural lead-in to additional content.</card-text>
          <btn color="primary">go somewhere</btn>
        </card-body>
      </card>
    </row>

    <row class="my-4">
      <column md="6">

        <card color="indigo" class="text-center">
          <card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </card-body>
        </card>

        <br/>

        <card color="pink lighten-2" class="text-center">
          <card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </card-body>
        </card>

        <br/>

        <card color="info-color" class="text-center">
          <card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </card-body>
        </card>

      </column>
      <column md="6">

        <card color="red lighten-1" class="text-center">
          <card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </card-body>
        </card>

        <br/>

        <card color="success-color" class="text-center">
          <card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </card-body>
        </card>

        <br/>

        <card color="mdb-color lighten-2" class="text-center">
          <card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </card-body>
        </card>

      </column>
    </row>
    <row class="mt-4">
      <column>
        <card border="primary" class="mb-3" style="max-width: 18rem;">
          <card-header>Header</card-header>
          <card-body class="text-primary">
            <card-title tag="h5">Primary card title</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
          </card-body>
        </card>

        <card border="secondary" class="mb-3" style="max-width: 18rem;">
          <card-header>Header</card-header>
          <card-body class="text-secondary">
            <card-title tag="h5">Secondary card title</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
          </card-body>
        </card>

        <card border="success" class="mb-3" style="max-width: 18rem;">
          <card-header>Header</card-header>
          <card-body class="text-success">
            <card-title tag="h5">Success card title</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
          </card-body>
        </card>

        <card border="danger" class="mb-3" style="max-width: 18rem;">
          <card-header>Header</card-header>
          <card-body class="text-danger">
            <card-title tag="h5">Danger card title</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
          </card-body>
        </card>

        <card border="warning" class="mb-3" style="max-width: 18rem;">
          <card-header>Header</card-header>
          <card-body class="text-warning">
            <card-title tag="h5">Warning card title</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
          </card-body>
        </card>

        <card border="info" class="mb-3" style="max-width: 18rem;">
          <card-header>Header</card-header>
          <card-body class="text-info">
            <card-title tag="h5">Info card title</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
          </card-body>
        </card>

        <card border="light" class="mb-3" style="max-width: 18rem;">
          <card-header>Header</card-header>
          <card-body>
            <card-title tag="h5">Light card title</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
          </card-body>
        </card>

        <card border="dark" class="mb-3" style="max-width: 18rem;">
          <card-header>Header</card-header>
          <card-body class="text-dark">
            <card-title tag="h5">Dark card title</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
          </card-body>
        </card>
        <card border="success" style="max-width: 18rem;">
          <card-header transparent border="success">Header</card-header>
          <card-body class="text-success">
            <card-title tag="h5">Success card title</card-title>
            <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
          </card-body>
          <card-footer transparent border="success">Footer</card-footer>
        </card>
      </column>
    </row>
    <row class="mt-4">
      <card-group>
        <card>
          <card-body>
            <card-title tag="h5">Panel title</card-title>
            <card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This content is
              a little bit longer.</card-text>
            <card-text small muted>Last updated 3 mins ago</card-text>
          </card-body>
        </card>
        <card>
          <card-body>
            <card-title tag="h5">Panel title</card-title>
            <card-text>This panel has supporting text below as a natural lead-in to additional content.</card-text>
            <card-text small muted>Last updated 3 mins ago</card-text>
          </card-body>
        </card>
        <card>
          <card-body>
            <card-title tag="h5">Panel title</card-title>
            <card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This panel has even
              longer content than the first to show that equal height action.</card-text>
            <card-text small muted>Last updated 3 mins ago</card-text>
          </card-body>
        </card>
      </card-group>
    </row>
    <row class="mt-4">
      <card-group>
        <card>
          <card-body>
            <card-title tag="h5">Panel title</card-title>
            <card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This content is
              a little bit longer.</card-text>
          </card-body>
          <card-footer small muted>Last updated 3 mins ago</card-footer>
        </card>
        <card>
          <card-body>
            <card-title tag="h5">Panel title</card-title>
            <card-text>This panel has supporting text below as a natural lead-in to additional content.</card-text>
          </card-body>
          <card-footer small muted>Last updated 3 mins ago</card-footer>
        </card>
        <card>
          <card-body>
            <card-title tag="h5">Panel title</card-title>
            <card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This panel has even
              longer content than the first to show that equal height action.</card-text>
          </card-body>
          <card-footer small muted>Last updated 3 mins ago</card-footer>
        </card>
      </card-group>
    </row>
    <row class="mt-4">
      <card-group deck>
        <card>
          <card-body>
            <card-title tag="h5">Panel title</card-title>
            <card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This content is
              a little bit longer.</card-text>
          </card-body>
          <card-footer small muted>Last updated 3 mins ago</card-footer>
        </card>
        <card>
          <card-body>
            <card-title tag="h5">Panel title</card-title>
            <card-text>This panel has supporting text below as a natural lead-in to additional content.</card-text>
          </card-body>
          <card-footer small muted>Last updated 3 mins ago</card-footer>
        </card>
        <card>
          <card-body>
            <card-title tag="h5">Panel title</card-title>
            <card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This panel has even
              longer content than the first to show that equal height action.</card-text>
          </card-body>
          <card-footer small muted>Last updated 3 mins ago</card-footer>
        </card>
      </card-group>
    </row>
    <row class="mt-4">
      <card-group column>
        <card>
          <card-body>
            <card-title tag="h5">Panel title that wraps to a new line</card-title>
            <card-text>This is a longer panel with supporting text below as a natural lead-in to additional content. This content is
              a little bit longer.</card-text>
          </card-body>
        </card>
        <card class="p-3">
          <blockquote class="blockquote mb-0 card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </card>
        <card>
          <card-body>
            <card-title tag="h5">Panel title</card-title>
            <card-text>This panel has supporting text below as a natural lead-in to additional content.</card-text>
            <card-text small muted>Last updated 3 mins ago</card-text>
          </card-body>
        </card>

        <card color="primary-color" text="white" class="text-center p-3">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </card>

        <card class="text-center">
          <card-body>
            <card-title tag="h5">Panel title</card-title>
            <card-text>This panel has supporting text below as a natural lead-in to additional content.</card-text>
            <card-text small muted>Last updated 3 mins ago</card-text>
          </card-body>
        </card>

        <card class="text-right p-3">
          <blockquote class="blockquote mb-0 card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </card>

        <card>
          <card-body>
            <card-title tag="h5">Panel title</card-title>
            <card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This panel has even
              longer content than the first to show that equal height action.</card-text>
            <card-text small muted>Last updated 3 mins ago</card-text>
          </card-body>
        </card>

      </card-group>
    </row>

    <jumbotron class="mt-4">
      <h1 class="h1-responsive">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-2" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.
      </p>
      <btn color="primary" size="lg">Learn more</btn>
    </jumbotron>
  </container>
</template>


<script>
import { Container,  Row, Column, Btn, Card, CardTitle, CardText, CardFooter, CardBody, CardHeader, ListGroup, ListGroupItem, NavbarItem, CardGroup, Jumbotron, Fa } from 'mdbvue';

export default {
  name: 'PanelPage',
  components: {
    Container,
    Row,
    Column,
    Btn,
    Card,
    CardTitle,
    CardText,
    CardFooter,
    CardBody,
    CardHeader,
    ListGroup,
    ListGroupItem,
    NavbarItem,
    CardGroup,
    Jumbotron,
    Fa
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
