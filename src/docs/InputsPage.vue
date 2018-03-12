<template>
  <section class="ml-4">
    <div style="margin-top:3rem;max-width:20rem">
      <mdinput type="text" label="Basic example"/>
      <mdinput size="sm" type="text" label="Small input"/>
    </div>
    <div style="margin-top:3rem;max-width:20rem">
      <mdinput type="text" label="Input with icon" icon="envelope" />
    </div>
    <div style="margin-top:3rem;max-width:20rem">
      <mdinput type="text" label="Example label" placeholder="Placeholder" />
    </div>
    <div style="margin-top:3rem;max-width:20rem">
      <mdinput type="text" label="Basic example" disabled />
    </div>
    <div style="margin-top:3rem;max-width:20rem">
      <mdinput type="email" label="Your e-mail" />
    </div>
    <div style="margin-top:3rem;max-width:20rem">
      <mdinput type="password" label="Password" />
    </div>
    <div style="margin-top:3rem;max-width:20rem">
      <mdtextarea label="Textarea" />
    </div>
  </section>
</template>

<script>
import MdInput from '../components/MdInput.vue';
import MdTextarea from '../components/MdTextarea.vue';

export default {
  name: 'InputsPage',
  components: {
    'mdinput': MdInput,
    'mdtextarea': MdTextarea
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
