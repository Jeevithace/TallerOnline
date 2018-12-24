<template>
  <section id="ServiceImages">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>Services</h2>
        </div>
        <div class="col-12 content_section">
       
          <div class="vehicle_tlt d-flex flex-row">
            <h4>Services in Progress</h4>
          </div>
           <div class="vehicle_lsts_sec">
            <div class="services_img_section">
            <p>Images of the 10,000 KM maintainance for your <a>Renualt Sandero</a></p>
            <p>Pick Up</p>
            <div class="d-flex justify-content-between services_img"> 
               <div><img src="../../assets/images/service_images/service_img1.png" class="" /></div>
               <div><img src="../../assets/images/service_images/service_img2.png" class="" /></div>
               <div><img src="../../assets/images/service_images/service_img3.png" class="" /></div>
            </div>
             <p>Workshop Arrival</p>
             <div class="d-flex justify-content-between services_img"> 
               <div><img src="../../assets/images/service_images/service_img4.png" class="" /></div>
               <div><img src="../../assets/images/service_images/service_img5.png" class="" /></div>
               <div><img src="../../assets/images/service_images/service_img6.png" class="" /></div>
            </div>
            </div>
           </div>

          <div class="sub_btn back_btn">
              <router-link to="/"><button class="detail-btn valid-btn pp_btn"> Proceed Payment</button></router-link>
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
  .services_img_section p {color: #292a30;font-size: 18px;}
  .services_img_section p a {color: #0066d0; font-family: nunito-medium;}
  .services_img{margin-bottom:30px;}
  .services_img div {margin: 0 10px;width: 100%;}
  .services_img div img { max-width: 330px;width: 100%;}
</style>
