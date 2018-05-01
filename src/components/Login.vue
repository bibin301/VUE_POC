<template>
  <div class="login-section">
    <b-card no-body class="card-section">
      <b-tabs card >
        <b-tab title="LOGIN" active>
          <b-form class="tet">
            <b-form-group>
              <b-form-group id="exampleInputGroup1" label="USER NAME" label-for="exampleInput1" description="">
                <b-form-input class="input-box" id="exampleInput1" type="email" required placeholder="">
                </b-form-input>
              </b-form-group>
            </b-form-group>
            <b-form-group id="exampleInputGroup1" label="PASSWORD" label-for="exampleInput1" description="">
              <b-form-input class="input-box" id="exampleInput1" type="email" required placeholder="">
              </b-form-input>
            </b-form-group>
            </b-form-group>
            <b-button type="submit" cols="5" variant="primary lg">Submit</b-button>
          </b-form>
        </b-tab>
        <b-tab title="REGISTER CARD" active>
          <b-form>
            <label for="inputFormatter">CARD NUMBERS</label>
            <b-form-row>
              <b-col cols="3">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-input class="input-box" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-form-group>
              </b-col>
              <b-col cols="3">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-input class="input-box" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-form-group>
              </b-col>
              <b-col cols="3">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-input class="input-box" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-form-group>
              </b-col>
              <b-col cols="3">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-input class="input-box" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-form-group>
              </b-col>
            </b-form-row>
            <label for="inputFormatter">DATE OF BIRTH</label>
            <b-form-row>
              <b-col cols="3">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-select class="input-box" v-model="selected" :options="options" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-select>
                  </b-form-group>
                </b-form-group>
              </b-col>
              <b-col cols="4">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-select class="input-box" v-model="selected" :options="options" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-select>
                  </b-form-group>
                </b-form-group>
              </b-col>
              <b-col cols="3">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-select class="input-box" v-model="selected" :options="options" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-select>
                  </b-form-group>
                </b-form-group>
              </b-col>
            </b-form-row>
            <label for="inputFormatter">SECURITY CODE</label>
            <b-form-row>
              <b-col cols="12">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-input class="input-box" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-form-group>
              </b-col>
            </b-form-row>
            <label for="inputFormatter">ACCESS CODE</label>
            <b-form-row>
              <b-col cols="12">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-input class="input-box" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-form-group>
              </b-col>
            </b-form-row>
            <div class="control-right">
              <b-button  variant="success">CONTINUE</b-button>
            </div>
          </b-form>
        </b-tab>
        <b-tab title="FORGOTTEN DETAILS" active>

          <b-form>
            <label for="inputFormatter">CARD NUMBERS</label>
            <b-form-row>
              <b-col cols="3">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-input class="input-box" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-form-group>
              </b-col>
              <b-col cols="3">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-input class="input-box" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-form-group>
              </b-col>
              <b-col cols="3">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-input class="input-box" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-form-group>
              </b-col>
              <b-col cols="3">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-input class="input-box" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-form-group>
              </b-col>
            </b-form-row>
            <label for="inputFormatter">DATE OF BIRTH</label>
            <b-form-row>
              <b-col cols="3">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-select class="input-box" v-model="selected" :options="options" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-select>
                  </b-form-group>
                </b-form-group>
              </b-col>
              <b-col cols="4">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-select class="input-box" v-model="selected" :options="options" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-select>
                  </b-form-group>
                </b-form-group>
              </b-col>
              <b-col cols="3">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-select class="input-box" v-model="selected" :options="options" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-select>
                  </b-form-group>
                </b-form-group>
              </b-col>
            </b-form-row>
            <label for="inputFormatter">MEMORABLE WORD</label>
            <b-form-row>
              <b-col cols="12">
                <b-form-group>
                  <b-form-group id="exampleInputGroup1" label="" label-for="exampleInput1" description="">
                    <b-form-input class="input-box" size="lg" id="exampleInput1" type="email" required placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-form-group>
              </b-col>
            </b-form-row>
            
           
            <div class="control-right">
              <b-button  variant="success">CONTINUE</b-button>
            </div>
          </b-form>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        selected: null,
        options: [{
            value: '',
            text: '---'
          },
          {
            value: 'a',
            text: '2'
          },
          {
            value: 'b',
            text: '3'
          }
        ]
      };
    },
    components: {},
    methods: {},
    created() {}
  };
</script>

<style scoped>
  .login-section {
    margin-top: 100px;
    width: 400px;
    /* min-height: 525px; */
    background: rgba(0, 85, 75, 0.8);
    padding: 15px;
    color: #a1a1a1;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    -webkit-box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.3);
    box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.3);
  }
  .login-section .card-section {
    background-color: transparent;
    border: none;
    outline: none;
  }
  label {
    font-size: 14px;
    color: #fff;
    font-weight: 400;
  }

  .control-right{
    text-align: right;
  }
  .control-right .btn-success{
    background-image: -webkit-gradient(linear,left 0,left 100%,from(#009688),to(#007a6c));
    background-image: -webkit-linear-gradient(top,#009688,0%,#007a6c,100%);
    background-image: -moz-linear-gradient(top,#009688 0,#007a6c 100%);
    background-image: -o-linear-gradient(top,#009688 0,#007a6c 100%);
    background-image: -o-gradient(linear,left 0,left 100%,from(#009688),to(#007a6c));
    background-image: linear-gradient(to bottom,#009688 0,#007a6c 100%);
    background-repeat: repeat-x;
    border: 0 solid;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff428bca',endColorstr='#ff3071a9',GradientType=0);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
    padding: 10px 45px;
    border-radius: 3px;
  }

  /* .tet{
    background-color: #000;
    
    
  } */
</style>

