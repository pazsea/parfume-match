import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Truncate from 'react-truncate';

import { compose } from 'recompose';
import { Section } from '../../styleConstants/section.js';
import StarRatingComponent from 'react-star-rating-component';
import noteslogo from '../../images/noteslogo.png';

import * as profileStyle from '../Profile/styles';
import sprayheader from '../../images/sprayheader.jpg';

import parfume1 from '../../images/parfume1.jpg';

import oceanic from '../../images/oceanic.jpg';
import tabaChoko from '../../images/tabachoko.jpg';
import cementRose from '../../images/cementrose.jpg';
import sideshow from '../../images/sideshow.png';
import darkSaphir from '../../images/darksaphir.jpg';
import coccobello from '../../images/Coccobello.jpg';
import rayOfLight from '../../images/rayoflight.png';
import louanges from '../../images/louangesprofanes.jpg';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import * as s from '../Wardrobe/styles';

const parfumePics = {
  'Oceanic Encre': oceanic,
  'Taba Choko': tabaChoko,
  'Cement Rose': cementRose,
  Sideshow: sideshow,
  'Dark Saphir': darkSaphir,
  Coccobello: coccobello,
  'Ray of Light': rayOfLight,
  'PG19 Louanges Profanes': louanges,
};
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
      location: { id },
    } = this.props;

    if (users && userWardrobes && id) {
      const wardrobe = userWardrobes[id].parfumes;
      const userWardrobeKeys = Object.keys(wardrobe);
      const selectedCol = Object.keys(users[id].selectedCol);
      console.log(selectedCol);

      return (
        <Section>
          <profileStyle.Header headerImage={sprayheader}>
            <s.TitleCenter>
              <h1>
                {users ? users[id].username + '' : 'User'}'s Wardrobe
              </h1>
            </s.TitleCenter>
          </profileStyle.Header>

          {userWardrobeKeys.map((parfume, index) => (
            <Fragment key={'fragment ' + parfume.name + index}>
              <s.Wrapper key={'wrapper ' + parfume.name + index}>
                <s.ImageDiv key={'imagediv ' + parfume.name + index}>
                  <img
                    alt="parfume bottle"
                    src={parfumePics[parfume] || parfume1}
                  />
                </s.ImageDiv>
                <s.ParfumeDiv
                  key={'parfumeDiv' + parfume.name + index}
                >
                  <s.ButtonDiv
                    key={'buttonDiv' + parfume.name + index}
                    tabOpen={tabOpen}
                    index={index}
                  >
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
                      parfume
                    >
                      Parfymbeskrivning
                    </button>
                  </s.ButtonDiv>
                  <s.HeaderDiv
                    key={'headerDiv' + parfume.name + index}
                  >
                    {parfume}
                  </s.HeaderDiv>
                  <s.StarsDiv key={'starsDiv' + parfume.name + index}>
                    <StarRatingComponent
                      key={'starRatin ' + parfume.name + index}
                      // key={parfume + index}
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
                  <s.NotesDiv
                    key={'notesDiv ' + parfume.name + index}
                  >
                    <img alt="notesLogo" src={noteslogo} />
                    {wardrobe[parfume].base},{' '}
                    {wardrobe[parfume].heart}, {wardrobe[parfume].top}
                  </s.NotesDiv>

                  {tabOpen === 'ratingTab' + index ? (
                    <DescriptionWrapper
                      key={
                        'description Warpper ' + parfume.name + index
                      }
                      isTruncated={isTruncated}
                      toggleTruncate={this.toggleTruncate}
                      tabOpen={tabOpen}
                    />
                  ) : (
                    <RatingWrapper
                      key={'ratingWrapper ' + parfume.name + index}
                      name={parfume}
                      username={users[id].username}
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
      return <div>Loading</div>;
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

function RatingWrapper({ textFirebase, username }) {
  return (
    <Fragment>
      <s.RatingForm>
        <s.RatingBox
          readOnly
          type="text"
          className="ratingBox"
          value={
            textFirebase ||
            'Tyvärr så har inte ' +
              username +
              ' skrivit en beskrivning på denna parfym ännu.'
          }
        />
      </s.RatingForm>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  users: state.userState.users,
  userWardrobes: state.userWardrobesState,
});

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  connect(mapStateToProps),
  withAuthorization(condition),
)(SelectedUserWardrobe);
