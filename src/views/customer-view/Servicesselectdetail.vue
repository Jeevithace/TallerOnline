<template>
  <section id="Servicesselectdetail">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>MY VEHICLES</h2>
        </div>
        <div class="col-12 content_section">

          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start p-0">
              <h4>Quote Request</h4>
            </div>
          </div>

          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle">
            <mdb-col col="12" class="p-0">
             <h2 class="quote-main-heading">Select the Details of your Service</h2>
            <div class="sel_fac">
             <select class="form-control">
             <option>10,000 KM Revision</option>
            </select>
            </div>
             <div class="detail-desc">
                    <p>
                      The 10,000 KM Revision for your Renault Sandero includes:
                    </p>
                  </div>
            </mdb-col>

            <mdb-col col="12" class="p-0">
              <mdb-row class="m-0">
                <mdb-col sm="6" md="7" col="12" class="p-0 padding-rt">
                 

                  <table class="table table-bordered tablestriped table-width">
                    <thead>
                      <tr>
                        <th>Service/Spare Part</th>
                        <th>Included</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Oil Change</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Filter Change</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Oil 20W/4.0Shell</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>25 Control points Check</td>
                        <td>Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </mdb-col>
                <mdb-col sm="6" md="5" col="12" class="p-0">
                  <mdb-col col="12" class="p-0">
                    <table class="table table-bordered">
                    <!-- <thead>
                      <tr>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead> -->
                    <tbody>
                      <tr>
                        <td>Service Value</td>
                        <td><b>$350,000</b></td>
                      </tr>
                      <tr>
                        <td>Dealer Value</td>
                        <td><b>$550,000</b></td>
                      </tr>
                      <tr>
                        <td>Your Savings</td>
                        <td><b>30%</b></td>
                      </tr>
                     
                    </tbody>
                  </table>
                  </mdb-col>
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col col="12" class="p-0">
               <div class="d-flex mt-3 scheduled_btns">
                 <router-link to="/Getquote"><button class="detail-btn"> Schedule Now!</button></router-link>
                 <router-link to="/"><button class="reschedule-btn">Add to cart</button></router-link>
                 <router-link to="/"><button class="cancel-btn">Add another service </button></router-link>
          </div>
              <div class="col-12 text-center">
                <router-link to="/">
                  <button class="back-btn"> Back</button>
                </router-link>
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
    name: "Servicesselectdetail",
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
  .tablestriped tbody tr:nth-of-type(odd) {
    background-color: #f7f7f7;
  }
  .table b{font-weight: bold;}
.table-width{width: 85%;}
  table tr th {
    color: #37383e;
    font-size: 17px;
    font-family: "Nunito-Medium";
  }
.table-bordered thead td, .table-bordered thead th {
    border-bottom-width: 1px;
}
  table tr td {
    color: #37383e;
    font-size: 17px;
    font-family: "Nunito-Regular";
  }

  table.table th,
  table.table td {
    padding-top: 7px;
    padding-bottom: 7px;
  }

  .detail-heading {
    color: #666666;
    font-size: 20px;
    font-family: "Nunito-Medium";
  }

  .detail-heading span {
    color: #0066d0;
    padding-left: 60px;
  }

  .detail-desc p {
    color: #37383e;
    font-size: 17px;
    font-family: "Nunito-Regular";
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .detail-desc p span {
    color: #0066d0;
  }

  .pickup-heading {
    color: #333333;
    font-size: 16px;
    font-family: "Nunito-Medium";
    text-align: left;
    margin-top: 20px;
    margin-bottom: 0;
  }

  .pickup-img {
    padding: 0;
    margin: 0;
  }

  .pickup-img li {
    position: relative;
    height: 114px;
    width: 143px;
    display: inline-block;
    margin-right: 20px;
    margin-top: 20px;
    list-style: none;
  }

  .pickup-img li img {
    position: absolute;
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-width: 100%;
  }

  .pickup-img li:last-child {
    margin-right: 0;
  }

  .padding-rt {
    padding-right: 25px !important;
  }

  .back-btn {
    padding: 10px 60px;
    background: #cacaca;
    color: #212121;
    border: none;
    border-radius: 4px;
    margin-top: 60px;margin-bottom: 20px;
  }
.quote-main-heading
{
  font-size: 20px;margin-top: 0;margin-bottom:30px;color:#292b30;font-family: 'Nunito-Medium';
  text-transform: capitalize;
}
.sel_fac select{width: 395px;}
.scheduled_btns button {
    width: 210px;
    margin-right: 20px;
}
.reschedule-btn {
    background: #8e44ad;
}
</style>
