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
                  <p class="headerTitleText ml-1">Employment Requirements - 01</p>
                  <div class="fileDiv">
                    <div class="col-md-12 text-center">
                      <p class="fileLabel">2X2 ID PHOTO</p>
                    </div>
                    <div class="col-md-12 text-center">
                      <p class="fileIconP"><i class="material-icons fileIcon">folder</i></p>
                    </div>
                    <div class="col-md-12 text-center">
                      <p class="fileName">File Name</p>
                    </div>
                    <div class="col-md-12 text-center">
                      <span class="fileSize">25kb</span><span class="fileDateUploaded">01-27-2019</span>
                    </div>
                    <div class="col-md-12 text-center">
                      <button class="btn btnUpload" @click="upload2x2">UPLOAD</button>
                    </div>
                    <input type="file" id="upl2x2" class="hiddenUploads" name="">
                  </div>
                  <div class="fileDiv">
                    <div class="col-md-12 text-center">
                      <p class="fileLabel">PSA - BIRTH CETIFICATE</p>
                    </div>
                    <div class="col-md-12 text-center">
                      <p class="fileIconP"><i class="material-icons fileIcon">folder</i></p>
                    </div>
                    <div class="col-md-12 text-center">
                      <p class="fileName">File Name</p>
                    </div>
                    <div class="col-md-12 text-center">
                      <span class="fileSize">25kb</span><span class="fileDateUploaded">01-27-2019</span>
                    </div>
                    <div class="col-md-12 text-center">
                      <button class="btn btnUpload" @click="uploadPsa">UPLOAD</button>
                    </div>
                    <input type="file" id="uplpsa" class="hiddenUploads" name="">
                  </div>
                  <div class="fileDiv">
                    <div class="col-md-12 text-center">
                      <p class="fileLabel">POLICE / NBI CLEARANCE</p>
                    </div>
                    <div class="col-md-12 text-center">
                      <p class="fileIconP"><i class="material-icons fileIcon">folder</i></p>
                    </div>
                    <div class="col-md-12 text-center">
                      <p class="fileName">File Name</p>
                    </div>
                    <div class="col-md-12 text-center">
                      <span class="fileSize">25kb</span><span class="fileDateUploaded">01-27-2019</span>
                    </div>
                    <div class="col-md-12 text-center">
                      <button class="btn btnUpload" @click="uploadNbi">UPLOAD</button>
                    </div>
                    <input type="file" id="uplnbi" class="hiddenUploads" name="">
                  </div>
                  <!-- Button -->
                  <div class="buttonDiv text-center">
                    <button class="footerBtn btn" @click="toPageFive"><i class="large material-icons">arrow_forward</i></button>
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
export default {
  components: {
    sidebar
  },
  name: 'AgentAdd',
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
      this.$router.push('/agent/new/3')
    },
    toPageFive () {
      this.$router.push('/agent/new/5')
    },
    upload2x2 () {
      $('#upl2x2').click()
    },
    uploadPsa () {
      $('#uplpsa').click()
    },
    uploadNbi () {
      $('#uplnbi').click()
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
  }  
  .fileDiv {
    width: 95%;
    margin: auto;
    height: 250px;
    border: 1px solid #BCE0FD;
    text-align: center;
    color: #2699FB;
    font-weight: 700;
    font-family: Arial;
    font-size: 20;
    padding-top: 12px;
    margin-bottom: 15px;
  }
  .fileLabel {
    margin: 0;
  }
  .fileIcon {
    font-size: 30px !important;
  }
  .fileIconP {
    margin-top: 25px;
    margin-bottom: 12px;
  }
  .fileName {
    margin: 0;
  }
  .fileSize {
    margin: 0;
  }
  .fileDateUploaded {
    margin: 0;
    margin-left: 5px;
  }
  .footerBtn {
    max-width: 343px;
    background-color: #2699FB;
    color: white;
    font-size: 14px;
    font-weight: 700;
    height: 48px;
    max-height: 40px;
    margin: auto;
    width: 100%;
    margin-top: 16px !important;
  }
  .btnUpload {
    background-color: #2699FB;
    color: white;
    font-weight: 700;
    height: 40px;
    width: 80%;
    margin-top: 40px;
  }
  .hiddenUploads {
    display: none;
  }
  .buttonDiv {
    width: 100%;
  }
  @media (min-width: 1px) {
    .formRow {
      border: none;
      padding-bottom: 20px;
      background-color: #FBFBFB;
      height: 920px;
      padding-top: 0px;
    }
  }
  @media (min-width: 992px) {
    .formRow {
      border: 1px solid #79C0FD;
      border-radius: 5px;
      padding-top: 20px;
    }
  }
  .headerTitleText {
    font-size: 14px;
    margin-bottom: 10px;
    margin-top: 0px;
    color: #2699FB;
  }
  /* End Added for froms */
</style>
