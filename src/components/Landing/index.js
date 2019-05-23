import React from 'react';
import { connect } from 'react-redux';
import { LandingDiv } from './styles';
import SignInPage from '../SignIn/';
import Profile from '../Profile';

function Landing({ authUser }) {
  if (!authUser) {
    return (
      <LandingDiv>
        <SignInPage />
      </LandingDiv>
    );
  } else {
    return <Profile />;
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Landing);
