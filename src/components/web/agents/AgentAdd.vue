<template>
  <div class="">
    <transition name="fadeMain">
      <div>
        <div class="side">
          <sidebar></sidebar>
        </div>
        <transition name="fadeMain">
          <!-- Content -->
          <div class="myContent">
            <!-- Title -->
            <div class="row titleHead ml-2 mr-2">
              <span class="titleHeadText navHeaderMoreOption">
              <i class="material-icons iconAlign mr-1 bckArrow" id="arrowBack" @click="backMainMenu">arrow_back</i>
                <span>Agent Registration</span>
              <i class="material-icons iconAlign float-right">more_vert</i></span>
            </div>
            <!-- End Title -->
            <div class="bgDiv">
              <!-- Search -->
              <div class="row searchRow mt-1 pl-1">
                <p class="lblSearch"><u>Personal Information</u></p>
              </div>
              <div class="row">
                <div class="col-md-12 formRow col-lg-6 col-xl-3">
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel">Store</div>
                      </div>
                      <select  type="text" class="form-control customText" >
                        <option>Store A</option>
                        <option>Store B</option>
                        <option>Store C</option>
                        <option>Store D</option>
                      </select>
                    </div>
                    <div class="eachInput">
                      <div class="input-group txtLabels">
                        <div class="input-group-prepend">
                          <div class="input-group-text customLabel">Job Title</div>
                        </div>
                        <input type="text" class="form-control customText"  placeholder="enter job title">
                      </div>
                    </div>
                    <div class="eachInput">
                      <div class="input-group txtLabels">
                        <div class="input-group-prepend">
                          <div class="input-group-text customLabel">First Name</div>
                        </div>
                        <input type="text" class="form-control customText"  placeholder="enter first name">
                      </div>
                    </div>
                    <div class="eachInput">
                      <div class="input-group txtLabels">
                        <div class="input-group-prepend">
                          <div class="input-group-text customLabel">Last Name</div>
                        </div>
                        <input type="text" class="form-control customText"  placeholder="enter last name">
                      </div>
                    </div>
                    <div class="eachInput d-flex flex-row">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel customLabelDate">Birth Date</div>
                      </div>
                      <div class="input-group txtLabels">
                        <datetime v-model="date" id="agentAdd" input-class="form-controlCustom cstmTextDate" :max-datetime="maxDatetime" placeholder="enter birth date"></datetime>
                      </div>
                    </div>
                    <div class="eachInput">
                      <div class="input-group txtLabels">
                        <div class="input-group-prepend">
                          <div class="input-group-text customLabel">Email</div>
                        </div>
                        <input type="text" class="form-control customText"  placeholder="enter email">
                      </div>
                    </div>
                    <div class="eachInput">
                      <div class="input-group txtLabels">
                        <div class="input-group-prepend">
                          <div class="input-group-text customLabel text-left">Mobile <br>Number</div>
                        </div>
                        <input type="text" class="form-control customText"  placeholder="enter mobile number">
                      </div>
                    </div>
                    <div class="eachInput">
                      <div class="input-group txtLabels">
                        <div class="input-group-prepend">
                          <div class="input-group-text customLabel">Current <br>Address</div>
                        </div>
                        <input type="text" class="form-control customText"  placeholder="enter current address">
                      </div>
                    </div>
                    <div class="eachInput">
                      <div class="input-group txtLabels">
                        <div class="input-group-prepend">
                          <div class="input-group-text customLabel text-left">Permanent <br>Address</div>
                        </div>
                        <input type="text" class="form-control customText"  placeholder="enter permanent address">
                      </div>
                    </div>
                    <div class="buttonDiv">
                      <button class="footerBtn btn" @click="nxtPage"><i class="large material-icons">arrow_forward</i></button>
                    </div>
                  </div>
                  
                  <!-- End Search -->
                </div>         
              </div>
            </div>
            
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>
<script>
import sidebar from '@/components/web/Sidebar.vue'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
export default {
  components: {
    sidebar,
    Datetime
  },
  name: 'AgentAdd',
  data: function () {
    return {
      startDate: '',
      endDate: '',
      maxDatetime: '',
      ndate: new Date()
    }
  },
  created: function () {
  },
  methods: {
    backMainMenu () {
      this.$router.push('/dashboard')
    },
    nxtPage () {
      this.$router.push('/agent/new/2')
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* Until Title */
  .myContent {
    padding: 10px;
    padding-left: 5px;
    padding-right: 5px;
    background-color: #F1F9FF;
    font-family: Arial
  }
  @media (min-width: 1px) {
    .myContent {
      margin-top: 0;
    }
    .bgDiv {
      background-color: white;
      padding: 30px;
      margin-left: 8px;
      margin-right: 8px;
      padding-bottom: 0;
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 5px;
      height: 90vh;
      min-height: 701px;
    }
    .titleHead {
      background-color: white;
    }
  }
  @media (min-width: 42em) {
    .myContent {
      margin-left: 4em;
      margin-top: 0px;
    }
  }
  @media (min-width: 992px) {
    .bgDiv {
      background-color: #F1F9FF;
      padding-bottom: 40px;
      padding: 15px;
    }
    .titleHead {
      background-color: #F1F9FF;
    }
  }
  @media (min-width: 1600px) {
    .myContent {
      margin-left: 15em;
      margin-top: 0px;
    }
  }
  .titleHead {
    height: 30px;
    border: 1px solid #79C0FD;
  }
  .iconAlign {
    vertical-align: middle;
  }
  .titleHeadText {
    color: #2699FB;
    font-size: 18px;
    font-weight: bold;
  }
  .navHeaderMoreOption {
    width: 100%;
  }
  .bckArrow {
    cursor: pointer;
  }
  /* End Until Title */
  /* Search */
  .searchRow {
    font-size: 14px;
    color: #2699FB;
    margin-bottom: -10px;
  }  
  /* Added for froms */
  .eachInput {
    margin: auto;
    margin-top: 16px;
    height: 50px;
  }
  .customLabel {
    font-size: 12px;
    color: white;
    width: 75px;
    padding: 5px;
  }
  .customText {
    border-radius: 0 !important;
    border-color: #BCE0FD;
    height: 50px;
    font-size: 14px;
    color: #2699FB
  }
  .input-group-text {
    background-color: #BCE0FD !important;
    border-radius: 0 !important;
    border-color: #BCE0FD;
  }
  .footerBtn {
    background-color: #2699FB;
    color: white;
    font-size: 14px;
    font-weight: 700;
    height: 48px;
    max-height: 40px;
    width: 100%;
    margin-top: 16px !important;
  }
  .arrowColor {
    color: #2699FB;
  }
  @media (min-width: 1px) {
    .formRow {
      border: none;
      padding-bottom: 20px;
      background-color: #FBFBFB;
      height: 670px;
    }
  }
  @media (min-width: 992px) {
    .formRow {
      border: 1px solid #79C0FD;
      border-radius: 5px;
    }
  }
  /* End Added for froms */
</style>
