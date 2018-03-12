<template>
  <container>
    <h1>MD Bootstrap Components</h1>
    <p>This presentation shows first part of components and features available in MDB Vue.js</p>
    <!-- BUTTONS -->
    <section class="text-center">
      <h2>Buttons</h2>
      <h5>Basic buttons</h5>
      <btn color="primary">Primary</btn>
      <btn>Default</btn>
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
      <btn outline="primary" darkWaves>Primary</btn>
      <btn outline="default" darkWaves>Default</btn>
      <btn outline="secondary" darkWaves>Secondary</btn>
      <btn outline="success" darkWaves>Success</btn>
      <btn outline="info" darkWaves>Info</btn>
      <btn outline="warning" darkWaves>Warning</btn>
      <btn outline="danger" darkWaves>Danger</btn>
      <h5>Sizes</h5>
      <btn size="lg">Large button</btn>
      <btn size="lg">Large button</btn><br>
      <btn size="sm">Small button</btn>
      <btn size="sm">Small button</btn>
    </section>
    <!-- /BUTTONS -->
    <hr class="mt-4">
    <!-- BADGES -->
    <section class="text-center">
      <h2>Badges</h2>
      <badge>Primary</badge>
      <badge color="default-color">Default</badge>
      <badge color="success-color">Success</badge>
      <badge color="info-color">Info</badge>
      <badge color="warning-color">Warning</badge>
      <h5>Pills with Font Awesome</h5>
      <badge pill><fa icon="snowflake-o"/></badge>
      <badge color="default-color" pill><fa icon="hand-spock-o"/></badge>
      <badge color="success-color" pill><fa icon="image"/></badge>
      <badge color="info-color" pill><fa icon="mortar-board"/></badge>
      <badge color="warning-color" pill><fa icon="paint-brush"/></badge>
    </section>
    <!-- /BADGES -->
    <hr class="mt-4">
    <!-- NAVBARS -->
    <section>
      <h2>Navbars</h2>
      <navbar class="indigo" name="Navbar" href="#">
        <navbar-collapse>
          <navbar-nav>
            <navbar-item href="#" active>Home</navbar-item>
            <navbar-item href="#">Features</navbar-item>
            <navbar-item href="#">Pricing</navbar-item>
            <!-- Dropdown -->
            <dropdown tag="li" class="nav-item">
              <dropdown-toggle tag="a" navLink color="indigo">Dropdown</dropdown-toggle>
              <dropdown-menu>
                <dropdown-item>Action</dropdown-item>
                <dropdown-item>Another action</dropdown-item>
                <dropdown-item>Something else here</dropdown-item>
              </dropdown-menu>
            </dropdown>
          </navbar-nav>
            <!-- Search form -->
          <form class="form-inline">
            <mdinput type="text" placeholder="Search" aria-label="Search" label navInput waves />
          </form>
        </navbar-collapse>
      </navbar>
      <navbar class="unique-color mt-4" name="Navbar" href="#">
        <navbar-collapse>
          <navbar-nav>
            <navbar-item href="#" active>Home</navbar-item>
            <navbar-item href="#">Features</navbar-item>
            <navbar-item href="#">Pricing</navbar-item>
            <!-- Dropdown -->
            <dropdown tag="li" class="nav-item">
              <dropdown-toggle tag="a" navLink color="bg-unique">Dropdown</dropdown-toggle>
              <dropdown-menu nav-menu>
                <dropdown-item>Action</dropdown-item>
                <dropdown-item>Another action</dropdown-item>
                <dropdown-item>Something else here</dropdown-item>
              </dropdown-menu>
            </dropdown>
          </navbar-nav>
          <navbar-nav right>
            <navbar-item href="#"><fa icon="twitter"></fa></navbar-item>
            <navbar-item href="#"><fa icon="google-plus"></fa></navbar-item>
            <dropdown tag="li" class="nav-item">
              <dropdown-toggle tag="a" navLink color="bg-unique">
                <fa icon="user"></fa>
              </dropdown-toggle>
              <dropdown-menu right>
                <dropdown-item>Action</dropdown-item>
                <dropdown-item>Another action</dropdown-item>
                <dropdown-item>Something else here</dropdown-item>
              </dropdown-menu>
            </dropdown>
          </navbar-nav>
        </navbar-collapse>
      </navbar>
      <navbar class="bg-info mt-4" name="Navbar" href="#">
        <navbar-collapse>
          <navbar-nav>
          </navbar-nav>
          <navbar-nav right>
            <navbar-item href="#"><fa icon="envelope"></fa> Contact</navbar-item>
            <navbar-item href="#"><fa icon="cog"></fa> Settings</navbar-item>
            <dropdown tag="li" class="nav-item">
              <dropdown-toggle tag="a" navLink color="bg-unique">
                <fa icon="user"></fa> Profile</dropdown-toggle>
              <dropdown-menu right>
                <dropdown-item>My account</dropdown-item>
                <dropdown-item>Log out</dropdown-item>
              </dropdown-menu>
            </dropdown>
          </navbar-nav>
        </navbar-collapse>
      </navbar>
      <h5>Breadcrumbs</h5>
      <breadcrumb>
        <breadcrumb-item><a href="#">Menu</a></breadcrumb-item>
        <breadcrumb-item><a href="#">Nav</a></breadcrumb-item>
        <breadcrumb-item><a href="#">Elements</a></breadcrumb-item>
        <breadcrumb-item active>Element 1</breadcrumb-item>
      </breadcrumb>
    </section>
    <!-- /NAVBARS -->
    <hr class="mt-4">
    <!-- DROPDOWNS -->
    <section class="text-center">
      <h2>Dropdowns</h2>
      <h5>Basic examples</h5>
      <dropdown btn-group>
        <dropdown-toggle>DROPDOWN 1</dropdown-toggle>
        <dropdown-menu>
          <dropdown-item>Link 1</dropdown-item>
          <dropdown-item>Link 2</dropdown-item>
          <dropdown-item>Link 3</dropdown-item>
        </dropdown-menu>
      </dropdown>
      <dropdown btn-group>
        <dropdown-toggle color="primary">DROPDOWN 2</dropdown-toggle>
        <dropdown-menu>
          <dropdown-item>Link 1</dropdown-item>
          <dropdown-item>Link 2</dropdown-item>
          <dropdown-item>Link 3</dropdown-item>
        </dropdown-menu>
      </dropdown>
      <dropdown btn-group>
        <dropdown-toggle color="indigo">DROPDOWN 3</dropdown-toggle>
        <dropdown-menu>
          <dropdown-item>Link 1</dropdown-item>
          <dropdown-item>Link 2</dropdown-item>
          <dropdown-item>Link 3</dropdown-item>
        </dropdown-menu>
      </dropdown>
      <dropdown btn-group>
        <dropdown-toggle color="danger">DROPDOWN 4</dropdown-toggle>
        <dropdown-menu>
          <dropdown-item>Link 1</dropdown-item>
          <dropdown-item>Link 2</dropdown-item>
          <dropdown-item>Link 3</dropdown-item>
        </dropdown-menu>
      </dropdown>
      <dropdown btn-group>
        <dropdown-toggle color="info">DROPDOWN 5</dropdown-toggle>
        <dropdown-menu>
          <dropdown-item>Link 1</dropdown-item>
          <dropdown-item>Link 2</dropdown-item>
          <dropdown-item>Link 3</dropdown-item>
        </dropdown-menu>
      </dropdown>
      <h5>Split button dropdowns and dropups</h5>
      <dropdown btn-group>
        <btn color="danger">Action</btn>
        <dropdown-toggle class="px-3" color="danger"></dropdown-toggle>
        <dropdown-menu>
          <dropdown-item>Link 1</dropdown-item>
          <dropdown-item>Link 2</dropdown-item>
          <dropdown-item>Link 3</dropdown-item>
        </dropdown-menu>
      </dropdown>
      <dropdown btn-group>
        <btn color="primary">Action</btn>
        <dropdown-toggle class="px-3" color="primary"></dropdown-toggle>
        <dropdown-menu>
          <dropdown-item>Link 1</dropdown-item>
          <dropdown-item>Link 2</dropdown-item>
          <dropdown-item>Link 3</dropdown-item>
        </dropdown-menu>
      </dropdown>
      <dropdown btn-group dropup>
        <btn color="warning">Action</btn>
        <dropdown-toggle class="px-3" color="warning"></dropdown-toggle>
        <dropdown-menu dropup>
          <dropdown-item>Link 1</dropdown-item>
          <dropdown-item>Link 2</dropdown-item>
          <dropdown-item>Link 3</dropdown-item>
        </dropdown-menu>
      </dropdown>
      <dropdown btn-group dropup>
        <btn color="info">Action</btn>
        <dropdown-toggle class="px-3" color="info"></dropdown-toggle>
        <dropdown-menu dropup>
          <dropdown-item>Link 1</dropdown-item>
          <dropdown-item>Link 2</dropdown-item>
          <dropdown-item>Link 3</dropdown-item>
        </dropdown-menu>
      </dropdown>
      <h5>Sizing with disabled items</h5>
      <dropdown btn-group>
        <dropdown-toggle color="primary" size="lg">Large button</dropdown-toggle>
        <dropdown-menu>
          <dropdown-item>Link 1</dropdown-item>
          <dropdown-item disabled>Disabled link 2</dropdown-item>
          <dropdown-item>Link 3</dropdown-item>
        </dropdown-menu>
      </dropdown>
      <dropdown btn-group>
        <dropdown-toggle color="primary" size="sm">Small button</dropdown-toggle>
        <dropdown-menu>
          <dropdown-item>Link 1</dropdown-item>
          <dropdown-item disabled>Disabled link 2</dropdown-item>
          <dropdown-item>Link 3</dropdown-item>
        </dropdown-menu>
      </dropdown>
      <h5>Menu headers and dividers</h5>
      <dropdown btn-group>
        <dropdown-toggle color="primary">DROPDOWN</dropdown-toggle>
        <dropdown-menu>
          <h6 class="dropdown-header">Dropdown header</h6>
          <dropdown-item>Link 1</dropdown-item>
          <dropdown-item>Link 2</dropdown-item>
          <dropdown-item>Link 3</dropdown-item>
        </dropdown-menu>
      </dropdown>
      <dropdown btn-group>
        <dropdown-toggle color="danger">DROPDOWN</dropdown-toggle>
        <dropdown-menu>
          <h6 class="dropdown-header">Dropdown header</h6>
          <dropdown-item>Link 1</dropdown-item>
          <dropdown-item>Link 2</dropdown-item>
          <dropdown-item>Link 3</dropdown-item>
        </dropdown-menu>
      </dropdown>
      <dropdown btn-group>
        <dropdown-toggle color="info">DROPDOWN</dropdown-toggle>
        <dropdown-menu>
          <dropdown-item>Link 1</dropdown-item>
          <dropdown-item>Link 2</dropdown-item>
          <div class="dropdown-divider"></div>
          <dropdown-item>Link 3</dropdown-item>
        </dropdown-menu>
      </dropdown>
      <dropdown btn-group>
        <dropdown-toggle color="secondary">DROPDOWN</dropdown-toggle>
        <dropdown-menu>
          <dropdown-item>Link 1</dropdown-item>
          <dropdown-item>Link 2</dropdown-item>
          <div class="dropdown-divider"></div>
          <dropdown-item>Link 3</dropdown-item>
        </dropdown-menu>
      </dropdown>
    </section>
    <!-- /DROPDOWNS -->
    <hr class="mt-4">
    <!-- CARDS -->
    <section>
      <h2>Cards</h2>
      <row>
        <column sm="4">
          <card>
            <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap" waves></card-img>
            <card-body>
              <h4 class="card-title">Card with waves effect</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <btn color="primary">Button</btn>
            </card-body>
          </card>
        </column>
        <column sm="4">
          <card>
            <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></card-img>
            <card-body>
              <h4 class="card-title">Basic card</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <btn color="primary">Button</btn>
            </card-body>
          </card>
        </column>
        <column sm="4">
          <card>
            <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%287%29.jpg" alt="Card image cap" waves></card-img>
            <card-body>
              <h4 class="card-title">Card with waves effect</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <btn color="primary">Button</btn>
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
    <!-- PAGINATION -->
    <section>
      <h2>Pagination</h2>
      <pagination class="d-flex justify-content-center">
        <page-nav prev></page-nav>
        <page-item active>1</page-item>
        <page-item>2</page-item>
        <page-item>3</page-item>
        <page-item>4</page-item>
        <page-item>5</page-item>
        <page-nav next></page-nav>
      </pagination>
    </section>
    <!-- /PAGINATION -->
    <hr class="mt-4">
    <!-- INPUTS -->
    <section>
      <h2>Inputs</h2>
      <inputs-page></inputs-page>
    </section>
    <!-- /INPUTS -->
    <hr class="mt-4">
    <!-- MEDIA -->
    <section>
      <h2>Media</h2>
      <media>
        <media-image src="http://via.placeholder.com/64x64"></media-image>
        <media-body>
          <h5 class="mt-0 text-left">This is heading</h5>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
          nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </media-body>
      </media>
      <media>
        <media-image src="http://via.placeholder.com/64x64"></media-image>
        <media-body>
          <h5 class="mt-0 text-left">This is another heading</h5>
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
            <list-group-item :action="true" class="indigo text-white">Main Menu</list-group-item>
            <list-group-item :action="true">Messages</list-group-item>
            <list-group-item :action="true">Sell Products</list-group-item>
            <list-group-item :action="true">Settings<badge :pill="true" color="indigo">12</badge></list-group-item>
            <list-group-item :disabled="true">Can't Touch This</list-group-item>
          </list-group>
        </column>
        <column col="12" sm="4">
          <list-group>
            <list-group-item :action="true" class="special-color text-white">Main Menu</list-group-item>
            <list-group-item :action="true">Messages</list-group-item>
            <list-group-item :action="true">Sell Products<badge :pill="true" color="special-color">12</badge></list-group-item>
            <list-group-item :action="true">Settings</list-group-item>
            <list-group-item :disabled="true">Can't Touch This</list-group-item>
          </list-group>
        </column>
      </row>
    </section>
    <!-- /LIST GROUPS -->
    <hr class="mt-4">
    <!-- CHARTS -->
    <section>
      <h2>Charts</h2>
      <row>
        <column col="6" class="pb-5">
          <h5>Line Chart</h5>
          <line-chart :data="lineChartData" :options="lineChartOptions" :height="300"></line-chart>
        </column>
        <column col="6" class="pb-5">
          <h5>Radar Chart</h5>
          <radar-chart :data="radarChartData" :options="radarChartOptions" :width="600" :height="300"></radar-chart>
        </column>
        <column col="6" class="pb-5">
          <h5>Bar Chart</h5>
          <bar-chart :data="barChartData" :options="barChartOptions" :width="600" :height="300"></bar-chart>
        </column>
        <column col="6" class="pb-5">
          <h5>Polar Chart</h5>
          <polar-chart :data="polarChartData" :options="polarChartOptions" :width="600" :height="300"></polar-chart>
        </column>
        <column col="6" class="pb-5">
          <h5>Pie Chart</h5>
          <pie-chart :data="pieChartData" :options="pieChartOptions" :width="600" :height="300"></pie-chart>
        </column>
        <column col="6" class="pb-5">
          <h5>Doughnut Chart</h5>
          <doughnut-chart :data="pieChartData" :options="pieChartOptions" :width="600" :height="300"></doughnut-chart>
        </column>
      </row>
    </section>
    <!-- /CHARTS -->
    <hr class="mt-4">
    <!-- MASKS -->
    <section>
      <h2>Masks</h2>
      <row>
        <column col="12" sm="6" class="py-2">
          <view-wrapper src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
            <mdmask flex-center waves text="waves"></mdmask>
          </view-wrapper>
        </column>
        <column col="12" sm="6" class="py-2">
          <view-wrapper src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
            <mdmask flex-center pattern="3" text="pattern = &quot;3&quot;"></mdmask>
          </view-wrapper>
        </column>
        <column col="12" sm="6">
          <view-wrapper overlay="blue-strong" src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
            <mdmask flex-center waves overlay="blue-strong" text="overlay = &quot;blue-strong&quot; waves"></mdmask>
          </view-wrapper>
        </column>
        <column col="12" sm="6">
          <view-wrapper src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
            <mdmask flex-center waves pattern="5" text="pattern = &quot;5&quot; waves"></mdmask>
          </view-wrapper>
        </column>
      </row>
    </section>
    <!-- /MASKS -->
    <hr class="mt-4">
    <!-- EdgeHeaders -->
    <section>
      <h2>Edge Header</h2>
      <div style="background: #ededed; padding-bottom: 100px">
      <!-- Purple Header -->
        <edge-header color="indigo"></edge-header>

        <!-- Main Container -->
        <container free-bird>
          <row>
            <column md="8" lg="7" class="mx-auto float-none white z-depth-1 py-2 px-2">

              <!--Naked Form-->
              <card-body>
                <h2 class="h2-responsive"><strong>Material Design Edge Headers</strong></h2>
                <p class="pb-4 text-center">Example of Material Design Form</p>

                <!--Body-->
                <form action="#">

                  <h5 class="h5-responsive">Basic Textbox</h5>
                  <!-- Basic textbox -->
                  <mdinput type="text" label="Example label"/>
                  <!-- /.Basic textbox -->

                  <h5 class="h5-responsive">Textbox with icon</h5>
                  <div class="md-form">
                    <mdinput type="text" label="Your name" icon="user" />
                  </div>

                  <!--Email validation-->
                  <h5 class="h5-responsive">E-mail validation</h5>
                  <div class="md-form">
                    <mdinput type="email" label="Your email" icon="envelope" />
                  </div>

                  <!--Textarea with icon-->
                  <h5 class="h5-responsive">Textarea</h5>
                  <div class="md-form">
                    <mdtextarea type="text" label="Textarea" icon="pencil"></mdtextarea>
                  </div>

                  <h5 class="h5-responsive">Disabled field</h5>
                  <div class="md-form">
                    <mdinput type="text" label="Example label" disabled/>
                  </div>

                  <div class="text-xs-left">
                    <button class="btn btn-primary">Submit</button>
                  </div>
                </form>

                <div class="my-2">
                    <p style="font-weight:300;font-size:0.75rem">Never submit your passwords here</p>
                </div>

              </card-body>
              <!--Naked Form-->

            </column>
          </row>
        </container>
      <!-- /.Main Container -->
      </div>
    </section>
    <!-- /EdgeHeaders -->
    <hr class="mt-4">
    <!-- Panel -->
    <section>
      <h2>Panels</h2>
      <row>
        <column md="6">
          <card align="center">
            <card-header color="danger-color">Danger</card-header>
            <card-body>
              <h3 class="card-title">This is a card</h3>
              <p class="card-text">And here comes some special text, just for you.</p>
              <btn color="danger" size="sm">Go somewhere</btn>
            </card-body>
            <card-footer color="danger-color"><p class="mb-0">Please enjoy this footer</p></card-footer>
          </card>
        </column>
        <column md="6">
          <card align="center">
            <card-header color="indigo">Indigo</card-header>
            <card-body>
              <h3 class="card-title">This is a card</h3>
              <p class="card-text">And here comes some special text, just for you.</p>
              <btn color="indigo" size="sm">Go somewhere</btn>
            </card-body>
            <card-footer color="indigo"><p class="mb-0">Please enjoy this footer</p></card-footer>
          </card>
        </column>
      </row>
    </section>
    <!-- /Panels -->
    <hr class="mt-4">
    <!-- Tooltips -->
    <section class="text-center">
      <h2>Tooltips</h2>
      <row>
        <column col="3">
          <tooltip trigger="hover" :options="{placement: 'top'}">
            <div class="tooltip">Tooltip</div>
            <btn slot="reference" color="info">Tooltip top</btn>
          </tooltip>
        </column>
        <column col="3">
          <tooltip trigger="hover" :options="{placement: 'right'}">
            <div class="tooltip">Tooltip</div>
            <btn slot="reference" color="info">Tooltip right</btn>
          </tooltip>
        </column>
        <column col="3">
          <tooltip trigger="hover" :options="{placement: 'bottom'}">
            <div class="tooltip">Tooltip</div>
            <btn slot="reference" color="info">Tooltip bottom</btn>
          </tooltip>
        </column>
        <column col="3">
          <tooltip trigger="hover" :options="{placement: 'left'}">
            <div class="tooltip">Tooltip</div>
            <btn slot="reference" color="info">Tooltip left</btn>
          </tooltip>
        </column>
      </row>
    </section>
    <!-- /Tooltips -->
  </container>
