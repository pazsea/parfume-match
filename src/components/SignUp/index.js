import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { SignUpFormDiv, CheckboxDiv } from './styles';
import { LandingDiv } from '../Landing/styles';
import '../../pretty-checkbox.min.css';

class SignUpPage extends React.Component {
  render() {
    const { mediumSize, smallSize } = this.props;

    return (
      <LandingDiv>
        <SignUpFormDiv small={smallSize} medium={mediumSize}>
          <SignUpForm />
        </SignUpFormDiv>
      </LandingDiv>
    );
  }
}

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
  completedQuiz: false,
  publicWardrobe: false,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const {
      username,
      email,
      passwordOne,
      isAdmin,
      completedQuiz,
      publicWardrobe,
    } = this.state;
    const roles = [];

    if (isAdmin) {
      roles.push(ROLES.ADMIN);
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          roles,
          publicWardrobe,
          completedQuiz,
        });
      })
      // .then(() => {
      //   return this.props.firebase.doSendEmailVerification();
      // })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
      publicWardrobe,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <div className="container-input">
          <input
            name="username"
            className="input100"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
          <span className="focus-input100" data-symbol="&#xf207;" />
        </div>
        <div className="container-input">
          <input
            name="email"
            className="input100"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />

          <span className="focus-input100" data-symbol="&#xf15a;" />
        </div>
        <div className="container-input">
          <input
            name="passwordOne"
            className="input100"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />

          <span className="focus-input100" data-symbol="&#xf191;" />
        </div>
        <div className="container-input">
          <input
            name="passwordTwo"
            className="input100"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
          <span className="focus-input100" data-symbol="&#xf191;" />
        </div>
        <br />
        <CheckboxDiv>
          <div className="pretty p-default">
            <input
              name="isAdmin"
              type="checkbox"
              checked={isAdmin}
              onChange={this.onChangeCheckbox}
            />
            <div className="state p-success">
              <i className="icon mdi mdi-check" />
              <label>Admin</label>
            </div>
          </div>
          <div className="pretty p-default">
            <input
              name="publicWardrobe"
              type="checkbox"
              checked={publicWardrobe}
              onChange={this.onChangeCheckbox}
            />
            <div className="state p-success">
              <i className="icon mdi mdi-check" />
              <label>Public</label>
            </div>
          </div>
        </CheckboxDiv>

        <br />
        <button disabled={isInvalid} type="submit">
          SIGN UP
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const mapStateToProps = state => ({
  bigSize: state.screenSizeState.bigSize,
  mediumSize: state.screenSizeState.mediumSize,
  smallSize: state.screenSizeState.smallSize,
});

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default compose(connect(mapStateToProps))(SignUpPage);

export { SignUpForm, SignUpLink };
