import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Truncate from 'react-truncate';
import { compose } from 'recompose';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import * as s from './styles';
import StarRatingComponent from 'react-star-rating-component';

import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import parfume1 from '../../images/parfume1.jpg';
import 'react-tabs/style/react-tabs.css';

class WardrobePage extends Component {
  state = {
    isTruncated: false,
    tabOpen: true,
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
    const nombre = 1;
    return (
      <Fragment>
        <s.QuizTitle>
          <h1>Wardrobe</h1>
        </s.QuizTitle>
        <s.Wrapper>
          <s.ImageDiv>
            <img src={parfume1} />
          </s.ImageDiv>
          <s.ParfumeDiv>
            <s.ButtonDiv>
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
            <s.HeaderDiv>Parfym</s.HeaderDiv>
            <s.StarsDiv>
              <StarRatingComponent
                name="rate1"
                starCount={10}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
              />
            </s.StarsDiv>
            {tabOpen === 'descriptionTab' + nombre ? (
              <ParfumeWrapper
                rating={rating}
                isTruncated={isTruncated}
                toggleTruncate={this.toggleTruncate}
              />
            ) : (
              <RatingWrapper
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                value={value}
                starClick={this.onStarClick}
              />
            )}
          </s.ParfumeDiv>
        </s.Wrapper>
      </Fragment>
    );
  }
}

function ParfumeWrapper({ toggleTruncate, isTruncated }) {
  return (
    <Fragment>
      <s.DescriptionDiv>
        <Truncate
          lines={isTruncated ? 0 : 15}
          ellipsis={
            <span>
              ... <a onClick={toggleTruncate}> Read more</a>
            </span>
          }
        >
          The girls looked like tall, exotic grazing animals, swaying
          gracefully and unconsciously with the movement of the train,
          their high heels like polished hooves against the gray metal
          of the bright void beyond the chain link. Her cheekbones
          flaring scarlet as Wizard’s Castle burned, forehead drenched
          with azure when Munich fell to the Tank War, mouth touched
          with hot gold as a gliding cursor struck sparks from the
          banks of every computer in the puppet place had been a
          subunit of Freeside’s security system. The girls looked like
          tall, exotic grazing animals, swaying gracefully and
          unconsciously with the surgery,
          <a onClick={toggleTruncate}> Read less</a>
        </Truncate>
      </s.DescriptionDiv>
    </Fragment>
  );
}

function RatingWrapper({ handleSubmit, handleChange, value }) {
  return (
    <Fragment>
      <s.RatingForm onSubmit={handleSubmit}>
        <label>My feedback:</label>

        <s.RatingBox
          type="text"
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
