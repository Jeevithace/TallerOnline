<template>
    <section id="SchedulePayment">
        <div class="container-fluid">
             <div class="row">
                <div class="col-12 main-title">
                    <h2>Services</h2>
                </div>
                <div class="col-12 content_section">  
                    <div class="vehicle_tlt d-flex flex-row">
                        <div class="col-12 d-flex flex-column align-items-start p-0">
                            <h4>Get a Quote</h4>
                        </div>
                    </div>
  
                    <div class="flex-wrap collision_lsts_sec">

                    <form>
                        <div class="row schepay">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                                <h6>Your Service Amount</h6>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                               <router-link to=""><button class="add_vehicle confirmbt">$350,000</button></router-link>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 d-flex payop">
                                <h6>Payment Option</h6>
                            </div>
                        </div>
    
                        <div class="row payrad">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-12 d-flex">
                                <div>
                                    <input id="radio-1" class="radio-custom" name="radio-group" type="radio">
                                    <label for="radio-1" class="radio-custom-label">Credit Card</label>
                                </div>
                            </div>
    
                            <div class="col-lg-4 col-md-4 col-sm-12 col-12 d-flex">
                                <div>
                                    <input id="radio-2" class="radio-custom" name="radio-group" type="radio">
                                    <label for="radio-2" class="radio-custom-label">Pay when your vehicle is returned</label>
                                </div>
                            </div>
    
                            <div class="col-lg-4 col-md-4 col-sm-12 col-12 d-flex">
                                <div>
                                    <input id="radio-3" class="radio-custom" name="radio-group" type="radio">
                                    <label for="radio-3" class="radio-custom-label">Pay thorough the corporate
                                agreement</label>
                                </div>
                            </div>
    
                        </div>
    
    
    
                        <div class="row">
                            <div class="col-12 d-flex payop">
                                <h6>Card Detail</h6>
                            </div>
                        </div>
    
 
                        <div class="row carddeta">
                            <div class="col-lg-5 col-md-5 col-sm-12 col-12 carnam">
                                <h6>Card Number</h6>
                                <div class="input-group mb-2">
                                    <input type="text" class="form-control py-0 cardstar" id="inlineFormInputGroup" placeholder=" ****  ****  ****">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><img src="../../assets/images/card.png" class="" /></div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="col-lg-2 col-md-2 col-sm-12 col-12">
                                <h6>CVC</h6>
                                <div class="input-group mb-2">
                                    <input type="text" class="form-control py-0 cvvstar" id="inlineFormInputGroup" placeholder=" *** ">
                                </div>
                            </div>
    
                            <div class="col-lg-2 col-md-2 col-sm-12 col-12">
                                <h6>EXP. DATE</h6>
                                <div class="input-group mb-2">
                                    <input type="text" class="form-control py-0" id="inlineFormInputGroup" placeholder="">
                                </div>
    
                            </div>
    
                            <div class="col-lg-5 col-md-5 col-sm-12 col-12 namcard">
                                <h6>NAME ON THE CARD</h6>
                                <div class="input-group mb-2">
                                    <input type="text" class="form-control py-0" id="inlineFormInputGroup" placeholder="">
                                </div>
                            </div>
    
                        </div>
    
                        <mdb-col col="12" class="p-0 twobtt">
                            <div class="sub_btn d-flex justify-content-center">
                                <router-link to="/ServiceConfirm1"><button class="add_vehicle">Confirm Payment</button></router-link>
                                <router-link to=""><button class="cancel_btn">Back</button></router-link>
                            </div>
                        </mdb-col>
                        </form>
                    </div>
                </div>
    
            </div>
    
        </div>
    
    </section>
</template>

