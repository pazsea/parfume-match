import React, { Component, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import Truncate from 'react-truncate';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import { Section } from '../../styleConstants/section.js';
import * as a from '../../constants/actionTypes';

import * as s from './styles';
import StarRatingComponent from 'react-star-rating-component';
import parfume1 from '../../images/parfume1.jpg';
import noteslogo from '../../images/noteslogo.png';

class WardrobePage extends Component {
  state = {
    isTruncated: false,
    tabOpen: '',
    loading: true,
  };

  componentDidMount() {
    const {
      // firebase,
      authUser: { selectedCol },
      // authUser,
      myRating,
    } = this.props;

    this.setState({
      loading: false,
      myRating,
      subscription: Object.keys(selectedCol),
    });
    // firebase.wardrobe(authUser).on('value', snapshot => {
    //   const myRating = snapshot.val();
    //   if (myRating) {
    //     this.setState({ myRating });
    //   }
    // });

    // firebase
    //   .user(uid)
    //   .child('selectedCol')
    //   .once('value', snapshot => {
    //     const subCol = snapshot.val();
    //     if (subCol) {
    //       const subKey = Object.keys(subCol);
    //       this.setState({ loading: false, subscription: subKey });
    //     } else {
    //       this.setState({ loading: false });
    //     }
    //   });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.myRating !== this.props.myRating) {
      this.setState({ myRating: this.props.myRating });
    }
  }

  componentWillUnmount() {
    const {
      firebase,
      authUser: { uid },
    } = this.props;
    firebase.wardrobe(uid).off();
  }

  onStarClick(base, heart, top, nextValue, prevValue, name) {
    console.log(base);
    console.log(heart);
    console.log(top);

    console.log(nextValue);
    console.log(prevValue);

    console.log(name);

    const {
      firebase,
      authUser: { uid },
    } = this.props;

    // firebase
    //   .wardrobe(authUser)
    //   .child('ratedNotes')
    //   .once('value');

    firebase
      .wardrobe(uid)
      .child(name)
      .update({ rating: nextValue });
  }

  toggleTab = e => {
    const tabValue = e.target.value;
    this.setState({
      tabOpen: tabValue,
    });
  };

  toggleTruncate = () => {
    this.setState(prevState => ({
      isTruncated: !prevState.isTruncated,
    }));
  };

  render() {
    const {
      tabOpen,
      isTruncated,
      loading,
      subscription,
    } = this.state;
    if (loading) {
      return <p>Loading...</p>;
    } else if (!subscription) {
      return <p>Du har ingen aktiv prenumeration....</p>;
    } else {
      const subCollection = this.props.allCollections[subscription];

      return (
        <Section>
          <s.QuizTitle>
            <h1>Wardrobe</h1>
          </s.QuizTitle>
          {subCollection.slice(0, 3).map((item, index) => (
            <Fragment>
              <s.Wrapper>
                <s.ImageDiv>
                  <img alt="parfume bottle" src={parfume1} />
                </s.ImageDiv>
                <s.ParfumeDiv>
                  <s.ButtonDiv tabOpen={tabOpen} index={index}>
                    <button
                      value={'descriptionTab' + index}
                      onClick={e => this.toggleTab(e)}
                    >
                      Description
                    </button>
                    <button
                      value={'ratingTab' + index}
                      onClick={e => this.toggleTab(e)}
                    >
                      My Rating
                    </button>
                  </s.ButtonDiv>
                  <s.HeaderDiv>{item.name}</s.HeaderDiv>
                  <s.StarsDiv>
                    <StarRatingComponent
                      shit={item.base_note_id}
                      key={item.name + index}
                      name={item.name}
                      starCount={5}
                      bubbles={item.base_note_id}
                      value={
                        this.state.myRating
                          ? this.state.myRating[item.name] &&
                            this.state.myRating[item.name].rating
                            ? this.state.myRating[item.name].rating
                            : 0
                          : 0
                      }
                      onStarClick={this.onStarClick.bind(
                        this,
                        item.base_note_id,
                        item.heart_note_id,
                        item.top_note_id,
                      )}
                    />
                  </s.StarsDiv>
                  <s.NotesDiv>
                    <img src={noteslogo} />
                    {item.base_note_id}, {item.top_note_id},{' '}
                    {item.heart_note_id}
                  </s.NotesDiv>

                  {tabOpen === 'ratingTab' + index ? (
                    <RatingWrapper
                      name={item.name}
                      firebase={this.props.firebase}
                      authUser={this.props.authUser.uid}
                      textFirebase={
                        this.state.myRating &&
                        this.state.myRating[item.name].ownDesc
                          ? this.state.myRating[item.name].ownDesc
                          : ''
                      }
                      tabOpen={tabOpen}
                    />
                  ) : (
                    <DescriptionWrapper
                      isTruncated={isTruncated}
                      toggleTruncate={this.toggleTruncate}
                      tabOpen={tabOpen}
                    />
                  )}
                </s.ParfumeDiv>
              </s.Wrapper>
            </Fragment>
          ))}
        </Section>
      );
    }
  }
}

function DescriptionWrapper({ toggleTruncate, isTruncated }) {
  return (
    <s.DescriptionDiv>
      <Truncate
        lines={isTruncated ? 0 : 9}
        ellipsis={
          <span>
            ... <a onClick={toggleTruncate}> Read more</a>
          </span>
        }
      >
        2017 års stora lansering från parfymprofilen Pierre Guillaumes
        doftkollektion "Huitième Art" är en makalös splash av fruktiga
        ackord, träiga noter och mustiga kryddor. 2017 års stora
        lansering från parfymprofilen Pierre Guillaumes doftkollektion
        "Huitième Art" är en makalös splash av fruktiga ackord, träiga
        noter och mustiga kryddor.
        <br />
        Att du inom kort känner att du bara måste duscha dig i Aqaysos
        är inte otänkbart. Blir detta doften som förändrar ditt liv?
      </Truncate>
    </s.DescriptionDiv>
  );
}

function RatingWrapper({ name, textFirebase, firebase, authUser }) {
  const [editText, setEditText] = useState(textFirebase);

  const textChange = e => {
    const text = e.target.value;
    setEditText(text);
  };

  const descriptionSubmit = event => {
    event.preventDefault();

    firebase
      .wardrobe(authUser)
      .child(name)
      .update({ ownDesc: editText });
  };

  return (
    <Fragment>
      <s.RatingForm onSubmit={e => descriptionSubmit(e)}>
        <s.RatingBox
          type="text"
          className="ratingBox"
          value={editText}
          onChange={e => textChange(e)}
        />

        <s.RatingButton
          className="ratingButton"
          type="submit"
          value="Submit"
        />
      </s.RatingForm>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  myRating: state.wardrobeState.myWardrobe,
  authUser: state.sessionState.authUser,
  allCollections: state.sortedParfumesState,
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
