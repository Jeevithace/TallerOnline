<template>
<section id="ServiceConfirm1">
 <div class="container-fluid">

    <div class="row">
      <div class="col-12 main-title">
        <h2>Services</h2>
      </div>  

       <div class="col-12 content_section">

          <div class="vehicle_tlt d-flex flex-row">
              <h4>Get a Quote</h4>
          </div>

          <div class="vehicle_lsts_sec">
            <div  class="success_popup d-flex flex-column justify-content-center align-items-center">

                 <div class="head text-center">
                    <img src="../../assets/images/tick_icon.png"/>
                    <p class="mb-0">Your Appointment have been scheduled the value of the
                    service is <span> $350.000</span></p>
                  </div>
                  
                  <div class="app_lst">
                     <div class="row">

                     <div class=" col-md-6 col-sm-12">
                        <div class="app_lst_cont d-flex">
                         <img src="../../assets/images/specialist_icon.png"/>
                         <h5> Assigned Specialist</h5>
                        </div>
                      </div>

                       <div class=" col-md-6 col-sm-12">
                        <div class="app_lst_cont d-flex">
                         <img src="../../assets/images/driver_icon.png"/>
                         <h5> Assigned Driver</h5>
                        </div>
                      </div> 

                       <div class=" col-md-6 col-sm-12">
                        <div class="app_lst_cont d-flex">
                         <img src="../../assets/images/specialist_img.jpg"/>
                         <h4> Hector Vargas</h4>
                        </div>
                      </div> 

                      <div class=" col-md-6 col-sm-12">
                        <div class="app_lst_cont d-flex">
                         <img src="../../assets/images/driver_img.jpg"/>
                         <h4>Alex Torres</h4>
                        </div>
                      </div> 


                     <div class=" col-md-6 col-sm-12">
                        <div class="app_lst_cont d-flex">
                         <img src="../../assets/images/ticket_icon.png" class="float-left"/>
                        
                         <div class="tick_num_lst">
                          <h5>Ticket Number</h5>
                          <h6><span>79,333,457</span> de Bogota</h6>
                         </div>

                        </div>
                      </div> 


                    <div class="col-md-12 text-center d-flex justify-content-center btn_sucess">
                     <router-link to="/ServiceConfirm2"><button class="detail-btn schedule_app">Schedule Another Appointment</button></router-link>
                     <router-link to="/"><button class="confirm-btn">Confirm</button></router-link>
                   </div>

                      

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
import { Row, Column, Card, CardBody, ViewWrapper, MdMask, CardTitle, CardText, CardFooter, Fa, Btn, Pagination, PageNav, PageItem } from 'mdbvue'

export default {
  name: 'ServiceConfirm1',
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
      attrs: [
        {
          key: 'today',
          highlight: {
            backgroundColor: '#ff8080',
          },
          // Just use a normal style
          contentStyle: {
            color: '#fafafa',
          },
          dates: new Date(2018, 0, 1)
        },
      ],
    };
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
