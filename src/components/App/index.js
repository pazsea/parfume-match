import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
// import QuestionOne from '../Quiz';
import WardrobePage from '../Wardrobe';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
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
      <Route path={ROUTES.QUESTIONTHREE} component={QuestionThree} />
      <Route path={ROUTES.QUESTIONFOUR} component={QuestionFour} />
      <Route path={ROUTES.QUESTIONFIVE} component={QuestionFive} />
      <Route path={ROUTES.QUESTIONSIX} component={QuestionSix} />
      <Route path={ROUTES.WARDROBE} component={WardrobePage} />
    </div>
  </Router>
);

export default withAuthentication(App);
