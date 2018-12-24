<template>
  <section id="QuoteRequest">
  <div class="container-fluid">
      <div class="row">
      <div class="col-12 main-title">
        <h2>Services</h2>
      </div>
<div class="col-12 content_section">

          <div class="vehicle_tlt ">
          <div class="col-6 d-flex flex-column align-items-start">
          <h4>Quote Request</h4>
          </div>
          </div>

    <div class="d-flex flex-wrap quote_lsts_sec p-4">
          <!--quoteList-->
        <div class="col-sm-12 col-md-12 flex-column">
            <p>Select the Service that you need</p>
        </div>

          <div class="col-sm-12 col-md-3 flex-column">
          <router-link to="/Servicesselectdetail">
            <div class="quote_lst">

                <div class="quote_lst_det">
                       <img src="../../assets/images/quote-img1.png"/>
                      <p class="mt-2">Routine Maintainence</p>
               </div>


            </div>
            </router-link>
          </div>

            <!--quoteList-->

          <!--quoteList-->
           <div class="col-sm-12 col-md-3 flex-column">
            <div class="quote_lst">

                <div class="quote_lst_det">
                       <img src="../../assets/images/quote-img2.png"/>
                       <p class="mt-2">General Mechanics</p>
               </div>


            </div>
          </div>

         <!--quoteList-->


         <!--quoteList-->
          
           <div class="col-sm-12 col-md-3 flex-column">
            <div class="quote_lst">

                <div class="quote_lst_det">
                       <img src="../../assets/images/quote-img3.png"/>
                      <p class="mt-2">Collision and Paint</p>
               </div>


            </div>
          </div>

          <!--quoteList-->

          <!--quoteList-->
          
           <div class="col-sm-12 col-md-3 flex-column">
            <div class="quote_lst">

                <div class="quote_lst_det">
                       <img src="../../assets/images/quote-img4.png"/>
                     <p class="mt-2">Beauty & Enhancements</p>
               </div>


            </div>
          </div>

          <!--quoteList-->


           <!--quoteList-->
          
          <div class="col-sm-12 col-md-3 flex-column">
            <div class="quote_lst">

                <div class="quote_lst_det">
                       <img src="../../assets/images/quote-img5.png"/>
                      <p class="mt-2">Technical Revision</p>
               </div>


            </div>
          </div>

          <!--quoteList-->
             <!--quoteList-->
           <div class="col-sm-12 col-md-3 flex-column">
            <div class="quote_lst">

                <div class="quote_lst_det">
                       <img src="../../assets/images/quote-img6.png"/>
                      <p class="mt-2">Electric Revision</p>
               </div>


            </div>
          </div>

         <!--quoteList-->
            <!--quoteList-->
           <div class="col-sm-12 col-md-3 flex-column">
            <div class="quote_lst">

                <div class="quote_lst_det">
                       <img src="../../assets/images/quote-img7.png"/>
                      <p class="mt-2">Brakes Revision</p>
               </div>


            </div>
          </div>

         <!--quoteList-->
            <!--quoteList-->
           <div class="col-sm-12 col-md-3 flex-column">
            <div class="quote_lst">

                <div class="quote_lst_det">
                       <img src="../../assets/images/quote-img8.png"/>
                     <p class="mt-2">Purchase Revision</p>
               </div>


            </div>
          </div>

         <!--quoteList-->
          <div class="col-12 text-center">
              <router-link to="/"><button class="back-btn"> Back</button></router-link>
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
  name: 'QuoteRequest',
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
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quote_lsts_sec{
    background: #fff;
}
.vehicle_tlt{margin-bottom:30px;}
.vehicle_tlt h4
{
    color:#363a3f;
    font-size:22px;
    font-family: 'Nunito-Bold';
    
}
.quote_lst_det{
    text-align: center; 
}
.quote_lst {
  border: 1px solid #d1d4d7;
  border-radius: 5px;
  margin-bottom: 31px;
  padding: 15px;
}
.back-btn{
    padding: 10px 60px;
    background: #cacaca;
    color: #212121;
    border: none;
    border-radius:4px; 
}

.quote_lst_det p {
  color: #292b30;
}

</style>
