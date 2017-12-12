import { Radar } from 'vue-chartjs';
export default {
  extends: Radar,
  props: ['data', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.data, this.options);
  }
};