</template>

<script>
import Container from '../components/Container.vue';
import Row from '../components/Row.vue';
import Column from '../components/Col.vue';
import Btn from '../components/Button.vue';
import Badge from '../components/Badge.vue';
import Fa from '../components/Fa.vue';
import Navbar from '../components/Navbar.vue';
import NavbarItem from '../components/NavbarItem.vue';
import NavbarNav from '../components/NavbarNav.vue';
import NavbarCollapse from '../components/NavbarCollapse.vue';
import Mdinput from '../components/MdInput.vue';
import Mdtextarea from '../components/MdTextarea.vue';
import InputsPage from '../docs/InputsPage.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import BreadcrumbItem from '../components/BreadcrumbItem.vue';
import Dropdown from '../components/Dropdown.vue';
import DropdownToggle from '../components/DropdownToggle.vue';
import DropdownMenu from '../components/DropdownMenu.vue';
import DropdownItem from '../components/DropdownItem.vue';
import drop from '../mixins/drop';
import Card from '../components/Card.vue';
import CardImg from '../components/CardImg.vue';
import CardHeader from '../components/CardHeader.vue';
import CardFooter from '../components/CardFooter.vue';
import CardBody from '../components/CardBody.vue';
import Carousel from '../docs/CarouselPage.vue';
import Tbl from '../components/Table.vue';
import TblHead from '../components/TableHead.vue';
import TblBody from '../components/TableBody.vue';
import Pagination from '../components/Pagination.vue';
import PageNav from '../components/PageNav.vue';
import PageItem from '../components/PageItem.vue';
import Media from '../components/Media.vue';
import MediaImage from '../components/MediaImage.vue';
import MediaBody from '../components/MediaBody.vue';
import ListGroup from '../components/ListGroup.vue';
import ListGroupItem from '../components/ListGroupItem.vue';
import LineChart from '../components/ChartLine';
import RadarChart from '../components/ChartRadar';
import BarChart from '../components/ChartBar';
import PolarChart from '../components/ChartPolar';
import PieChart from '../components/ChartPie';
import DoughnutChart from '../components/ChartDoughnut';
import ViewWrapper from '../components/ViewWrapper.vue';
import Mdmask from '../components/Mdmask.vue';
import EdgeHeader from '../components/EdgeHeader.vue';
import Tooltip from "../components/Tooltip";

