<template>
  <section id="Contactspecialist">
    <div class="container-fluid">
      <div class="row">
      <div class="col-12 main-title">
          <h2>Services</h2> 
      </div>
     <div class="col-12 content_section">
          <div class="vehicle_tlt d-flex flex-row">
            <h4>Services in Progress</h4>
         </div>
          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle service_payment">
  
            <form>
              <ul>
                 <li>
                 <p>Contact the specialist assigned to your service.</p>
                 <p>During non business hours, we will contact you in next business hour</p>
                 <textarea></textarea>
                </li>
              </ul>
            </form>
  
            <div class="sub_btn back_btn">
              <router-link to="/"><button class="detail-btn valid-btn pp_btn">Send Message</button></router-link>
              <btn class="cancel_btn">Back</btn>
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
  
    Card,
  
    CardBody,
  
    ViewWrapper,
  
    MdMask,
  
    CardTitle,
  
    CardText,
  
    CardFooter,
  
    Fa,
  
    Btn,
  
    Pagination,
  
    PageNav,
  
    PageItem
  
  } from 'mdbvue'
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  export default {
  
  
    name: 'Contactspecialist',
  
  
    components: {
  
      Row,
  
      Column,
  
      Card,
  
      CardBody,
  
      ViewWrapper,
  
  
      MdMask,
  
      CardTitle,
  
      CardText,
  
      CardFooter,
  
      Fa,
  
      Btn,
  
      Pagination,
  
      PageNav,
  
      PageItem
  
  
  
    },
  
  
  
  
  
  
  
    data() {
  
  
  
  
  
  
  
      return {
  
  
  
  
  
  
  
        attrs: [{
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
          dates: new Date(2018, 11, 10),
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
          highlight: {
  
  
  
  
  
  
  
            backgroundColor: '#007bff',
  
  
  
  
  
  
  
          },
  
  
  
  
  
  
  
          // Just use a normal style
  
  
  
  
  
  
  
          contentStyle: {
  
  
  
  
  
  
  
            color: '#fafafa',
  
  
  
  
  
  
  
          }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        }, ],
  
  
  
  
  
  
  
      };
  
  
  
  
  
  
  
    },
  
  
  
  
  
  
  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.service_radio_input { border: 1px solid #cbcdce; padding: 46px 35px; }
.service_option {  background: #fff;}
.add_newvehicle form { width: 100%;}
.add_newvehicle form ul li p {font-size: 18px; line-height: 18px;}
.custom-control.custom-radio { margin-bottom: 30px; }
.sub_btn.back_btn {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0px 0 11px;
    width: 100%;}
  .service_payment {margin-top: 30px;}
  .detail-btn.valid-btn.pp_btn { width: auto !important;}
  .add_newvehicle form ul li{max-width:100%; width:55%; margin-right:0px;}
  .add_newvehicle form ul li label{margin-bottom:10px;}
  textarea {background: #f3f6fb none repeat scroll 0 0;border: 1px solid #ced4da;
border-radius: 5px;height: 97px; width: 100%;  padding:10px;}
</style>
