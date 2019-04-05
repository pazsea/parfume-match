import styled, { css } from 'styled-components';

// https://github.com/jonsuh/hamburgers/blob/master/dist/hamburgers.css  <-- Check if needed.

export const openNav = 'hamburger hamburger--spring is-active';

export const closeNav = 'hamburger hamburger--spring';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;

  ul {
    list-style: none;
    border: 2px solid red;
    display: flex;
    min-width: 30%;

    li {
    }
  }

  button:nth-child(1) {
  }
`;

export const Cart = styled.button``;