export default {
  name: 'LiveDemoPage',
  components: {
    Container,
    Row,
    Column,
    Btn,
    Badge,
    Fa,
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Mdinput,
    Mdtextarea,
    InputsPage,
    Breadcrumb,
    BreadcrumbItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardImg,
    CardHeader,
    CardFooter,
    CardBody,
    Carousel,
    Tbl,
    TblHead,
    TblBody,
    Pagination,
    PageNav,
    PageItem,
    Media,
    MediaImage,
    MediaBody,
    ListGroup,
    ListGroupItem,
    LineChart,
    RadarChart,
    BarChart,
    PolarChart,
    PieChart,
    DoughnutChart,
    ViewWrapper,
    Mdmask,
    EdgeHeader,
    Tooltip
  },
  data() {
    return {
      lineChartData: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }],
        }
      },
      radarChartData: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
      radarChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      barChartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
        }]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }],
        }
      },
      polarChartData: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: ["rgba(247, 70, 74, 0.3)", "rgba(70, 191, 189, 0.3)", "rgba(253, 180, 92, 0.3)", "rgba(148, 159, 177, 0.3)", "rgba(77, 83, 96, 0.3)"],
            hoverBackgroundColor: ["rgba(247, 70, 74, 0.4)", "rgba(70, 191, 189, 0.4)", "rgba(253, 180, 92, 0.4)", "rgba(148, 159, 177, 0.4)", "rgba(77, 83, 96, 0.4)"],
          }
        ]
      },
      polarChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      pieChartData: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
          }
        ]
      },
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mixins: [drop]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 50px 0;
}
h1, h2, h5 {
  text-align: center;
}
.container > p {
  margin-bottom: 80px;
  text-align: center;
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
.media {
  text-align: left;
}
.navbar .dropdown-menu a:hover {
  color: inherit !important;
}
form h5 {
  text-align: left;
}
</style>
