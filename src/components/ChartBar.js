import { Bar } from 'vue-chartjs';
const BarChart = {
  extends: Bar,
  props: ['data', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.data, this.options);
  }
};

export default BarChart;
export { BarChart as mdbBarChart };
