import React, { Component, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import Truncate from 'react-truncate';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import { Section } from '../../styleConstants/section.js';
import { calculatePoints } from '../../constants/functions';

import * as s from './styles';
import * as a from '../../constants/actionTypes';

import StarRatingComponent from 'react-star-rating-component';
import parfume1 from '../../images/parfume1.jpg';
import Loading from '../Loading';
import NoCollection from '../Recommendation/No-collection';
import noteslogo from '../../images/noteslogo.png';

import oceanic from '../../images/oceanic.jpg';
import tabaChoko from '../../images/tabachoko.jpg';
import cementRose from '../../images/cementrose.jpg';
import sideshow from '../../images/sideshow.png';
import darkSaphir from '../../images/darksaphir.jpg';
import coccobello from '../../images/Coccobello.jpg';
import rayOfLight from '../../images/rayoflight.png';
import louanges from '../../images/louangesprofanes.jpg';

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

class WardrobePage extends Component {
  state = {
    isTruncated: false,
    tabOpen: '',
  };

  componentDidMount() {
    const { onSetWardrobes, firebase } = this.props;
    firebase.wardrobes().once('value', snapshot => {
      const val = snapshot.val();
      onSetWardrobes(val);
    });
  }

  componentWillUnmount() {
    const {
      firebase,
      authUser: { uid },
    } = this.props;
    firebase.wardrobe(uid).off();
  }

  newValue(note, value) {
    const { myWardrobe } = this.props;
    console.log('value ' + value + ' note: ' + note);
    if (myWardrobe) {
      if (myWardrobe.ratedNotes) {
        console.log('INNE I NEW VALUE NOTE ' + note);

        if (myWardrobe.ratedNotes[note]) {
          return parseInt(myWardrobe.ratedNotes[note] + value);
        } else {
          return value;
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

    if (nextValue !== prevValue) {
      firebase
        .wardrobe(uid)
        .child('parfumes')
        .child(name)
        .update({
          rating: nextValue,
          base: [base],
          heart: [heart],
          top: [top],
        })
        .then(
          firebase
            .wardrobe(uid)
            .child('ratedNotes')
            .update({
              [base]: this.newValue(base, clickedPoints),
              [heart]: this.newValue(heart, clickedPoints),
              [top]: this.newValue(top, clickedPoints),
            }),
        );
    }
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
    const { tabOpen, isTruncated, loading } = this.state;
    const { authUser, myWardrobe, firebase } = this.props;

    if (loading) {
      return <Loading />;
    } else if (!authUser.selectedCol) {
      return <NoCollection />;
    } else if (this.props.allCollections && authUser.selectedCol) {
      const selectedColKey = Object.keys(authUser.selectedCol);
      const subCollection = this.props.allCollections[selectedColKey];

      return (
        <Section>
          <s.Header>
            <s.TitleCenter>
              <h1>
                {authUser.username + "'s" + ' '} <br />
                doft garderob
              </h1>
              <p>
                Aktiv kollektion: <i>{selectedColKey}</i>
              </p>
            </s.TitleCenter>
          </s.Header>
          {subCollection.slice(0, 8).map((item, index) => (
            <Fragment key={'fragment ' + item.name + index}>
              <s.Wrapper key={'wrapper ' + item.name + index}>
                <s.ImageDiv key={'imagediv' + item.name + index}>
                  <img
                    alt="parfume bottle"
                    src={parfumePics[item.name] || parfume1}
                  />
                </s.ImageDiv>
                <s.ParfumeDiv key={'parfumeDiv' + item.name + index}>
                  <s.ButtonDiv
                    key={'buttonDIv' + item.name + index}
                    tabOpen={tabOpen}
                    index={index}
                  >
                    <button
                      value={'descriptionTab' + index}
                      onClick={e => this.toggleTab(e)}
                    >
                      Beskrivning
                    </button>
                    <button
                      value={'ratingTab' + index}
                      onClick={e => this.toggleTab(e)}
                    >
                      Mitt betyg
                    </button>
                  </s.ButtonDiv>
                  <s.HeaderDiv key={'headerDiv' + item.name + index}>
                    {item.name}
                  </s.HeaderDiv>
                  <s.StarsDiv key={'starsDiv' + item.name + index}>
                    <StarRatingComponent
                      key={'starRatin ' + item.name + index}
                      name={item.name}
                      starCount={5}
                      bubbles={item.base_note_id}
                      value={
                        myWardrobe
                          ? myWardrobe.parfumes[item.name] &&
                            myWardrobe.parfumes[item.name].rating
                            ? myWardrobe.parfumes[item.name].rating
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
                  <s.NotesDiv key={'notesDiv ' + item.name + index}>
                    <img alt="notesLogo" src={noteslogo} />
                    {item.base_note_id}, {item.top_note_id},{' '}
                    {item.heart_note_id}
                  </s.NotesDiv>

                  {tabOpen === 'ratingTab' + index ? (
                    <RatingWrapper
                      key={'ratingWrapper ' + item.name + index}
                      editState={this.state[item.name] + index}
                      name={item.name}
                      firebase={firebase}
                      authUser={authUser.uid}
                      index={index}
                      textFirebase={
                        myWardrobe &&
                        myWardrobe.parfumes[item.name] &&
                        myWardrobe.parfumes[item.name].ownDesc
                          ? myWardrobe.parfumes[item.name].ownDesc
                          : ''
                      }
                      tabOpen={tabOpen}
                    />
                  ) : (
                    <DescriptionWrapper
                      key={'description Warpper ' + item.name + index}
                      isTruncated={isTruncated}
                      toggleTruncate={this.toggleTruncate}
                      tabOpen={tabOpen}
                      name={item.name}
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

function DescriptionWrapper({ toggleTruncate, isTruncated, name }) {
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
        {name}, grundat 1885, började som parisisk oas för skönhet och
        välmående. Blev legendarisk nattklubb, restaurang, lyxhotell,
        workspace - ett livsstilskoncept med en linje dofter. 1978 var
        klubben Les Bains Douches nattklubben alla ville komma in på.
        Förföriska noter av tobak, vanilj och kardemumma blir varmt
        och berusande. Du kan helt enkelt inte få nog.
      </Truncate>
    </s.DescriptionDiv>
  );
}

function RatingWrapper({
  edit,
  name,
  textFirebase,
  firebase,
  authUser,
  index,
}) {
  const [editText, setEditText] = useState(textFirebase);
  const [editState, setEditState] = useState(false);

  const textChange = e => {
    const text = e.target.value;
    setEditText(text);
  };
  const changeEditState = () => {
    setEditState(true);
  };

  const descriptionSubmit = event => {
    console.log('DESC SUBMIT RUNS');
    event.preventDefault();

    firebase
      .wardrobe(authUser)
      .child('parfumes')
      .child(name)
      .update({ ownDesc: editText })
      .then(setEditState(false));
  };

  return (
    <Fragment>
      <s.RatingBox
        type="text"
        className="ratingBox"
        value={editText}
        onChange={e => textChange(e)}
        readOnly={editState ? false : true}
        editState={editState}
        placeholder={
          editText
            ? editText
            : 'Tryck på edit knappen här nere för att skriva en bedömning av parfymen.'
        }
      />
      <s.DescButtonDiv>
        <s.EditButton
          editState={editState}
          onClick={() => changeEditState()}
        >
          ÄNDRA
        </s.EditButton>

        <s.RatingButton
          className="ratingButton"
          value="SAVE"
          onClick={e => descriptionSubmit(e)}
        >
          SPARA
        </s.RatingButton>
      </s.DescButtonDiv>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  myWardrobe: state.wardrobeState.myWardrobe,
  authUser: state.sessionState.authUser,
  allCollections: state.sortedParfumesState,
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: a.USERS_SET, users }),

  onSetWardrobes: wardrobes =>
    dispatch({ type: a.WARDROBES_USERS_SET, wardrobes }),
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
