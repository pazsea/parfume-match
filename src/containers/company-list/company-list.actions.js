import { ABIFactory } from "../../ethereum/ABIs";
const STARTING_REQUEST = "STARTING_REQUEST";
const GET_FACTORY_INSTANCE = "GET_FACTORY_INSTANCE";
const GET_COMPANY_LIST = "GET_COMPANY_LIST";
const GET_COMPANY_NAMES = "GET_COMPANY_NAMES";
const REQUEST_FAIL = "REQUEST_FAIL";
const addressDeployedAt = "0x2fc08b4c210eefc3c3832578cedb19a54be721d4";

//actions
export const fetchCompanyList = arr => {
  return {
    type: GET_COMPANY_LIST,
    payload: arr
  };
};

export const fetchFactoryInstance = contract => {
  return {
    type: GET_FACTORY_INSTANCE,
    payload: contract
  };
};

export const fetchCompanyNamesSucess = response => {
  return {
    type: GET_COMPANY_NAMES,
    payload: response
  };
};

export const startRequest = () => {
  return {
    type: STARTING_REQUEST
  };
};
export const requestFailed = () => {
  return {
    type: REQUEST_FAIL
  };
};

// thunk
export const getList = web3 => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let arrOfPromise = [];
      const contract = new web3.eth.Contract(ABIFactory, addressDeployedAt);
      dispatch(fetchFactoryInstance(contract));
      const companies = await contract.methods.getCompanies().call();
      dispatch(fetchCompanyList(companies));
      companies.map(obj =>
        arrOfPromise.push(contract.methods.getName(obj).call())
      );
      const names = await Promise.all(arrOfPromise);
      dispatch(fetchCompanyNamesSucess(names));
    } catch (err) {
      dispatch(requestFailed());
    }
  };
};
