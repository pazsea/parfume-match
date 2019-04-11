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
import QuizPage, {
  QuestionOne,
  QuestionTwo,
  QuestionThree,
  QuestionFour,
  QuestionFive,
  QuestionSix,
} from '../Quiz';
import RecommendationsPage from '../Recommendation';
import WardrobePage from '../Wardrobe';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import Recommendation from '../Recommendation';

class App extends Component {
  state = {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  };
  componentWillMount() {
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

  componentWillUnmount() {
    console.log('ooout');
  }

  handleResize() {
    const { innerHeight, innerWidth } = this.state;
    if (
      innerWidth <= 1024 &&
      innerWidth >= 768 &&
      innerHeight <= 1366 &&
      innerHeight >= 1024
    ) {
      this.props.setSize('mediumSize');
    } else if (innerWidth < 768 && innerHeight < 1024) {
      this.props.setSize('smallSize');
    } else {
      this.props.setSize('bigSize');
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
          <Route path={ROUTES.QUIZ} component={QuizPage} />
          <Route path={ROUTES.QUESTIONONE} component={QuestionOne} />
          <Route path={ROUTES.QUESTIONTWO} component={QuestionTwo} />
          <Route
            path={ROUTES.QUESTIONTHREE}
            component={QuestionThree}
          />
          <Route
            path={ROUTES.QUESTIONFOUR}
            component={QuestionFour}
          />
          <Route
            path={ROUTES.QUESTIONFIVE}
            component={QuestionFive}
          />
          <Route path={ROUTES.QUESTIONSIX} component={QuestionSix} />
          <Route
            path={ROUTES.RECOMMENDATION}
            component={RecommendationsPage}
          />
          <Route path={ROUTES.WARDROBE} component={WardrobePage} />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setSize: size => dispatch({ type: 'SIZE', size }),
});

export default compose(
  withAuthentication,
  connect(
    null,
    mapDispatchToProps,
  ),
)(App);
