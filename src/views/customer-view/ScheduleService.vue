<template>
<section id="ScheduleService">
 <div class="container-fluid">
    <div class="row">

      <div class="col-12 main-title">
        <h2>Services</h2>
      </div>

      <div class="col-12 content_section"> 
           
          <div class="vehicle_tlt d-flex flex-row">
              <h4>Schedulded Service</h4>
          </div>
   
      <div class="vehicle_lsts_sec">
       <div class="sucess_msg d-flex flex-column justify-content-center align-items-center">
       
            <div class="head  text-center">
               <img src="../../assets/images/green_tick_icon.png"/>
               <h2>Success!</h2>
               <p class="mb-0">Your payment has been successfully processed</p>
            </div>

            <div class="app_lst">
               
               <div class="schedulded_detail">
                 <ul>
                  <li><label>Schedulded</label> <span>13:26  26,Jan 2016</span></li>
                  <li><label>Status of Service</label> <span>Confirmed</span></li>
                  <li><label>Pickup Type</label> <span>By Driver</span></li>
                  <li><label>Payment Method</label> <span>Paid by Card</span></li>
                 </ul>
                 </div>   
                  
                  
                 <div class="col-md-12 mt-5 text-center">
                  <btn class="reschedule-btn mr-3"  @click.native="showModal_SS = true">Reschedule</btn>
                   <router-link to="/"><btn class="cancel-btn">Cancel</btn></router-link>
                  <container class="mt-5">
                  <modal v-if="showModal_SS" @close="showModal_SS = false" centered class="add_vehicle_popup">
                    <modal-body>
                      <div class="d-flex align-self-center flex-column add_sucess_msg">
                        <img src="../../assets/images/danger_icon.png" class="" />
                        <h5>Are you Sure want to cancel your appointment? </h5>
                      </div>
                    </modal-body>
                    <modal-footer>
                      <btn class="back_btn" >Confirm</btn>
                      <btn class="create_btn" @click.native="showModal_SS = false">Cancel</btn>
                    </modal-footer>
                  </modal>
                </container>
                </div>
                    
                
                
            </div>
            </div>

        </div>
             
        </div>
    </div>
    </div>
 </section>
</template>

<script>
import { Btn,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter,
    Tooltip,
    Popover,
    mdbInput,
    MdTextarea,
    Container,
    Row,
    Column } from 'mdbvue'

export default {
  name: 'ScheduleService',
  components: {
      Btn,
      Modal,
      ModalHeader,
      ModalTitle,
      ModalBody,
      ModalFooter,
      Tooltip,
      Popover,
      mdbInput,
      MdTextarea,
      Container,
      Row,
      Column,
  },
  data() {
      return {
        showModal_SS: false,
      };
  
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sucess_msg {margin: 0 auto; max-width: 630px; width: 100%;}
.sucess_msg .head h2 {color: #333;font-family: nunito-bold;font-size: 24px;margin: 14px 0;}
.sucess_msg .head p {  color: #333; font-size: 24px;margin-bottom: 22px;}
.app_lst .schedulded_detail {background: #f3f6fb none repeat scroll 0 0;padding: 32px 0; width: 100%;}
.schedulded_detail ul { margin: 0 92px; padding: 0;}
.app_lst ul li { display: flex; margin-bottom: 12px;}
.app_lst ul li:last-child{margin-bottom:0px;} 
.app_lst ul li label {color: #333;float: left;font-size: 20px;opacity: 0.7;width: 50%;}
.app_lst ul li span { font-family: nunito-bold; font-size: 20px;}
.content_section button{width:190px; text-transform:capitalize}
.modal-footer button{text-transform: capitalize;}
.reschedule-btn{ background:#f39c12 !important;}
.create_btn{ background:#e74c3c !important; color:#fff !important;}

@media only screen and (min-width:320px) and (max-width:767px){
  .app_lst ul li label {width:100%;}
  .app_lst ul li {display:block;}
  .app_lst ul li span{width:100%;}
}
</style>
