import Web3 from "web3";
const WEB3_INITIALIZING = "WEB3_INITIALIZING";
const WEB3_SUCCESS = "WEB3_SUCCESS";
const WEB3_FAIL = "WEB3_FAIL";
const USER_ADDRESS = "USER_ADDRESS";

export function web3Initialized(web3) {
  return {
    type: WEB3_SUCCESS,
    payload: web3
  };
}

export function getUserAddress(acc) {
  return {
    type: USER_ADDRESS,
    payload: acc
  };
}

export function web3Initializing(str) {
  return {
    type: WEB3_INITIALIZING
  };
}

export function web3fail() {
  return {
    type: WEB3_FAIL
  };
}

export const getWeb3 = () => async dispatch => {
  dispatch(web3Initializing());
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== "undefined") {
    // Use Mist/MetaMask's provider.
    const web3 = new Web3(window.web3.currentProvider);
    dispatch(web3Initialized(web3));
    const acc = await web3.eth.getAccounts();
    dispatch(getUserAddress(acc));
  } else {
    dispatch(web3fail());
  }
};
