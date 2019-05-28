import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { connect } from 'react-redux';
import {
  FlexContainerColumn,
  QuizTitle,
  QuizSubTitle,
  QuizInput,
  ButtonWrapper,
} from './styles';
import { Section } from '../../styleConstants/section.js';

class QuestionSix extends Component {
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  randomKey = () => {
    const keys = [
      'FÖR MÄN: Aesthetic',
      'Avant-Garde',
      'Clean',
      'Female Classics',
      'Trending Now',
    ];
    return keys[this.getRandomInt(6)];
  };

  skipQuiz = e => {
    const {
      authUser: { uid },
      firebase,
    } = this.props;

    firebase.user(uid).update({
      completedQuiz: true,
      recommendedCol: {
        [this.randomKey()]: true,
      },
    });
    this.props.history.push('/recommendation');
  };

  render() {
    return (
      <Section>
        <FlexContainerColumn>
          <QuizTitle>
            <h1>Vilka är dina favoritparfymer idag?</h1>
            <QuizSubTitle>
              <h2>______</h2>
            </QuizSubTitle>
          </QuizTitle>
          <QuizInput>
            <textarea
              placeholder="Skriv namnen på parfymer du tycker om och
                  tryck return efter varje. I vissa fall ger vi förslag och då
                  är det bra om du väljer dem i listan för bättre matchning."
            />
          </QuizInput>
          <ButtonWrapper>
            <button onClick={this.skipQuiz}>Visa doftgarderob</button>
          </ButtonWrapper>
        </FlexContainerColumn>
      </Section>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});

const mapDispatchToProps = dispatch => ({
  onSetAuthUser: authUser =>
    dispatch({ type: 'AUTH_USER_SET', authUser }),
});

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(QuestionSix);
