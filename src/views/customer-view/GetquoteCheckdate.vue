<template>
  <section id="GetQuoteCkeckdate">
  
  
  
  
  
  
  
    <div class="container-fluid">
  
  
  
  
  
  
  
      <div class="row">
  
  
  
  
  
  
  
        <div class="col-12 main-title">
  
  
  
  
  
  
  
          <h2>Services</h2>
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        <div class="col-12 content_section">
  
  
  
  
  
  
  
          <div class="vehicle_tlt d-flex flex-row">
  
  
  
  
  
  
  
            <h4>Get a Quote</h4>
  
  
  
  
  
  
  
          </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
          <div class="d-flex flex-wrap vehicle_lsts_sec service_option">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
            <div class="col-md-12 col-sm-12 col-lg-4 col-xl-4">
  
  
  
  
  
  
  
              <v-calendar :attributes='attrs'>
  
  
  
  
  
  
  
              </v-calendar>
  
  
  
  
  
  
  
            </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
            <div class="col-md-12 col-sm-12 col-lg-8 col-xl-8">
  
  
  
  
  
  
  
              <div class="col-md-12 col-sm-12 col-lg-10 service_radio_input">
  
  
  
  
  
  
  
                <div class="custom-control custom-radio">
  
                  <input type="radio" class="custom-control-input" name="radio1" id="defaultUnchecked1">
  
                  <label class="custom-control-label" for="defaultUnchecked1">I want My vehicle to be picked up</label>
  
                </div>
  
  
  
                <div class="custom-control custom-radio">
  
                  <input type="radio" class="custom-control-input" name="radio1" id="defaultUnchecked2">
  
                  <label class="custom-control-label" for="defaultUnchecked2">I want to take my vehicle to the workshop</label>
  
                </div>
  
  
  
                <div class="custom-control custom-radio">
  
                  <input type="radio" class="custom-control-input" name="radio1" id="defaultUnchecked3">
  
                  <label class="custom-control-label" for="defaultUnchecked3">I want my vehicle to be transported with a crane</label>
  
                </div>
  
  
  
                <div class="col-md-12 mt-5 mb-4">
  
                  <router-link to="/"><button class="detail-btn valid-btn"> Validate Availablity</button></router-link>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
  
  
          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle service_payment">
  
            <form>
  
              <ul>
  
                <li>
  
                  <label for="selected date" class="grey-text font-weight-light">In the selected Date we have the following slots to pick
  
    
  
    up your Vehicle</label>
  
                  <div class="sel_fac">
  
                    <select class="form-control">
  
                        <option>1pm - 3pm</option>
                        <option>4pm - 6pm</option>
  
                     </select>
  
                  </div>
  
                </li>

                 <li>
  
                 <label for="selected date" class="grey-text font-weight-light">Enter the address where to pick up your vehicle</label>
                 <textarea></textarea>
  
                </li>
  
              </ul>
  
            </form>
  
  
  
  
  
            <div class="sub_btn back_btn">
  
              <router-link to="/SchedulePayment"><button class="detail-btn valid-btn pp_btn"> Proceed Payment</button></router-link>
  
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
  
  
    name: 'GetquoteCheckdate',
  
  
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
  .service_radio_input {
  
    border: 1px solid #cbcdce;
  
    padding: 46px 35px;
  
  }
  
  
  
  .service_option {
  
    background: #fff;
  
  }
  
  
  
  .add_newvehicle form {
  
    width: 100%;
  
  }
  
  
  
  .custom-control-label {
  
    font-size: 18px;
  
    line-height: 18px;
  
    padding-left: 16px;
  
  }
  
  
  
  .custom-control.custom-radio {
  
    margin-bottom: 30px;
  
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
  
  
  
  .service_payment {
  
    margin-top: 30px;
  
  }
  
  
  
  .detail-btn.valid-btn.pp_btn {
  
    width: auto !important;
  
  }
  .add_newvehicle form ul li label{margin-bottom:10px;}

  textarea {
  background: #f3f6fb none repeat scroll 0 0;
  border: 1px solid #ced4da;
  border-radius: 5px;
  height: 97px;
  width: 100%;
  padding:10px;
}
</style>
