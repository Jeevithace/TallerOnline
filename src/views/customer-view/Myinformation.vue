<template>
  <section id="myvehicles">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>My Profile</h2>
        </div>
        <div class="col-12 content_section">
  
          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start my-info-title">
              <h4>Profile Detail</h4>
            </div>
          </div>
  
          <div class="d-flex flex-wrap vehicle_lsts_sec add_newvehicle myinfo-sec">
            <form>
              <ul>
                <li>
                  <label for="Name" class="grey-text font-weight-light">Name</label>
                   <input type="text" id="plate" class="form-control" placeholder="Milton Salazar">
                </li>
  
                <li>
                  <label for="Identification" class="grey-text font-weight-light">Identification</label>
                   <input type="text" id="plate" class="form-control" placeholder="79.3256 2647">
                </li>
  
                <li>
                  <label for="Email Address" class="grey-text font-weight-light">Email Address</label>
                  <input type="text" id="plate" class="form-control" placeholder="milton_sala@gmail.com">
                </li>
  
                <li>
                  <label for="Phone" class="grey-text font-weight-light">Phone</label>
                  <input type="text" id="plate" class="form-control" placeholder="316 43154">
                </li>
  
                <li>
                  <label for="Main Address" class="grey-text font-weight-light">Main Address</label>
                   <input type="text" id="plate" class="form-control" placeholder="Calle 137 No 55-32 Torre Apartment 101">
                </li>
  
                <li>
                  <label for="City" class="grey-text font-weight-light">City</label>
                  <div class="sel_fac">
                    <select class="form-control">
                 <option>Bogota</option>
                </select>
                  </div>
                </li>
  
                 <li>
                  <label for="Corporate Agreement" class="grey-text font-weight-light">Corporate Agreement</label>
                  <div class="sel_fac">
                    <select class="form-control">
                 <option>IBM</option>
                </select>
                  </div>
                </li>
  
                <li>                                
                   <label>Upload Photo</label>
                     
                        <div class="form-group">
                        <label for="file" class="sr-only">File</label>
                        <div class="input-group">
                            <input type="text" name="filename" class="form-control" placeholder="No file selected" readonly>
                            <span class="input-group-btn">
                            <div class="btn btn-default  custom-file-uploader">
                                <input type="file" name="file" onchange="this.form.filename.value = this.files.length ? this.files[0].name : ''" />
                                Browse
                            </div>
                            </span>
                        </div>
                        </div>
                                                                
                </li>
  
              </ul>
  
  
              <div class="sub_btn">
                <btn class="add_vehicle " @click.native="showModal16 = true">Update</btn>
                <btn class="cancel_btn">Cancel</btn>
                <container class="mt-5">
                  <modal v-if="showModal16" @close="showModal16 = false" centered class="add_vehicle_popup">
                    <modal-body>
                      <div class="d-flex align-self-center flex-column add_sucess_msg">
                        <img src="../../assets/images/popup_sucess_car.png" class="" />
                        <h5>Vehicle successfully created</h5>
                      </div>
                    </modal-body>
                    <modal-footer>
                      <btn class="back_btn" @click.native="showModal16 = false">Back to Main Menu</btn>
                      <btn class="create_btn">Create another vehicle</btn>
                    </modal-footer>
                  </modal>
                </container>
              </div>
  
            </form>
          </div>
        </div>
      </div>
  
    </div>
  </section>
</template>

