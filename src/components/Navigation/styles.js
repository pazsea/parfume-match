import styled, { css } from 'styled-components';

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
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    width: 5%;
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
        width: 60%;
      `}
    li {
      margin-left: 5%;
    }
  }

  button:nth-child(1) {
  }
`;

export const Cart = styled.button``;

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
  background: rgba(255, 255, 255, 0.9);

  ${props =>
    props.isActive &&
    css`
      transform: translateX(0);
    `}

  text-align: center;
  ul {
    opacity: 1;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
