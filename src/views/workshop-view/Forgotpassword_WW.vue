<template>
  <div class="container_fluid">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 login_lft_section">
        <img src="../../assets/images/login_lft.png" />
      </div>
      <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 rgt_section align-middle">
        <div class="d-flex justify-content-center flex-column rgt_cen">
          <div class="logo"><img src="../../assets/images/logo.png" /></div>
  
          <form @submit="onSubmit">
  
            <div class="form-simple">
  
              <p class="new_taller" style="float:none;">Forgot Password</p>
  
              <ul>
                <li><label>Email Address</label><input placeholder="sampletext@mail.com" type="text" v-model="form.email" required/><span id="email_error" class="error"></span></li>
              </ul>
  
              <div class="d-flex rem_frt forgot_txt">
                Your password will be sent to your email address
              </div>
              <div class="text-center">
                <mdb-btn type="submit" class="log_btn">Submit</mdb-btn>
              </div>
              <p class="new_taller">New to TallerOnline
                <a>
                  <router-link to="Register">Sign up</router-link>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";
  import {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn
  } from 'mdbvue'
  export default {
    name: 'Forgotpassword_WW',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtn
    },
    data() {
      return {
        form: {
          email: '',
  
        },
  
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
  
        const formValues = {
          user_email: this.form.email,
        }
  
        console.log(formValues);
        if ((formValues.user_email == "workshop@gmail.com")) {
          this.$router.push({
            name: 'Services_WW'
          })
  
        } else {
          if (formValues.user_email != "workshop@gmail.com") {
            document.getElementById("email_error").innerHTML = "Please Enter Email Correctly"
            setTimeout(function() {
              document.getElementById("email_error").hide();
            }, 1000);
  
          }
  
  
        }
  
  
  
  
  
        return false;
  
  
      },
  
    }
  
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login_lft_section {
    max-height: 100vh;
  }
  
  .login_lft_section img {
    max-height: 100vh;
    width: 100%;
    height: 100%;
  }
  
  .rgt_section {
    height: 100vh;
  }
  
  .rgt_cen {
    height: 100vh;
    align-self: center;
    margin-left: -40px;
  }
  
  .form-simple {
    max-width: 346px;
    margin: 0 auto;
    margin-top: 38px;
    font-family: 'Nunito-Regular';
    width: 100%;
  }
  
  .form-simple ul {
    list-style-type: none;
    margin-left: 0px;
    border: 1px solid #dbdbdb;
    padding: 0px;
    border-radius: 3px;
  }
  
  .form-simple ul li {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    padding: 10px 10px 8px;
    border-top: 1px solid #dbdbdb;
    margin-bottom: 10px;
  }
  
  .form-simple ul li:first-child {
    border: 0px;
  }
  
  .form-simple ul li label {
    color: #a4a3a3;
    font-size: 1rem;
    margin-bottom: 0px;
  }
  
  .form-simple ul li input {
    border: 0px !important;
    color: #656565;
    font-size: 18px;
    font-family: Nunito-Medium;
    background: transparent;
  }
  
  .form-simple .log_btn,
  .form-simple .log_btn:hover {
    background: #0066d0 !important;
    color: #fff;
    text-transform: uppercase;
    border: 0px;
    border-radius: 3px;
    margin-bottom: 20px;
    padding: 20px 0px;
    width: 100%;
  }
  
  .rem_frt {
    margin-bottom: 20px;
    font-family: Nunito-Medium;
    font-size: 18px;
    color: #333;
  }
  
  .rem_frt span {
    text-align: left;
  }
  
  .rem_frt span input[type="checkbox"] {
    margin-right: 10px;
  }
  
  .rem_frt a {
    text-align: right;
    color: #333;
  }
  
  p.new_taller {
    width: 100%;
    float: left;
    text-align: left;
    margin-top: 10px;
    font-family: 'Nunito-Bold';
    color: #333;
    font-size: 20px;
  }
  
  p.new_taller a {
    text-align: right;
    float: right;
  }
  
  .face_icon {
    width: 100%;
  }
  
  .frm_opt {
    border-bottom: 1px solid #cbd2d6;
    line-height: 15px;
    margin-bottom: 26px;
    width: 100%;
    text-align: center;
  }
  
  .frm_opt span {
    background: rgba(255, 255, 255, 0.99) none repeat scroll 0 0;
    float: none;
    padding: 0px 10px;
    color: #9fa3a5;
    font-size: 18px;
  }
  
  .error {
    color: #f00
  }
  
  .logo {
    text-align: center;
  }
  
  html,
  body {
    background: #fff none repeat scroll 0 0;
  }
  
  .forgot_txt {
    color: #333;
    font-size: 15px;
    opacity: 0.7;
  }
</style>
