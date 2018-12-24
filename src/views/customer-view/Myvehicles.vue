<template>
  <section id="myvehicles">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>My Vehicles</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-6 d-flex flex-column align-items-start">
              <h4>Vehicles List</h4>
            </div>
            <div class="col-6 d-flex flex-column align-items-end">
              <router-link to="/Addnewvehicle"><button class="add_new_vehicle">Add New Vehicle</button></router-link>
            </div>
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec">
  
            <!--vehicleList-->
  
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 flex-column">
              <div class="vehicle_lst">
                <router-link to="/Vehicledetail">
                  <div class="vehicle_lst_det d-flex justify-content-between flex-row">
  
                    <div class="vehicle_mg">
                      <img src="../../assets/images/vehicle.jpg" />
                    </div>
                    <div class="vehicle_cont d-flex flex-column align-items-end">
                      <span class="vehicle_name">renault Solution</span>
                      <span class="vehicle_no">BEW 145</span>
                    </div>
  
                  </div>
                </router-link>
                <div class="vehicle_lst_btn d-flex justify-content-between flex-row">
                  <div>
                    <router-link to="/"> <button class="edit-btn">Edit</button></router-link>
                  </div>
                  <div>
                    <router-link to="/"> <button class="del-btn">Delete</button></router-link>
                  </div>
                </div>
  
              </div>
            </div>
  
            <!--vehicleList-->
  
  
            <!--vehicleList-->
  
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 flex-column">
              <div class="vehicle_lst">
                <router-link to="/Vehicledetail">
                  <div class="vehicle_lst_det d-flex justify-content-between flex-row">
  
                    <div class="vehicle_mg">
                      <img src="../../assets/images/vehicle.jpg" />
                    </div>
                    <div class="vehicle_cont d-flex flex-column align-items-end">
                      <span class="vehicle_name">renault Solution</span>
                      <span class="vehicle_no">BEW 145</span>
                    </div>
  
                  </div>
                </router-link>
                <div class="vehicle_lst_btn d-flex justify-content-between flex-row">
                  <div>
                    <router-link to="/"> <button class="edit-btn">Edit</button></router-link>
                  </div>
                  <div>
                    <router-link to="/"> <button class="del-btn">Delete</button></router-link>
                  </div>
                </div>
  
              </div>
            </div>
  
            <!--vehicleList-->
  
  
  
            <!--vehicleList-->
  
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 flex-column">
              <div class="vehicle_lst">
                <router-link to="/Vehicledetail">
                  <div class="vehicle_lst_det d-flex justify-content-between flex-row">
  
                    <div class="vehicle_mg">
                      <img src="../../assets/images/vehicle.jpg" />
                    </div>
                    <div class="vehicle_cont d-flex flex-column align-items-end">
                      <span class="vehicle_name">renault Solution</span>
                      <span class="vehicle_no">BEW 145</span>
                    </div>
  
                  </div>
                </router-link>
                <div class="vehicle_lst_btn d-flex justify-content-between flex-row">
                  <div>
                    <router-link to="/"> <button class="edit-btn">Edit</button></router-link>
                  </div>
                  <div>
                    <router-link to="/"> <button class="del-btn">Delete</button></router-link>
                  </div>
                </div>
  
              </div>
            </div>
  
            <!--vehicleList-->
  
  
  
            <!--vehicleList-->
  
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 flex-column">
              <div class="vehicle_lst">
                <router-link to="/Vehicledetail">
                  <div class="vehicle_lst_det d-flex justify-content-between flex-row">
  
                    <div class="vehicle_mg">
                      <img src="../../assets/images/vehicle.jpg" />
                    </div>
                    <div class="vehicle_cont d-flex flex-column align-items-end">
                      <span class="vehicle_name">renault Solution</span>
                      <span class="vehicle_no">BEW 145</span>
                    </div>
  
                  </div>
                </router-link>
                <div class="vehicle_lst_btn d-flex justify-content-between flex-row">
                  <div>
                    <router-link to="/"> <button class="edit-btn">Edit</button></router-link>
                  </div>
                  <div>
                    <router-link to="/"> <button class="del-btn">Delete</button></router-link>
                  </div>
                </div>
  
              </div>
            </div>
  
            <!--vehicleList-->
  
  
  
            <!--vehicleList-->
  
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 flex-column">
              <div class="vehicle_lst">
                <router-link to="/Vehicledetail">
                  <div class="vehicle_lst_det d-flex justify-content-between flex-row">
  
                    <div class="vehicle_mg">
                      <img src="../../assets/images/vehicle.jpg" />
                    </div>
                    <div class="vehicle_cont d-flex flex-column align-items-end">
                      <span class="vehicle_name">renault Solution</span>
                      <span class="vehicle_no">BEW 145</span>
                    </div>
  
                  </div>
                </router-link>
                <div class="vehicle_lst_btn d-flex justify-content-between flex-row">
                  <div>
                    <router-link to="/"> <button class="edit-btn">Edit</button></router-link>
                  </div>
                  <div>
                    <router-link to="/"> <button class="del-btn">Delete</button></router-link>
                  </div>
                </div>
  
              </div>
            </div>
  
            <!--vehicleList-->
  
  
  
  
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
    name: 'Myvehicles',
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
  .vehicle_lst {
    border: 1px solid #d1d4d7;
    border-radius: 5px;
    margin-bottom: 31px;
    padding: 15px !important;
  }
  
  .vehicle_cont {
    align-self: center;
  }
  
  .vehicle_name {
    color: #0065cf;
    font-size: 17px;
    text-transform: capitalize;
  }
  
  .vehicle_no {
    color: #65696c;
    font-size: 17px;
  }
  
  .vehicle_lst button {
    color: #fff;
    font-size: 16px;
    height: 39px;
    line-height: 11px;
    width: 115px;
  }
  
  .add_new_vehicle {
    color: #fff;
    font-size: 16px;
    height: 39px;
    line-height: 11px;
    background: #0066d0;
    padding: 0px 20px;
  }
  
  .vehicle_lst_btn {
    margin-top: 24px;
    margin-bottom: 5px;
  }
  
  .edit-btn {
    background: #0066d0 none repeat scroll 0 0;
  }
  
  .del-btn {
    background: #e74c3c;
  }
</style>
