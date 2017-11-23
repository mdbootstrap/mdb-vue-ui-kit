<template>
  <section>
    <div style="margin-top:3rem;max-width:20rem">
      <mdinput type="text" label="Basic example" />
    </div>
    <div style="margin-top:3rem;max-width:20rem">
      <mdinput size="sm" type="text" label="Small input" />
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
import MdInput from '@/components/MdInput';
import MdTextarea from '@/components/MdTextarea';

export default {
  name: 'InputsPage',
  methods: {
    focus(element) {
      element.classList.add('active');
    },
    blur(element) {
      element.classList.remove('active');
    },
  },
  created() {
    this.$on('focus', function(callback) {
      this.callback = callback;
      this.focus(this.callback);
    });

    this.$on('blur', function(callback) {
      console.log('blur me');
      this.callback = callback;
      this.blur(this.callback);
    });
  },
  components: {
    'mdinput': MdInput,
    'mdtextarea': MdTextarea
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