<script>
  import {
    Btn,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter,
    Tooltip,
    Popover,
    mdbInput,
    MdTextarea,
    Container,
    Row,
    Column
  } from 'mdbvue';
  import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
  import * as lang from "vuejs-datepicker/src/locale";
  const state = {
    date1: new Date()
  };
  
  export default {
    name: 'Myinformation',
    components: {
      Btn,
      Modal,
      ModalHeader,
      ModalTitle,
      ModalBody,
      ModalFooter,
      Tooltip,
      Popover,
      mdbInput,
      MdTextarea,
      Container,
      Row,
      Column,
      Datepicker
  
    },
    data() {
      return {
        showModal16: false,
        format: "d MMMM yyyy",
        disabledDates: {},
        disabledFn: {
          customPredictor(date) {
            if (date.getDate() % 3 === 0) {
              return true;
            }
          }
        },
        highlightedFn: {
          customPredictor(date) {
            if (date.getDate() % 4 === 0) {
              return true;
            }
          }
        },
        highlighted: {},
        eventMsg: null,
        state: state,
        language: "en",
        languages: lang,
        vModelExample: null,
        changedMonthLog: []
      };
  
    },
    methods: {
      highlightTo(val) {
        if (typeof this.highlighted.to === "undefined") {
          this.highlighted = {
            to: null,
            daysOfMonth: this.highlighted.daysOfMonth,
            from: this.highlighted.from
          };
        }
        this.highlighted.to = val;
      },
      highlightFrom(val) {
        if (typeof this.highlighted.from === "undefined") {
          this.highlighted = {
            to: this.highlighted.to,
            daysOfMonth: this.highlighted.daysOfMonth,
            from: null
          };
        }
        this.highlighted.from = val;
      },
      setHighlightedDays(elem) {
        if (elem.target.value === "undefined") {
          return;
        }
        let highlightedDays = elem.target.value
          .split(",")
          .map(day => parseInt(day));
        this.highlighted = {
          from: this.highlighted.from,
          to: this.highlighted.to,
          daysOfMonth: highlightedDays
        };
      },
      setDisabledDays(elem) {
        if (elem.target.value === "undefined") {
          return;
        }
        let disabledDays = elem.target.value.split(",").map(day => parseInt(day));
        this.disabledDates = {
          from: this.disabledDates.from,
          to: this.disabledDates.to,
          daysOfMonth: disabledDays
        };
      },
      disableTo(val) {
        if (typeof this.disabled.to === "undefined") {
          this.disabledDates = {
            to: null,
            daysOfMonth: this.disabledDates.daysOfMonth,
            from: this.disabled.from
          };
        }
        this.disabledDates.to = val;
      },
      disableFrom(val) {
        if (typeof this.disabledDates.from === "undefined") {
          this.disabled = {
            to: this.disabledDates.to,
            daysOfMonth: this.disabled.daysOfMonth,
            from: null
          };
        }
        this.disabledDates.from = val;
      },
      openPicker() {
        this.$refs.programaticOpen.showCalendar();
      },
      logChangedMonth(date) {
        this.changedMonthLog.push(date)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .add_vehicle_accept {
    display: block;
    margin-bottom: 15px;
  }
  
  .add_vehicle_accept input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }
  
  .add_vehicle_accept label {
    position: relative;
    cursor: pointer;
  }
  
  .add_vehicle_accept label:before {
    content: '';
    -webkit-appearance: none;
    background-color: #f3f5fb;
    border: 1px solid #cac8c8;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 10px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 5px;
  }
  
  .add_vehicle_accept input:checked+label:after {
    content: '';
    display: block;
    position: absolute;
    top: 8px;
    left: 9px;
    width: 6px;
    height: 14px;
    border: solid #0079bf;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  /*say*/
  .my-info-title{padding-left:0px !important;}
    .custom-file-uploader {
  position: relative;
    }
  input[type='file'] {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: default;
  }
 .custom-file-uploader{margin:0px; padding-bottom: 13px; padding-top: 13px; border-radius: 5px; margin-right: 2px;margin-top: -2px;background: #0066d0 !important;}
.myinfo-sec select.form-control:not([size]):not([multiple]) {
    height: calc(2.55rem + 2px);
}

.myinfo-sec .sel_fac {
    overflow: hidden;
      background: #fff;
    border: 10px;
    height: 43px;
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
.custom-file-uploader {
    padding-bottom: 12px;
    padding-top: 11px;
    margin-top: -1px;
}
}
</style>
