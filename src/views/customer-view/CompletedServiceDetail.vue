<template>
  <section id="CompletedServiceDetail">
  <div class="container-fluid">
      <div class="row">

      <div class="col-12 main-title">
        <h2>Services</h2>
      </div>


      <div class="col-12 content_section">

          <div class="vehicle_tlt d-flex flex-row">
          <div class="col-12 d-flex flex-column align-items-start p-0">
          <h4>Completed Service</h4>
          </div>
          </div>

          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle addvehicle_detail completed_detail">
            <!--vehicleDetail-->
             <div class="completed_service_tlt"><p>Vehicle Information</p></div>
            <form>
              <ul>
                <li><label>Brand</label><span>Renault</span></li>
                <li><label>Model</label><span>KWID</span></li>
                <li><label>Class</label><span>SUV</span></li>
                <li><label>Year</label><span>2018</span></li>
                <li><label>Usage(KM)</label><span>15,000</span></li>
                <li><label>Plate</label><span>CKN 3648</span></li>
                <li><label>Date of the Last Technical Mechanical Revision</label><span>15,000</span></li>
                <li><label>Expiring Date for the SOAT</label><span>15,000</span></li>
                <li><label>Next Suggesed Maintenance</label><span>Change of Timing Belt </span></li>
                <li><label>Taller Online Health Index</label><span>89%  <router-link to="/Healthindex"><strong>view</strong></router-link></span></li>
              </ul>
            </form>
            <router-link to="/MaintenanceHistory" style="font-size:18px;">History of maintenance</router-link>
           
            <!--/vehicleDetail-->
          </div>

          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle">
            <div class="completed_service_tlt"><p>Service Information</p></div>
            <mdb-col col="12" class="p-0">
               <mdb-row class="m-0">
    <mdb-col sm="6" col="12" class="p-0">
       <label class="detail-heading">Workshop Name <span>AB+ Workshop</span></label>
    </mdb-col>
<mdb-col sm="6" col="12" class="p-0">
       <label class="detail-heading">Specialist Name <span>George Cooley</span></label>
    </mdb-col>
     </mdb-row>
   </mdb-col>

   <mdb-col col="12" class="p-0">
               <mdb-row class="m-0">
    <mdb-col sm="6" col="12" class="p-0 padding-rt">
        <div class="detail-desc">
         <p>
           Below the details of the 20,000 KM maintenance performed 
to your <span>Renault Sandero</span> vehicle in <span>April 2016</span>
           </p>
         </div>

         <table class="table table-bordered">
    <thead>
      <tr>
        <th>Service/Spare Part</th>
        <th>Included</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Oil Change</td>
        <td>Yes</td>
      </tr>
      <tr>
         <td>Filter Change</td>
        <td>Yes</td>
      </tr>
      <tr>
         <td>Oil 20W/4.0Shell</td>
        <td>Yes</td>
      </tr>
      <tr>
         <td>25 Control points Check</td>
        <td>Yes</td>
      </tr>
    </tbody>
  </table>
    </mdb-col>
    
<mdb-col sm="6" col="12" class="p-0">
       <mdb-col col="12" class="p-0">
               <mdb-row class="m-0">
    <mdb-col col="12" class="p-0">
       <h3 class="pickup-heading">Pickup Images</h3>
       <ul class="pickup-img">
       <li>
        <img src="../../assets/images/pick-up-im1.png"/>
         </li>
         <li>
       <img src="../../assets/images/pick-up-im2.png"/>
         </li>
         <li class="pickup-img">
        <img src="../../assets/images/pick-up-im3.png"/>
        </li>
        </ul>
    </mdb-col>
<mdb-col col="12" class="p-0">
      <h3 class="pickup-heading">Drop Images</h3>
       <ul class="pickup-img">
       <li>
        <img src="../../assets/images/pick-up-im4.png"/>
         </li>
         <li>
       <img src="../../assets/images/pick-up-im5.png"/>
         </li>
         <li class="pickup-img">
        <img src="../../assets/images/pick-up-im6.png"/>
        </li>
        </ul>
    </mdb-col>
     </mdb-row>
   </mdb-col>  
    </mdb-col>
     </mdb-row>
   </mdb-col>
  


