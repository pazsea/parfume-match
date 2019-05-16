import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Section } from '../../styleConstants/section.js';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import Messages from '../Messages';
import Loading from '../Loading/index.js';

class HomePage extends Component {
  componentDidMount() {
    this.props.firebase.users().on('value', snapshot => {
      this.props.onSetUsers(snapshot.val());
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    return (
      <Section>
        <div>
          <h1>Home Page</h1>
          <p>The Home Page is accessible by every signed in user.</p>

          <Messages users={this.props.users} />
        </div>
      </Section>
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
)(HomePage);
