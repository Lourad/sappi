<template>
  <div class="">
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
          <transition name="fadeMain">
            <span v-if="paymentList">Rates</span>
          </transition>
          <transition name="fadeMain">
            <span v-if="!paymentList">Payment Detail</span>
          </transition>
          <i class="material-icons iconAlign float-right">more_vert</i></span>
        </div>
        <!-- End Title -->
        <div class="bgDiv">
          <!-- Search -->
          <div class="row searchRow mt-1 pl-1">
            <p class="lblSearch">Search</p>
          </div>
          <div class="row">
            <div class="col-md-12 col-lg-3">
              <div class="row txtRow">
                <input class="form-control form-control-lg txtSearch" type="text" placeholder="enter branch name">
              </div>
              <div class="row searchRow mt-3 mb-1 text-right pr-0">
                <div class="float-right w-100" >
                  <div class="lblSearch agentStatusLabel inlineDisplay pt-1 pr-3">Active Agents</div>
                  <label class="switch inlineDisplay">
                    <input type="checkbox" checked>
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class="row buttonRow">
                <button class="btnSearch btn ">SEARCH</button>
              </div>
              <!-- End Search -->
              <!-- Start New Payment -->
              <div class="row divPayPeriod mb-4">
                <div class="col-md-12 searchRow">
                  <p class="lblSearch">Create New Payroll Period</p>
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel text-left">Branch <br />Name</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter branch name">
                    </div>
                  </div>
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel text-left">Rate</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter rate">
                    </div>
                  </div>
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel text-left">Allowance</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter allowance">
                    </div>
                  </div>
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel text-left">OT Rates</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter amount">
                    </div>
                  </div>
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel text-left">Regular <br />Holiday</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter amount">
                    </div>
                  </div>
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel text-left">Special <br />Holiday</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter amount">
                    </div>
                  </div>
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel text-left">Duty on<br />Rest Day</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter amount">
                    </div>
                  </div>
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel text-left">Team <br />Lead</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter amount">
                    </div>
                  </div>
                  <div class="eachInput">
                    <button class="btnSearch btn">NEW PAYMENT PERIOD</button>
                  </div>
                </div>
              </div>
              <!-- End New Payment -->
            </div>
            <div class="col-md-12 col-lg-9 p-0 tableDiv">
              <div class="listRow float-right col-md-12">
                <div class="scrollable style-2">
                  <!-- Each List Item -->
                  <transition name="fadeMain">
                    <div class="listItem col-md-12 d-flex" >
                      <span class="listIcon col-1"><i class="material-icons iconAlign2">person</i></span>
                      <span class="col-8 col-lg-6">
                        <span class="listTitle ">Gaisano Grand - Palomok</span>
                        <span class="listDescription hideLg mt-1"><span class="hiddenNextLine"><br /></span>Lou Ard Soriano</span>
                      </span>
                      <span class="col-0 col-lg-4 hiddenOnSmallDesc">
                        <span class="">Lou Ard Soriano</span>
                      </span>
                      <span class="listIconMore col-3 col-lg-1"><i class="material-icons iconAlign2 float-right">keyboard_arrow_right</i></span>
                    </div>
                  </transition>
                  <transition name="fadeMain">
                    <div class="listItem col-md-12 d-flex" >
                      <span class="listIcon col-1"><i class="material-icons iconAlign2">person</i></span>
                      <span class="col-8 col-lg-6">
                        <span class="listTitle ">Gaisano Grand - Palomok</span>
                        <span class="listDescription hideLg mt-1"><span class="hiddenNextLine"><br /></span>Lou Ard Soriano</span>
                      </span>
                      <span class="col-0 col-lg-4 hiddenOnSmallDesc">
                        <span class="">Lou Ard Soriano</span>
                      </span>
                      <span class="listIconMore col-3 col-lg-1"><i class="material-icons iconAlign2 float-right">keyboard_arrow_right</i></span>
                    </div>
                  </transition>
                  <transition name="fadeMain">
                    <div class="listItem col-md-12 d-flex" >
                      <span class="listIcon col-1"><i class="material-icons iconAlign2">person</i></span>
                      <span class="col-8 col-lg-6">
                        <span class="listTitle ">Gaisano Grand - Palomok</span>
                        <span class="listDescription hideLg mt-1"><span class="hiddenNextLine"><br /></span>Lou Ard Soriano</span>
                      </span>
                      <span class="col-0 col-lg-4 hiddenOnSmallDesc">
                        <span class="">Lou Ard Soriano</span>
                      </span>
                      <span class="listIconMore col-3 col-lg-1"><i class="material-icons iconAlign2 float-right">keyboard_arrow_right</i></span>
                    </div>
                  </transition>
                  <transition name="fadeMain">
                    <div class="listItem col-md-12 d-flex" >
                      <span class="listIcon col-1"><i class="material-icons iconAlign2">person</i></span>
                      <span class="col-8 col-lg-6">
                        <span class="listTitle ">Gaisano Grand - Palomok</span>
                        <span class="listDescription hideLg mt-1"><span class="hiddenNextLine"><br /></span>Lou Ard Soriano</span>
                      </span>
                      <span class="col-0 col-lg-4 hiddenOnSmallDesc">
                        <span class="">Lou Ard Soriano</span>
                      </span>
                      <span class="listIconMore col-3 col-lg-1"><i class="material-icons iconAlign2 float-right">keyboard_arrow_right</i></span>
                    </div>
                  </transition>
                  <transition name="fadeMain">
                    <div class="listItem col-md-12 d-flex" >
                      <span class="listIcon col-1"><i class="material-icons iconAlign2">person</i></span>
                      <span class="col-8 col-lg-6">
                        <span class="listTitle ">Gaisano Grand - Palomok</span>
                        <span class="listDescription hideLg mt-1"><span class="hiddenNextLine"><br /></span>Lou Ard Soriano</span>
                      </span>
                      <span class="col-0 col-lg-4 hiddenOnSmallDesc">
                        <span class="">Lou Ard Soriano</span>
                      </span>
                      <span class="listIconMore col-3 col-lg-1"><i class="material-icons iconAlign2 float-right">keyboard_arrow_right</i></span>
                    </div>
                  </transition>
                  <transition name="fadeMain">
                    <div class="listItem col-md-12 d-flex" >
                      <span class="listIcon col-1"><i class="material-icons iconAlign2">person</i></span>
                      <span class="col-8 col-lg-6">
                        <span class="listTitle ">Gaisano Grand - Palomok</span>
                        <span class="listDescription hideLg mt-1"><span class="hiddenNextLine"><br /></span>Lou Ard Soriano</span>
                      </span>
                      <span class="col-0 col-lg-4 hiddenOnSmallDesc">
                        <span class="">Lou Ard Soriano</span>
                      </span>
                      <span class="listIconMore col-3 col-lg-1"><i class="material-icons iconAlign2 float-right">keyboard_arrow_right</i></span>
                    </div>
                  </transition>
                  <transition name="fadeMain">
                    <div class="listItem col-md-12 d-flex" >
                      <span class="listIcon col-1"><i class="material-icons iconAlign2">person</i></span>
                      <span class="col-8 col-lg-6">
                        <span class="listTitle ">Gaisano Grand - Palomok</span>
                        <span class="listDescription hideLg mt-1"><span class="hiddenNextLine"><br /></span>Lou Ard Soriano</span>
                      </span>
                      <span class="col-0 col-lg-4 hiddenOnSmallDesc">
                        <span class="">Lou Ard Soriano</span>
                      </span>
                      <span class="listIconMore col-3 col-lg-1"><i class="material-icons iconAlign2 float-right">keyboard_arrow_right</i></span>
                    </div>
                  </transition>
                  <transition name="fadeMain">
                    <div class="listItem col-md-12 d-flex" >
                      <span class="listIcon col-1"><i class="material-icons iconAlign2">person</i></span>
                      <span class="col-8 col-lg-6">
                        <span class="listTitle ">Gaisano Grand - Palomok</span>
                        <span class="listDescription hideLg mt-1"><span class="hiddenNextLine"><br /></span>Lou Ard Soriano</span>
                      </span>
                      <span class="col-0 col-lg-4 hiddenOnSmallDesc">
                        <span class="">Lou Ard Soriano</span>
                      </span>
                      <span class="listIconMore col-3 col-lg-1"><i class="material-icons iconAlign2 float-right">keyboard_arrow_right</i></span>
                    </div>
                  </transition>
                  <!-- End Each List Item -->
                </div>
              </div>
            </div>          
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import sidebar from '@/components/web/Sidebar.vue'
export default {
  components: {
    sidebar
  },
  name: 'Rate',
  data: function () {
    return {
      paymentList: true
    }
  },
  created: function () {
  },
  methods: {
    backMainMenu () {
      if(this.paymentList) {
        console.log(localStorage.getItem('isMobile'))
        if(!localStorage.getItem('isMobile')) {
          console.log(localStorage.getItem('isMobile'))
          this.$router.push('/m/dashboard')
        } else {
          this.$router.push('/dashboard')
        }
      } else {
        this.paymentList = true
      }
    },
    showPaymentDetails () {
      this.paymentList = false
    },
    newPayment () {
      this.$router.push('/payment/new')
    }
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
  /* New Payment */
  .divPayPeriod {
    border: 1px solid #4EABFB;
    margin-top: 10px;
    border-radius: 5px;
    padding-top: 8px;
    height: 652px;
    background-color: #FBFBFB;
  }
  .txtPeriod {
    color: white;
    font-size: 14px;
    font-weight: 700;
    height: 40px;
    width: 100%;
  }
  /* each input */
  .eachInput {
    margin: auto;
    margin-top: 16px;
    height: 50px;
    width: 94%;
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
    color: #2699FB;
  }
  .input-group-text {
    background-color: #BCE0FD !important;
    border-radius: 0 !important;
    border-color: #BCE0FD;
  }
  .dateWidth {
    width: calc(100% - 75px);
  }
  /* each input end */
  /* End New Payment */
  /* Payment List */
  @media (min-width: 1px) {
    .listRow {
      height: 817px;
      max-height: 500px;
      padding: 0;
      background-color: none;
    }
    .scrollable {
      padding-right: 0px;
    }
    .hiddenNextLine {
      display: block;
      height: 0px;
      width: 0px;
      margin-top: -8px;
    }
    .listDescription {
      float: none;
      font-size: 10px;
    }
    .divPayPeriod {
      background-color: #F1F9FF;
    }
    .hideLg {
      display: block;
    }
  }
  @media (min-width: 992px) {
    .listRow {
      border: 1px solid #4EABFB;
      border-radius: 5px;
      max-height: none;
      padding-top: 24px;
      padding-bottom: 24px;
      padding-left: 12px;
      padding-right: 6px;
      background-color: white;
    }
    .scrollable {
      padding-right: 10px;
    }
    .hiddenNextLine {
      display: none;
    }
    .listDescription {
      float: right;
      font-size: 14px;
    }
    .divPayPeriod {
      background-color: white;
    }
    .hideLg {
      display: none;
    }
  }
  
  .iconAlign2 {
    vertical-align: bottom;
  }
  .listItem {
    background-color: #F1F9FF;
    padding: 19px;
    padding-right: 1px;
    padding-left: 1px;
    color: #2699FB;
    margin-bottom: 15px;
    font-size: 14px;
    cursor: pointer;
  }
  .paymentDetails {
    display: none !important;
  }
  .scrollable {
    height: 100%;
    overflow-y: auto;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }
  @media (min-width: 1px) {
    .tableDiv {
      padding-left: 0 !important;
    }
    .btnNewPayment {
      display: none;
    }
    .cstmtooltip {
      display: block;
    }
    .hiddenOnSmallDesc {
      display: none;
    }
  }
  @media (min-width: 960px) {
    .tableDiv {
      padding-left: 18px !important;
    }
    .btnNewPayment {
      display: block;
    }
    .cstmtooltip {
      display: none;
    }
    .hiddenOnSmallDesc {
      display: block;
    }
  }
  /* End Payment List */
</style>
