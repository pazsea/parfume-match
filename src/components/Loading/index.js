import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import Messages from '../Messages';

class HomePage extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <p>Loading.....</p>
      </div>
    );
  }
}

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withAuthorization(condition),
)(HomePage);
