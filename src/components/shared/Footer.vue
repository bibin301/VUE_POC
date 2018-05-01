


<template>
  <div class="foot-container">
    
    <div class="" >
      <ul class="container footer-links">
        <li><a href="/" target="_self">{{footerData[0].Home}}</a></li>
        <li><a href="/" target="_self"> {{footerData[0].Login}}</a></li>
        <li><a href="/contact-us/" target="_self">{{footerData[0].Contact}}</a></li>
        <li><a href="/about-us/" target="_self">{{footerData[0].About}}</a></li>
        <li id="terms_and_conditions"><a class="no-wait" 
        v-on:mouseover="mouseOver()">{{footerData[0].Terms}}</a></li>
        <li><a class="no-wait"  target="_blank">{{footerData[0].Privacy}}</a></li>
        <li><a class="no-wait" >{{footerData[0].Data}}</a></li>
        <li><a class="expand no-wait" v-on:click="isShow = !isShow">{{footerData[0].More}}</a></li>
        <br>
        <div class="product-links" :style="{ display: display }" v-on:mouseleave=" mouseLeave()">
          <li><a class="no-wait"  >T24 BlackCard</a></li>
          <li><a class="no-wait"  >T24 PayVault</a></li>
          <li><a class="no-wait"  >T24 BlackShield</a></li>
        </div>
      </ul>
      <hr style="border-top: 1px solid rgba(204, 204, 204, 0.3);">
      <div class="container   foot-copy">
        PSI-Pay Ltd is authorised and regulated by the Financial Conduct Authority (FCA) under the Electronic Money Regulations 2011 (FCA register number 900011) for the issuing of electronic money. <br><br>
     
        <div v-show="isShow">
          The T24 Black Card is a leading prepaid card, designed specifically for the high-net worth, global traveller, coming complete with a host of travel benefits that include travel insurance and priority pass members.<br> Our card can be used globally,
          wherever the Visa acceptance mark is displayed, and can be managed, either here on our cardholder website or through either our T24 Black customer support or IVR services.<br> Through the T24 Black cardholder website you will be able to manage
          your account, access statements and make transfers to other T24 Black cardholders. You will also be able to find guidance and information relating to T24 Black and our card product.<br> If you've recently received your T24 Black Visa Prepaid card
          and are experiencing any difficulty either registering it or retrieving your PIN, please get in touch with the T24 Black customer support team. They can be reached by phone, email or Skype, using the details available within the contact section
          of our site.<br> Should you have any further questions or queries for the T24 Black customer support team please feel free to contact them using the same details where one of our representatives will be on hand to assist.<br>
          <br> Our Brands<br>
          <br> T24 PayVault<br>
          <br> The T24 PayVault Visa Prepaid Card is a provider of dedicated payment solutions for the European market, offering companies a means of streamlining the management of their payroll and other systems. Services T24 PayVault offer range from
          remunerating employees to paying commissions to staff based locally throughout the world.<br> To find out more please visit T24 PayVault<br>
          <br> T24 BlackShield<br>
          <br> The T24 BlackShield Visa Prepaid Card is a payout mechanism for the travel insurance sector, giving insurers a fast and simple means of paying out claims to their customers internationally. The benefit of using one of our prepaid cards is
          that it allows insurers to provide their customers with funds as and when they need them, making the process of obtaining treatment whilst travelling more efficient.<br> To find out more please visit T24 BlackShield<br>
        </div>
        <br/>
        <div class="align_center">
          © 2018 Transact24 Trading Limited 
        </div>
      </div>
    </div>
    <!-- </b-container>
      </div> -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";



  export default {
    name: 'footers',
    data() {
      return {
        isShow: false,
        display: 'none'
      }
    },
   
      computed: {
    ...mapGetters({
      //createAccountMsg: "createAccountSuccess",  -- for post data
      footerData: "footerData" // for get data
    })
  },
    methods: {
      mouseOver() {
        this.display = '';
      },
      mouseLeave() {
        this.display = 'none';
      },


      //===========STO post method======
    // handleSubmit(e) {
    //   e.preventDefault();
    //   const object = Object.assign(
    //     {},
    //     {
    //       uin: this.uin,
    //       accountReference: this.accountReference,
    //       lastName: this.lastName,
    //       defaultCurrency: this.defaultCurrency,
    //       cardProduct: this.cardProduct,
    //       lastPan: this.lastPan
    //     }
    //   );
    //   const values = _filter(
    //     Object.values(
    //       _pick(object, ["uin", "accountReference", "lastName", "lastPan"])
    //     ),
    //     obj => obj !== ""
    //   );
    //   if (values.length > 0 && this.errors.items.length === 0) {
    //     this.$store.dispatch("createAccountSearch", object);
    //     this.errMsg = "";
    //   } else {
    //     this.errMsg =
    //       "Please specify one of the search criteria, UIN/Account Reference/LastName/Last 4 of PAN";
    //     this.$store.dispatch("resetTableData");
    //   }
    // }
      //============ENO post method======
    },

 
    //initially on page load  - use created method
    //on event need data  - use methods
    created() {
// onload get data - get method
      this.$store.dispatch("getFooterData");

    }
  }
</script>

<style scoped>
  .footer-links {
    list-style: none;
    padding: 15px 0 0 0;
    margin: 0 auto;
    text-align: center;
    display: block;
    color: #fff;
  }
  /* .footer-links li a:hover,
  a,
  a:hover,
  a:active,
  a:focus {
    color: #46a694;
  } */
  .footer-links a:hover{
    color: #46a694;
  }
  .footer-links li {
    list-style: none;
    padding: 2px 10px;
    display: inline;
    line-height: 28px;
  }
  .foot-copy {
    font-size: 0.70em;
    color: #a1a1a1;
    padding: 0 0 30px 0;
  }

 
  /* .is-collapsed {
  		li:nth-child(n+5) {
  		display: none;
  	}
  } */
</style>

