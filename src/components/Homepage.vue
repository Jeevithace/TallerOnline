<template>
<div class="Landing_page">

<div class="header_top_menu">
  <div class="container">
  <div class="col-12 row">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex logo">
      <mdb-navbar-brand href="www.google.com">
        <img src="../assets/images/taller-logo.png" class="animated slideInLeft"/>
      </mdb-navbar-brand>
      </div>
  
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 call-us d-flex flex-row animated slideInRight">
          <div class="mr-2 mt-2  tel-clock"> 
          <img src="../assets/images/telephone.png"/>
          </div>
          <div class="phone"><p class="mb-0 d-flex call">call us now</p><p class="mb-0">+49 123 456 789</p></div>
      </div>
   </div>
   </div>
   </div>
<!--Navbar-->
<div class="header_bottom_menu">
 <div class="container">
<mdb-navbar class="col-12 row">
  <!-- Navbar brand -->

  <mdb-navbar-toggler class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 head_menu">
    <mdb-navbar-nav>
      <mdb-nav-item href="#" class="active">What We Are</mdb-nav-item>
      <mdb-nav-item href="#">Services</mdb-nav-item>
      <mdb-nav-item href="#">Contact Us</mdb-nav-item>
    </mdb-navbar-nav>
  </mdb-navbar-toggler>
    <mdb-navbar-brand  class="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 log_btn">
     <router-link to="Login"><img src="../assets/images/login.png"/>LOGIN</router-link>
     <router-link to="Register"><img src="../assets/images/sign.png"/>SIGN UP</router-link>
  </mdb-navbar-brand>
   
</mdb-navbar>
</div>
</div>


<div class="banner_section">
<div class="container">
  <div class="banner-content">
               <h3 class="animated bounceInUp">WE PROVIDE HIGH PERFORMANCE, TIME AGAIN & AGAIN
               <router-link to="/Dashboard"><button>Get Your Quote Here</button></router-link></h3>
             
   </div>
   </div>
</div>

<div class="footer">
 <div class="container">
    <div class="row">
     <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 copy_rgt">
       <p>© Copyrights 2018 Care your auto. All Rights Reserved</p>
     </div>
     <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 foot_icon">
       <ul>
       <li><a href="www.facebook.com"><img src="../assets/images/fb-icon.png"/></a></li>
       <li><a href="www.twitter.com"><img src="../assets/images/twitter-icon.png"/></a></li>
       <li><a href="www.google.com"><img src="../assets/images/google-icon.png"/></a></li>
       </ul>
     </div>
     </div>
   </div>
