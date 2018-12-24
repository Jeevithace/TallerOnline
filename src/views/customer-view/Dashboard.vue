<template>
  <section id="Dashboard">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>DASHBOARD</h2>
        </div>
        <div class="col-12 content_section">
          <h3>Attention</h3>
          <div class="attention_details">
            <p>Your Technical Mechanical revision of your <a href=""> Renault Sandero</a> is about to expire</p>
            <router-link to="/"><button class="schedule-btn"> Schedule Appointment</button></router-link>
          </div>
          <div class="attention_details">
            <p>You have a service scheduled for October 16 of 2018</p>
            <div class="status_service"><label>Status of Service</label><span>CONFIRMED</span></div>
            <div class="d-flex mt-3 scheduled_btns">
              <router-link to="/"><button class="detail-btn"> Details</button></router-link>
              <router-link to="/"><button class="reschedule-btn">Reschedule</button></router-link>
              <router-link to="/"><button class="cancel-btn">Cancel </button></router-link>
            </div>
          </div>
  
          <div class="attention_details">
            <p>The Last Maintenance that you performed was May 15 of 2018 to the vehicle <a href="#"> Renault Megane  II</a> with plates DBZ 362</p>
          </div>
  
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
  import {
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
    ModalFooter
  } from 'mdbvue'
  export default {
    name: 'Dashboard',
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
      ModalFooter
    },
    data() {
      return {
  
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
