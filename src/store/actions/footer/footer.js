import axios from 'axios';
import * as types from '../../mutation-types/footer/footer';
import config from '../../../../config/server';


// export const fetchCurrencies = ({
//     commit
//   }) => axios.get(`${config.HOST}/currencies`)
//   .then(response => {
//     if (response.status == 200) {
//       commit(types.RECEIVE_CURRENCIES_SUCCESS, response.data, 'Currencies received successfully')
//     }
//   })


// simple get method
export const getFooterData = ({
    commit
  }) => axios.get(`${config.HOST}/footer`)
  .then(response => {
    if (response.status == 200) {
      commit(types.FOOTER_DATA, response.data, 'Caller verify received successfully')
      // types.RECEIVE_CALLER_VERIFY_DATA - there in mutation types
    }
  })

  //here commit is a default parameters 
  //accountReference - coming from component

  // 


  // post method

  // export const createAccountSearch = (store, values) => axios.post(`${config.HOST}/account-search`, values)
  // .then(response => {
  //   if (response.status == 201) {
  //     fetchTableData(store, 'account-search-results');
  //     store.commit(types.CREATE_ACCOUNT_SEARCH_SUCCESS, 'Data Added Successfully');
  //     return response;
  //   }
  // })

 
