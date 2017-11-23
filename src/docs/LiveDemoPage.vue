<template>
  <container className="text-center">
    <h1>MD Bootstrap Components</h1>
    <p>This presentation shows first part of components and features available in MDB Vue.js</p>
    <!-- BUTTONS -->
    <section>
      <h2>Buttons</h2>
      <h5>Basic buttons</h5>
      <btn>Primary</btn>
      <btn color="default">Default</btn>
      <btn color="secondary">Secondary</btn>
      <btn color="success">Success</btn>
      <btn color="info">Info</btn>
      <btn color="warning">Warning</btn>
      <btn color="danger">Danger</btn>
      <h5>Additional buttons</h5>
      <btn color="elegant">Elegant</btn>
      <btn color="unique">Unique</btn>
      <btn color="pink">Pink</btn>
      <btn color="purple">Purple</btn>
      <btn color="deep-purple">Deep-purple</btn>
      <btn color="indigo">Indigo</btn>
      <btn color="light-blue">Light-blue</btn>
      <btn color="cyan">Cyan</btn>
      <btn color="dark-green">Dark-green</btn>
      <btn color="light-green">Light-green</btn>
      <btn color="yellow">Yellow</btn>
      <btn color="amber">Amber</btn>
      <btn color="deep-orange">Deep-orange</btn>
      <btn color="brown">Brown</btn>
      <btn color="grey">Grey</btn>
      <btn color="mdb">Mdb</btn>
      <h5>Outline buttons</h5>
      <btn outline="primary">Primary</btn>
      <btn outline="default">Default</btn>
      <btn outline="secondary">Secondary</btn>
      <btn outline="success">Success</btn>
      <btn outline="info">Info</btn>
      <btn outline="warning">Warning</btn>
      <btn outline="danger">Danger</btn>
      <h5>Sizes</h5>
      <btn size="lg">Large button</btn>
      <btn size="lg">Large button</btn><br>
      <btn size="sm">Small button</btn>
      <btn size="sm">Small button</btn>
      <h5>Waves effect</h5>
      <wave></wave>
    </section>
    <!-- /BUTTONS -->
    <hr class="mt-4">
    <!-- BADGES -->
    <section>
      <h2>Badges</h2>
      <badge>Primary</badge>
      <badge color="default">Default</badge>
      <badge color="success">Success</badge>
      <badge color="info">Info</badge>
      <badge color="warning">Warning</badge>
      <h5>Pills with Font Awesome</h5>
      <badge pill><fa icon="snowflake-o"/></badge>
      <badge color="default" pill><fa icon="hand-spock-o"/></badge>
      <badge color="success" pill><fa icon="image"/></badge>
      <badge color="info" pill><fa icon="mortar-board"/></badge>
      <badge color="warning" pill><fa icon="paint-brush"/></badge>
    </section>
    <!-- /BADGES -->
    <hr class="mt-4">
    <!-- BREADCRUMBS -->
    <section>
      <h2>Breadcrumbs</h2>
      <breadcrumb>
        <breadcrumb-item><a href="#">Menu</a></breadcrumb-item>
        <breadcrumb-item><a href="#">Nav</a></breadcrumb-item>
        <breadcrumb-item><a href="#">Elements</a></breadcrumb-item>
        <breadcrumb-item active>Element 1</breadcrumb-item>
      </breadcrumb>
    </section>
    <!-- /BREADCRUMBS -->
    <hr class="mt-4">
    <!-- DROPDOWNS -->
    <section>
      <h2>Dropdowns</h2>
      <dropdown></dropdown>
    </section>
    <!-- /DROPDOWNS -->
    <hr class="mt-4">
    <!-- CARDS -->
    <section>
      <h2>Cards</h2>
      <row>
        <column col="12" sm="4">
          <card>
            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap">
            <card-body>
              <!--Title-->
              <h4 class="card-title">Card title</h4>
              <!--Text-->
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Button</a>
            </card-body>
          </card>
        </column>
        <column col="12" sm="4">
          <card>
            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%287%29.jpg" alt="Card image cap">
            <card-body>
              <!--Title-->
              <h4 class="card-title">Card title</h4>
              <!--Text-->
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Button</a>
            </card-body>
          </card>
        </column>
        <column col="12" sm="4">
          <card>
            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%288%29.jpg" alt="Card image cap">
            <card-body>
              <!--Title-->
              <h4 class="card-title">Card title</h4>
              <!--Text-->
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Button</a>
            </card-body>
          </card>
        </column>
      </row>
    </section>
    <!-- /CARDS -->
    <hr class="mt-4">
    <!-- CAROUSEL -->
    <section>
      <h2>Carousel</h2>
      <carousel></carousel>
    </section>
    <!-- /CAROUSEL -->
    <hr class="mt-4">
    <!-- TABLE -->
    <section>
      <h2>Table</h2>
      <tbl striped bordered dark hover responsive-lg>
        <tbl-head>
          <tr>
          <th>thead col 1</th>
          <th>thead col 2</th>
          <th>thead col 3</th>
          <th>thead col 4</th>
          </tr>
        </tbl-head>
        <tbl-body>
          <tr>
          <td>tbody col 1</td>
          <td>tbody col 2</td>
          <td>tbody col 3</td>
          <td>tbody col 4</td>
          </tr>
          <tr>
          <td>tbody col 1</td>
          <td>tbody col 2</td>
          <td>tbody col 3</td>
          <td>tbody col 4</td>
          </tr>
          <tr>
          <td colspan="4">tbody col wide</td>
          </tr>
        </tbl-body>
      </tbl>
    </section>
    <!-- /TABLE -->
    <hr class="mt-4">
    <!-- MEDIA -->
    <section>
      <h2>Media</h2>
      <media>
        <media-image src="http://via.placeholder.com/64x64"></media-image>
        <media-body>
          <h5 class="mt-0">This is heading</h5>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
          nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </media-body>
      </media>
      <media>
        <media-image src="http://via.placeholder.com/64x64"></media-image>
        <media-body>
          <h5 class="mt-0">This is another heading</h5>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
          nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </media-body>
      </media>
    </section>
    <!-- /MEDIA -->
    <hr class="mt-4">
    <!-- LIST GROUPS -->
    <section>
      <h2>List Groups</h2>
      <row>
        <column col="12" sm="4">
          <list-group>
            <list-group-item :action="true" :active="true">Main Menu</list-group-item>
            <list-group-item :action="true">Messages<badge :pill="true">12</badge></list-group-item>
            <list-group-item :action="true">Sell Products</list-group-item>
            <list-group-item :action="true">Settings</list-group-item>
            <list-group-item :disabled="true">Can't Touch This</list-group-item>
          </list-group>
        </column>
        <column col="12" sm="4">
          <list-group>
            <list-group-item :action="true" className="indigo text-white">Main Menu</list-group-item>
            <list-group-item :action="true">Messages</list-group-item>
            <list-group-item :action="true">Sell Products</list-group-item>
            <list-group-item :action="true">Settings<badge :pill="true" color="indigo">12</badge></list-group-item>
            <list-group-item :disabled="true">Can't Touch This</list-group-item>
          </list-group>
        </column>
        <column col="12" sm="4">
          <list-group>
            <list-group-item :action="true" className="special-color text-white">Main Menu</list-group-item>
            <list-group-item :action="true">Messages</list-group-item>
            <list-group-item :action="true">Sell Products<badge :pill="true" className="special-color">12</badge></list-group-item>
            <list-group-item :action="true">Settings</list-group-item>
            <list-group-item :disabled="true">Can't Touch This</list-group-item>
          </list-group>
        </column>
      </row>
    </section>
    <!-- /LIST GROUPS -->
  </container>
