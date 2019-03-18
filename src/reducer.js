import { combineReducers } from "redux";

import web3Reducer from "./containers/web3/web3.reducer.js";
import { companyListReducer } from "./containers/company-list/company-list.reducer.js";

const reducer = combineReducers({
  web3: web3Reducer,
  companyList: companyListReducer
});

export default reducer;
