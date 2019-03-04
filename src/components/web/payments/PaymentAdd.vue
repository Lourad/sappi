<template>
  <div class="">
    <transition name="fadeMain">
      <div v-show="!confirmationPage">
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
                <span>Create New Payments</span>
              <i class="material-icons iconAlign float-right">more_vert</i></span>
            </div>
            <!-- End Title -->
            <div class="bgDiv">
              <!-- Search -->
              <div class="row searchRow mt-1 pl-1">
                <p class="lblSearch"><u>Pay Details</u></p>
              </div>
              <div class="row">
                <div class="col-md-12 formRow col-lg-6 col-xl-3">
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel">Store</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="store assigned">
                    </div>
                  </div>
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel">Agent <br />Name</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="select agent name">
                    </div>
                  </div>
                  <div class="eachInput d-flex flex-row d-flex flex-row">
                    <datetime v-model="startDate" id="startDate" input-class="form-controlCustom cstmTextDate customText mr-2" :min-datetime="maxDatetime" placeholder="start date"></datetime>
                    <i class="large material-icons iconAlign pt-2 mt-1 arrowColor">trending_flat</i>
                    <datetime v-model="endDate" id="endDate" input-class="form-controlCustom cstmTextDate customText mr-2" :min-datetime="startDate" placeholder="end date"></datetime>
                  </div>
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel">Work<br />Days</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter number of days">
                    </div>
                  </div>
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel">Over<br />Time</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter number of hours">
                    </div>
                  </div>
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel">Rest<br />Days</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter number of work days">
                    </div>
                  </div>
                  <div class="eachInputUpl">
                    <button class="btn btnUpload" @click="uploadOT">UPLOAD O.T. APPROVAL</button>
                    <input type="file" id="uplOT" class="hiddenUploads" name="">
                  </div>
                  <div class="eachInputUpl">
                    <button class="btn btnUpload" @click="uploadDTR">UPLOAD D.T.R.</button>
                    <input type="file" id="uplDTR" class="hiddenUploads" name="">
                  </div>
                  <div class="buttonDiv">
                    <button class="footerBtn btn" @click="nxtPage"><i class="large material-icons">arrow_forward</i></button>
                  </div>
                  <!-- End Search -->
                </div>         
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
    <!--Confirmation Page-->
    <transition name="fadeMain">
      <div v-show="confirmationPage" class="allInput style-1">
        <Confirmation></Confirmation>
      </div> 
    </transition>
  </div>
</template>
<script>
import sidebar from '@/components/web/Sidebar.vue'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import Confirmation from '@/components/Confirmation.vue'
export default {
  components: {
    sidebar,
    Datetime,
    Confirmation
  },
  name: 'PaymentView',
  data: function () {
    return {
      startDate: '',
      endDate: '',
      maxDatetime: '',
      ndate: new Date(),
      confirmationPage: false
    }
  },
  created: function () {
  },
  methods: {
    backMainMenu () {
      this.$router.push('/payment')
    },
    showPaymentDetails () {
      this.paymentList = false
    },
    uploadOT () {
      $('#uplOT').click()
    },
    uploadDTR () {
      $('#uplDTR').click()
    },
    nxtPage () {
      this.confirmationPage = true
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
  }  .txtSearch {
    border: 1px solid #BCE0FD;
    border-radius: 0;
    font-size: 14px;
    margin-top: 6px;
    width: 100%;
    margin: auto;
    height: 50px !important;
    margin-left: 0px;
    z-index: 0;
    float: none;
  }
  .btnSearch {
    background-color: #2699FB;
    color: white;
    font-size: 14px;
    font-weight: 700;
    height: 40px;
    width: 100%;
    margin-top: 3px;
  }
  .buttonRow {
    padding: 0;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 26px;
  }

  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
  .toggleDiv {
    text-align: center;
  }
  /* End Search */
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
  .btnUpload {
    background-color: #2699FB;
    color: white;
    font-weight: 700;
    height: 40px;
    width: 100%;
  }
  .hiddenUploads {
    display: none;
  }
  .eachInputUpl {
    margin: auto;
    margin-top: 8px;
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
