import * as types from '../../mutation-types/footer/footer';
import * as actions from '../../actions/footer/footer';

// initial state
const state = {
    //createAccountMsg: '', -- post
    footerData: [] // get

  }



  // getters
const getters = {
 // createAccountSuccess: state => state.createAccountMsg, -- post
  footerData: state => state.footerData // for get
  }




  // mutations
const mutations = {
    
  //STO get
    [types.FOOTER_DATA](state, data, message) {
      console.log(data)
      // state.callerVerifyData = _head(_map(data, obj => _map(Object.keys(obj), item => _assign({
      //   key: item,
      //   value: obj[item]
      // }))));
      // state.modalInfo = {
      //   show: true
      // };
       state.footerData = data;
    },

    /// sto post
    // [types.CREATE_ACCOUNT_SEARCH_SUCCESS](state, message) {
    //   state.createAccountMsg = message;
    // },
    
  }



  export default {
    state,
    actions,
    getters,
    mutations
  }