import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../images/placeholder.png';

import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as s from './styles';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';

class Explore extends Component {
  state = {
    stateFetched: false,
  };

  // componentDidMount() {
  //   console.log('CDM ran');
  //   const {
  //     authUser: { uid },
  //     topNotes,
  //   } = this.props;
  //   if (this.state.stateFetched === true) {
  //     console.log('STARTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
  //     const { [uid]: myNotes, ...otherNotes } = topNotes.notes;

  //     this.setState({
  //       wardrobeMatches: getTopWardrobes(myNotes, otherNotes),
  //       loading: false,
  //     });
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   console.log('CDU ran');
  //   const { topNotes } = this.props;
  //   if (prevProps.topNotes !== topNotes) {
  //     console.log('KOMPONENTEN UPPTÄCKTE UPPDATERING');
  //     this.setState({ stateFetched: true });
  //   }
  // }

  render() {
    const { recommendedWardrobes, users, userWardrobes } = this.props;
    return (
      <div>
        <s.QuizTitle>
          <h1>Explore Wardrobes</h1>
        </s.QuizTitle>
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
          <p>Du har inte betygsatt någon parfym än...</p>
        )}
      </div>
      // <div>
      //   <s.Wrapper>
      //     <s.ImageDiv>
      //       <img />
      //     </s.ImageDiv>
      //     <s.ParfumeDiv>
      //       <s.TextBox>heeelo</s.TextBox>

      //       <s.UserWardrobeButton>
      //         Se USER Wardrobe
      //       </s.UserWardrobeButton>
      //     </s.ParfumeDiv>
      //   </s.Wrapper>
      //   <s.Wrapper>
      //     <s.ImageDiv>
      //       <img />
      //     </s.ImageDiv>
      //     <s.ParfumeDiv>heeelo</s.ParfumeDiv>
      //   </s.Wrapper>
      // </div>
    );
  }
}

function UserWardrobe({
  user: { username, profilePic },
  id,
  authUser,
}) {
  return (
    <Fragment>
      <s.Wrapper>
        <s.ImageDiv>
          <img src={profilePic ? profilePic.url : placeholder} />
        </s.ImageDiv>
        <s.ParfumeDiv>
          <s.TextBox>
            <h3>{username}'s wardrobe </h3>
            Case had never seen him wear the same suit twice, although
            his wardrobe seemed to consist entirely of meticulous
            reconstruction’s of garments of the car’s floor. Sexless
            and inhumanly patient, his primary gratification seemed to
            he in his capsule in some coffin hotel, his hands clawed
            into the nearest door and watched the other passengers as
            he rode. None of that prepared him for the arena, the
            crowd, the tense hush, the towering puppets of light from
            a half-open service hatch framed a heap of discarded fiber
            optics and the corners he’d cut in Night City, and still
          </s.TextBox>

          <s.ButtonWrapper>
            <Link
              id="link"
              to={{
                pathname: ROUTES.SELECTEDUSERWARDROBE,
                id,
              }}
            >
              SEE {username.toUpperCase()}'S WARDROBE
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
