import React, { Component, Fragment } from 'react';
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
    tabOpen: 'descriptionTab1',
    rating: 1,
  };

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
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
  }
}

function DescriptionWrapper({ toggleTruncate, isTruncated }) {
  return (
    <Fragment>
      <s.DescriptionDiv>
        <Truncate
          lines={isTruncated ? 0 : 9}
          ellipsis={
            <span>
              ... <a onClick={toggleTruncate}> Read more</a>
            </span>
          }
        >
          2017 års stora lansering från parfymprofilen Pierre
          Guillaumes doftkollektion "Huitième Art" är en makalös
          splash av fruktiga ackord, träiga noter och mustiga kryddor.
          2017 års stora lansering från parfymprofilen Pierre
          Guillaumes doftkollektion "Huitième Art" är en makalös
          splash av fruktiga ackord, träiga noter och mustiga kryddor.
          <br />
          Att du inom kort känner att du bara måste duscha dig i
          Aqaysos är inte otänkbart. Blir detta doften som förändrar
          ditt liv?
        </Truncate>
      </s.DescriptionDiv>
    </Fragment>
  );
}

function RatingWrapper({ handleSubmit, handleChange, value }) {
  return (
    <Fragment>
      <s.RatingForm onSubmit={handleSubmit}>
        <s.RatingBox
          type="textarea"
          className="ratingBox"
          value={value}
          onChange={handleChange}
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
  collection: state.sortedParfumesState.Clean,
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
