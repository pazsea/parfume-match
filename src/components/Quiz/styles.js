import React from 'react';
import styled from 'styled-components';
import { quizStep2GiveMeSomething } from '../../images/quizStep2GiveMeSomething.jpg';

export const SlideWrapper = styled.div`
  background: lightcoral;
  height: 100vh;
  width: auto;
  background-repeat: no-repeat;
`;

export const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.563;
`;

export const FlexContainerRow = styled.div`
  border: 1px orange solid;
  display: flex;
  flex-direction: column;

  line-height: 1.563;
`;

export const FlexLeftContainer = styled.div`
  border: 1px red solid;
`;

export const FlexRightContainer = styled.div`
  border: 1px blue solid;
`;

export const QuizTitle = styled.div`
  text-align: center;
  letter-spacing: 0;
  font-weight: 900;
  font-size: 1em;
`;
export const QuizSubTitle = styled.div`
  text-align: center;
  letter-spacing: 0;
  font-weight: 300;
  font-size: 1em;
`;

export const QuizIntroText = styled.div`
  text-align: center;
  padding-bottom: 2rem;
  font-family: 'PT Serif';
  font-weight: 300;
  font-size: 16px;
`;

export const ImageFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  img {
    padding-bottom: 15px;
    width: 80%;
  }
`;

export const ImageText = styled.div`
  /* border: 1px solid green; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const RelativeContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;

  :hover {
    opacity: 0.8;
  }
`;

export const TextInsideImage = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
`;

export const QuizIntroButton = styled.div`
  text-align: center;
  text-transform: uppercase;
  button {
    background-color: black;
    border: none;
    color: white;
    padding: 15px 32px;
    font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue',
      sans-serif;

    font-weight: bold;
    color: white;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    font-size: 16px;
    a:visited {
      text-decoration: none;
      color: white;
    }
    a:link {
      text-decoration: none;
      color: white;
    }
  }
`;
