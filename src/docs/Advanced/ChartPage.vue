<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Charts</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/charts/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <div class="container">
      <h3>Line Chart</h3>
      <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :width="600" :height="300"/>
      <hr class="mt-5">
      <h3>Radar Chart</h3>
      <mdb-radar-chart :data="radarChartData" :options="radarChartOptions" :width="600" :height="300"/>
      <hr class="mt-5">
      <h3>Bar Chart</h3>
      <mdb-bar-chart :data="barChartData" :options="barChartOptions" :width="600" :height="300"/>
      <hr class="mt-5">
      <h3>Polar Chart</h3>
      <mdb-polar-chart :data="polarChartData" :options="polarChartOptions" :width="600" :height="300"/>
      <hr class="mt-5">
      <h3>Bubble Chart</h3>
      <mdb-bubble-chart :data="bubbleChartData" :options="bubbleChartOptions" :width="600" :height="300"/>
      <hr class="mt-5">
      <h3>Scatter Chart</h3>
      <mdb-scatter-chart :data="scatterChartData" :options="scatterChartOptions" :width="600" :height="300"/>
      <hr class="mt-5">
      <h3>Horizontal Bar Chart</h3>
      <mdb-horizontal-bar-chart :data="horizontalBarChartData" :options="horizontalBarChartOptions" :width="600" :height="300"/>
      <hr class="mt-5">
      <h3>Pie Chart</h3>
      <mdb-pie-chart :data="pieChartData" :options="pieChartOptions" :width="600" :height="300"/>
      <hr class="mt-5">
      <h3>Doughnut Chart</h3>
      <mdb-doughnut-chart :data="pieChartData" :options="pieChartOptions" :width="600" :height="300"/>
    </div>
  </mdb-container>
</template>

<script>
import { mdbLineChart, mdbRadarChart, mdbBarChart, mdbPolarChart, mdbPieChart, mdbDoughnutChart, mdbContainer, mdbRow, mdbIcon, mdbScatterChart, mdbBubbleChart, mdbHorizontalBarChart } from 'mdbvue';

export default {
  name: 'ChartPage',
  components: {
    mdbLineChart,
    mdbRadarChart,
    mdbBarChart,
    mdbPolarChart,
    mdbPieChart,
    mdbDoughnutChart,
    mdbScatterChart,
    mdbBubbleChart,
    mdbRow,
    mdbContainer,
    mdbIcon,
    mdbHorizontalBarChart
  },
  data() {
    return {
      interval: null,
      lineChartData: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            backgroundColor: "rgba(151,187,205,0.2)",
            borderColor: "rgba(151,187,205,1)",
            borderWidth: 0.8,
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
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 0.7,
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
      scatterChartData: {
        datasets: [
          {
            label: 'V(node2)',
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data: [{
              x: 1,
              y: -1.711e-2,
            }, {
              x: 1.26,
              y: -2.708e-2,
            }, {
              x: 1.58,
              y: -4.285e-2,
            }, {
              x: 2.0,
              y: -6.772e-2,
            }, {
              x: 2.51,
              y: -1.068e-1,
            }, {
              x: 3.16,
              y: -1.681e-1,
            }, {
              x: 3.98,
              y: -2.635e-1,
            }, {
              x: 5.01,
              y: -4.106e-1,
            }, {
              x: 6.31,
              y: -6.339e-1,
            }, {
              x: 7.94,
              y: -9.659e-1,
            }, {
              x: 10.00,
              y: -1.445,
            }, {
              x: 12.6,
              y: -2.110,
            }, {
              x: 15.8,
              y: -2.992,
            }, {
              x: 20.0,
              y: -4.102,
            }, {
              x: 25.1,
              y: -5.429,
            }, {
              x: 31.6,
              y: -6.944,
            }, {
              x: 39.8,
              y: -8.607,
            }, {
              x: 50.1,
              y: -1.038e1,
            }, {
              x: 63.1,
              y: -1.223e1,
            }, {
              x: 79.4,
              y: -1.413e1,
            }, {
              x: 100.00,
              y: -1.607e1,
            }, {
              x: 126,
              y: -1.803e1,
            }, {
              x: 158,
              y: -2e1,
            }, {
              x: 200,
              y: -2.199e1,
            }, {
              x: 251,
              y: -2.398e1,
            }, {
              x: 316,
              y: -2.597e1,
            }, {
              x: 398,
              y: -2.797e1,
            }, {
              x: 501,
              y: -2.996e1,
            }, {
              x: 631,
              y: -3.196e1,
            }, {
              x: 794,
              y: -3.396e1,
            }, {
              x: 1000,
              y: -3.596e1,
            }
            ]
          }
        ]
      },
      scatterChartOptions: {
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
      bubbleChartData: {
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data: [{
              x: 5,
              y: 7,
              r: 7
            }]
          },
          {
            label: "My Second dataset",
            backgroundColor: "rgba(151,187,205,0.2)",
            borderColor: "rgba(151,187,205,1)",
            borderWidth: 0.8,
            data: [{
              x: 15,
              y: 2,
              r: 6
            }]
          },
          {
            label: "My Thrid dataset",
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 0.8,
            data: [{
              x: 10,
              y: 4,
              r: 14
            }]
          }
        ]
      },
      bubbleChartOptions: {
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
      horizontalBarChartData: {
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
      horizontalBarChartOptions: {
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
    };
  },
  methods: {
    randomize(arr) {
      return arr.map(value => Math.floor(Math.random()*30));
    },
    changeData(){
      let lineData = {...this.lineChartData};
      lineData.datasets.forEach(dataset => {
        dataset.data = this.randomize(dataset.data);
      });
      this.lineChartData = lineData;
    },
  },
  mounted(){
    this.interval = setInterval(this.changeData, 2000);
  },
  beforeDestroy(){
    window.clearInterval(this.interval);
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  padding: 40px 0;
}
</style>