<script>
    import {
    
        mdbContainer,
    
        mdbRow,
    
        mdbCol,
    
        mdbBtn
    
    } from "mdbvue";
    
    export default {
    
        name: "SchedulePayment",
    
        components: {
    
            mdbContainer,
    
            mdbRow,
    
            mdbCol,
    
            mdbBtn
    
        }
    
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cardstar::-webkit-input-placeholder {
    
        color: transparent;
    
        text-indent: -9999px;
    
        background: url("../../assets/images/cardstar.png");
    
        background-position: 13px 13px;
    
        background-repeat: no-repeat;
    
    }
    
    
    
    .cardstar::-moz-placeholder {
    
        /* Firefox 19+ */
    
        color: transparent;
    
        text-indent: -9999px;
    
        background: url("../../assets/images/cardstar.png");
    
         background-position: 13px 13px;
    
        background-repeat: no-repeat;
    
    }
    
    
    
    .cardstar:-moz-placeholder { 
        /* Firefox 18- */
        color: transparent;
        text-indent: -9999px;
        background: url("../../assets/images/cardstar.png");
        background-position: 13px 13px;
        background-repeat: no-repeat;
    }
    
    
    
    .cardstar:-ms-input-placeholder {
        /* IE 10- */
        color: transparent;
        text-indent: -9999px;
        background: url("../../assets/images/cardstar.png");
         background-position: 13px 13px;
        background-repeat: no-repeat;
    }
    
    
    
    .cvvstar::-webkit-input-placeholder {
        color: transparent;
        text-indent: -9999px;
        background: url("../../assets/images/cvvstar.png");
        background-position: 13px 13px;
        background-repeat: no-repeat;
    }
    
    
    
    .cvvstar::-moz-placeholder {
        /* Firefox 19+ */
        color: transparent;
        text-indent: -9999px;
        background: url("../../assets/images/cvvstar.png");
         background-position: 13px 13px;
        background-repeat: no-repeat;
    }
    
    
    
    .cvvstar:-moz-placeholder {
        /* Firefox 18- */
        color: transparent;
        text-indent: -9999px;
        background: url("../../assets/images/cvvstar.png");
         background-position: 13px 13px;
        background-repeat: no-repeat;
    
    }
    
    
    
    .cvvstar:-ms-input-placeholder {
    
        /* IE 10- */
        color: transparent;
        text-indent: -9999px;
        background: url("../../assets/images/cvvstar.png");
        background-position: 13px 13px;
        background-repeat: no-repeat;
    
    }
    
    
    
    @media only screen and (max-width: 767px) {
        body .twobtt .justify-content-center { justify-content: none!important;}
        .twobtt .justify-content-center button { width: 143px !important;}
    }
    
    
    
    .namcard {   padding-top: 20px;}
    .form-control:focus {  box-shadow: none!important;  border: 1px solid #ced4da!important;}
    .carddeta .carnam .input-group-text {  background: #f3f6fb!important;  border-left: white!important;
    border-top-right-radius: 7px!important; border-bottom-right-radius: 7px!important;}
    .carddeta h6 {  color: #888888; font-size: 18px; padding-bottom: 10px; }
    .carddeta { margin-top: 20px;}
    .carddeta .form-control {   background: #f3f6fb!important;}
    .carddeta .carnam .form-control {
        border-top-left-radius: 7px!important;
        border-bottom-left-radius: 7px!important;
        background: #f3f6fb!important;
        border-right: #f3f6fb!important;
    }
    .payrad {margin-top: 20px;}
    .checkbox-custom,
    .radio-custom {   opacity: 0; position: absolute;}
    .checkbox-custom,
    .checkbox-custom-label,
    .radio-custom,
    .radio-custom-label { display: inline-block;  vertical-align: middle; cursor: pointer;
        font-size: 19px!important;
        color: #868889!important;}
    .checkbox-custom-label,
    .radio-custom-label {
        position: relative;
        display: inline-flex;
    }
    
    .radio-custom:checked+.radio-custom-label:before {
        border: 2px solid #0066d0!important;
    }
    .checkbox-custom+.checkbox-custom-label:before,
    
    .radio-custom+.radio-custom-label:before {
        content: '';
        background: #fff;
        border: 2px solid #707070;
        display: inline-block;
        vertical-align: middle;
        width: 30px;
        height: 30px;
    
        margin-top: 2px;
    
        margin-right: 10px;
    
        text-align: center;
    
    }
    
    
    
    .checkbox-custom:checked+.checkbox-custom-label:before {
    
        content: "\f00c";
    
        font-family: 'FontAwesome';
    
        background: rebeccapurple;
    
        color: #0066d0;
    
    }
    
    
    
    .radio-custom+.radio-custom-label:before {
    
        border-radius: 50%;
    
    }
    
    
    
    .radio-custom:checked+.radio-custom-label:before {
    
        content: "\f00c";
    
        font-family: 'FontAwesome';
    
        color: #0066d0;
    
    }
    
    
    
    .payop {
    
        margin-top: 40px;
    
    }
    
    
    
    .payop h6 {
    
        font-size: 20px;
    
        color: #333333;
    
    }
    
    
    
    .confirmbt {
    
        font-size: 22px!important;
    
        padding-right: 50px;
    
        padding-left: 50px;
    
    }
    
    
    
    .schepay h6 {
    
        font-size: 20px;
    
        color: #0066d0;
    
        padding-top: 10px;
    
        padding-right: 50px;
    
    }
    
    
    
    
    
    
    
    .sub_btn {
     margin-top: 50px;  margin-bottom: 20px;}
    
    
    
    .sub_btn button,
    
    .sub_btn btn {
    
        width: 200px;
    
    }
</style>
