<template>
  <section id="Dashboard_SA">
  </Login>
    <card class="mb-4">
      <card-body class="d-sm-flex justify-content-between">
        <h4 class="mb-sm-0 pt-3">
          <a href="https://mdbootstrap.com/material-design-for-bootstrap/" target="_blank">Superadmin</a><span>/</span><span>Dashboard</span>
        </h4>
        <form class="d-flex md-form justify-content-center">
          <input aria-label="Search" class="form-control" placeholder="Type your query" type="search" />
          <btn color="primary" size="sm" class="my-0" type="submit"><i class="fa fa-search"></i></btn>
        </form>
      </card-body>
    </card>
    <section class="mt-lg-5">
      <row>
        <column xl="3" md="6" class="mb-r">
          <card cascade class="cascading-admin-card">
            <div class="admin-up">
              <fa icon="money" class="primary-color"/>
              <div class="data">
                <p>SALES</p>
                <h4>
                  <strong>$2000</strong>
                </h4>
              </div>
            </div>
            <card-body>
              <div class="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg-primary" role="progressbar"
                  style="width: 25%"></div>
              </div>
              <card-text>Better than last week (25%)</card-text>
            </card-body>
          </card>
        </column>
        <column xl="3" md="6" class="mb-r">
          <card cascade class="cascading-admin-card">
            <div class="admin-up">
              <fa icon="line-chart" class="warning-color"/>
              <div class="data">
                <p>SUBSCRIPTIONS</p>
                <h4>
                  <strong>200</strong>
                </h4>
              </div>
            </div>
            <card-body>
              <div class="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg grey darken-2" role="progressbar"
                  style="width: 25%"></div>
              </div>
              <card-text>Worse than last week (25%)</card-text>
            </card-body>
          </card>
        </column>
        <column xl="3" md="6" class="mb-r">
          <card cascade class="cascading-admin-card">
            <div class="admin-up">
              <fa icon="pie-chart" class="light-blue lighten-1"/>
              <div class="data">
                <p>TRAFFIC</p>
                <h4>
                  <strong>20000</strong>
                </h4>
              </div>
            </div>
            <card-body>
              <div class="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" class="progress-bar grey darken-2" role="progressbar"
                  style="width: 75%"></div>
              </div>
              <card-text>Worse than last week (75%)</card-text>
            </card-body>
          </card>
        </column>
        <column xl="3" md="6" class="mb-r">
          <card cascade class="cascading-admin-card">
            <div class="admin-up">
              <fa icon="bar-chart" class="red accent-2"/>
              <div class="data">
                <p>ORGANIC TRAFFIC</p>
                <h4>
                  <strong>2000</strong>
                </h4>
              </div>
            </div>
            <card-body>
              <div class="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg-primary" role="progressbar"
                  style="width: 25%"></div>
              </div>
              <card-text>Better than last week (25%)</card-text>
            </card-body>
          </card>
        </column>
      </row>
    </section>
    <section>
      <row class="mt-5">
          <column md="9" class="mb-4">
              <card>
                  <card-body>
                      <div style="display: block">
                        <bar-chart :data="barChartData" :options="barChartOptions" :height="500"></bar-chart>
                      </div>
                  </card-body>
              </card>
          </column>
          <column md="3" class="mb-4">
              <card class="mb-4">
                  <card-header class="text-center"> Pie chart </card-header>
                  <card-body>
                      <div style="display: block">
                        <pie-chart :data="pieChartData" :options="pieChartOptions" :height="200"></pie-chart>
                      </div>
                  </card-body>
              </card>
              <card class="mb-4">
                  <card-body>
                      <list-group class="list-group-flush">
                          <list-group-item action waves>Sales
                              <badge color="success-color" pill class="pull-right">22%
                                  <fa icon="arrow-up" class="ml-1"/>
                              </badge>
                          </list-group-item>
                          <list-group-item action waves>Traffic
                              <badge color="danger-color" pill class="pull-right">5%
                                  <fa icon="arrow-down" class="n ml-1"/>
                              </badge>
                          </list-group-item>
                          <list-group-item action waves>Orders
                              <badge color="primary-color" pill class="pull-right">14</badge>
                          </list-group-item>
                          <list-group-item action waves>Issues
                              <badge color="primary-color" pill class="pull-right">123</badge>
                          </list-group-item>
                          <list-group-item action waves>Messages
                              <badge color="primary-color" pill class="pull-right">8</badge>
                          </list-group-item>
                      </list-group>
                  </card-body>
              </card>
          </column>
      </row>
    </section>
    <section>
      <row>
          <column md="6" class="mb-4">
              <card>
                  <card-body>
                      <table class="table table-hover">
                          <thead class="blue-grey lighten-4">
                              <tr>
                                  <th>#</th>
                                  <th>Lorem</th>
                                  <th>Ipsum</th>
                                  <th>Dolor</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <th scope="row">1</th>
                                  <td>Cell 1</td>
                                  <td>Cell 2</td>
                                  <td>Cell 3</td>
                              </tr>
                              <tr>
                                  <th scope="row">2</th>
                                  <td>Cell 4</td>
                                  <td>Cell 5</td>
                                  <td>Cell 6</td>
                              </tr>
                              <tr>
                                  <th scope="row">3</th>
                                  <td>Cell 7</td>
                                  <td>Cell 8</td>
                                  <td>Cell 9</td>
                              </tr>
                          </tbody>
                      </table>
                  </card-body>
              </card>
          </column>
          <column md="6" class="mb-4">
              <card>
                  <card-body>
                      <table class="table table-hover">
                          <thead class="blue lighten-4">
                              <tr>
                                  <th>#</th>
                                  <th>Lorem</th>
                                  <th>Ipsum</th>
                                  <th>Dolor</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <th scope="row">1</th>
                                  <td>Cell 1</td>
                                  <td>Cell 2</td>
                                  <td>Cell 3</td>
                              </tr>
                              <tr>
                                  <th scope="row">2</th>
                                  <td>Cell 4</td>
                                  <td>Cell 5</td>
                                  <td>Cell 6</td>
                              </tr>
                              <tr>
                                  <th scope="row">3</th>
                                  <td>Cell 7</td>
                                  <td>Cell 8</td>
                                  <td>Cell 9</td>
                              </tr>
                          </tbody>
                      </table>
                  </card-body>
              </card>
          </column>
      </row>
    </section>
 
   
  </section>
