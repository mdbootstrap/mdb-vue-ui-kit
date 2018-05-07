<template>
  <row>
    <div class="col-7 mt-5 mx-3">
      <media>
        <media-image src="http://via.placeholder.com/64x64"/>
        <media-body>
          <h5 class="mt-0">This is heading</h5>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
          nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </media-body>
      </media>
      <media>
        <media-image src="http://via.placeholder.com/64x64"/>
        <media-body>
          <h5 class="mt-0">This is another heading</h5>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
          nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </media-body>
      </media>
    </div>
  </row>
</template>

<script>
import { Media, MediaImage, MediaBody, Row } from 'mdbvue';

export default {
  name: 'MediaPage',
  components: {
    Media,
    MediaImage,
    MediaBody,
    Row
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
