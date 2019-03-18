const GET_FACTORY_INSTANCE = "GET_FACTORY_INSTANCE";
const GET_COMPANY_LIST = "GET_COMPANY_LIST";
const GET_COMPANY_NAMES = "GET_COMPANY_NAMES";
const STARTING_REQUEST = "STARTING_REQUEST";
const REQUEST_FAIL = "REQUEST_FAIL";
const initialState = {
  factoryInstance: null,
  companies: [],
  loading: false,
  counter: 0,
  names: [],
  error: false
};

export const companyListReducer = (state = initialState, action) => {
  switch (action.type) {
    case STARTING_REQUEST:
      return Object.assign({}, state, { loading: true });
    case GET_FACTORY_INSTANCE:
      return Object.assign({}, state, { factoryInstance: action.payload });
    case GET_COMPANY_LIST:
      return Object.assign({}, state, { companies: action.payload });
    case GET_COMPANY_NAMES:
      return Object.assign({}, state, {
        names: action.payload,
        loading: false
      });
    case REQUEST_FAIL:
      return Object.assign({}, state, {
        loading: false,
        error: true
      });

    default:
      return state;
  }
};