<div col="12" class="p-0">
 <div class="completed_service_tlt"><p>Rate This Service</p></div>
   
     <div class="d-flex flex-row rate_main_sec">
        <div class="d-flex flex-column rate_lst">
          <label>Quality</label>
          <div class="rating"><img src="../../assets/images/star_rating.png"/></div>
        </div>
        <div class="d-flex flex-column rate_lst">
          <label>Attention</label>
          <div class="rating"><img src="../../assets/images/star_rating.png"/></div>
        </div>
         <div class="d-flex flex-column rate_lst">
          <label>Cleaning</label>
          <div class="rating"><img src="../../assets/images/star_rating.png"/></div>
        </div>
     </div>

      <div class="sub_btn back_btn">
              <router-link to="/"><button class="detail-btn valid-btn pp_btn">Rate</button></router-link>
              <button class="cancel_btn">Back</button>
       </div>
  
 </div>
 </div>
         
      </div>
      </div>
  </div>
  </section> 
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn } from "mdbvue";
export default {
  name: "CompletedServiceDetail",
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
.completed_detail{margin-bottom:30px;}
.completed_service_tlt p{ font-size:20px;  font-family: 'Nunito-Bold'; color:#363b3f; margin-bottom:1.4rem; }
table tbody tr:nth-of-type(odd) {
    background-color: #f7f7f7;
}
table tr th
{
  color: #37383e; font-size: 17px;font-family: 'Nunito-Medium';
}
.table-bordered thead td, .table-bordered thead th {
    border-bottom-width: 1px;
}
table tr td
{
color: #37383e; font-size: 17px;font-family: 'Nunito-Regular';
}
table.table th, table.table td {
    padding-top: 7px;
    padding-bottom: 7px;
}
.detail-heading{color: #666666; font-size: 20px;font-family: 'Nunito-Medium';}
.detail-heading span{color:#0066d0;padding-left: 60px;}
.detail-desc p{color: #37383e; font-size: 17px;font-family: 'Nunito-Regular';margin-top: 20px;
    margin-bottom: 30px;}
.detail-desc p span{color:#0066d0;}
.pickup-heading{color: #333333; font-size: 16px;font-family: 'Nunito-Medium';text-align: left;margin-top: 20px;margin-bottom: 0;}
.pickup-img{padding: 0;margin: 0;}
.pickup-img li{position: relative;height: 114px;width: 143px;display: inline-block;margin-right: 20px;margin-top: 20px;list-style:none;}
.pickup-img li img{position: absolute;height: 100%;width: 100%;max-width: 100%;max-width: 100%;}
.pickup-img li:last-child{margin-right: 0;}
.padding-rt{padding-right:25px!important;}

.addvehicle_detail ul li label {
    color: #666666 !important;
    font-size: 17px;
    width: 203px;
    float: left;
    max-width: 100%;
  }
  
  .addvehicle_detail ul li span {
    font-size: 17px;
    color: #333;
    float: left;
    width: 190px;
    max-width: 100%;
    font-family: 'Nunito-Bold';
    padding-left: 13px;
  }
  
  .addvehicle_detail .router-link-active {
    font-family: 'Nunito-Bold';
    color: #0066d0;
    width: 100%;
    position: relative;
  }
  
  .addvehicle_detail strong {
    background: #0066d0 none repeat scroll 0 0;
    border-radius: 5px;
    color: #fff;
    float: right;
    font-size: 15px;
    height: 30px;
    line-height: 26px;
    margin-left: 10px;
    text-align: center;
    width: 80px;
    position: absolute;
  }
  
  .addvehicle_detail {
    position: relative;
  }
  
  .sub_btn.back_btn {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 35px 0 11px;
    width: 100%;
  }
  
  .add_new_vehicle {
    color: #fff;
    font-size: 16px;
    height: 39px;
    line-height: 11px;
    background: #0066d0;
    padding: 0px 20px;
    min-width: 120px;
  }
  
  .add_vehicle_mg {
    display: flex;
    margin-bottom: 20px;
    width: 100%;
  }
  
  .add_vehicle_mg img {
    border: 2px solid #0066d0;
    border-radius: 80px;
    width: 80px;
    height: 80px;
  }
  .sub_btn.back_btn {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0px 0 11px;
    width: 100%;
   
    }

  .pp_btn{width:150px;}
  .rate_main_sec{margin-bottom:30px; width:100%;}
  .rate_lst .rating img{max-width:130px; width:100%;}
  .rate_lst{max-width:100%; margin-right:10px; width:170px;}
  .rate_lst label{color:#0066d0; font-size:18px;}
</style>
