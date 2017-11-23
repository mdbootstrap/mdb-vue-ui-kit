<template>
<div class="row">
  <div class="col-7 m-4">
    <media>
     <media-image src="http://via.placeholder.com/64x64"></media-image>
     <media-body><h5 class="mt-0">This is heading</h5>
     <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
       Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
       nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>    <media>
     <media-image src="http://via.placeholder.com/64x64"></media-image>
     <media-body><h5 class="mt-0">This is another heading</h5>
     <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
       Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
       nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p></media-body>
   </media></media-body>
   </media>
  </div>
</div>
</template>

<script>
import Media from '@/components/Media';
import MediaImage from '@/components/MediaImage';
import MediaBody from '@/components/MediaBody';

export default {
  name: 'MediaPage',
  components: {
    Media,
    MediaImage,
    MediaBody
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
