const WEB3_INITIALIZING = "WEB3_INITIALIZING";
const WEB3_SUCCESS = "WEB3_SUCCESS";
const WEB3_FAIL = "WEB3_FAIL";
const USER_ADDRESS = "USER_ADDRESS";

const initialState = {
  web3instance: null,
  web3Err: false,
  loading: false,
  address: "",
  balance: 0
};

const web3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case WEB3_INITIALIZING:
      return Object.assign({}, state, { loading: true });

    case WEB3_SUCCESS:
      return Object.assign({}, state, {
        web3instance: action.payload,
        loading: false,
        web3Err: false
      });
    case WEB3_FAIL:
      return Object.assign({}, state, {
        web3Err: true,
        loading: false
      });
    case USER_ADDRESS:
      return Object.assign({}, state, {
        address: action.payload,
        loading: false
      });

    default:
      return state;
  }
};

export default web3Reducer;
