import styled, { css } from 'styled-components';
import { Cart } from 'styled-icons/boxicons-regular/Cart';
// https://github.com/jonsuh/hamburgers/blob/master/dist/hamburgers.css  <-- Check if needed.

export const openNav = 'hamburger hamburger--spring is-active';

export const closeNav = 'hamburger hamburger--spring';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  top: 0;
  position: sticky;
  width: 100%;

  ul {
    list-style: none;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    width: 0%;
    padding: 0;
    margin: 0;
    justify-content: flex-end;
    transition-property: width;
    transition-duration: 500ms;
    overflow-y: hidden;
    white-space: nowrap;

    ${props =>
      props.isActive &&
      css`
        width: 100%;
      `}
    li {
      margin-left: 2%;
      /* border: 1px solid red; */
      a {
        text-decoration: none;
        color: black;
      }
    }
  }

  button:nth-child(1) {
    border: none;
    background: none;

    /* border: 1px solid red; */
  }
`;

export const CartBtn = styled.button`
  /* display: flex; */
  align-self: center;

  border: none;
  background: none;
  /* width: 2.6rem;
  height: 1.125rem; */
  /* padding: 1px 7px 2px 7px; */
  /* border: 1px solid red; */
`;

export const Carts = styled(Cart)`
  /* align-self: center; */
  width: 2.35rem;
  height: 2.35rem;
  padding-bottom: 0.3rem;
  padding-right: 0.5rem;
  font-weight: lighter;
`;

//MOBILE NAV

export const MobileNav = styled.nav`
  button {
    top: 0;
    right: 0;
    position: fixed;
    z-index: 100;
    color: black;
  }
`;

export const NavDiv = styled.div`
  transform: translateY(-120%);
  transition: transform 0.4s ease-out;
  /* z-index: 50000; */
  /* border: 1px solid red; */
  background: white;
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);

  ${props =>
    props.isActive &&
    css`
      transform: translateX(0);
    `}

  text-align: center;
  ul {
    /* opacity: 1; */
    list-style: none;
    margin: 0;
    padding: 0;
    padding-top: 0.9rem;

    li a {
      text-decoration: none;
      color: black;
    }
  }
`;

export const MobileCart = styled.button`
  border: none;
  right: 0;
  top: 0;
  background: none;
  z-index: 100;
  position: fixed;
  margin-right: 2.2rem;
  margin-top: 0.54rem;
`;
