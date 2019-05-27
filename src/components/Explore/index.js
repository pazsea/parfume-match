import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../images/placeholder.png';
import * as profileStyle from '../Profile/styles';
import happypeople from '../../images/happypeople.jpg';

import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as s from './styles';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import Loading from '../Loading';

import * as ROUTES from '../../constants/routes';

class Explore extends Component {
  state = {
    stateFetched: false,
  };

  render() {
    const { recommendedWardrobes, users, userWardrobes } = this.props;
    return (
      <div>
        <profileStyle.Header headerImage={happypeople}>
          <s.TitleCenter>
            <h1>Upptäck dina parfym vänner</h1>
          </s.TitleCenter>
        </profileStyle.Header>
        {recommendedWardrobes && users && userWardrobes ? (
          recommendedWardrobes.map(uid => (
            <UserWardrobe
              key={uid}
              id={uid}
              user={users[uid]}
              wardrobe={userWardrobes[uid]}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

function UserWardrobe({
  user: { username, profilePic, ownDesc },
  id,
}) {
  return (
    <Fragment>
      <s.Wrapper>
        <s.ImageDiv>
          <img
            alt={username + ' profile pic'}
            src={profilePic ? profilePic.url : placeholder}
          />
        </s.ImageDiv>
        <s.ParfumeDiv>
          <s.TextBox>
            <h3>{username}'s garderob </h3>
            {ownDesc ||
              'Tyvärr så har inte ' +
                username +
                ' skrivit en beskrivning på sin doftprofil än.'}
          </s.TextBox>

          <s.ButtonWrapper>
            <Link
              id="link"
              to={{
                pathname: ROUTES.SELECTEDUSERWARDROBE,
                id,
              }}
            >
              SE {username.toUpperCase()}'S GARDEROB
            </Link>
          </s.ButtonWrapper>
        </s.ParfumeDiv>
      </s.Wrapper>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  users: state.userState.users,
  recommendedWardrobes: state.recommendedWardrobesState,
  userWardrobes: state.userWardrobesState,
});

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  connect(mapStateToProps),
  withAuthorization(condition),
)(Explore);
