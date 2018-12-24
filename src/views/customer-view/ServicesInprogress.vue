<template>
  <section id="ServicesInprogress">
  <div class="container-fluid">
      <div class="row">
      <div class="col-12 main-title">
        <h2>Services</h2>
      </div>
      <div class="col-12 content_section">

          <div class="vehicle_tlt d-flex flex-row">
          <div class="col-12 d-flex flex-column align-items-start p-0">
          <h4>Services in Progress</h4>
          </div>
          </div>

          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle">
            <mdb-col col="12" class="p-0">
               <mdb-row class="m-0">
                <mdb-col sm="12" col="12" class="p-0">
                  <ul class="service_inprogress_lst">
                  <li><p>Service of Technical Mechanical Revision scheduled for <a>Renualt Sandero Plate BWE 145</a></p></li>
                  <li><label>Workshop Name</label><span>A+ Auto Care</span></li>
                  <li><label>Service Type</label><span>Routine Maintainance</span></li>
                  <li><label>Last Status</label><span>Vehicle in the Workshop</span>
                     <div class="serv_prog_btn">
                      <router-link to="/ServiceGPS"><button><img src="../../assets/images/see_gps.png"/></button></router-link>
                      <router-link to="/ServiceImages"><button><img src="../../assets/images/see_images.png"/></button></router-link>
                     </div>
                  </li>
                  <li><label>Observations</label><span>The Vehicle is under maintainance No Changes</span></li>
                  <li><label>Estimation Delivery Schedule</label><span>On Time October 16, 2018</span></li>
                  </ul>
                   <div class="col-md-12 make_payment p-0">
                   <router-link to="/">Make Payment</router-link>
                   </div>
                   <div class="col-md-12 mt-5 text-center sub_btn back_btn">
                    <router-link to="/Contactspecialist"><button class="detail-btn proceed-btn mr-3">Contact Specialist</button></router-link>
                    <router-link to="/"><button class="cancel_btn">Back</button></router-link>
                  </div>
                  </mdb-col>
              </mdb-row>
           </mdb-col>
         </div>

      </div>
      </div>
  </div>
  </section> 
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn } from "mdbvue";
export default {
  name: "ServicesInprogress",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.service_inprogress_lst{padding-left:0px; margin-bottom:20px;}
.service_inprogress_lst li label{color: #666666; font-size: 20px;font-family: 'Nunito-Medium'; max-width:200px; width:100%;}
.service_inprogress_lst li span{color:#333333;padding-left: 30px; font-size: 20px;font-family: 'Nunito-Medium';}
.service_inprogress_lst li {padding-bottom:20px;}
.service_inprogress_lst li:last-child{padding-bottom:0px;}
.service_inprogress_lst p { color: #292a30;font-size: 20px;}
.service_inprogress_lst p a { color: #0066d0; font-family: nunito-medium;}
.proceed-btn{width:auto !important;}
.serv_prog_btn button{ background:transparent; padding:0px;}
.serv_prog_btn {margin-left: 233px;  margin-top: 10px;}
.serv_prog_btn a { margin-right: 9px;}
.make_payment a{font-size: 20px;font-family: 'Nunito-Medium'; color:#0065cf; }
.sub_btn.back_btn {align-items: center; align-self: center; display: flex; flex-direction: row;justify-content: center; margin: 35px 0 11px; width: 100%; }
</style>
