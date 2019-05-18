import React, { Component, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import Truncate from 'react-truncate';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import { Section } from '../../styleConstants/section.js';
import { calculatePoints } from '../../constants/functions';

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
      authUser: { selectedCol },
      myRating,
    } = this.props;

    this.setState({
      loading: false,
      myRating,
      subscription: selectedCol
        ? Object.keys(selectedCol)
        : selectedCol,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.myRating !== this.props.myRating ||
      prevProps.authUser !== this.props.authUser
    ) {
      this.setState({
        myRating: this.props.myRating,
        subscription: this.props.authUser.selectedCol
          ? Object.keys(this.props.authUser.selectedCol)
          : this.props.authUser.selectedCol,
      });
    }
  }

  componentWillUnmount() {
    const {
      firebase,
      authUser: { uid },
    } = this.props;
    firebase.wardrobe(uid).off();
  }

  newValue(note, value) {
    const { myRating } = this.props;

    if (myRating) {
      if (myRating.ratedNotes) {
        if (myRating.ratedNotes[note]) {
          if (value > 0) {
            const add = parseInt(myRating.ratedNotes[note] + value);
            return add;
          } else if (value < 0) {
            const subtract = parseInt(
              myRating.ratedNotes[note] + value,
            );
            return subtract;
          }
        }
      } else {
        return value;
      }
    } else {
      return value;
    }
  }

  onStarClick(base, heart, top, nextValue, prevValue, name) {
    const {
      firebase,
      authUser: { uid },
    } = this.props;

    const clickedPoints = calculatePoints(nextValue, prevValue);

    // const existingNotes = incomingNotes.map(existingNote => {
    //   if (existingNote && ratedNotes[existingNote]) {
    //     if (Math.sign(clickedPoints) === 1) {
    //       return ratedNotes[existingNote] + clickedPoints;
    //     } else if (Math.sign(clickedPoints) === -1) {
    //       return ratedNotes[existingNote]- clickedPoints;
    //     }
    //   }
    // });

    // const shit = ratedNotes
    //   ? ratedNotes.map(note => {
    //       if (note[name]) {
    //         if (Math.sign(clickedPoints) === 1) {
    //           return note[name] + clickedPoints;
    //         } else if (Math.sign(clickedPoints) === -1) {
    //           return note[name] - clickedPoints;
    //         }
    //       } else {
    //         return clickedPoints;
    //       }
    //     })
    //   : null;

    // const ba = this.newValue(base, clickedPoints);
    // const he = this.newValue(heart, clickedPoints);
    // const to = this.newValue(top, clickedPoints);

    // console.log(ba, he, to);
    firebase
      .wardrobe(uid)
      .update({
        ratedNotes: {
          [base]: this.newValue(base, clickedPoints),
          [heart]: this.newValue(heart, clickedPoints),
          [top]: this.newValue(top, clickedPoints),
        },
      })
      .then(
        firebase
          .wardrobe(uid)
          .child(name)
          .update({
            rating: nextValue,
          }),
      );
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
