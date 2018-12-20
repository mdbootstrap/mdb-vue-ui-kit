<template>
  <mdb-container>
    <h1>MD Bootstrap Components</h1>
    <p>This presentation shows first part of components and features available in MDB Vue.js</p>
    <!-- BUTTONS -->
    <section class="text-center">
      <h2>Buttons</h2>
      <h5>Basic buttons</h5>
      <mdb-btn color="primary">Primary</mdb-btn>
      <mdb-btn>Default</mdb-btn>
      <mdb-btn color="secondary">Secondary</mdb-btn>
      <mdb-btn color="success">Success</mdb-btn>
      <mdb-btn color="info">Info</mdb-btn>
      <mdb-btn color="warning">Warning</mdb-btn>
      <mdb-btn color="danger">Danger</mdb-btn>
      <h5>Additional buttons</h5>
      <mdb-btn color="elegant">Elegant</mdb-btn>
      <mdb-btn color="unique">Unique</mdb-btn>
      <mdb-btn color="pink">Pink</mdb-btn>
      <mdb-btn color="purple">Purple</mdb-btn>
      <mdb-btn color="deep-purple">Deep-purple</mdb-btn>
      <mdb-btn color="indigo">Indigo</mdb-btn>
      <mdb-btn color="light-blue">Light-blue</mdb-btn>
      <mdb-btn color="cyan">Cyan</mdb-btn>
      <mdb-btn color="dark-green">Dark-green</mdb-btn>
      <mdb-btn color="light-green">Light-green</mdb-btn>
      <mdb-btn color="yellow">Yellow</mdb-btn>
      <mdb-btn color="amber">Amber</mdb-btn>
      <mdb-btn color="deep-orange">Deep-orange</mdb-btn>
      <mdb-btn color="brown">Brown</mdb-btn>
      <mdb-btn color="grey">Grey</mdb-btn>
      <mdb-btn color="mdb">Mdb</mdb-btn>
      <h5>Outline buttons</h5>
      <mdb-btn outline="primary" darkWaves>Primary</mdb-btn>
      <mdb-btn outline="default" darkWaves>Default</mdb-btn>
      <mdb-btn outline="secondary" darkWaves>Secondary</mdb-btn>
      <mdb-btn outline="success" darkWaves>Success</mdb-btn>
      <mdb-btn outline="info" darkWaves>Info</mdb-btn>
      <mdb-btn outline="warning" darkWaves>Warning</mdb-btn>
      <mdb-btn outline="danger" darkWaves>Danger</mdb-btn>
      <h5>Sizes</h5>
      <mdb-btn size="lg">Large button</mdb-btn>
      <mdb-btn size="lg">Large button</mdb-btn><br>
      <mdb-btn size="sm">Small button</mdb-btn>
      <mdb-btn size="sm">Small button</mdb-btn>
    </section>
    <!-- /BUTTONS -->
    <hr class="mt-4">
    <!-- BADGES -->
    <section class="text-center">
      <h2>Badges</h2>
      <mdb-badge color="primary-color">Primary</mdb-badge>
      <mdb-badge color="default-color">Default</mdb-badge>
      <mdb-badge color="success-color">Success</mdb-badge>
      <mdb-badge color="info-color">Info</mdb-badge>
      <mdb-badge color="warning-color">Warning</mdb-badge>
      <h5>Pills with Font Awesome</h5>
      <mdb-badge pill color="primary-color"><mdb-icon icon="snowflake-o"/></mdb-badge>
      <mdb-badge color="default-color" pill><mdb-icon icon="hand-spock-o"/></mdb-badge>
      <mdb-badge color="success-color" pill><mdb-icon icon="image"/></mdb-badge>
      <mdb-badge color="info-color" pill><mdb-icon icon="mortar-board"/></mdb-badge>
      <mdb-badge color="warning-color" pill><mdb-icon icon="paint-brush"/></mdb-badge>
    </section>
    <!-- /BADGES -->
    <hr class="mt-4">
    <!-- NAVBARS -->
    <section>
      <h2>Navbars</h2>
      <mdb-navbar color="primary" dark name="Navbar" href="#">
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
            <mdb-nav-item href="#" active>Home</mdb-nav-item>
            <mdb-nav-item href="#">Features</mdb-nav-item>
            <mdb-nav-item href="#">Pricing</mdb-nav-item>
            <!-- mdbDropdown -->
            <mdb-dropdown tag="li" class="nav-item">
              <mdb-dropdown-toggle slot="toggle" tag="a" navLink color="primary" waves-fixed>Dropdown</mdb-dropdown-toggle>
              <mdb-dropdown-menu>
                <mdb-dropdown-item>Action</mdb-dropdown-item>
                <mdb-dropdown-item>Another action</mdb-dropdown-item>
                <mdb-dropdown-item>Something else here</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-navbar-nav>
            <!-- Search form -->
          <form class="form-inline">
            <mdb-input type="text" placeholder="Search" aria-label="Search" label navInput waves />
          </form>
        </mdb-navbar-toggler>
      </mdb-navbar>
      <mdb-navbar color="default" dark class="mt-4" name="Navbar" href="#">
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
            <mdb-nav-item href="#" active>Home</mdb-nav-item>
            <mdb-nav-item href="#">Features</mdb-nav-item>
            <mdb-nav-item href="#">Pricing</mdb-nav-item>
            <!-- mdbDropdown -->
            <mdb-dropdown tag="li" class="nav-item">
              <mdb-dropdown-toggle slot="toggle" tag="a" navLink color="default" waves-fixed>Dropdown</mdb-dropdown-toggle>
              <mdb-dropdown-menu color="default">
                <mdb-dropdown-item>Action</mdb-dropdown-item>
                <mdb-dropdown-item>Another action</mdb-dropdown-item>
                <mdb-dropdown-item>Something else here</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-navbar-nav>
          <mdb-navbar-nav right>
            <mdb-nav-item href="#"><mdb-icon icon="twitter"></mdb-icon></mdb-nav-item>
            <mdb-nav-item href="#"><mdb-icon icon="google-plus"></mdb-icon></mdb-nav-item>
            <mdb-dropdown tag="li" class="nav-item">
              <mdb-dropdown-toggle slot="toggle" tag="a" navLink color="default" waves-fixed><mdb-icon icon="user"></mdb-icon></mdb-dropdown-toggle>
              <mdb-dropdown-menu color="default">
                <mdb-dropdown-item>Action</mdb-dropdown-item>
                <mdb-dropdown-item>Another action</mdb-dropdown-item>
                <mdb-dropdown-item>Something else here</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
      <mdb-navbar color="danger" dark class="mt-4" name="Navbar" href="#">
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
          </mdb-navbar-nav>
          <mdb-navbar-nav right>
            <mdb-nav-item href="#"><mdb-icon icon="envelope"></mdb-icon> Contact</mdb-nav-item>
            <mdb-nav-item href="#"><mdb-icon icon="cog"></mdb-icon> Settings</mdb-nav-item>
            <mdb-dropdown tag="li" class="nav-item">
              <mdb-dropdown-toggle slot="toggle" tag="a" navLink color="danger" waves-fixed><mdb-icon icon="user"></mdb-icon> Profile</mdb-dropdown-toggle>
              <mdb-dropdown-menu color="danger">
                <mdb-dropdown-item>Action</mdb-dropdown-item>
                <mdb-dropdown-item>Another action</mdb-dropdown-item>
                <mdb-dropdown-item>Something else here</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
      <h5>Breadcrumbs</h5>
      <mdb-breadcrumb>
        <mdb-breadcrumb-item><a href="#">Menu</a></mdb-breadcrumb-item>
        <mdb-breadcrumb-item><a href="#">Nav</a></mdb-breadcrumb-item>
        <mdb-breadcrumb-item><a href="#">Elements</a></mdb-breadcrumb-item>
        <mdb-breadcrumb-item active>Element 1</mdb-breadcrumb-item>
      </mdb-breadcrumb>
    </section>
    <!-- /NAVBARS -->
    <hr class="mt-4">
    <!-- DROPDOWNS -->
    <section class="text-center">
      <h2>Dropdowns</h2>
      <h5>Basic examples</h5>
      <mdb-dropdown>
        <mdb-dropdown-toggle slot="toggle" color="default">Dropdown 1</mdb-dropdown-toggle>
        <mdb-dropdown-menu color="default">
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <mdb-dropdown>
        <mdb-dropdown-toggle slot="toggle" color="primary">Dropdown 2</mdb-dropdown-toggle>
        <mdb-dropdown-menu color="primary">
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <mdb-dropdown>
        <mdb-dropdown-toggle slot="toggle" color="secondary">Dropdown 3</mdb-dropdown-toggle>
        <mdb-dropdown-menu color="secondary">
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <mdb-dropdown>
        <mdb-dropdown-toggle slot="toggle" color="danger">Dropdown 4</mdb-dropdown-toggle>
        <mdb-dropdown-menu color="danger">
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
      <mdb-dropdown>
        <mdb-dropdown-toggle slot="toggle" color="warning">Dropdown 5</mdb-dropdown-toggle>
        <mdb-dropdown-menu color="warning">
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
    </section>
    <!-- /DROPDOWNS -->
    <hr class="mt-4">
    <!-- CARDS -->
    <section>
      <h2>Cards</h2>
      <mdb-row>
        <mdb-col sm="4">
          <mdb-card>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap" waves/>
            <mdb-card-body>
              <h4 class="card-title">Card with waves effect</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <mdb-btn color="primary">Button</mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="4">
          <mdb-card>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"/>
            <mdb-card-body>
              <h4 class="card-title">Basic card</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <mdb-btn color="primary">Button</mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="4">
          <mdb-card>
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%287%29.jpg" alt="Card image cap" waves/>
            <mdb-card-body>
              <h4 class="card-title">Card with waves effect</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <mdb-btn color="primary">Button</mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
    <!-- /CARDS -->
    <hr class="mt-4">
    <!-- TABLE -->
    <section>
      <h2>Table</h2>
      <mdb-tbl striped bordered dark hover responsive-lg>
        <mdb-tbl-head>
          <tr>
          <th>thead col 1</th>
          <th>thead col 2</th>
          <th>thead col 3</th>
          <th>thead col 4</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
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
        </mdb-tbl-body>
      </mdb-tbl>
    </section>
    <!-- /TABLE -->
    <hr class="mt-4">
    <!-- PAGINATION -->
    <section>
      <h2>Pagination</h2>
      <mdb-pagination class="d-flex justify-content-center">
        <page-nav prev></page-nav>
        <mdb-page-item active>1</mdb-page-item>
        <mdb-page-item>2</mdb-page-item>
        <mdb-page-item>3</mdb-page-item>
        <mdb-page-item>4</mdb-page-item>
        <mdb-page-item>5</mdb-page-item>
        <page-nav next></page-nav>
      </mdb-pagination>
    </section>
    <!-- /PAGINATION -->
    <hr class="mt-4">
    <!-- MEDIA -->
    <section>
      <h2>Media</h2>
      <mdb-media>
        <mdb-media-image src="http://via.placeholder.com/64x64"></mdb-media-image>
        <mdb-media-body>
          <h5 class="mt-0 text-left">This is heading</h5>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
          nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </mdb-media-body>
      </mdb-media>
      <mdb-media>
        <mdb-media-image src="http://via.placeholder.com/64x64"></mdb-media-image>
        <mdb-media-body>
          <h5 class="mt-0 text-left">This is another heading</h5>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
          nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </mdb-media-body>
      </mdb-media>
    </section>
    <!-- /MEDIA -->
    <hr class="mt-4">
    <!-- LIST GROUPS -->
    <section>
      <h2>List Groups</h2>
      <mdb-row>
        <mdb-col col="12" sm="4">
          <mdb-list-group>
            <mdb-list-group-item :action="true" :active="true">Main Menu</mdb-list-group-item>
            <mdb-list-group-item :action="true">Messages<mdb-badge :pill="true">12</mdb-badge></mdb-list-group-item>
            <mdb-list-group-item :action="true">Sell Products</mdb-list-group-item>
            <mdb-list-group-item :action="true">Settings</mdb-list-group-item>
            <mdb-list-group-item :disabled="true">Can't Touch This</mdb-list-group-item>
          </mdb-list-group>
        </mdb-col>
        <mdb-col col="12" sm="4">
          <mdb-list-group>
            <mdb-list-group-item :action="true" class="indigo text-white">Main Menu</mdb-list-group-item>
            <mdb-list-group-item :action="true">Messages</mdb-list-group-item>
            <mdb-list-group-item :action="true">Sell Products</mdb-list-group-item>
            <mdb-list-group-item :action="true">Settings<mdb-badge :pill="true" color="indigo">12</mdb-badge></mdb-list-group-item>
            <mdb-list-group-item :disabled="true">Can't Touch This</mdb-list-group-item>
          </mdb-list-group>
        </mdb-col>
        <mdb-col col="12" sm="4">
          <mdb-list-group>
            <mdb-list-group-item :action="true" class="special-color text-white">Main Menu</mdb-list-group-item>
            <mdb-list-group-item :action="true">Messages</mdb-list-group-item>
            <mdb-list-group-item :action="true">Sell Products<mdb-badge :pill="true" color="special-color">12</mdb-badge></mdb-list-group-item>
            <mdb-list-group-item :action="true">Settings</mdb-list-group-item>
            <mdb-list-group-item :disabled="true">Can't Touch This</mdb-list-group-item>
          </mdb-list-group>
        </mdb-col>
      </mdb-row>
    </section>
    <!-- /LIST GROUPS -->
    <hr class="mt-4">
    <!-- CHARTS -->
    <section>
      <h2>Charts</h2>
      <mdb-row>
        <mdb-col col="6" class="pb-5">
          <h5>Line Chart</h5>
          <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :height="300"/>
        </mdb-col>
        <mdb-col col="6" class="pb-5">
          <h5>Radar Chart</h5>
          <mdb-radar-chart :data="radarChartData" :options="radarChartOptions" :width="600" :height="300"/>
        </mdb-col>
        <mdb-col col="6" class="pb-5">
          <h5>Bar Chart</h5>
          <mdb-bar-chart :data="barChartData" :options="barChartOptions" :width="600" :height="300"/>
        </mdb-col>
        <mdb-col col="6" class="pb-5">
          <h5>Polar Chart</h5>
          <mdb-polar-chart :data="polarChartData" :options="polarChartOptions" :width="600" :height="300"/>
        </mdb-col>
        <mdb-col col="6" class="pb-5">
          <h5>Pie Chart</h5>
          <mdb-pie-chart :data="pieChartData" :options="pieChartOptions" :width="600" :height="300"/>
        </mdb-col>
        <mdb-col col="6" class="pb-5">
          <h5>Doughnut Chart</h5>
          <mdb-doughnut-chart :data="pieChartData" :options="pieChartOptions" :width="600" :height="300"/>
        </mdb-col>
      </mdb-row>
    </section>
    <!-- /CHARTS -->
    <hr class="mt-4">
    <!-- MASKS -->
    <section>
      <h2>Masks</h2>
      <mdb-row>
        <mdb-col col="12" sm="6" class="py-2">
          <view-wrapper src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
            <mdb-mask flex-center waves text="waves"></mdb-mask>
          </view-wrapper>
        </mdb-col>
        <mdb-col col="12" sm="6" class="py-2">
          <view-wrapper src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
            <mdb-mask flex-center pattern="3" text="pattern = &quot;3&quot;"></mdb-mask>
          </view-wrapper>
        </mdb-col>
        <mdb-col col="12" sm="6">
          <view-wrapper overlay="blue-strong" src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
            <mdb-mask flex-center waves overlay="blue-strong" text="overlay = &quot;blue-strong&quot; waves"></mdb-mask>
          </view-wrapper>
        </mdb-col>
        <mdb-col col="12" sm="6">
          <view-wrapper src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
            <mdb-mask flex-center waves pattern="5" text="pattern = &quot;5&quot; waves"></mdb-mask>
          </view-wrapper>
        </mdb-col>
      </mdb-row>
    </section>
    <!-- /MASKS -->
    <hr class="mt-4">
    <!-- EdgeHeaders -->
    <section>
      <h2>Edge Header</h2>
      <div style="background: #ededed; padding-bottom: 100px">
      <!-- Purple Header -->
        <mdb-edge-header color="indigo"></mdb-edge-header>

        <!-- Main mdbContainer -->
        <mdb-container free-bird>
          <mdb-row>
            <mdb-col md="8" lg="7" class="mx-auto float-none white z-depth-1 py-2 px-2">

              <!--Naked Form-->
              <mdb-card-body>
                <h2 class="h2-responsive"><strong>Material Design Edge Headers</strong></h2>
                <p class="pb-4 text-center">Example of Material Design Form</p>

                <!--Body-->
                <form action="#">

                  <h5 class="h5-responsive">Basic Textbox</h5>
                  <!-- Basic textbox -->
                  <mdb-input type="text" label="Example label"/>
                  <!-- /.Basic textbox -->

                  <h5 class="h5-responsive">Textbox with icon</h5>
                  <div class="md-form">
                    <mdb-input type="text" label="Your name" icon="user" />
                  </div>

                  <!--Email validation-->
                  <h5 class="h5-responsive">E-mail validation</h5>
                  <div class="md-form">
                    <mdb-input type="email" label="Your email" icon="envelope" />
                  </div>

                  <!--Textarea with icon-->
                  <h5 class="h5-responsive">Textarea</h5>
                  <div class="md-form">
                    <mdb-textarea type="text" label="Textarea" icon="pencil"></mdb-textarea>
                  </div>

                  <h5 class="h5-responsive">Disabled field</h5>
                  <div class="md-form">
                    <mdb-input type="text" label="Example label" disabled/>
                  </div>

                  <div class="text-xs-left">
                    <button class="btn btn-primary">Submit</button>
                  </div>
                </form>

                <div class="my-2">
                    <p style="font-weight:300;font-size:0.75rem">Never submit your passwords here</p>
                </div>

              </mdb-card-body>
              <!--Naked Form-->

            </mdb-col>
          </mdb-row>
        </mdb-container>
      <!-- /.Main mdbContainer -->
      </div>
    </section>
    <!-- /EdgeHeaders -->
    <hr class="mt-4">
    <!-- Panel -->
    <section>
      <h2>Panels</h2>
      <mdb-row>
        <mdb-col md="6">
          <mdb-card align="center">
            <mdb-card-header color="danger-color">Danger</mdb-card-header>
            <mdb-card-body>
              <h3 class="card-title">This is a card</h3>
              <p class="card-text">And here comes some special text, just for you.</p>
              <mdb-btn color="danger" size="sm">Go somewhere</mdb-btn>
            </mdb-card-body>
            <mdb-card-footer color="danger-color"><p class="mb-0">Please enjoy this footer</p></mdb-card-footer>
          </mdb-card>
        </mdb-col>
        <mdb-col md="6">
          <mdb-card align="center">
            <mdb-card-header color="indigo">Indigo</mdb-card-header>
            <mdb-card-body>
              <h3 class="card-title">This is a card</h3>
              <p class="card-text">And here comes some special text, just for you.</p>
              <mdb-btn color="indigo" size="sm">Go somewhere</mdb-btn>
            </mdb-card-body>
            <mdb-card-footer color="indigo"><p class="mb-0">Please enjoy this footer</p></mdb-card-footer>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
    <!-- /Panels -->
    <hr class="mt-4">
    <!-- Tooltips -->
    <section class="text-center">
      <h2>Tooltips</h2>
      <mdb-row>
        <mdb-col col="3">
          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
            <div class="tooltip">Tooltip</div>
            <mdb-btn slot="reference" color="info">Tooltip top</mdb-btn>
          </mdb-tooltip>
        </mdb-col>
        <mdb-col col="3">
          <mdb-tooltip trigger="hover" :options="{placement: 'right'}">
            <div class="tooltip">Tooltip</div>
            <mdb-btn slot="reference" color="info">Tooltip right</mdb-btn>
          </mdb-tooltip>
        </mdb-col>
        <mdb-col col="3">
          <mdb-tooltip trigger="hover" :options="{placement: 'bottom'}">
            <div class="tooltip">Tooltip</div>
            <mdb-btn slot="reference" color="info">Tooltip bottom</mdb-btn>
          </mdb-tooltip>
        </mdb-col>
        <mdb-col col="3">
          <mdb-tooltip trigger="hover" :options="{placement: 'left'}">
            <div class="tooltip">Tooltip</div>
            <mdb-btn slot="reference" color="info">Tooltip left</mdb-btn>
          </mdb-tooltip>
        </mdb-col>
      </mdb-row>
    </section>
    <!-- /Tooltips -->
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBadge, mdbBtn, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbInput, mdbTextarea, mdbBreadcrumb, mdbBreadcrumbItem, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbCard,  mdbCardImage, mdbCardHeader, mdbCardFooter, mdbCardBody, mdbTbl, mdbTblHead, mdbTblBody, mdbPagination, mdbPageNav, mdbPageItem,mdbMedia,mdbMediaImage,mdbMediaBody, mdbListGroup, mdbListGroupItem, mdbLineChart, mdbRadarChart, mdbBarChart, mdbPolarChart, mdbPieChart, mdbDoughnutChart, ViewWrapper, mdbMask, mdbEdgeHeader, Tooltip } from 'mdbvue';

