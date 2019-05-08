import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withAuthentication } from '../Session';

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
} from '../Quiz';

import QuestionSix from '../Quiz/QuestionSix';
import RecommendationsPage from '../Recommendation';
import WardrobePage from '../Wardrobe';
import * as a from '../../constants/actionTypes';
import * as ROUTES from '../../constants/routes';

class App extends Component {
  state = {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    parfumes: [],
  };
  componentWillMount() {
    if (!this.props.fetchCompleted) {
      this.props.startFetch();
    }
    this.handleResize();
    window.addEventListener('resize', () => {
      this.setState({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      });
      this.handleResize();
    });
  }

  componentDidMount() {
    this.props.firebase.users().on('value', snapshot => {
      this.props.onSetUsers(snapshot.val());
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
    this.props.firebase.user().off();
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
    const { authUser } = this.props;
    return (
      <Router>
        <div>
          {authUser && authUser.completedQuiz ? <Navigation /> : null}

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
          <Route
            path={ROUTES.WARDROBE}
            component={
              authUser && authUser.completedQuiz
                ? WardrobePage
                : QuizPage
            }
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  fetchCompleted: state.loadStatusState.stateFetched,
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: 'USERS_SET', users }),
  setSize: size => dispatch({ type: a.SIZE, size }),
  startFetch: () =>
    dispatch({
      type: a.STATE_FETCH,
    }),
});

// const condition = authUser => !!authUser;

export default compose(
  withAuthentication,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  // withAuthorization(condition),
)(App);