</div>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mdbContainer, mdbRow, mdbCol , mdbBtn , mdbNavbar , mdbNavbarToggler , mdbNavbarBrand} from 'mdbvue'
export default {
  name: 'Homepage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbNavbar,
    mdbNavbarToggler,
    mdbNavbarBrand,
  },
 data: function () {
  return {
   
  }
},
  methods: {
    
    },
   
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'Nunito-Regular';
  src: url('../assets/fonts/Nunito-Regular/Nunito-Regular.eot?#iefix') format('embedded-opentype'),  
       url('../assets/fonts/Nunito-Regular/Nunito-Regular.woff') format('woff'), 
       url('../assets/fonts/Nunito-Regular/Nunito-Regular.ttf')  format('truetype'), 
       url('../assets/fonts/Nunito-Regular/Nunito-Regular.svg#Nunito-Regular') format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Nunito-Medium';
  src: url('../assets/fonts/Nunito-Medium/Nunito-Medium.eot?#iefix') format('embedded-opentype'), 
       url('../assets/fonts/Nunito-Medium/Nunito-Medium.woff') format('woff'), 
       url('../assets/fonts/Nunito-Medium/Nunito-Medium.ttf')  format('truetype'),
       url('../assets/fonts/Nunito-Medium/Nunito-Medium.svg#Nunito-Medium') format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Nunito-Bold';
  src: url('../assets/fonts/Nunito-Bold/Nunito-Bold.eot?#iefix') format('embedded-opentype'),
       url('../assets/fonts/Nunito-Bold/Nunito-Bold.woff') format('woff'), 
       url('../assets/fonts/Nunito-Bold/Nunito-Bold.ttf')  format('truetype'), 
       url('../assets/fonts/Nunito-Bold/Nunito-Bold.svg#Nunito-Bold') format('svg');
  font-weight: normal;
  font-style: normal;
} 
.container_fluid{overflow:hidden;}
.container{width:100%; max-width:1335px; margin:0 auto;}
nav.navbar { display: flex;  padding:0px; margin:0px; box-shadow:inherit !important;}
.header_top_menu{width:100%; padding:20px 0px;}
.header_bottom_menu{width:100%; padding:20px 0px; background:#0066d0;}
.header_bottom_menu .head_menu {
  order: inherit;
}
.head_menu mdb-nav-item {color: #fff;font-size: 18px;padding-right: 30px;text-transform: uppercase;cursor:pointer;}
.head_menu mdb-nav-item:last-child{ padding-right:0px;}
.call-us { align-self: center;justify-content: flex-end; align-items:flex-end; float:right;}
.log_btn { display: flex; align-self: flex-end;justify-content: flex-end; align-items:flex-end;}
.log_btn a{
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
border-radius: 5px; /* border radius */
-moz-background-clip: padding;
-webkit-background-clip: padding-box;
background-clip: padding-box; /* prevents bg color from leaking outside the border */
background-color: #05509e; /* layer fill content */
color: #fff;
font-size: 15px;
padding: 9px 19px;
margin-left:15px;
}
.log_btn a img{padding-right:7px;}
.banner_section{background:url('../assets/images/banner.png') no-repeat;min-height:550px;background-size:cover;
display:flex;}
.banner-content {margin:0 auto; align-items: center;align-self: center;display: flex;height: 100%;width: 100%; flex-wrap:wrap; max-width:930px;}
.banner-content h3 {color: #fff; /* text color */font-family: 'Nunito-Bold';
font-size: 50px;text-shadow: -2px 7px 6px rgba(0,0,0,.36); /* drop shadow */  text-align:center;
width:100%;}
.banner-content button {
  background-clip: padding-box;
  background-color: #0065cf;
  border-radius: 10px;
  color: #fff;
  display: flex;
  font-family: "Nunito-Bold";
  font-size: 20px;
  line-height: 42px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 39px;
  padding: 8px 32px;
  cursor:pointer;
   text-transform: uppercase;
}
.footer {
  background: #36383b none repeat scroll 0 0;
  display: flex;
  padding: 10px 0;
}
.footer .copy_rgt p {
  color: #fff;
  font-size: 16px;
  line-height: 48px;
  margin: 0;
  opacity: 0.7;
  padding: 0;
  text-transform: uppercase;
}
.foot_icon {
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
}
.foot_icon ul {
  display: flex;
  list-style-type: none;
}
.foot_icon ul li {
  padding-left: 10px;
}
.foot_icon ul{padding-left:0px;}
@media only screen and (min-width:320px) and (max-width:991px)
{
.header_bottom_menu .head_menu {order: 2 !important;}
.banner-content h3{font-size:33px !important;}
.banner-content button{font-size:18px;}
.footer .copy_rgt p{ font-size: 15px;line-height: 26px; text-align:center;}
.foot_icon{ align-self: center;justify-content: center; margin-top:30px;}
.log_btn a{font-size: 14px;margin-left: 0px !important; padding: 9px 16px; margin-right:10px;}
.log_btn[data-v-e6b76dc4] {
  -moz-box-align: start;
  -moz-box-pack: start;
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  justify-content: flex-start;
}
.head_menu mdb-nav-item{
   width: 100%;
   padding: 7px 0px !important;
   display:flex;
}
.head_menu mdb-navbar-nav {
  border: 0px solid #fff;
  display: flex;
  flex-direction: column;
  margin-top: 13px;
  padding: 11px 20px 11px 0px;
  position: relative;
  width: 100%;
}



}

@media only screen and (min-width:320px) and (max-width:575px)
{
.logo {align-self: center; justify-content: center; margin-bottom:17px;}
.call-us{justify-content: center;}
}

</style>