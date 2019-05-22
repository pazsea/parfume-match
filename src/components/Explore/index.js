import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

function UserWardrobe({ user: { username }, id }) {
  return (
    <s.Wrapper>
      <s.ImageDiv>
        <img />
      </s.ImageDiv>
      <s.ParfumeDiv>
        <s.TextBox>
          <h3>See {username}'s wardrobe </h3>
          <br />
        </s.TextBox>

        <s.UserWardrobeButton>
          <Link
            to={{
              pathname: ROUTES.SELECTEDUSERWARDROBE,
              id,
            }}
          >
            Se USER Wardrobe {id}
          </Link>
        </s.UserWardrobeButton>
      </s.ParfumeDiv>
    </s.Wrapper>
  );
}

const mapStateToProps = state => ({
  users: state.userState.users,
  // topNotes: state.topNotesState,
  // authUser: state.sessionState.authUser,
  recommendedWardrobes: state.recommendedWardrobesState,
  userWardrobes: state.userWardrobesState,
});

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  connect(mapStateToProps),
  withAuthorization(condition),
)(Explore);
