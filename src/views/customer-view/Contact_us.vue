<template>
  <section id="Contact_cv">
  <div class="container-fluid">
      <div class="row">

      <div class="col-12 main-title"> 
        <h2>Contact US</h2>
      </div>


      <div class="col-12 row contact_cv content_section d-flex">

              <!--Left-->
          <div class="d-flex col-lg-6 col-xl-6 col-12 flex-wrap add_newvehicle addvehicle_detail completed_detail">
            
             <h4>Contact Form</h4>
            <form action="" method="post" id="form-box" class="p-2 vehicle_lsts_sec label-place">
           <div class="f-two d-flex">
          <div class="form-group input-group">
           <label>First Name</label>
            <input type="text" name="name" class="form-control" placeholder="Milton" required>
          </div>
          <div class="form-group input-group">
           <label>Last Name</label>
            <input type="email" name="email" class="form-control" placeholder="Salazar" required>
          </div>
          </div>
          <div class="form-group input-group">
             <label>Email Address</label>
            <input type="text" name="subject" class="form-control" placeholder="milton_sala@gmail.com" required>
          </div>
          <div class="form-group input-group">
              <label>Message</label>
            <textarea name="msg" id="msg" class="form-control text-area-contact" placeholder="Lorem ipsum is a dummuy text of content..." cols="30" rows="4" required></textarea>
          </div>
          <div class="form-group">
            <input type="submit" name="submit" id="submit" class="btn btn-primary btn-cont-sub" value="Submit">
          </div>
        </form>
      
          </div>
          <!--/Left-->

          <!--Right-->
          <div class="d-flex flex-column col-lg-6 col-xl-6 col-12 flex-wrap  add_newvehicle addvehicle_detail completed_detail">
            
           <h4>Contact Us</h4>
            <div class="p-2 vehicle_lsts_sec d-flex flex-column contact-right">
              <span>Address</span>
              <div class="image-text d-flex">
              <img src="../../assets/images/loc.png" alt="no-image"/><p>605 Henry Smith Rd, Odenton, Herkimer NY</p>
            </div>

             <span>Email Address</span>
              <div class="image-text image-text-2 d-flex">
              <img src="../../assets/images/email_icon.png" alt="no-image"/><p>Sampleid@yahoo.com</p>
            </div>

             <span>Phone Number</span>
              <div class="image-text d-flex">
              <img src="../../assets/images/mobile_icon.png" alt="no-image"/><p>6548465498</p>
            </div>
          </div>
      
          </div>
          <!--/Right-->

          <div class="col-12 contact_map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.6787432950446!2d-115.13270608478939!3d36.101318514425664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c50ff1d511e3%3A0x1672bbebe597c4c3!2sPinball+Hall+of+Fame!5e0!3m2!1sen!2sin!4v1545632314889" width="100%" height="460" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>

 </div>
         
      </div>
      </div>

  </section> 
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn } from "mdbvue";
export default {
  name: "Contact_cv",
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

.addvehicle_detail ul li label { color: #666666 !important; font-size: 17px; width: 203px; float: left; max-width: 100%;
 } 
  .addvehicle_detail ul li span {   font-size: 17px;   color: #333;   float: left;   width: 190px;   max-width: 100%;
   font-family: 'Nunito-Bold';   padding-left: 13px; }
  .addvehicle_detail .router-link-active {  font-family: 'Nunito-Bold';  color: #0066d0;  width: 100%;   position: relative; }
  
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
  .f-two .form-group:first-child{ padding-right: 10px}
  .f-two .form-group:last-child{ padding-left: 10px}
  .f-two label{ width: 100%; margin-bottom: .7rem;}
  .text-area-contact{ height:100%;}
  .btn-cont-sub{ background: #0066d0 !important; border-radius: 5px;text-transform: initial;}
  .vehicle_lsts_sec { padding: 40px 30px 30px 30px !important;min-height: 485px;}
  .label-place label{ width: 100%;}
  .content_section h4{ padding-bottom: 14px;}
  .image-text p{ padding-left: 20px; max-width: 80%;color:#929292;}
  .image-text img{ height: 26px;}
  .contact-right span{padding-bottom: 15px;}
  .contact-right span{ padding-top: 20px;}
  .contact-right span:first-child[data-v-6c1cf267] { padding-top: 0px !important;}
  .image-text-2 img{ width:20px; height: 17px;margin-top: 5px;}
  .row.contact_cv{ margin-left: 0px !important; margin-right: 0px !important;}
</style>