</template>

<script>

import { Row, Column, Btn, Card, CardBody, CardHeader, CardText, Fa, BarChart, PieChart, LineChart, RadarChart, DoughnutChart, ListGroup, ListGroupItem, Badge, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'mdbvue'
export default {
  name: 'Dashboard_SA',
  components: {
    Row,
    Column,
    Btn,
    Card,
    CardBody,
    CardHeader,
    CardText,
    Fa,
    BarChart,
    PieChart,
    LineChart,
    RadarChart,
    DoughnutChart,
    ListGroup,
    ListGroupItem,
    Badge,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter,
 
  },
  data () {
    return {
      showFrameModalTop: false,
      showFrameModalBottom: false,
      showSideModalTopRight: false,
      showSideModalTopLeft: false,
      showSideModalBottomRight: false,
      showSideModalBottomLeft: false,
      showCentralModalSmall: false,
      showCentralModalMedium: false,
      showCentralModalLarge: false,
      showCentralModalFluid: false,
      showFluidModalRight: false,
      showFluidModalLeft: false,
      showFluidModalTop: false,
      showFluidModalBottom: false,
      barChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: '#1',
            data: [12, 39, 3, 50, 2, 32, 84],
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            borderWidth: 1
          }, {
            label: '#2',
            data: [56, 24, 5, 16, 45, 24, 8],
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            borderWidth: 1
          }, {
            label: '#3',
            data: [12, 25, 54, 3, 15, 44, 3],
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            borderWidth: 1
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            barPercentage: 1,
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },
      pieChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            data: [300, 50, 100, 40, 120, 24, 52],
            backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#ac64ad'],
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#da92db']
          }
        ]
      },
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      lineChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: '#1',
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: '#2',
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            data: [12, 42, 121, 56, 24, 12, 2]
          },
          {
            label: '#3',
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            data: [2, 123, 154, 76, 54, 23, 5]
          }
        ]
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }]
        }
      },
      radarChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: '#1',
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: '#2',
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            data: [12, 42, 121, 56, 24, 12, 2]
          },
          {
            label: '#3',
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            data: [2, 123, 154, 76, 54, 23, 5]
          }
        ]
      },
      radarChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      doughnutChartData: {
        labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
          }
        ]
      },
      doughnutChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cascading-admin-card {
  margin: 20px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fa {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
}
.cascading-admin-card .admin-up .fa {
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 3px;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.admin-up .data p {
  color: #999999;
  font-size: 12px;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}
</style>
