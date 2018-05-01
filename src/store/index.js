import Vue from 'vue';
import Vuex from 'vuex';
// import * as accountActions from './actions/search/account-search';
// import * as sharedActions from './shared/actions';
// import sidebarItems from './modules/sidebar';

import * as account from './actions/footer/footer'
// import shared from './shared/sharedFiles';
 import footer from './modules/footer/footer';
 import createLogger from '../plugins/logger';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    account,
  modules: {
    footer
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

if (module.hot) {
  module.hot.accept([
    './actions/footer/footer',
    
    './modules/footer/footer',
 
    '../plugins/logger'
  ], () => {
    store.hotUpdate({
      account: require('./actions/footer/footer'),
      // sidebarItems: require('./modules/sidebar'),
      footer: require('./modules/footer/footer'),
      createLogger: require('../plugins/logger'),
      // sharedActions: require('./shared/actions'),
      // shared: require('./shared/sharedFiles')
    })
  })
}

export default store
