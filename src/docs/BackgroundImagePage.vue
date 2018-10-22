<template>
  <container class="mt-5">
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Background Image </strong></h4>
      <a href="https://mdbootstrap.com/vue/advanced/google-map/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr class="mb-4" />
    <row>
      <h2 class="mb-3">Full Page Background Image</h2>
      <pre><code>
&lt;template>
  &lt;div class="bg">&lt;/div>

  &lt;p class="py-5 text-center">This example creates a full page background image.
  Try to resize the browser window to see how it always will cover the full screen (when scrolled to top),
  and that it scales nicely on all screen sizes.&lt;/p>
&lt;template>

&lt;style>
  body, html {
    height: 100%;
  }
  .bg {
    /* The image used */
    background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg");

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
&lt;/style>
</code></pre>

    </row>
    <hr class="mb-4" />
    <row>
      <h2 class="mb-3">Half Page Background Image</h2>

            <pre><code>
&lt;template>
  &lt;div class="bg">&lt;/div>

  &lt;p class="py-5 text-center">This example creates a half page background image.
  Try to resize the browser window to see how it always will cover the full screen (when scrolled to top),
  and that it scales nicely on all screen sizes.&lt;/p>
&lt;template>

&lt;style>
  body, html {
    height: 100%;
  }
  .bg {
    /* The image used */
    background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg");

    /* Full height */
    height: 50%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
&lt;/style></code></pre>

    </row>
    <hr class="mb-4" />
    <row>
      <h2 class="mb-3 w-100">Background image layout - first option</h2>
      <btn tag="a" href="#/sections/app" outline="primary" rounded>see live preview</btn>

    </row>
    <hr class="mb-4" />
    <row>
      <h2 class="mb-3 w-100">Background image layout - second option</h2>
      <btn tag="a" href="#/sections/classic" outline="primary" rounded>see live preview</btn>

    </row>
    <hr class="mb-4" />
    <row>
      <h2 class="mb-3">Background image layout - third option -> SOON</h2>

    </row>
    <hr class="mb-4" />
    <row>
      <h2 class="mb-3 w-100">Background video layout</h2>
      <btn tag="a" href="#/sections/video" outline="primary" rounded>see live preview</btn>
    </row>
  </container>
</template>

<script>
import { Container, Row, Fa, Btn } from 'mdbvue';

export default {
  name: 'BackgroundImagePage',
  components: {
    Container,
    Row,
    Fa,
    Btn
  }
};
</script>

<style>

</style>
