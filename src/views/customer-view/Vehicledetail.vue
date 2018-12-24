<template>
  <section id="Vehicledetail">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>My Vehicles</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-6 d-flex flex-column align-items-start">
              <h4>Vehicles Detail</h4>
            </div>
            <div class="col-6 d-flex flex-column align-items-end">
              <router-link to="/Addnewvehicle"><button class="add_new_vehicle">Edit</button></router-link>
            </div>
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle addvehicle_detail">
            <!--vehicleDetail-->
            <div class="add_vehicle_mg"><img src="../../assets/images/vehicle.jpg" /></div>
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
            <router-link to="/MaintenanceHistory">History of maintenance</router-link>
            <div class="sub_btn back_btn">
              <btn class="cancel_btn">Back</btn>
            </div>
            <!--/vehicleDetail-->
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
    name: 'Vehicledetail',
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
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .addvehicle_detail ul li label {
    color: #656565 !important;
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

  .addvehicle_detail a{font-size:18px;}
  
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
</style>
