// import React from 'react';
import styled from 'styled-components';

export const SignInFormDiv = styled.form`
  padding: 1% 1% 1% 1%;
  text-align: center;
  flex: 0.33;

  border: 2px solid yellow;
  border-radius: 10px;
  background: white;
  h1 {
    text-align: center;
    font-weight: 80;
  }

  .container-input {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #d9d9d9;
  }

  .input100 {
    font-size: 16px;
    color: #333333;
    display: block;
    width: 88%;
    height: 55px;
    background: transparent;
    padding: 0 7px 0 43px;
  }

  input {
    outline: none;
    border: none;
  }

  input:focus {
    border-color: transparent !important;
  }

  input:focus::-webkit-input-placeholder {
    color: transparent;
  }
  input:focus:-moz-placeholder {
    color: transparent;
  }
  input:focus::-moz-placeholder {
    color: transparent;
  }
  input:focus:-ms-input-placeholder {
    color: transparent;
  }

  input::-webkit-input-placeholder {
    color: #adadad;
  }
  input:-moz-placeholder {
    color: #adadad;
  }
  input::-moz-placeholder {
    color: #adadad;
  }
  input:-ms-input-placeholder {
    color: #adadad;
  }
  .focus-input100 {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  .focus-input100::after {
    content: attr(data-symbol);
    font-family: Material-Design-Iconic-Font;
    color: #adadad;
    font-size: 22px;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    bottom: 0;
    left: 0;
    padding-left: 13px;
    padding-top: 3px;
  }

  .focus-input100::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: lightskyblue;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .input100:focus + .focus-input100::before {
    width: 100%;
  }

  .has-val.input100 + .focus-input100::before {
    width: 100%;
  }

  .input100:focus + .focus-input100::after {
    color: lightskyblue;
  }

  .has-val.input100 + .focus-input100::after {
    color: lightskyblue;
  }

  button {
    width: 100%;
    margin-top: 15%;
    border-radius: 25px;
    padding: 10px;
    background: #3b5998;
    color: white;
    border: none;
  }
`;

export const SignInSocialMediaDiv = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  .social-items {
    font-size: 15px;
    color: #fff;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 5px;
  }

  .social-items:hover {
    color: #fff;
    background-color: #333333;
  }
  .bg1 {
    background-color: #3b5998;
  }
  .bg2 {
    background-color: #1da1f2;
  }
  .bg3 {
    background-color: #ea4335;
  }
  button {
    border: none;
    cursor: pointer;
  }
`;
