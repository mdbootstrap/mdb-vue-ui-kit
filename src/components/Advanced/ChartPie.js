import { Pie } from 'vue-chartjs';
const PieChart = {
  extends: Pie,
  props: ['data', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    if (this.data && this.options) {
      this.renderChart(this.data, this.options);
    }
  },
  watch: {
    data(newData) {
      this.renderChart(newData, this.options);
    },
    options(newOptions) {
      this.renderChart(this.data, newOptions);
    }
  }
};

export default PieChart;
export { PieChart as mdbPieChart };
