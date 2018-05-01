<template>
  <div>
    <appTop> </appTop>
    <appContent> </appContent>
    <router-view></router-view>
    <appFooter> </appFooter>
  </div>
</template>

<script>
  import Footer from './components/shared/Footer';
  import Topbar from './components/shared/Topbar';
  import Content from './components/Content';
   import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'app',
    data() {
      return {
      }
    },
    components: {
      appFooter: Footer,
      appTop: Topbar,
      appContent: Content
    },
    created() {}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  a {
    cursor: pointer;
  }
  .main-content {
    padding: 15px;
  }
</style>
