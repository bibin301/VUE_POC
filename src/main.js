// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate';
import 'babel-polyfill';
import App from './App';
import router from './router';
import 'font-awesome/css/font-awesome.css';

import store from './store'

import { Modal } from 'bootstrap-vue/es/components';
import { Tabs } from 'bootstrap-vue/es/components';
import { Form } from 'bootstrap-vue/es/components';
import { FormGroup } from 'bootstrap-vue/es/components';
import { FormInput } from 'bootstrap-vue/es/components';
import VueValidate from 'vee-validate';

Vue.use(VueValidate);

Vue.use(FormInput)

Vue.use(FormGroup);

import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)

Vue.use(Form);
import { ButtonGroup } from 'bootstrap-vue/es/components';

Vue.use(ButtonGroup);
import { Collapse } from 'bootstrap-vue/es/components';
import { InputGroup } from 'bootstrap-vue/es/components';

Vue.use(InputGroup);
Vue.use(Collapse);
Vue.use(Tabs);
// import CSS files
import style from './assets/css/style.css';
import { Nav } from 'bootstrap-vue/es/components';

Vue.use(Nav);

Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(Modal);

export const serverBus = new Vue();
// const i18n = new VueI18n(i18Config);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,

  router,
  template: '<App/>',
  components: { App }
})