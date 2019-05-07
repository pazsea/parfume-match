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

class QuestionSix extends Component {
  skipQuiz() {
    const { authUser } = this.props;

    this.props.firebase.user(authUser.uid).update({
      completedQuiz: true,
    });
  }

  render() {
    return (
      <div>
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
            <Link
              id="link"
              to={ROUTES.RECOMMENDATION}
              onClick={() => this.skipQuiz()}
            >
              Visa min Sniph-kollektion
            </Link>
          </ButtonWrapper>
        </FlexContainerColumn>
      </div>
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
