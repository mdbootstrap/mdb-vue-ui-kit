import { Doughnut } from 'vue-chartjs';
const DoughnutChart = {
  extends: Doughnut,
  props: ['data', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.data, this.options);
  }
};

export default DoughnutChart;
export { DoughnutChart as mdbDoughnutChart };
