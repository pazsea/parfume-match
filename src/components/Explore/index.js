import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as s from './styles';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

class Explore extends Component {
  render() {
    return (
      <div>
        <s.Wrapper>
          <s.ImageDiv>
            <img />
          </s.ImageDiv>
          <s.ParfumeDiv>heeelo</s.ParfumeDiv>
        </s.Wrapper>
        <s.Wrapper>
          <s.ImageDiv>
            <img />
          </s.ImageDiv>
          <s.ParfumeDiv>heeelo</s.ParfumeDiv>
        </s.Wrapper>
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
)(Explore);
