<template>
  <div id="midde-section">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div class="assistance">
            <h1>FOR ANY ASSISTANCE</h1>
            <div class="pager">
              <img src="/static/images/icon_call.png">
            </div>
            <div>
              <p>Call: +44 (0) 207 182 4053 or +44 (0) 207 182 4054</p>
              <p>E-mail: support@transact24.com </p>
              <h2>Transact24 (UK) Limited</h2>
              <p>Evergreen House North, Grafton Place,</p>
              <p>London, NW1 2DX, United Kingdom</p>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="pdf_download align_center">
            <img src="/static/images/pdf_icon.png" width="107" height="107">
            <h1>Download the instruction manual on how to use this website.</h1>
            <a href="#" target="_parent" class="btn-primary">DOWNLOAD</a>
          </div>
        </b-col>
        <b-col>
          <div class="app_download align_center">
            <img style="margin-top:10px" src="/static/images/img_appdownload.png" width="269" height="167">
            <div class="pager">
              <a href="#" target="_blank"><img src="/static/images/btn_appstore.png" width="108" height="36"></a> &nbsp; &nbsp;
              <a href="#" target="_blank"><img src="/static/images/btn_google_play.png" width="108" height="36"></a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
  </div>
</template>

<script>

  export default {
    name: 'Main',
    data() {
      return {}
    },
    components: {},
    methods: {},
    created() {}
  }

</script>

<style scoped>

  #midde-section {
    height: 450px;
    padding-top: 90px;
  }
  .assistance,
  .pdf_download,
  .app_download {
    background-color: #FFFFFF;
    -webkit-box-shadow: -1px 1px 6px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -1px 1px 6px rgba(0, 0, 0, 0.3);
    box-shadow: -1px 1px 6px rgba(0, 0, 0, 0.3);
    border: 0;
    border-radius: 4px;
    width: 100%;
    min-height: 285px;
    padding: 15px;
    margin: 10px 0;
    color: #474747;
  }
  .assistance h1 {
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0 20px 0;
  }
  .assistance h2 {
    font-size: 14px;
    font-weight: bold;
    margin: 10px 0;
  }
  .pdf_download h1 {
    font-size: 16px;
    font-weight: bold;
    color: #727272;
    line-height: 24px;
  }
  .pager {
    padding-left: 0;
    margin: 20px 0;
    text-align: center;
    list-style: none;
  }
  .assistance p {
    font-size: 13px;
    line-height: 0.6px;
  }
  
</style>

