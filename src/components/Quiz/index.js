import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { connect } from 'react-redux';
import {
  FlexContainerRow,
  FlexContainerColumn,
  FlexLeftContainer,
  FlexRightContainer,
  QuizTitle,
  QuizSubTitle,
  QuizIntroText,
  QuizIntroButton,
  ImageFlexContainer,
  ImageFlexSpacing,
  RelativeContainer,
  TextInsideImage,
  QuizInput,
} from './styles';
import quizStep1Everything from '../../images/quizStep1Everything.jpg';
import quizStep1Man from '../../images/quizStep1Man.jpg';
import quizStep1Unisex from '../../images/quizStep1Unisex.jpg';
import quizStep1Woman from '../../images/quizStep1Woman.jpg';
import quizStep2ILikeParfume from '../../images/quizStep2ILikeParfume.jpg';
import quizStep2ImThinkingOf from '../../images/quizStep2ImThinkingOf.jpg';
import quizStep2GiveMeSomething from '../../images/quizStep2GiveMeSomething.jpg';
import quizStep3AtGym from '../../images/quizStep3AtGym.jpg';
import quizStep3AtHome from '../../images/quizStep3AtHome.jpg';
import quizStep3AtWork from '../../images/quizStep3AtWork.jpg';
import quizStep3Club from '../../images/quizStep3Club.jpg';
import quizStep3OnDate from '../../images/quizStep3OnDate.jpg';
import quizStep3Vernissage from '../../images/quizStep3Vernissage.jpg';
import quizStep4Coffee from '../../images/quizStep4Coffee.jpg';
import quizStep4Water from '../../images/quizStep4Water.jpg';
import quizStep4Cocktail from '../../images/quizStep4Cocktail.jpg';
import quizStep4Tea from '../../images/quizStep4Tea.jpg';
import quizStep4Wine from '../../images/quizStep4Wine.jpg';
import quizStep4Beer from '../../images/quizStep4Beer.jpg';
import quizStep5Confident from '../../images/quizStep5Confident.jpg';
import quizStep5Elegant from '../../images/quizStep5Elegant.jpg';
import quizStep5Unique from '../../images/quizStep5Unique.jpg';
import quizStep5Sensual from '../../images/quizStep5Sensual.jpg';

// Quiz page är huvudkomponenten som har tre states för slutföring.
// Quiz page har tre komponenter renderas utifall state är tillgängligt.

// TO DO
// PUSH TO WARDROBE IF SKIP
// PUSH TO RECOMMENDATION IF COMPLETED QUIZ
// CREATE A POINT SYSTEM FOR QUIZ TO RELATE TO RECOMMENDED COLLECTION
class QuizPage extends Component {
  skipQuiz = (event, authUser) => {
    this.props.firebase
      .users()
      .child(authUser.uid)
      .update({ completedQuiz: true });
  };

  render() {
    return (
      <div>
        <FlexContainerColumn>
          <QuizTitle>
            <h1>Sniph quiz: Hitta din kollektion</h1>
            <h2>______</h2>
          </QuizTitle>
          <QuizIntroText>
            <p>
              Svårt att bestämma dig för vilken av våra kollektioner
              som passar dig?
              <br /> Ingen fara! Gör vårt Sniph quiz så kommer vi att
              kunna ge dig en bättre rekommendation. Du kan göra
              testet flera gånger och som medlem kan du byta
              kollektion när du vill.
            </p>
          </QuizIntroText>
          <QuizIntroButton>
            <button>
              <Link to={ROUTES.QUESTIONONE}>Starta doft-quiz</Link>
            </button>
          </QuizIntroButton>
          <button
            onClick={event =>
              this.skipQuiz(event, this.props.authUser)
            }
          >
            Hoppa över
          </button>
        </FlexContainerColumn>
      </div>
    );
  }
}

