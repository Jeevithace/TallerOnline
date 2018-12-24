<template>
  <section id="ServiceGPS">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>Services</h2>
        </div>
        <div class="col-12 content_section">
          <div class="vehicle_tlt d-flex flex-row">
            <h4>Services in Progress</h4>
          </div>

           <div class="gps_loc">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.722929044356!2d-0.47749438431793323!3d52.139361372120476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877b6d185e8dda3%3A0x3860ed97d5964!2sAge+UK+Bedfordshire!5e0!3m2!1sen!2sin!4v1544711924939" width="100%" height="460" frameborder="0" style="border:0" allowfullscreen></iframe>
           </div>

           <div class="sub_btn back_btn">
              <btn class="cancel_btn">Back</btn>
            </div>


        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {
    Btn,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter,
    Container,
    Row,
    Column
  } from 'mdbvue';
  
  export default {
    name: 'ServiceGPS',
    components: {
      Btn,
      Modal,
      ModalHeader,
      ModalTitle,
      ModalBody,
      ModalFooter,
      Container,
      Row,
      Column,
    },
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sub_btn.back_btn {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 35px 0 11px;
    width: 100%;
  }
  .sub_btn button{background:#0066d0 !important; color:#fff !important; width:160px;}
</style>
