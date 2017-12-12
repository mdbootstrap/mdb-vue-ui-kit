<template>
  <div class="container">
    <h3>Line Chart</h3>
    <line-chart :data="lineChartData" :options="lineChartOptions" :width="600" :height="300"></line-chart>
    <hr class="mt-4">
    <h3>Radar Chart</h3>
    <radar-chart :data="radarChartData" :options="radarChartOptions" :width="600" :height="300"></radar-chart>
    <hr class="mt-4">
    <h3>Bar Chart</h3>
    <bar-chart :data="barChartData" :options="barChartOptions" :width="600" :height="300"></bar-chart>
    <hr class="mt-4">
    <h3>Polar Chart</h3>
    <polar-chart :data="polarChartData" :options="polarChartOptions" :width="600" :height="300"></polar-chart>
    <hr class="mt-4">
    <h3>Pie Chart</h3>
    <pie-chart :data="pieChartData" :options="pieChartOptions" :width="600" :height="300"></pie-chart>
    <hr class="mt-4">
    <h3>Doughnut Chart</h3>
    <doughnut-chart :data="pieChartData" :options="pieChartOptions" :width="600" :height="300"></doughnut-chart>
  </div>
</template>

<script>
import LineChart from '@/components/ChartLine';
import RadarChart from '@/components/ChartRadar';
import BarChart from '@/components/ChartBar';
import PolarChart from '@/components/ChartPolar';
import PieChart from '@/components/ChartPie';
import DoughnutChart from '@/components/ChartDoughnut';

export default {
  name: 'ChartPage',
  components: {
    LineChart,
    RadarChart,
    BarChart,
    PolarChart,
    PieChart,
    DoughnutChart
  },
  data() {
    return {
      lineChartData: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      },
      lineChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }],
        }
      },
      radarChartData: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
      radarChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
      },
      barChartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
        }]
      },
      barChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }],
        }
      },
      polarChartData: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: ["rgba(247, 70, 74, 0.3)", "rgba(70, 191, 189, 0.3)", "rgba(253, 180, 92, 0.3)", "rgba(148, 159, 177, 0.3)", "rgba(77, 83, 96, 0.3)"],
            hoverBackgroundColor: ["rgba(247, 70, 74, 0.4)", "rgba(70, 191, 189, 0.4)", "rgba(253, 180, 92, 0.4)", "rgba(148, 159, 177, 0.4)", "rgba(77, 83, 96, 0.4)"],
          }
        ]
      },
      polarChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
      },
      pieChartData: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
          }
        ]
      },
      pieChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
      },
    };
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  padding: 40px 0;
}
</style>
