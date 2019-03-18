import React, { Component } from "react";
import "./App.css";
import Web3 from "../containers/web3/web3.container";
import CompanyList from "../containers/company-list/company-list.container.js";
export default class App extends Component {
  render() {
    return (
      <div>
        <Web3 />
        <CompanyList />
      </div>
    );
  }
}