export class QuestionOne extends Component {
  render() {
    return (
      <div>
        <FlexContainerColumn>
          <QuizTitle>
            <h1>Vilken parfymtyp är du ute efter?</h1>
            <QuizSubTitle>
              <h2>______</h2>
            </QuizSubTitle>
          </QuizTitle>

          <ImageFlexContainer>
            <Link to={ROUTES.QUESTIONTWO}>
              <RelativeContainer>
                <img src={quizStep1Woman} alt="" />

                <TextInsideImage>
                  <h2>För kvinnor</h2>
                </TextInsideImage>
              </RelativeContainer>
            </Link>

            <Link to={ROUTES.QUESTIONTWO}>
              <RelativeContainer>
                <img src={quizStep1Unisex} alt="" />

                <TextInsideImage>
                  <h2>Unisex</h2>
                </TextInsideImage>
              </RelativeContainer>
            </Link>

            <Link to={ROUTES.QUESTIONTWO}>
              <RelativeContainer>
                <img src={quizStep1Man} alt="" />

                <TextInsideImage>
                  <h2>För män</h2>
                </TextInsideImage>
              </RelativeContainer>
            </Link>

            <Link to={ROUTES.QUESTIONTWO}>
              <RelativeContainer>
                <img src={quizStep1Everything} alt="" />

                <TextInsideImage>
                  <h2>Allt</h2>
                </TextInsideImage>
              </RelativeContainer>
            </Link>
          </ImageFlexContainer>
        </FlexContainerColumn>
      </div>
    );
  }
}

export class QuestionTwo extends Component {
  render() {
    return (
      <div>
        <FlexContainerColumn>
          <QuizTitle>
            <h1>Hur avancerad är din parfymsmak?</h1>
            <QuizSubTitle>
              <h2>______</h2>
            </QuizSubTitle>
          </QuizTitle>

          <ImageFlexContainer>
            <Link to={ROUTES.QUESTIONTHREE}>
              <RelativeContainer>
                <img src={quizStep2ILikeParfume} alt="" />

                <TextInsideImage>
                  <h2>Jag gillar parfym men inte mer</h2>
                </TextInsideImage>
              </RelativeContainer>
            </Link>

            <Link to={ROUTES.QUESTIONTHREE}>
              <RelativeContainer>
                <img src={quizStep2ImThinkingOf} alt="" />

                <TextInsideImage>
                  <h2>Jag tänkter på topp- och basnoter</h2>
                </TextInsideImage>
              </RelativeContainer>
            </Link>

            <Link to={ROUTES.QUESTIONTHREE}>
              <RelativeContainer>
                <img src={quizStep2GiveMeSomething} alt="" />

                <TextInsideImage>
                  <h2>Ge mig något att bita i!</h2>
                </TextInsideImage>
              </RelativeContainer>
            </Link>
          </ImageFlexContainer>
        </FlexContainerColumn>
      </div>
    );
  }
}

export class QuestionThree extends Component {
  render() {
    return (
      <div>
        <FlexContainerColumn>
          <QuizTitle>
            <h1>När vill du dofta extra härligt?</h1>
            <QuizSubTitle>
              <h2>______</h2>
            </QuizSubTitle>
          </QuizTitle>
        </FlexContainerColumn>
        <FlexContainerRow>
          <ImageFlexSpacing>
            <FlexLeftContainer>
              <Link to={ROUTES.QUESTIONFOUR}>
                <RelativeContainer>
                  <img src={quizStep3AtWork} alt="" />

                  <TextInsideImage>
                    <h2>På jobbet</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>

              <Link to={ROUTES.QUESTIONFOUR}>
                <RelativeContainer>
                  <img src={quizStep3AtHome} alt="" />

                  <TextInsideImage>
                    <h2>Hemma</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>

              <Link to={ROUTES.QUESTIONFOUR}>
                <RelativeContainer>
                  <img src={quizStep3Club} alt="" />

                  <TextInsideImage>
                    <h2>På klubben</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>
            </FlexLeftContainer>
            <FlexRightContainer>
              <Link to={ROUTES.QUESTIONFOUR}>
                <RelativeContainer>
                  <img src={quizStep3AtGym} alt="" />

                  <TextInsideImage>
                    <h2>På gymmet</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>

              <Link to={ROUTES.QUESTIONFOUR}>
                <RelativeContainer>
                  <img src={quizStep3OnDate} alt="" />

                  <TextInsideImage>
                    <h2>På nästa dejt</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>

              <Link to={ROUTES.QUESTIONFOUR}>
                <RelativeContainer>
                  <img src={quizStep3Vernissage} alt="" />

                  <TextInsideImage>
                    <h2>På vernissage</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>
            </FlexRightContainer>
            >
          </ImageFlexSpacing>
        </FlexContainerRow>
        <QuizIntroButton>
          <button>
            <Link to={ROUTES.QUESTIONFOUR}>Nästa</Link>
          </button>
        </QuizIntroButton>
      </div>
    );
  }
}

