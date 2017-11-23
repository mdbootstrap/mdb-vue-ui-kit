<template>
  <card>
    <card-header>Card Header</card-header>
    <card-body>Card Body</card-body>
  </card>
</template>

<script>
import card from '@/components/Card';
import cardHeader from '@/components/CardHeader';
import cardBody from '@/components/CardBody';

export default {
  name: 'CardPage',
  components: {
    'Card': card,
    'CardHeader': cardHeader,
    'CardBody': cardBody
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