export default {
  name: 'LiveDemoPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbBadge,
    mdbIcon,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbInput,
    mdbTextarea,
    mdbBreadcrumb,
    mdbBreadcrumbItem,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardFooter,
    mdbCardBody,
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    mdbPagination,
    mdbPageNav,
    mdbPageItem,
    mdbMedia,
    mdbMediaImage,
    mdbMediaBody,
    mdbListGroup,
    mdbListGroupItem,
    mdbLineChart,
    mdbRadarChart,
    mdbBarChart,
    mdbPolarChart,
    mdbPieChart,
    mdbDoughnutChart,
    ViewWrapper,
    mdbMask,
    mdbEdgeHeader,
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
      active: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
      }
    };
  },
  methods: {
    toggleDropdown(index) {
      for (let i = 0; i < Object.keys(this.active).length; i++) {
        if (index !== i) {
          this.active[i] = false;
        }
      }
      this.active[index] = !this.active[index];
    },
    allDropdownsClose(target) {
      for (let i = 0; i < Object.keys(this.active).length; i++) {
        this.active[i] = false;
      }
    },
    onClick(e) {
      let parent = e.target;
      let body = document.getElementsByTagName('body')[0];
      while (parent !== body) {
        if (parent.classList.contains('dropdown') || parent.classList.contains('btn-group')) {
          return;
        }
        parent = parent.parentNode;
      }
      this.allDropdownsClose(e.target);
    }
  },
  mounted() {
    document.addEventListener('click', this.onClick);
  },
  destroyed() {
    document.removeEventListener('click', this.onClick);
  }
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
