<template>
    <section id="Requestedforquote">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 main-title">
                    <h2>Services</h2>
                </div>
                <div class="col-12 content_section">
    
                    <div class="vehicle_tlt d-flex flex-row">
                        <div class="col-12 d-flex flex-column align-items-start p-0">
                            <h4>Requested for Quote</h4>
                        </div>
                    </div>
    
                    <div class="d-flex flex-wrap collision_lsts_sec">
                        <mdb-col col="12" class="p-0">
                            <mdb-row class="m-0">
                                <mdb-col col="12" class="p-0">
                                    <mdb-row class="m-0">
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>Service</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <p>Collision and Paint</p>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>Source</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <p>Web</p>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                    </mdb-row>
                                </mdb-col>
                                <mdb-col col="12" class="p-0">
                                    <mdb-row class="m-0">
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>Details</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <p>I need to repair the front door <br> due to a minor collision</p>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>Need to Pickup</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <p>No</p>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
    
                                    </mdb-row>
                                </mdb-col>
                                <mdb-col col="12" class="p-0">
                                    <mdb-row class="m-0">
                                        <mdb-col sm="7" col="12" class="p-0">
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>Uploaded Photos</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <ul class="upload-photo">
                                                        <li>
                                                            <img src="../../assets/images/pick-up-im1.png" />
                                                        </li>
                                                        <li>
                                                            <img src="../../assets/images/pick-up-im2.png" />
                                                        </li>
                                                        <li class="pickup-img">
                                                            <img src="../../assets/images/pick-up-im3.png" />
                                                        </li>
                                                    </ul>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                        <mdb-col sm="6" col="12" class="p-0">
    
                                        </mdb-col>
    
                                    </mdb-row>
                                </mdb-col>
                            </mdb-row>
                        </mdb-col>
                       
                    </div>


                    <div class="d-flex flex-wrap collision_lsts_sec mt-3 pt-0">
                        <mdb-col col="12" class="p-0">
                            <mdb-row class="m-0">
                                <mdb-col col="12" class="p-0">
                                    
                                 <div class="detail-desc">
                                     <h2>Estimated Quote</h2>
                                     <p>
           Your service value amount is <span>$2500</span></p>
           </div>
                                </mdb-col>
                            
                            </mdb-row>
                        </mdb-col>
                        <mdb-col col="12" class="p-0">
                            <div class="sub_btn d-flex justify-content-center">
                                <router-link to=""><button class="add_vehicle">Schedule Now!</button></router-link>
                                <router-link to=""><button class="reschedule-btn">Replay</button></router-link>
                                <router-link to=""><button class="cancel_btn">Back</button></router-link>
                            </div>
                        </mdb-col>
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
        name: "Requestedforquote",
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
    .collision_lsts_sec {
        background: #fff;
        padding: 40px 30px 30px 30px;
    }
    
    .collision-block label {
        color: #666666 !important;
        font-size: 17px;
        font-family: 'Nunito-Medium';
        margin: 0;
    }
    
    .collision-block p {
        color: #37383e !important;
        font-size: 17px;
        font-family: 'Nunito-Bold';
        margin: 0;
    }
    
    .collision-block input,
    .collision-block select {
        background: #f3f6fb;
        color: #36383e;
        font-size: 17px;
    }
    
    .collision-block select {
        width: 232px;
    }
    
    .collision-block textarea {
        background: #f3f6fb none repeat scroll 0 0;
        border: 1px solid #ced4da;
        border-radius: 5px;
        height: 128px;
        width: 265px;
        padding: 10px;
        text-align: left;
        line-height: 25px;
        white-space: normal;
    }
    
    .collision-block .custom-control-label::after,
    .collision-block .custom-control-label::before {
        top: 8px;
    }
    
    .collision-block .custom-control {
        display: inline-block;
        margin-right: 25px;
    }
    
    .collision-block {
        margin: 0;
        margin-bottom: 40px;
    }
    
    .collision-block-ch {
        margin: 0;
        margin-bottom: 60px;
    }
    
    .custom-file {
        width: 272px;
    }
    
    .custom-file-label {
        line-height: 20px;
    }
    
    .custom-file-label::after {
        padding: .375rem 1.75rem;
        line-height: 1.2;
        color: #ffffff;
        background-color: #0066d0;
        border-left: 1px solid #0066d0;
        border-radius: .25rem;
    }
    .detail-desc p {
    color: #37383e;
    font-size: 17px;
    font-family: 'Nunito-Regular';
    margin-top: 0px;
}
 .detail-desc h2{
      font-size: 20px;
    margin-top: 20px;
    margin-bottom:15px;
    color: #292b30;
    font-family: 'Nunito-Medium';
    text-transform: capitalize;
}
.detail-desc p span{
    color: #0066d0;
}
    .upload-photo {
        padding: 0;
        margin: 0;
    }
    
    .upload-photo li {
        position: relative;
        height: 100px;
        width: 100px;
        display: inline-block;
        margin-right: 20px;
        margin-bottom: 10px;
        list-style: none;
    }
    
    .upload-photo li img {
        position: absolute;
        height: 100%;
        width: 100%;
        max-width: 100%;
        max-width: 100%;
    }
    
    .upload-photo li:last-child {
        margin-right: 0;
    }
    
    .sub_btn {
        margin-top: 50px;
        margin-bottom: 20px;
    }
    .sub_btn button, .sub_btn btn{width: 200px;}
</style>
