
<template>
  <div class="content-section">
    <div class="container">
        <b-row>
          <b-col cols="7">
            <b-img src="/static/images/blackandpaycard.png" style="padding-top:100px;" />
          </b-col>
         
              <appLogin></appLogin>
             
          </b-row>
    </div>
  </div>
</template>

<script>
  import Login from './Login.vue';
        
  export default {
      name: 'contents',
  
        data() {
            return {
      
                 }
          },
    
    components: {
        appLogin: Login,
  
    },
  
    methods: {
  
      }
  
  }
</script>
