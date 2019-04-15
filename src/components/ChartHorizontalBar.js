import { HorizontalBar } from 'vue-chartjs';
const HorizontalBarChart = {
  extends: HorizontalBar,
  props: ['data', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.data, this.options);
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

export default HorizontalBarChart;
export { HorizontalBarChart as mdbHorizontalBarChart };
