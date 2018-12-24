<template>
    <section id="Collisionandpaint">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 main-title">
                    <h2>Services</h2>
                </div>
                <div class="col-12 content_section">
    
                    <div class="vehicle_tlt d-flex flex-row">
                        <div class="col-12 d-flex flex-column align-items-start p-0">
                            <h4>Quote Request</h4>
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
                                                    <div class="sel_fac">
                                                        <select class="form-control">
                                                                                                                                     <option>Web</option>
                                                                                                                                    </select>
                                                    </div>
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
                                                    <textarea class="form-control" placeholder="I need to repair the front door 
                                                                                                                   due to a minor collision"></textarea>
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                        <mdb-col sm="6" col="12" class="p-0">
                                            <mdb-row class="collision-block collision-block-ch">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>Need to Pickup</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" class="custom-control-input" name="radio1" id="defaultUnchecked1">
                                                        <label class="custom-control-label" for="defaultUnchecked1">Yes</label>
                                                    </div>
    
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" class="custom-control-input" name="radio1" id="defaultUnchecked2">
                                                        <label class="custom-control-label" for="defaultUnchecked2">No</label>
                                                    </div>
    
                                                </mdb-col>
                                            </mdb-row>
                                            <mdb-row class="collision-block">
                                                <mdb-col sm="4" col="12" class="p-0">
                                                    <label>Upload Photo</label>
                                                </mdb-col>
                                                <mdb-col sm="8" col="12" class="p-0">
                                                    <div class="sel_fac">
                                                      <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
                                                    </div>
    
                                                </mdb-col>
                                            </mdb-row>
                                        </mdb-col>
                                    </mdb-row>
                                </mdb-col>
                            </mdb-row>
                        </mdb-col>
                        <mdb-col col="12" class="p-0">
                            <div class="sub_btn d-flex justify-content-center">
                                <router-link to=""><button class="add_vehicle">Submit</button></router-link>
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
        name: "Collisionandpaint",
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
    .custom-file{width: 272px;}
    .custom-file-label{line-height: 20px;}
    .custom-file-label::after{padding: .375rem 1.75rem;
    line-height: 1.2;
    color: #ffffff;
    background-color: #0066d0;
    border-left: 1px solid #0066d0;
    border-radius: .25rem;}
    .sub_btn {
        margin-top: 50px;
        margin-bottom: 20px;
    }
</style>
