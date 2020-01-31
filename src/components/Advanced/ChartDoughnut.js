import { Doughnut } from 'vue-chartjs';
import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.plugins.unregister(ChartDataLabels);

const DoughnutChart = {
  extends: Doughnut,
  props: {
    data: Object,
    options: Object,
    datalabels: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    if (this.datalabels) {
      this.addPlugin({ ...ChartDataLabels });
    }
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

export default DoughnutChart;
export { DoughnutChart as mdbDoughnutChart };