export class QuestionFour extends Component {
  render() {
    return (
      <div>
        <FlexContainerColumn>
          <QuizTitle>
            <h1>Vilka är dina favoritdrycker?</h1>
            <QuizSubTitle>
              <h2>______</h2>
            </QuizSubTitle>
          </QuizTitle>
        </FlexContainerColumn>
        <FlexContainerRow>
          <ImageFlexSpacing>
            <FlexLeftContainer>
              <Link to={ROUTES.QUESTIONFIVE}>
                <RelativeContainer>
                  <img src={quizStep4Coffee} alt="" />

                  <TextInsideImage>
                    <h2>Kaffe</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>

              <Link to={ROUTES.QUESTIONFIVE}>
                <RelativeContainer>
                  <img src={quizStep4Water} alt="" />

                  <TextInsideImage>
                    <h2>Vatten</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>

              <Link to={ROUTES.QUESTIONFIVE}>
                <RelativeContainer>
                  <img src={quizStep4Cocktail} alt="" />

                  <TextInsideImage>
                    <h2>Cocktails</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>
            </FlexLeftContainer>

            <FlexRightContainer>
              <Link to={ROUTES.QUESTIONFIVE}>
                <RelativeContainer>
                  <img src={quizStep4Tea} alt="" />

                  <TextInsideImage>
                    <h2>Te</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>

              <Link to={ROUTES.QUESTIONFIVE}>
                <RelativeContainer>
                  <img src={quizStep4Wine} alt="" />

                  <TextInsideImage>
                    <h2>Vin</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>

              <Link to={ROUTES.QUESTIONFIVE}>
                <RelativeContainer>
                  <img src={quizStep4Beer} alt="" />

                  <TextInsideImage>
                    <h2>Öl</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>
            </FlexRightContainer>
          </ImageFlexSpacing>
        </FlexContainerRow>

        <QuizIntroButton>
          <button>
            <Link to={ROUTES.QUESTIONFIVE}>Nästa</Link>
          </button>
        </QuizIntroButton>
      </div>
    );
  }
}

export class QuestionFive extends Component {
  render() {
    return (
      <div>
        <FlexContainerColumn>
          <QuizTitle>
            <h1>Hur vill du känna dig i din parfym?</h1>
            <QuizSubTitle>
              <h2>______</h2>
            </QuizSubTitle>
          </QuizTitle>
        </FlexContainerColumn>
        <FlexContainerRow>
          <ImageFlexSpacing>
            <FlexLeftContainer>
              <Link to={ROUTES.QUESTIONSIX}>
                <RelativeContainer>
                  <img src={quizStep5Confident} alt="" />

                  <TextInsideImage>
                    <h2>Självsäker</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>

              <Link to={ROUTES.QUESTIONSIX}>
                <RelativeContainer>
                  <img src={quizStep5Elegant} alt="" />

                  <TextInsideImage>
                    <h2>Elegant</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>
            </FlexLeftContainer>

            <FlexRightContainer>
              <Link to={ROUTES.QUESTIONSIX}>
                <RelativeContainer>
                  <img src={quizStep5Unique} alt="" />

                  <TextInsideImage>
                    <h2>Unik</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>

              <Link to={ROUTES.QUESTIONSIX}>
                <RelativeContainer>
                  <img src={quizStep5Sensual} alt="" />

                  <TextInsideImage>
                    <h2>Sensuell</h2>
                  </TextInsideImage>
                </RelativeContainer>
              </Link>
            </FlexRightContainer>
          </ImageFlexSpacing>
        </FlexContainerRow>

        <QuizIntroButton>
          <button>
            <Link to={ROUTES.QUESTIONSIX}>Nästa</Link>
          </button>
        </QuizIntroButton>
      </div>
    );
  }
}

export class QuestionSix extends Component {
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
          <QuizIntroButton>
            <button>
              <Link to={ROUTES.RECOMMENDATION}>
                Visa min Sniph-kollektion
              </Link>
            </button>
          </QuizIntroButton>
        </FlexContainerColumn>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition),
  connect(mapStateToProps),
)(QuizPage);
