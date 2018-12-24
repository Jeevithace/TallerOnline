<template>
  <section id="Addnewquote">
  <div class="container-fluid">
      <div class="row">
      <div class="col-12 main-title">
        <h2>Services</h2>
      </div>
      <div class="col-12 content_section">

          <div class="vehicle_tlt d-flex flex-row">
          <div class="col-12 d-flex flex-column align-items-start p-0">
          <h4>Quote Request</h4>
          </div>
          </div>

          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle">
            <h2 class="quote-main-heading">Share with us your basic information</h2>
            <form>
            <ul>
            <li>
            <label for="Brand" class="grey-text font-weight-light">Vehicle Brand</label>
            <div class="sel_fac">
             <select class="form-control">
             <option>Select the brand of your vehicle</option>
            </select>
            </div>
            </li>

            <li>
            <label for="Model" class="grey-text font-weight-light">Vehicle Model</label>
            <div class="sel_fac">
             <select class="form-control">
             <option>Select the Model</option>
            </select>
            </div>
            </li>

            <li>
            <label for="Class" class="grey-text font-weight-light">Vehicle Class</label>
            <div class="sel_fac">
             <select class="form-control">
             <option>Select the Class</option>
            </select>
            </div>
            </li>

            <li>
            <label for="Year" class="grey-text font-weight-light">Year</label>
            <div class="sel_fac">
             <select class="form-control">
             <option>Select the Year</option>
            </select>
            </div>
            </li>

            <li>
            <label for="Usage" class="grey-text font-weight-light">City</label>
            <div class="sel_fac">
             <select class="form-control">
             <option>City where you need the service</option>
            </select>
            </div>
            </li>

           <li>
            <label for="Model" class="grey-text font-weight-light">Zone</label>
            <div class="sel_fac">
             <select class="form-control">
             <option>Select the zone of the city</option>
            </select>
            </div>
            </li>

          

           </ul>
              
              <div class="sub_btn">
                <router-link to="/QuoteRequest"><button class="add_vehicle">Next</button></router-link>
                <router-link to=""><button class="cancel_btn">Reset</button></router-link>
            </div>

            </form>
         </div>
      </div>
      </div>
  </div>
  </section> 
</template>

<script>
import { mdbContainer, mdbRow, mdbCol , mdbBtn } from 'mdbvue'


export default {
  name: 'Addnewquote',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
.add_vehicle_accept {
  display: block;
  margin-bottom: 15px;
}

.add_vehicle_accept input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.add_vehicle_accept label {
  position: relative;
  cursor: pointer;
}

.add_vehicle_accept label:before {
  content:'';
  -webkit-appearance: none;
  background-color: #f3f5fb;
  border: 1px solid #cac8c8;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 10px;
  border-radius:5px;
}

.add_vehicle_accept input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 8px;
  left: 9px;
  width: 6px;
  height: 14px;
  border: solid #0079bf;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.quote-main-heading
{
  font-size: 20px;margin-top: 0;margin-bottom:30px;color:#292b30;font-family: 'Nunito-Medium';
  text-transform: capitalize;
}

</style>
