<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Tabs</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/tabs/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container class="mt-5">
      <h4 class="mb-4">Default tabs</h4>
      <mdb-tabs 
        :active="0"
        default
        :links="[
          { text: 'Home' },
          { text: 'Profile' },
          { text: 'Contact' }]" 
        :content="[
          `Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`,
          `Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.`,
          `Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`]"
      />
    </mdb-container>
    <hr />
    <mdb-container class="mt-5 custom-section">
      <h4 class="mb-4">Custom HTML content</h4>
      <mdb-tabs 
        :active="0"
        default
        :links="[
          { text: 'Home' },
          { text: 'Blog' },
          { text: 'Contact' }]"
        :transition-duration="0.5"
        transition-style="linear"
      >
        <template :slot="'Home'">
          <mdb-container>
            <mdb-jumbotron class="text-center hoverable">
              <mdb-row>
                <mdb-col md="4" offsetMd="1" class="m-3">
                  <mdb-view src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" alt="Sample image for first version of blog listing">
                    <a><mdb-mask waves overlay="white-slight"/></a>
                  </mdb-view>
                </mdb-col>
                <mdb-col md="7" class="text-md-left ml-3 mt-3">
                  <a href="#!" class="green-text">
                    <h6 class="h6 pb-1"><mdb-icon icon="desktop" class="pr-1"/> Work</h6>
                  </a>
                  <h4 class="h4 mb-4">This is title of the news</h4>
                  <p class="font-weight-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque, totam
                    rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                  <p class="font-weight-normal">by <a><strong>Carine Fox</strong></a>, 19/08/2016</p>
                  <mdb-btn color="success">Read more</mdb-btn>
                </mdb-col>
              </mdb-row>
            </mdb-jumbotron>
          </mdb-container>
        </template>
        <template :slot="'Blog'">
          <mdb-container>
            <mdb-jumbotron class="text-center hoverable">
              <mdb-row>
                <mdb-col lg="5">
                  <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
                    <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image" />
                    <a>
                      <mdb-mask overlay="white-slight" waves/>
                    </a>
                  </mdb-view>
                </mdb-col>
                <mdb-col lg="7">
                  <a class="green-text">
                    <h6 class="font-weight-bold mb-3">
                      <mdb-icon icon="utensils" class="pr-2" />Food</h6>
                  </a>
                  <h3 class="font-weight-bold mb-3 p-0">
                    <strong>Title of the news</strong>
                  </h3>
                  <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat mdb-iconcere
                    possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis.</p>
                  <p>by
                    <a>
                      <strong>Carine Fox</strong>
                    </a>, 19/08/2018</p>
                  <mdb-btn color="success" size="md" class="waves-light ">Read more</mdb-btn>
                </mdb-col>
              </mdb-row>
            </mdb-jumbotron>
            <mdb-jumbotron class="text-center hoverable">
              <mdb-row>
                <mdb-col lg="7">
                  <a class="pink-text">
                    <h6 class="font-weight-bold mb-3">
                      <mdb-icon icon="image" class="pr-2" />Lifestyle
                    </h6>
                  </a>
                  <h3 class="font-weight-bold mb-3 p-0">
                    <strong>Title of the news</strong>
                  </h3>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                  <p>by
                    <a>
                      <strong>Carine Fox</strong>
                    </a>, 14/08/2018</p>
                  <mdb-btn color="pink" size="md" class="mb-lg-0 mb-4 waves-light">Read more</mdb-btn>
                </mdb-col>
                <mdb-col lg="5">
                  <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
                    <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg" alt="Sample image" />
                    <a>
                      <mdb-mask overlay="white-slight" waves/>
                    </a>
                  </mdb-view>
                </mdb-col>
              </mdb-row>
            </mdb-jumbotron>
          </mdb-container>
        </template>
        <template :slot="'Contact'">
          <mdb-container>
            <mdb-jumbotron class="text-center hoverable">
              <form>
                <p class="h4 text-center mb-4">Write to us</p>
                <div class="grey-text">
                  <mdb-input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                  <mdb-input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                  <mdb-input label="Subject" icon="tag" group type="text" validate error="wrong" success="right"/>
                  <mdb-textarea :rows="2" label="Your message" icon="pencil"/>
                </div>
                <div class="text-center">
                  <mdb-btn outline="secondary">Send <mdb-icon far icon="paper-plane" class="ml-1"/></mdb-btn>
                </div>
              </form> 
            </mdb-jumbotron>
          </mdb-container>
        </template>
      </mdb-tabs>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbTabs, mdbJumbotron, mdbView, mdbMask, mdbBtn, mdbTextarea, mdbInput, mdbCarousel, mdbCarouselItem } from 'mdbvue';

export default {
  name: 'TabPage',
  components: {
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbIcon,
    mdbTabs,
    mdbJumbotron,
    mdbView,
    mdbMask,
    mdbBtn,
    mdbTextarea,
    mdbInput,
    mdbCarouselItem,
    mdbCarousel
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  font-weight: bold;
}

.custom-section {
  min-height: 90vh;
}
</style>
