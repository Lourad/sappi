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
                <span>Agent Registration</span>
              <i class="material-icons iconAlign float-right">more_vert</i></span>
            </div>
            <!-- End Title -->
            <div class="bgDiv">
              <!-- Search -->
              <div class="row">
                <div class="col-md-12 formRow col-lg-6 col-xl-3">
                  <p class="headerTitleText ml-1">Employment Requirements - 02</p>
                  <div class="eachInputUpl">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel text-left">SSS <br />Number</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter sss number">
                    </div>
                  </div>
                  <div class="eachInputUpl">
                    <button class="btn btnUpload" @click="uploadSss">UPLOAD FORM / ID</button>
                    <input type="file" id="uplsss" class="hiddenUploads" name="">
                  </div>
                  <div class="eachInputUpl">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel text-left">Pag-ibig <br />Number</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter pag-ibig number">
                    </div>
                  </div>
                  <div class="eachInputUpl">
                    <button class="btn btnUpload" @click="uploadPagIbig">UPLOAD FORM / ID</button>
                    <input type="file" id="uplpagibig" class="hiddenUploads" name="">
                  </div>
                  <div class="eachInputUpl">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel text-left">Phil-Health <br />Number</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter phil-health number">
                    </div>
                  </div>
                  <div class="eachInputUpl">
                    <button class="btn btnUpload" @click="uploadPhileHealth">UPLOAD FORM / ID</button>
                    <input type="file" id="uplphilhealth" class="hiddenUploads" name="">
                  </div>
                  <p class="headerTitleText ml-1">Banking Information</p>
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel text-left">Bank <br />Name</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter bank name">
                    </div>
                  </div>
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel text-left">Account <br />Name</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter account name">
                    </div>
                  </div>
                  <div class="eachInput">
                    <div class="input-group txtLabels">
                      <div class="input-group-prepend">
                        <div class="input-group-text customLabel text-left">Account <br />Number</div>
                      </div>
                      <input type="text" class="form-control customText"  placeholder="enter account number">
                    </div>
                  </div>
                  <!-- Button -->
                  <div class="eachInput mt-0">
                    <button type="file" class="footerBtn btn" id="test" @click="nxtPage"><i class="large material-icons">arrow_forward</i></button>
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
  name: 'AgentAdd',
  data: function () {
    return {
      confirmationPage: false
    }
  },
  created: function () {
  },
  methods: {
    backMainMenu () {
      this.$router.push('/agent/new/4')
    },
    nxtPage () {
      this.confirmationPage = true
    },
    uploadSss () {
      $('#uplsss').click()
    },
    uploadPagIbig () {
      $('#uplpagibig').click()
    },
    uploadPhileHealth () {
      $('#uplphilhealth').click()
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
  .footerBtn {
    max-width: 343px;
    background-color: #2699FB;
    color: white;
    font-size: 14px;
    font-weight: 700;
    height: 48px;
    max-height: 40px;
    width: 94%;
  }
  .eachInput {
    margin: auto;
    margin-top: 16px;
    height: 50px;
    width: 94%;
  }
  .eachInputUpl {
    margin: auto;
    margin-top: 8px;
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
  .headerTitleText {
    font-size: 12px;
    margin-bottom: 0px;
    margin-top: 16px;
    color: #2699FB;
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
      height: 660px;
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
