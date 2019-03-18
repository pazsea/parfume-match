import React, { Component } from "react";
import { connect } from "react-redux";
import { getList } from "./company-list.actions.js";
import { Spinner } from "../../common/spinner/spinner";

class CompanyList extends Component {
  // using componentDidUpdate because we need to wait for the web3 container
  // to mount and fetch web3 before trying to get the contract instance in this
  // container
  componentDidUpdate(prevProps) {
    const { web3, getList } = this.props;
    // checking props to avoid inf loop
    if (web3 !== prevProps.web3) {
      getList(web3);
    }
  }
  render() {
    const { names, companies, loading, error } = this.props;
    const list = () => {
      if (!names) {
        return null;
      } else if (error) {
        return (
          <div>
            There was an error connecting to the network. Please try again
            later..
          </div>
        );
      } else {
        // using the company address as key "0x1234567890"
        return names.map((name, index) => <p key={companies[index]}>{name}</p>);
      }
    };

    return (
      <div>
        <Spinner loading={loading} />
        {list()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    web3: state.web3.web3instance,
    companies: state.companyList.companies,
    names: state.companyList.names,
    loading: state.companyList.loading,
    error: state.companyList.error
  };
};

const mapDispatchToProps = {
  getList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyList);
