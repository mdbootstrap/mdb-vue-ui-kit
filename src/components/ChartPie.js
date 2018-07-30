import { Pie } from 'vue-chartjs';
const PieChart = {
  extends: Pie,
  props: ['data', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.data, this.options);
  }
};

export default PieChart;
export { PieChart as mdbPieChart };
