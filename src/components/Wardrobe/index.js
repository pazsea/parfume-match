import React, { Component, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import Truncate from 'react-truncate';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import { Section } from '../../styleConstants/section.js';

import * as s from './styles';
import StarRatingComponent from 'react-star-rating-component';
import parfume1 from '../../images/parfume1.jpg';

class WardrobePage extends Component {
  state = {
    isTruncated: false,
    tabOpen: '',
    loading: true,
    // rating: 5,
  };

  componentDidMount() {
    const { firebase, currentUser } = this.props;
    firebase.wardrobe(currentUser).on('value', snapshot => {
      const myRating = snapshot.val();
      if (myRating) {
        this.setState({ loading: false, myRating });
      } else {
        this.setState({ loading: false });
      }
    });
  }
  componentWillUnmount() {
    const { firebase, currentUser } = this.props;
    firebase.wardrobe(currentUser).off();
  }

  onStarClick(nextValue, prevValue, name) {
    const { firebase, currentUser } = this.props;

    firebase
      .wardrobe(currentUser)
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
<<<<<<< HEAD
    const { tabOpen, isTruncated, value, rating } = this.state;
    const { collection } = this.props;
    const nombre = 1;
    return (
      <Section>
        <s.QuizTitle>
          <h1>Wardrobe</h1>
        </s.QuizTitle>
        {collection.slice(0, 3).map(item => (
          <Fragment>
            <s.Wrapper>
              <s.ImageDiv>
                <img alt="parfume bottle" src={parfume1} />
              </s.ImageDiv>
              <s.ParfumeDiv>
                <s.ButtonDiv tabOpen={tabOpen}>
                  <button
                    value={'descriptionTab' + nombre}
                    onClick={e => this.toggleTab(e)}
                  >
                    Description
                  </button>
                  <button
                    value={'ratingTab' + nombre}
                    onClick={e => this.toggleTab(e)}
                  >
                    My Rating
                  </button>
                </s.ButtonDiv>
                <s.HeaderDiv>{item.name}</s.HeaderDiv>
                <s.StarsDiv>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                  />
                </s.StarsDiv>
                {tabOpen === 'descriptionTab' + nombre ||
                tabOpen === '' ? (
                  <DescriptionWrapper
                    rating={rating}
                    isTruncated={isTruncated}
                    toggleTruncate={this.toggleTruncate}
                    tabOpen={tabOpen}
                  />
                ) : tabOpen === 'ratingTab' + nombre ? (
                  <RatingWrapper
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    value={value}
                    starClick={this.onStarClick}
                    tabOpen={tabOpen}
                  />
                ) : null}
              </s.ParfumeDiv>
            </s.Wrapper>
          </Fragment>
        ))}
      </Section>
    );
=======
    const { tabOpen, isTruncated, loading } = this.state;
    const { collection } = this.props;
    if (loading) {
      return <p>Loading...</p>;
    } else {
      return (
        <Section>
          <s.QuizTitle>
            <h1>Wardrobe</h1>
          </s.QuizTitle>
          {collection.slice(0, 2).map((item, index) => (
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
                      key={item.name + index}
                      name={item.name}
                      starCount={5}
                      value={
                        this.state.myRating &&
                        this.state.myRating[item.name] &&
                        this.state.myRating[item.name].rating
                          ? this.state.myRating[item.name].rating
                          : 0
                      }
                      onStarClick={this.onStarClick.bind(this)}
                    />
                  </s.StarsDiv>
                  {/* <div>
                    {item.base_note_id} {item.top_note_id}{' '}
                    {item.heart_note_id}
                    {item.top_note_id &&
                      item.heart_note_id}
                  </div> */}

                  {tabOpen === 'ratingTab' + index ? (
                    <RatingWrapper
                      name={item.name}
                      firebase={this.props.firebase}
                      currentUser={this.props.currentUser}
                      textFirebase={
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
>>>>>>> master
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

function RatingWrapper({
  name,
  textFirebase,
  firebase,
  currentUser,
}) {
  const [editText, setEditText] = useState(textFirebase);

  const textChange = e => {
    const text = e.target.value;
    setEditText(text);
  };

  const descriptionSubmit = event => {
    event.preventDefault();

    firebase
      .wardrobe(currentUser)
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
<<<<<<< HEAD
  users: state.userState.users,
  collection: state.userState.users.uid,
=======
  currentUser: state.sessionState.authUser.uid,
  collection: state.sortedParfumesState.Clean,
>>>>>>> master
});
// ta kollektionen som är true i recommended collection i firebase.
// hittar inte det jag lägger till efter users i state...

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
