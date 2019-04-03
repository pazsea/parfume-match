import styled, { css } from 'styled-components';

// https://github.com/jonsuh/hamburgers/blob/master/dist/hamburgers.css  <-- Check if needed.

export const HamburgerButton = styled.button`
  top: -10px;
  right: 0;
  position: absolute;
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  :hover {
    opacity: 0.7;
  }
  :focus {
    outline: 0;
  }
  ${props =>
    props.isActive &&
    css`
      .hamburger-inner {
        transition-delay: 0.22s;
        background-color: transparent !important;
      }
      .hamburger-inner::before {
        top: 0;
        transition: top 0.1s 0.15s
            cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 10px, 0) rotate(45deg);
      }
      .hamburger-inner::after {
        top: 0;
        transition: top 0.2s
            cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 20px, 0) rotate(-45deg);
      }
      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        background-color: #000;
      }
    `}
  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
    top: 0;

    transition: background-color 0s 0.13s linear;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;

    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: '';
    display: block;
  }

  .hamburger-inner::before {
    top: 10px;
    transition: top 0.1s 0.2s
        cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger-inner::after {
    bottom: -20px;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }
`;
