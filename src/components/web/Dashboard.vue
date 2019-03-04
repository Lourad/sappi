<template>
  <div class="mainDiv">
    <transition name="fadeMain">
      <div v-show="!isMob">
        <sidebar></sidebar>
        <!-- Content -->
        <transition name="fadeMain">
        <div id="myContent">
        </div>
        </transition>
      </div>
    </transition>
    <transition name="fadeMain">
      <div id="bg-div" class="text-center" v-show="isMob">
        <div class="appTitle">
          <p>Welcome to SAPPI Payroll</p>
        </div>
        <div class="navOptions">
          <div class="navOptionsItem" @click="payment">
            <p>Process Payments</p>
          </div>
          <div class="navOptionsItem" @click="agents">
            <p>My Agents</p>
          </div>
          <div class="navOptionsItem" @click="rates">
            <p>Rates</p>
          </div>
          <div class="navOptionsItem" @click="deductions">
            <p>Deductions / Deposits</p>
          </div>
          <div class="navOptionsItem" @click="savings">
            <p>Savings / CA</p>
          </div>
          <div class="navOptionsItem" @click="reports">
            <p>Report</p>
          </div>
          <div class="navOptionsItem" @click="announcements">
            <p>Announcements</p>
          </div>
          <div class="navOptionsItem" @click="settings">
            <p>Settings</p>
          </div>
          <div class="navOptionsItem" @click="logout">
            <p>Log Out</p>
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
  name: 'WebDashboard',
  data: function () {
    return {
      isMob: false
    }
  },
  created: function () {
    if(this.detectmob()) {
      this.isMob = true
    } else {
      this.isMob = false 
    }
  },
  methods: {
    detectmob() { 
      if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      ){
        localStorage.setItem('isMobile', true)
        return true;
      }
      else {
        localStorage.setItem('isMobile', false)
        return false;
      }
    },
    logout () {
      this.$auth.destroyToken()
      this.$router.push('/login')
    },
    dashboard () {
      this.$router.push('/dashboard')
    },
    agents () {
      this.$router.push('/agent')
    },
    payment () {
      this.$router.push('/payment')
    },
    rates () {
      this.$router.push('/rate')
    },
    deductions () {
      this.$router.push('/deduction')
    },
    savings () {
      this.$router.push('/savings')
    },
    reports () {
      this.$router.push('/report')
    },
    announcements () {
      this.$router.push('/announcement')
    },
    settings () {
      this.$router.push('/setting')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mainDiv {
    background-color: #F1F9FF;
    width: 100%;
  }
  #bg-div {
    background-color: #2699FB;
    height: 100%;
    width: 100%;
    color: white;
    font-family: Arial;
  }
  #footer {
    background-color: #7FC4FD;
    color: white;
    height: 64px;
    cursor: pointer;
  }
  .appTitle {
    padding-top: 50px;
    font-size: 18;
    font-weight: 700;
  }
  .navOptions {
    margin-top: 79px;
    padding-bottom: 30px;
  }
  .navOptionsItem {
    margin-top: 30px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
