import React from 'react';
import { LandingDiv } from './styles';
import SignInPage from '../SignIn/';

const Landing = ({ screenSizeState }) => (
  <LandingDiv>
    <SignInPage />
  </LandingDiv>
);

export default Landing;
