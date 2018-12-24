<template>
  <section id="About_us">
 <div class="container-fluid">
    <div class="row">
      <div class="col-12 main-title">
        <h2>Who we are</h2>
      </div>

        <div class="col-12 content_section">
        
              <div id="about_content" class="d-flex flex-column justify-content-center align-items-center"><!-- flex container -->

                  <div class="row">
                    <div class="col-md-6 col-sm-12 pl-4 pr-4 about_taller">
                        <h4>About Taller online</h4>
                        <p class="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                           when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.</p>

                    </div>
                     <div class="col-md-6 col-sm-12 abt_taller">
                            <img src="../../assets/images/about_img1.jpg"/>
                     </div>
                  </div>


                  <div class="parent">
                   <div class="col-md-6 col-lg-3 child">
                     <img src="../../assets/images/exp_icon.png"/>
                       <p>Years of Experience</p>
                       <span>15</span>
                    </div>
                   <div class="col-md-6 col-lg-3 child">
                     <img src="../../assets/images/specialists_icon.png"/>
                      <p>Specialist</p>
                      <span>50</span>
                    </div>
                   <div class="col-md-6 col-lg-3 child">
                     <img src="../../assets/images/customer_icon.png"/>
                     <p>Satisfied Customer</p>
                     <span>500+</span>
                    </div>
                    <div class="col-md-6 col-lg-3 child">
                     <img src="../../assets/images/service_icon.png"/>
                       <p>Available Service</p>
                       <span>40</span>
                    </div>

                  </div>



                   <div class="choose_list mt-4 row">
                     <div class="col-md-5 col-sm-12 abt_taller">
                            <img src="../../assets/images/about_img2.jpg"/>
                     </div>
                     <div class="col-md-7 col-sm-12">
                       
                       <ul>
                        <h4>Why Choose Us?</h4>
                         <li><p>Lorem Ipsum is simply dummy text</p></li>
                         <li><p>It is a long established fact that a reader</p></li>
                         <li><p>At vero eos et accusamus et iusto odio dignissimos</p></li>
                         <li><p>Sed ut perspiciatis unde omnis</p></li>
                         <li><p>Lorem Ipsum is simply dummy text</p></li>
                       </ul>
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
  name: 'About_us',
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
#about_content{ background: #fff; padding:30px 20px 20px 20px;}
#about_content .abt_taller img{ width: 100%;}
#about_content .parent{text-align: center;padding: 30px 20px;background: #f2f5f7;width: 100%;
margin-top: 30px; display: flex; flex-wrap:wrap;}
#about_content ul li{list-style-type: disc; margin-left: 24px; color:#0c6dd2; font-size: 23px; padding-bottom:2px;}
#about_content ul li p{color:#474747; font-size:18px; padding-left:5px;}
#about_content ul h4{ padding-bottom: 14px; color: #474747; font-size: 26px;}
#about_content .child span{font-size: 28px;}
.choose_list {margin-top: 44px !important;}
.child span{ color: #d29e00;}
.about_taller h4{ color:#474747; font-size:26px; margin-bottom:15px;}
.about_taller p{color: #929292; font-size: 18px; line-height: 33px;}
.child img{margin-bottom:10px;}
.child p{ color: #474747; font-size: 18px; margin-bottom:2px;}
.parent .child {border-right: 1px solid #ccc;}
.parent .child:last-child {border-right:0px;}
.choose_list ul {margin-top: 28px;}

@media only screen and (min-width:320px) and (max-width:991px)
{
  .parent .child{border:0px !important; margin-bottom:20px;}
}
</style>
