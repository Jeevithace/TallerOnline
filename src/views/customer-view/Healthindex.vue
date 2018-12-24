<template>
  <section id="Healthindex">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>My Vehicles</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start">
              <h4>Vehicles List</h4>
            </div>
  
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec health_index_sec">
            <div class="row">
              <!--health_index_lst-->
  
              <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 flex-column">
                <div class="health_index_lst d-flex flex-column">
                  <h5 class="percent text-center">TallerOnline Index of Health for your vehicle is <span>89%</span></h5>
                  <img src="../../assets/images/health_index/health_index_mg1.png" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. in reprehenderit in voluptate velit esse cillum </p>
                </div>
              </div>
  
              <!--/health_index_lst-->
  
              <!--health_index_lst-->
  
              <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 flex-column">
                <div class="health_index_lst d-flex flex-column">
                  <h5 class="percent text-center">Index of your Tires <span>75%</span></h5>
                  <img src="../../assets/images/health_index/health_index_mg2.png" />
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
  
              <!--/health_index_lst-->
  
  
              <!--health_index_lst-->
  
              <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 flex-column">
                <div class="health_index_lst d-flex flex-column">
                  <h5 class="percent text-center">Index of your Engine <span>90%</span></h5>
                  <img src="../../assets/images/health_index/health_index_mg3.png" />
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
  
              <!--/health_index_lst-->
  
              <!--health_index_lst-->
  
              <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 flex-column">
                <div class="health_index_lst d-flex flex-column">
                  <h5 class="percent text-center">Index of Body Work <span>95%</span></h5>
                  <img src="../../assets/images/health_index/health_index_mg4.png" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. in reprehenderit in voluptate velit esse cillum </p>
                </div>
              </div>
  
              <!--/health_index_lst-->
  
  
              <!--health_index_lst-->
  
              <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 flex-column">
                <div class="health_index_lst d-flex flex-column">
                  <h5 class="percent text-center">Brake index <span>85%</span></h5>
                  <img src="../../assets/images/health_index/health_index_mg5.png" />
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
  
              <!--/health_index_lst-->
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
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .health_index_sec {
    background: #f2f5f7;
    padding-top: 0px;
  }
  
  .health_index_lst {
    margin-bottom: 31px;
    background: #fff;
    padding: 25px;
  }
  
  .health_index_lst h5 {
    color: #333;
    font-size: 20px;
    min-height: 50px;
    line-height: 30px;
  }
  
  .health_index_lst p {
    color: #333;
    font-size: 17px;
    text-align: justify;
    line-height: 28px;
    min-height: 168px;
  }
  
  .health_index_lst h5 span {
    color: #0066d0;
    font-family: 'Nunito-Medium';
  }
  
  .health_index_lst>img {
    align-self: center;
    margin: 20px 0;
    max-width: 100%;
    width: 163px;
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
