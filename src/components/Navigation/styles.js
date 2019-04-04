import styled, { css } from 'styled-components';
import posed from 'react-pose';

// https://github.com/jonsuh/hamburgers/blob/master/dist/hamburgers.css  <-- Check if needed.

export const openNav = 'hamburger hamburger--spring is-active';

export const closeNav = 'hamburger hamburger--spring';

export const NavUl = posed.ul({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
});

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  min-height: 3.5em;
  border: solid 1px yellow;

  ul {
    list-style: none;
    border: 2px solid red;
    flex: 20;
    justify-content: flex-end;
    margin: 0;
    padding: 0%;
    display: flex;
    li {
      padding-left: 0.5em;
    }
  }

  button:nth-child(1) {
    flex: 1;
    border: 1px solid green;
  }
`;

export const Cart = styled.button`
  flex: 2;
`;
