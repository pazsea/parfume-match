import React, { Component } from "react";
import { getWeb3 } from "./web3.actions";
import { connect } from "react-redux";
import { Spinner } from "../../common/spinner/spinner";

class Web3 extends Component {
  componentDidMount() {
    this.props.getWeb3();

    //  getAccounts(this.props.web3);
  }
  render() {
    // 3 case: loading, web3Err or success
    const { loading, web3Err, userAddress } = this.props;
    let comp = (
      <div>
        <h3>Web3 Detected!</h3>
        <p>Your current address is {userAddress}</p>
      </div>
    );
    if (web3Err) comp = <div>Please install metamask</div>;

    return (
      <div>
        <Spinner loading={loading} />
        {comp}
      </div>
    );
  }
}

// map state to the props
function mapStateToProps(state) {
  return {
    web3: state.web3.web3instance,
    userAddress: state.web3.address,
    loading: state.web3.loading,
    web3Err: state.web3.web3Err
  };
}
const mapDispatchToProps = dispatch => {
  return {
    getWeb3: str => {
      dispatch(getWeb3(str));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Web3);
