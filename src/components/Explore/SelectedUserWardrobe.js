import React, { Component, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import Truncate from 'react-truncate';

import { compose } from 'recompose';
import { Section } from '../../styleConstants/section.js';
import StarRatingComponent from 'react-star-rating-component';
import noteslogo from '../../images/noteslogo.png';

import parfume1 from '../../images/parfume1.jpg';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import * as s from '../Wardrobe/styles';
class SelectedUserWardrobe extends Component {
  state = {
    isTruncated: false,
    tabOpen: '',
  };

  render() {
    const { tabOpen, isTruncated, loading } = this.state;

    const {
      users,
      userWardrobes,
      location: { id },
    } = this.props;

    if (users && userWardrobes && id) {
      const wardrobe = userWardrobes[id];
      const userWardrobeKeys = Object.keys(wardrobe);
      console.log(userWardrobeKeys);
      // console.log(subCollection.rating);

      return (
        <Section>
          <s.QuizTitle>
            <h1>Wardrobe</h1>
          </s.QuizTitle>
          {userWardrobeKeys.map((parfume, index) => (
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
                  <s.HeaderDiv>{wardrobe}</s.HeaderDiv>
                  <s.StarsDiv>
                    <StarRatingComponent
                      key={wardrobe + index}
                      name={wardrobe}
                      starCount={5}
                      editing={false}
                      value={parfume.rating ? parfume.rating : 0}
                    />
                  </s.StarsDiv>
                  <s.NotesDiv>
                    <img src={noteslogo} />
                    {parfume.base_note_id}, {parfume.top_note_id},{' '}
                    {parfume.heart_note_id}
                  </s.NotesDiv>

                  {tabOpen === 'ratingTab' + index ? (
                    <RatingWrapper
                      name={parfume}
                      textFirebase={
                        parfume.ownDesc ? parfume.ownDesc : ''
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
    } else {
      return <div>loading</div>;
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
        2017's great launch from the perfume profile Pierre
        Guillaume's fragrance collection "Huitième Art" is an
        incomparable splash of fruity chords, woody notes and rich
        spices. 2017's great launch from the perfume profile Pierre
        Guillaume's fragrance collection "Huitième Art" is an
        incomparable splash of fruity chords, woody notes and rich
        spices.
        <br />
        The fact that you soon feel that you just have to shower in
        Aqaysos is not unthinkable. Is this the scent that changes
        your life?
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
  users: state.userState.users,
  // topNotes: state.topNotesState,
  // authUser: state.sessionState.authUser,
  userWardrobes: state.userWardrobesState,
});

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  connect(mapStateToProps),
  withAuthorization(condition),
)(SelectedUserWardrobe);
