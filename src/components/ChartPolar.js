import { PolarArea } from 'vue-chartjs';
export default {
  extends: PolarArea,
  props: ['data', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.data, this.options);
  }
};
