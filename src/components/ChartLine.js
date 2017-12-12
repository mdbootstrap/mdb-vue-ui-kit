import { Line } from 'vue-chartjs';
export default {
  extends: Line,
  props: ['data', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.data, this.options);
  }
};
