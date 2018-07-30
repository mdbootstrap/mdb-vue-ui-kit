import { Line } from 'vue-chartjs';
const LineChart = {
  extends: Line,
  props: ['data', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.data, this.options);
  }
};

export default LineChart;
export { LineChart as mdbLineChart };