</template>

<script>
import Container from '@/components/Container';
import Row from '@/components/Row';
import Column from '@/components/Col';
import Btn from '@/components/Button';
import Wave from '@/docs/WavesPage.vue';
import Badge from '@/components/Badge';
import Fa from '@/components/Fa';
import Breadcrumb from '@/components/Breadcrumb';
import BreadcrumbItem from '@/components/BreadcrumbItem';
import Dropdown from '@/docs/DropdownPage.vue';
import Card from '@/components/Card';
import CardHeader from '@/components/CardHeader';
import CardBody from '@/components/CardBody';
import Carousel from '@/docs/CarouselPage.vue';
import Tbl from '@/components/Table';
import TblHead from '@/components/TableHead';
import TblBody from '@/components/TableBody';
import Media from '@/components/Media';
import MediaImage from '@/components/MediaImage';
import MediaBody from '@/components/MediaBody';
import ListGroup from '@/components/ListGroup';
import ListGroupItem from '@/components/ListGroupItem';

export default {
  name: 'WavesPage',
  components: {
    Container,
    Row,
    Column,
    Btn,
    Wave,
    Badge,
    Fa,
    Breadcrumb,
    BreadcrumbItem,
    Dropdown,
    Card,
    CardHeader,
    CardBody,
    Carousel,
    Tbl,
    TblHead,
    TblBody,
    Media,
    MediaImage,
    MediaBody,
    ListGroup,
    ListGroupItem
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 50px 0;
}
.container > p {
  margin-bottom: 80px;
}
section {
  padding-bottom: 40px;
}
section > h2 {
  font-weight: 500;
  margin: 50px 0;
}
section > h5 {
  margin: 30px 0;
}
.card-body, .media {
  text-align: left;
}
</style>
