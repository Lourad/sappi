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
                <span>Announcement</span>
              <i class="material-icons iconAlign float-right">more_vert</i></span>
            </div>
            <!-- End Title -->
            <div class="bgDiv">
              <div class="row">
                <div class="col-md-12 formRow col-lg-3 cstmPanel">
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel pl-3">Title</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter announcement title">
                    </div>
                  </div>
                  <div class="eachInputTextArea">
                    <div class="input-group txtLabels">
                      <textarea type="text" class="form-control customTextDesc" rows="8"  placeholder="enter announcement">
                      </textarea>
                    </div>
                  </div>
                  <div class="buttonDiv">
                    <button class="footerBtn btn" @click="nxtPage"><i class="large material-icons">arrow_forward</i></button>
                  </div>
                </div>
                <div class="col-md-12 col-lg-9 anoouncementDiv ">
                  <div class="listRow col-md-12 formRow pb-0">
                    <div class="scrollable style-2 ">
                      <div class="listItem col-md-12">
                        <p class="anncmntDate">25-DEC-2018
                          <span class="float-right text-danger ml-1" title="Delete">
                            <i class="material-icons tools">delete</i>
                          </span>
                          <span class="float-right text-success ml-1" title="Edit">
                            <i class="material-icons tools">edit</i>
                          </span>
                        </p> 
                        <p class="anncmntTitle">Double Pay - Christmas Day</p>
                        <p class="anncmntDscptn">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                      </div>
                      <div class="listItem col-md-12">
                        <p class="anncmntDate">25-DEC-2018
                          <span class="float-right text-danger ml-1" title="Delete">
                            <i class="material-icons tools">delete</i>
                          </span>
                          <span class="float-right text-success ml-1" title="Edit">
                            <i class="material-icons tools">edit</i>
                          </span>
                        </p>
                        <p class="anncmntTitle">Double Pay - Christmas Day</p>
                        <p class="anncmntDscptn">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                      </div>
                      <div class="listItem col-md-12">
                        <p class="anncmntDate">25-DEC-2018
                          <span class="float-right text-danger ml-1" title="Delete">
                            <i class="material-icons tools">delete</i>
                          </span>
                          <span class="float-right text-success ml-1" title="Edit">
                            <i class="material-icons tools">edit</i>
                          </span>
                        </p>
                        <p class="anncmntTitle">Double Pay - Christmas Day</p>
                        <p class="anncmntDscptn">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                      </div>
                      <div class="listItem col-md-12">
                        <p class="anncmntDate">25-DEC-2018
                          <span class="float-right text-danger ml-1" title="Delete">
                            <i class="material-icons tools">delete</i>
                          </span>
                          <span class="float-right text-success ml-1" title="Edit">
                            <i class="material-icons tools">edit</i>
                          </span>
                        </p>
                        <p class="anncmntTitle">Double Pay - Christmas Day</p>
                        <p class="anncmntDscptn">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                      </div>
                      <div class="listItem col-md-12">
                        <p class="anncmntDate">25-DEC-2018
                          <span class="float-right text-danger ml-1" title="Delete">
                            <i class="material-icons tools">delete</i>
                          </span>
                          <span class="float-right text-success ml-1" title="Edit">
                            <i class="material-icons tools">edit</i>
                          </span>
                        </p>
                        <p class="anncmntTitle">Double Pay - Christmas Day</p>
                        <p class="anncmntDscptn">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                      </div>
                      <div class="listItem col-md-12">
                        <p class="anncmntDate">25-DEC-2018
                          <span class="float-right text-danger ml-1" title="Delete">
                            <i class="material-icons tools">delete</i>
                          </span>
                          <span class="float-right text-success ml-1" title="Edit">
                            <i class="material-icons tools">edit</i>
                          </span>
                        </p>
                        <p class="anncmntTitle">Double Pay - Christmas Day</p>
                        <p class="anncmntDscptn">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                      </div>
                    </div>
                  </div>
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
import Confirmation from '@/components/Confirmation.vue'
export default {
  components: {
    sidebar,
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
      this.$router.push('/dashboard')
    },
    showPaymentDetails () {
      this.paymentList = false
    },
    nxtPage () {
      this.confirmationPage = true
    },
    // no announcement case
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
  /* Added for froms */
  .eachInput {
    margin: auto;
    margin-top: 16px;
    height: 50px;
  }
  .eachInputTextArea {
    margin: auto;
    margin-top: 16px;
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
  .customTextDesc {
    border-radius: 0 !important;
    border-color: #BCE0FD;
    font-size: 14px;
    color: #2699FB
  }
  .input-group-text {
    background-color: #BCE0FD !important;
    border-radius: 0 !important;
    border-color: #BCE0FD;
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
    .anoouncementDiv {
      padding-left: 0;
      padding-right: 0;
    }
  }
  @media (min-width: 992px) {
    .formRow {
      border: 1px solid #79C0FD;
      border-radius: 5px;
    }
    .anoouncementDiv {
      padding-left: 30px;
    }
  }
  /* End Added for froms */
  .listItem {
    background-color: #F1F9FF;
    padding: 19px;
    color: #2699FB;
    margin-bottom: 15px;
    margin-top: 15px;
    font-size: 14px;
  }
  .anncmntDate {
    font-weight: bold;
    font-size: 12px;
  }
  .anncmntTitle {
    font-weight: bold;
    font-size: 20px;
  }
  .anncmntDscptn {
    font-size: 14px;
  }
  .tools {
    font-size: 16px;
    cursor: pointer;
  }
  .cstmPanel {
    max-height: 343px;
  }
</style>
