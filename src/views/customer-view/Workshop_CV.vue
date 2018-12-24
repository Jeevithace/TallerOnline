<template>
  <section id="Workshop_CV">
    <div class="container-fluid">
      <div class="row">
  
        <div class="col-12 main-title">
          <h2>Our Workshop</h2>
        </div>
  
        <div class="col-12 content_section">
  
          <div class="d-flex flex-wrap vehicle_lsts_sec health_index_sec">
  
            <div class="col-12 p-0">
  
              <div class="main_hsty_tlt">Meet our all workshop</div>
  
  
              <div class="our_wrokshop_list d-flex">
                <ul class="d-flex flex-column">
                  <li class="d-flex flex-row">
                    <img src="../../assets/images/workshop_1.png" alt="workshop_gallary">
                    <div class="our_wrokshop_content d-flex flex-column">
                      <h4>Autobaviera</h4>
                      <p>Edificio Murillo Toro building</p>
                      <p>Cra. 8a entre calles 12 y 13 street + premises</p>
                      <p>BOGOTA 111711</p>
                      <span>Specialist in Chevrolet with more than 25 years of experience in the brand...</span>
  
                    </div>
                  </li>

                   <li class="d-flex flex-row">
                    <img src="../../assets/images/workshop_2.png" alt="workshop_gallary">
                    <div class="our_wrokshop_content d-flex flex-column">
                      <h4>Autobaviera</h4>
                      <p>Edificio Murillo Toro building</p>
                      <p>Cra. 8a entre calles 12 y 13 street + premises</p>
                      <p>BOGOTA 111711</p>
                      <span>Specialist in Chevrolet with more than 25 years of experience in the brand...</span>
  
                    </div>
                  </li>

                   <li class="d-flex flex-row">
                    <img src="../../assets/images/workshop_3.png" alt="workshop_gallary">
                    <div class="our_wrokshop_content d-flex flex-column">
                      <h4>Autobaviera</h4>
                      <p>Edificio Murillo Toro building</p>
                      <p>Cra. 8a entre calles 12 y 13 street + premises</p>
                      <p>BOGOTA 111711</p>
                      <span>Specialist in Chevrolet with more than 25 years of experience in the brand...</span>
  
                    </div>
                  </li>
                </ul>
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
    name: 'Workshop_CV',
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
  .main_hsty_tlt {
    font-size: 17px;
    margin-bottom: 30px;
    color: #36383e;
  }
  .our_wrokshop_list > ul {
    padding-left: 0;
        margin-bottom: 0;
}
  .our_wrokshop_list > ul li{
      margin-bottom: 40px;
}
.our_wrokshop_list > ul li:last-child {
    margin-bottom: 0;
}
.our_wrokshop_list > ul li img {
max-width: 100%;
    width: 400px;
    border-radius: 4px;
    height: 250px;
    object-fit: cover;
}
.our_wrokshop_content {
    padding-left: 35px;
        font-family: 'Nunito-Medium';
}

.our_wrokshop_content h4 {
    color: #0066d0;
    font-size: 22px;
    padding: 15px 0 20px;
    margin: 0;
}
.our_wrokshop_content span {
    font-family: 'Nunito-Regular';
    font-weight: 100;
}
.our_wrokshop_content p {
    color: #363b3f;
    margin: 0;
    font-size: 18px;
    margin-bottom: 8px;
}
@media screen and (max-width: 767px){
  .our_wrokshop_list > ul li {
    flex-direction: column !important;
}
.our_wrokshop_content {
    padding-left: 0 !important;
}
}
@media screen and (min-width: 768px) and (max-width: 1028px){
.our_wrokshop_list > ul li img {
    width: 300px;
    height: 200px;
}
.our_wrokshop_content {padding-left: 15px;}
.our_wrokshop_content h4{padding-top: 0;}
}
</style>
