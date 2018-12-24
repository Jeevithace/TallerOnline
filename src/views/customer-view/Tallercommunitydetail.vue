<template>
  <section id="Tallercommunitydetail">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>Taller Online Community</h2>
        </div>
        <div class="col-12 content_section">
  
  
          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle">
            <mdb-col col="12" class="p-0">
              <h2 class="quote-main-heading">Search in pour knowledge base</h2>
              <div class="sel_fac">
                <div class=" d-flex flex-row">
                  <input class="form-control" type="text" placeholder="How could I know, If i need to change my tyre?">
                  <button class="community-btn">Search</button>
                </div>
              </div>
            </mdb-col>
            <mdb-col col="12" class="p-0">
              <h3 class="quote-sub-heading">How could I know, If i need to change my tyre? </h3>
              <ul class="community-list-block">
                <li>
                  <h3>Best Answer:</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p>
                  <h4>Answered by: <span>Willam James</span></h4>
                  <label> 22/12/2018</label>
                </li>
                 <li>
                    <h3>Answer:</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p>
                  <h4>Answered by: <span>David Miller</span></h4>
                  <label> 23/12/2018</label>
                </li>
                 <li>
                    <h3>Answer:</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p>
                  <h4>Answered by: <span>Steve Carell</span></h4>
                  <label> 24/12/2018</label>
                </li>
              </ul>
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
    name: "Tallercommunitydetail",
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
  .sel_fac input {
    background: #f3f6fb;
    color: #36383e;
    font-size: 17px;
    width: 470px;
    ;
  }
  
  .quote-main-heading {
    font-size: 20px;
    margin-top: 0;
    margin-bottom:25px;
    color: #292b30;
    font-family: 'Nunito-Medium';
    text-transform: capitalize;
  }
   .quote-sub-heading {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 25px;
    color: #292b30;
    font-family: 'Nunito-Medium';
    text-transform: capitalize;
  }
  .community-list-block{padding: 0;}
  .community-list-block li{    list-style: none;
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: 35px;
    margin-bottom: 30px;}
    .community-list-block li:last-child{margin-bottom: 0;border-bottom: 0;padding-bottom: 0px;}
  .community-list-block h3
  {
  font-size: 20px;
    margin-top: 0;
    margin-bottom: 15px;
    color: #333333;
    font-family: 'Nunito-Medium';
    text-transform: capitalize;text-align: left;width:100%;display:block;
  }
   .community-list-block h4
  {
   font-size:18px;
    margin-top:15px;
    margin-bottom: 0px;
    color: #626262;
    font-family: 'Nunito-Regular';
    text-transform: capitalize;text-align: left;width:74%;display:inline-block;vertical-align: top;
  }
    .community-list-block h4 span{color: #0066d0;}
   .community-list-block label
  {
      font-size:18px;
    margin-top:15px;
    margin-bottom: 0px;
    color: #626262;
    font-family: 'Nunito-Regular';
    text-transform: capitalize;text-align: right;width: 25%;display:inline-block;vertical-align: top;
  }
   .community-list-block p
  {
      font-size: 18px;
    margin-top: 0;
    margin-bottom: 0px;
    color: #626262;
    font-family: 'Nunito-Medium';line-height: 35px;
    text-transform: capitalize;text-align: left;width: 100%;display: block;
  }
  .community-btn {
    width: 130px;
    background: #0066d0;
    margin-left: 20px;
    height: 42px;
    padding: 0;
  }
</style>
