import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import { QuizTitle, QuizSubTitle } from './styles';

class WardrobePage extends Component {
  render() {
    return (
      <div>
        <QuizTitle>
          <h1>Wardrobe</h1>
        </QuizTitle>
        <QuizSubTitle>
          <p>This is the Wardrobe</p>
        </QuizSubTitle>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userState.users,
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: 'USERS_SET', users }),
});

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withAuthorization(condition),
)(WardrobePage);
