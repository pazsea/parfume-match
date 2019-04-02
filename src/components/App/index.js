import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import WardrobePage from '../Wardrobe';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

class App extends Component {
  state = {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  };
  componentDidMount() {
    // const { innerHeight, innerWidth } = this.state;
    this.handleResize();
    window.addEventListener('resize', () => {
      this.setState({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      });
      this.handleResize();
    });
  }

  handleResize() {
    const { innerHeight, innerWidth } = this.state;
    if (
      innerWidth <= 1024 &&
      innerWidth >= 768 &&
      innerHeight <= 1366 &&
      innerHeight >= 1024
    ) {
      this.props.setMediumSize();
    } else if (innerWidth < 768 && innerHeight < 1024) {
      this.props.setSmallSize();
    } else {
      this.props.setBigSize();
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />

          <Route
            exact
            path={ROUTES.LANDING}
            component={LandingPage}
          />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.WARDROBE} component={WardrobePage} />
        </div>
      </Router>
    );
  }
}

// mediumSizeFunction = dispatch => ({
//   dispatch({type: 'MEDIUM_SIZE'; })
// })

const mapDispatchToProps = dispatch => ({
  setBigSize: () => dispatch({ type: 'BIG_SIZE' }),
  setMediumSize: () => dispatch({ type: 'MEDIUM_SIZE' }),
  setSmallSize: () => dispatch({ type: 'SMALL_SIZE' }),
});

export default compose(
  withAuthentication,
  connect(
    null,
    mapDispatchToProps,
  ),
)(App);
