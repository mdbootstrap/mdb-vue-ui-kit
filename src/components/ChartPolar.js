import { PolarArea } from 'vue-chartjs';
const PolarChart = {
  extends: PolarArea,
  props: ['data', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.data, this.options);
  }
};

export default PolarChart;
export { PolarChart as mdbPolarChart };
