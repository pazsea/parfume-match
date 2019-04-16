import React from 'react';
import styled from 'styled-components';

export const QuizTitle = styled.div`
  text-align: center;
  letter-spacing: 0;
  font-weight: 900;
  font-size: 1em;
`;

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const ParfumeDiv = styled.div`
  margin: 1em;
  flex: 1;
  border: 1px solid green;
  min-height: 25rem;
  display: flex;
`;

export const ImageDiv = styled.div`
  margin: 1em;
  flex: 1;
  border: 1px solid red;
  display: flex;
  display: flex;
  justify-content: center;

  img {
    align-self: center;
  }
`;

export const RatingForm = styled.form`
  width: 100%;
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
