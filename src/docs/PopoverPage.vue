<template>
  <container>
    <row class="mt-5">
      <column col="4"></column>
      <column col="4" class="mt-5 pt-5">
        <popover trigger="click" :options="{placement: 'top'}" class="mt-5">
          <div class="popover">
            <div class="popover-header">
              Yup.
            </div>
            <div class="popover-body">
              It's over.
            </div>
          </div>
          <btn slot="reference" color="default">
            Pop pop
          </btn>
        </popover>
      </column>
    </row>
  </container>
</template>


<script>
import { Popover, Row, Column, Btn, Container } from 'mdbvue';

export default {
  name: 'PopoverPage',
  data() {
    return {zzz: false};
  },
  components: {
    Popover,
    Row,
    Column,
    Btn,
    Container
  },
};
</script>

<style>

</style>
