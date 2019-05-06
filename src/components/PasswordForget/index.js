import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import {
  PasswordForgetFormDiv,
  ForgetParagraphStyle,
} from './styles';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { LandingDiv } from '../Landing/styles';

class PasswordForgetPage extends React.Component {
  render() {
    const { mediumSize, smallSize } = this.props;

    return (
      <LandingDiv>
        <PasswordForgetFormDiv medium={mediumSize} small={smallSize}>
          <PasswordForgetForm />
        </PasswordForgetFormDiv>
      </LandingDiv>
    );
  }
}

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <div className="container-input">
          <input
            name="email"
            className="input100"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <span className="focus-input100" data-symbol="&#xf15a;" />
        </div>

        <button disabled={isInvalid} type="submit">
          RESET MY PASSWORD
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <ForgetParagraphStyle>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </ForgetParagraphStyle>
);

const mapStateToProps = state => ({
  bigSize: state.screenSizeState.bigSize,
  mediumSize: state.screenSizeState.mediumSize,
  smallSize: state.screenSizeState.smallSize,
});

export default compose(connect(mapStateToProps))(PasswordForgetPage);

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
