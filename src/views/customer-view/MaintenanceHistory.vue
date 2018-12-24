<template>
  <section id="MaintenanceHistory">
    <div class="container-fluid">
      <div class="row">
  
        <div class="col-12 main-title">
          <h2>My Vehicles</h2>
        </div>
  
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start">
              <h4>Maintainence History</h4>
            </div>
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec health_index_sec">
  
            <div class="col-12 p-0">
  
              <div class="main_hsty_tlt">Below you wil find the latest maintenance performed to your vehicles by Taller Online:</div>
  
              <div class="main_histry_lst d-flex justify-content-between">
                <div class="lft_mh">20,000 KM Maintainence - April 2016</div>
                <div class="rgt_mh">
                  <router-link to="/Maintenancehistorydetail">view</router-link>
                </div>
              </div>
  
              <div class="main_histry_lst d-flex justify-content-between">
                <div class="lft_mh">20,000 KM Maintainence - April 2016</div>
                <div class="rgt_mh">
                  <router-link to="/Maintenancehistorydetail">view</router-link>
                </div>
              </div>
  
  
              <div class="main_histry_lst d-flex justify-content-between">
                <div class="lft_mh">20,000 KM Maintainence - April 2016</div>
                <div class="rgt_mh">
                  <router-link to="/Maintenancehistorydetail">view</router-link>
                </div>
              </div>
  
              <div class="main_histry_lst d-flex justify-content-between">
                <div class="lft_mh">20,000 KM Maintainence - April 2016</div>
                <div class="rgt_mh">
                  <router-link to="/Maintenancehistorydetail">view</router-link>
                </div>
              </div>
  
            </div>
  
  
            <div class="sub_btn back_btn">
              <btn class="cancel_btn">Back</btn>
            </div>
  
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
    name: 'Healthindex',
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
        
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .health_index_sec {
    background: #fff;
  }
  
  .main_hsty_tlt {
    font-size: 17px;
    margin-bottom: 30px;
    color: #36383e;
  }
  
  .main_histry_lst {
    margin-bottom: 15px;
    background: #f2f5f7;
    padding: 13px 20px;
  }
  
  .main_histry_lst .lft_mh {
    color: #36383e;
    font-size: 18px;
  }
  
  .main_histry_lst .rgt_mh {
    background: #2ecc71 none repeat scroll 0 0;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    height: 31px;
    width: 90px;
    text-align: center;
    max-width: 100%;
  }
  
  .main_histry_lst .rgt_mh a {
    color: #fff;
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
</style>
