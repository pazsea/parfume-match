// import React from 'react';
import styled, { css } from 'styled-components';

export const SignUpFormDiv = styled.div`
  padding: 8% 1% 1% 1%;
  text-align: center;
  flex: 0.33;
  margin: 1%;
  /* border: 2px solid black; */
  border-radius: 10px;
  background-color: none;
  ${props =>
    props.medium &&
    css`
      padding: 8% 1% 1% 1%;
      text-align: center;
      flex: 1;
      margin: 10% 20% 10% 20%;
      border-radius: 10px;
      background-color: none;
    `}
  ${props =>
    props.small &&
    css`
      padding: 20% 4% 6% 4%;
      text-align: center;
      flex: 1;
      margin: 1%;
      border-radius: 10px;
      background-color: none;
    `}
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
    border: 1px solid black;
    width: 40%;
    margin-top: 15%;
    border-radius: 25px;
    padding: 10px;
    background: #fbdee3;
    color: black;
    cursor: pointer;
    font-weight: 700;
  }
`;

export const CheckboxDiv = styled.div`
  padding-top: 3%;
  display: flex;
  justify-content: space-evenly;
`;
