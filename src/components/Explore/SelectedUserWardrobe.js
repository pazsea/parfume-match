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
    const { tabOpen, isTruncated } = this.state;

    const {
      users,
      userWardrobes,
      parfumesState,
      location: { id },
    } = this.props;

    if (users && userWardrobes && id) {
      const wardrobe = userWardrobes[id].parfumes;
      const userWardrobeKeys = Object.keys(wardrobe);
      const selectedCol = Object.keys(users[id].selectedCol);
      console.log(selectedCol);
      // console.log(subCollection.rating);

      return (
        <Section>
          <s.QuizTitle>
            <h1>
              {users ? users[id].username + '' : 'User'}'s Wardrobe
            </h1>
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
                      {users ? users[id].username + '' : 'User'}'s
                      Recension
                    </button>
                    <button
                      value={'ratingTab' + index}
                      onClick={e => this.toggleTab(e)}
                    >
                      Parfym Beskrivning
                    </button>
                  </s.ButtonDiv>
                  <s.HeaderDiv>{parfume}</s.HeaderDiv>
                  <s.StarsDiv>
                    <StarRatingComponent
                      key={parfume + index}
                      name={parfume}
                      starCount={5}
                      editing={false}
                      value={
                        wardrobe[parfume].rating
                          ? wardrobe[parfume].rating
                          : 0
                      }
                    />
                  </s.StarsDiv>
                  <s.NotesDiv>
                    <img src={noteslogo} />
                    {wardrobe[parfume].base},{' '}
                    {wardrobe[parfume].heart}, {wardrobe[parfume].top}
                  </s.NotesDiv>

                  {tabOpen === 'ratingTab' + index ? (
                    <DescriptionWrapper
                      isTruncated={isTruncated}
                      toggleTruncate={this.toggleTruncate}
                      tabOpen={tabOpen}
                    />
                  ) : (
                    <RatingWrapper
                      name={parfume}
                      textFirebase={
                        wardrobe[parfume].ownDesc
                          ? wardrobe[parfume].ownDesc
                          : ''
                      }
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

function RatingWrapper({ textFirebase }) {
  return (
    <Fragment>
      <s.RatingForm>
        <s.RatingBox
          type="text"
          className="ratingBox"
          value={textFirebase}
        />
      </s.RatingForm>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  users: state.userState.users,
  userWardrobes: state.userWardrobesState,
  parfumesState: state.sortedParfumesState,
});

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  connect(mapStateToProps),
  withAuthorization(condition),
)(SelectedUserWardrobe);
