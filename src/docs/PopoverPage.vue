<template>
  <container>
    <row class="mt-5">
      <column col="4"></column>
      <column col="4">
        <br>
        <br>
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
import Popover from "@/components/Popover";
import Row from "@/components/Row";
import Column from "@/components/Col";
import Btn from '@/components/Button';
import Container from '@/components/Container';

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
