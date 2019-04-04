import styled, { css } from 'styled-components';

// https://github.com/jonsuh/hamburgers/blob/master/dist/hamburgers.css  <-- Check if needed.

export const openNav = 'hamburger hamburger--spring is-active';

export const closeNav = 'hamburger hamburger--spring';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-height: 3.5em;
  border: solid 1px yellow;
  /* padding-right: 4%; */
  div {
    flex: 2;
  }
  ul {
    list-style: none;
    flex: 3;
    display: flex;
    visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
    width: ${props => (props.isActive ? '100%' : '0')};
    -webkit-transition: width 1s ease-in-out;
    -moz-transition: width 1s ease-in-out;
    -o-transition: width 1s ease-in-out;
    transition: width 1s ease-in-out;
    justify-content: flex-end;
    border: 1px solid red;
    height: 100%;

    /* 
    @keyframes flex-out {
      0% {
        color: rgba(0, 0, 0, 0);
        width: auto;
      }
      100% {
        color: rgba(0, 0, 0, 1);
        width: 200px;
      }
    }
    @keyframes flex-in {
      0% {
        color: rgba(0, 0, 0, 1);
        width: 200px;
      }
      100% {
        color: rgba(0, 0, 0, 0);
        width: auto;
      }
    }
    flex-out {
      -webkit-animation: flex-out 1s both;
      -moz-animation: flex-out 1s both;
      -ms-animation: flex-out 1s both;
      animation: flex-out 1s both;
    }
    flex-in {
      -webkit-animation: flex-in 1s both;
      -moz-animation: flex-in 1s both;
      -ms-animation: flex-in 1s both;
      animation: flex-in 1s both;
    } */
    li {
      padding-left: 0.5em;
    }
  }
  button {
    flex: 0.4;
    border: 1px solid green;
  }
`;
