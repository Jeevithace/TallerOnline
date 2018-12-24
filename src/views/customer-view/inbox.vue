<template>
  <section id="inbox">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>Inbox</h2>
        </div>
        <div class="col-12 content_section">
  
         
          <div class="d-flex flex-wrap inbox-wrapper">

              <div class="chat-back-arrow">
                  <img src="../../assets/images/inbox-img/chat-back-arrow.png">
              </div> 

              <!-- Inbox - tab -->



                <b-card no-body>
                <b-tabs pills card vertical>
                  <b-tab  active>
                    <template slot="title">
                      <div class="inbox-tab-element">
                        <div class="inbox-tab-element-img">
                          <img src="../../assets/images/inbox-img/user-1.png">
                        </div>
                        <div class="inbox-tab-text">
                          <span class="user-name">
                            Kane Williamson
                          </span>
                          <span class="user-name-loc">
                            Ab Workshop
                          </span>
                        </div>
                      </div>
                    </template>


                    <div class="inbox-message">
                      <h4 class="message-header">
                        Kane Williamson
                      </h4>
                      <div class="message-content">
                        <div class="message-in">
                          <div class="msg-content">
                            <div class="msg-img">
                              <img src="../../assets/images/inbox-img/user-1.png">
                            </div>
                            <div class="msg-text">
                              Need to change the <span>oil filter</span>
                            </div>
                          </div>
                        </div>
                        <div class="message-out">
                          <div class="msg-content">
                           
                            <div class="msg-text">
                              Need to change the <span>oil filter</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="inbox-action-block">
                        <textarea class="msg-type">Type Your Message</textarea>
                        <button class="msgsend-btn">
                          <img src="../../assets/images/inbox-img/send-icon.png">
                        </button>
                      </div>
                    </div>
                      


                  </b-tab>
                  <b-tab>
                    <template slot="title">
                      <div class="inbox-tab-element">
                        <div class="inbox-tab-element-img">
                          <img src="../../assets/images/inbox-img/user-2.png">
                        </div>
                        <div class="inbox-tab-text">
                          <span class="user-name">
                            Dale Steyn
                          </span>
                          <span class="user-name-loc">
                            Ab Workshop
                          </span>
                        </div>
                      </div>
                    </template>



                  <!-- Message content -->
                     <div class="inbox-message">
                      <h4 class="message-header">
                        Dale Steyn
                      </h4>
                      <div class="message-content">
                        <div class="message-in">
                          <div class="msg-content">
                            <div class="msg-img">
                              <img src="../../assets/images/inbox-img/user-2.png">
                            </div>
                            <div class="msg-text">
                              Need to change the <span>oil filter</span>
                            </div>
                          </div>
                        </div>
                        <div class="message-out">
                          <div class="msg-content">
                           
                            <div class="msg-text">
                              Need to change the <span>oil filter</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="inbox-action-block">
                        <textarea class="msg-type">Type Your Message</textarea>
                        <button class="msgsend-btn">
                          <img src="../../assets/images/inbox-img/send-icon.png">
                        </button>
                      </div>
                    </div>
                   <!-- Message content -->


                  </b-tab>
                  <b-tab >
                    <template slot="title">
                      <div class="inbox-tab-element">
                        <div class="inbox-tab-element-img">
                          <img src="../../assets/images/inbox-img/user-1.png">
                        </div>
                        <div class="inbox-tab-text">
                          <span class="user-name">
                            Kane Williamson
                          </span>
                          <span class="user-name-loc">
                            Ab Workshop
                          </span>
                        </div>
                      </div>
                    </template>

                    <!-- Message content -->
                     <div class="inbox-message">
                      <h4 class="message-header">
                        Kane Williamson
                      </h4>
                      <div class="message-content">
                        <div class="message-in">
                          <div class="msg-content">
                            <div class="msg-img">
                              <img src="../../assets/images/inbox-img/user-1.png">
                            </div>
                            <div class="msg-text">
                              Need to change the <span>oil filter</span>
                            </div>
                          </div>
                        </div>
                        <div class="message-out">
                          <div class="msg-content">
                           
                            <div class="msg-text">
                              Need to change the <span>oil filter</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="inbox-action-block">
                        <textarea class="msg-type">Type Your Message</textarea>
                        <button class="msgsend-btn">
                          <img src="../../assets/images/inbox-img/send-icon.png">
                        </button>
                      </div>
                    </div>
                   <!-- Message content -->


                  </b-tab>
                </b-tabs>
              </b-card>



              <!-- Inbox - tab  -->

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
        name: "inbox",
        components: {
            mdbContainer,
            mdbRow,
            mdbCol,
            mdbBtn
        }
    };
</script>
