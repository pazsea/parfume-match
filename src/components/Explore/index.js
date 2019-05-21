import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as s from './styles';

import { getTopWardrobes } from '../../constants/functions';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

class Explore extends Component {
  state = {
    stateFetched: false,
    loading: true,
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
    const { loading } = this.state;
    if (loading) {
      return <p>LOADING....</p>;
    } else {
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
}

const mapStateToProps = state => ({
  users: state.userState.users,
  topNotes: state.topNotesState,
  authUser: state.sessionState.authUser,
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
