<template>
  <section id="Cart">

    <div class="container-fluid">

      <div class="row">

        <div class="col-12 main-title">

          <h2>CART</h2>

        </div>

        <div class="col-12 content_section">

          <div class="vehicle_tlt d-flex flex-row">

            <h4>Cart List</h4>

          </div>

 
<div class="container container_board">
	<table id="cart" class="table table-hover table-condensed">
    				<thead>
						<tr>
							<th style="width:25%">Service Type</th>
							<th style="width:35%">Description</th>
							<th style="width:20%">Price</th>
							<th style="width:20%">Remove</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td data-th="Product"> <img src="../../assets/images/quote-img1.png" class="cent_img"/><p class="bold_para">Routine Maintainence</p></td>
							<td data-th="Price" class="second_dt"><p>It is a long established fact that a reader will be distracted by the readable content</p></td>
							<td data-th="Subtotal" class="bold_txt">$169.00</td>
							<td class="actions"><button class="btn  btn-sm"><a href="#" class="remove">x</a></button></td>
						</tr>
            <tr class="bord_bm">
            	<td data-th="Product"><img src="../../assets/images/quote-img2.png" class="cent_img"/><p class="bold_para">General Mechanics</p></td>
							<td data-th="Price" class="second_dt"><p>It is a long established fact that a reader will be distracted by the readable content</p></td>
							<td data-th="Subtotal" class="bold_txt">$225.00</td>
							<td class="actions"><button class="btn   btn-sm"><a href="#" class="remove">x</a></button></td>
						</tr>
					</tbody>
				<tfoot>
				
			 	<tr>
							<td></td>
							<td></td>
							<td class="total_balance br-lt"> Total  </td>
							<td class="total_balance br-rt"> $ 394.00  </td>
						</tr> 
					</tfoot>
				</table>

        <div class="sub_btn back_btn">
  
              <router-link to="/"><button class="detail-btn valid-btn pp_btn"> Schedule Now</button></router-link>
  
              <btn class="cancel_btn back_mainsc">Back to Main Screen</btn>
  
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
  
  
    name: 'Cart',
  
  
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
        attrs: [{
          dates: new Date(2018, 11, 10),
          highlight: {
            backgroundColor: '#007bff',
          },
          // Just use a normal style
          contentStyle: {
            color: '#fafafa',
          }

        }, ],

      };

    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>





  .service_radio_input {
  
    border: 1px solid #cbcdce;
  
    padding: 46px 35px;
  
  }
  
  
  
  .service_option {
  
    background: #fff;
  
  }
  
  
  
  .add_newvehicle form {
  
    width: 100%;
  
  }
  
  
  
  .custom-control-label {
  
    font-size: 18px;
  
    line-height: 18px;
  
    padding-left: 16px;
  
  }
  
  
  
  .custom-control.custom-radio {
  
    margin-bottom: 30px;
  
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
  
  
  
  .service_payment {
  
    margin-top: 30px;
  
  }
  
  
  
  .detail-btn.valid-btn.pp_btn {
  
    width: auto !important;
  
  }
  .add_newvehicle form ul li label{margin-bottom:10px;}

  textarea {
  background: #f3f6fb none repeat scroll 0 0;
  border: 1px solid #ced4da;
  border-radius: 5px;
  height: 97px;
  width: 100%;
  padding:10px;
}


 


/*aasif*/

 .container.container_board  button.cancel_btn.back_mainsc.btn.btn-default.ripple-parent {
    width: auto!important;
        font-weight: 500;
}
.container.container_board table.table-condensed  th {
    font-size: 18px;
    color: #363a3f;
    font-weight: 600;
}
.container.container_board table.table-condensed tr td img.cent_img {
    margin-left: 24px;
}
 
.container.container_board table.table-condensed  th, table.table td {
    padding-top: 1.1rem;
    padding-bottom: 1rem;
}
.container.container_board table.table-condensed  td, .container.container_board table.table-condensed  th {
    padding: .75rem;
    vertical-align: top;
   border-top: 0;
}
.container.container_board table.table-condensed  a {
    margin: 0;
    color: #ffffff;
}
.container.container_board table.table-condensed  button.btn.btn-sm {
    border-radius: 50%;
      padding: 3px 14px 7px 14px;
    font-size: 18px;
    box-shadow: none;
}
.container.container_board table.table-condensed  tbody tr:hover {
    -webkit-transition: 0.5s;
    transition: 0.5s;
    background-color: transparent;
}
.container.container_board table.table-condensed td.total_balance a {
    color: #212529!important;
}
.container.container_board {
    background: #ffffff;
        
}
.container.container_board table.table-condensed td.second_dt p{
    font-size: 14px;
        text-align: justify;
    padding-right: 100px;
}
.container.container_board table.table-condensed td.bold_txt {
    font-weight: 600;
    font-size: 18px;
}

.container.container_board table.table-condensed  p.bold_para {
    min-width: 143px;
    font-size: 14px;
    font-weight: 600;
}

.container.container_board  .sub_btn.back_btn {
    padding-bottom: 35px;
}
.container.container_board table.table-condensed tr.bord_bm {
    border-bottom: 1px solid #ccc;
}
.container.container_board table.table-condensed td.total_balance {
    font-size: 16px;
    font-weight: 600;
}
.container.container_board td.total_balance.br-lt {
    background: #f2f5f7;
    border-radius: 4px 0 0 4px;
}
.container.container_board td.total_balance.br-rt {
    background: #f2f5f7;
    border-radius: 0 4px 4px 0;
}



@media only screen and (min-width:320px) and (max-width:467px)
{
 .container.container_board   button.cancel_btn.back_mainsc.btn.btn-default.ripple-parent {
    font-size: 12px!important;
}
}
@media screen and (max-width: 767px) {
  .container.container_board {
    overflow-x: scroll;
}
} 
</style>
