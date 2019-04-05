import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {
  FlexContainerRow,
  FlexContainerColumn,
  FlexLeftContainer,
  FlexRightContainer,
  ImageContainer,
  QuizTitle,
  QuizSubTitle,
  QuizIntroText,
  QuizIntroButton,
  ImageText,
  ImageFlexContainer,
  RelativeContainer,
  TextInsideImage,
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

class QuizPage extends Component {
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
                  <h2>För kvinnor</h2>
                </TextInsideImage>
              </RelativeContainer>
            </Link>

            <Link to={ROUTES.QUESTIONTHREE}>
              <RelativeContainer>
                <img src={quizStep2ImThinkingOf} alt="" />

                <TextInsideImage>
                  <h2>Unisex</h2>
                </TextInsideImage>
              </RelativeContainer>
            </Link>

            <Link to={ROUTES.QUESTIONTHREE}>
              <RelativeContainer>
                <img src={quizStep2GiveMeSomething} alt="" />

                <TextInsideImage>
                  <h2>För män</h2>
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
      // <div>
      //   <h1>När vill du dofta extra härligt?</h1>
      //   <p>
      //     På jobbet, hemma, på klubben, på gymmet, på nästa dejt, på
      //     vernissage
      //   </p>

      //   <img src={quizStep3AtGym} alt="" />
      //   <img src={quizStep3AtHome} alt="" />
      //   <img src={quizStep3AtWork} alt="" />
      //   <img src={quizStep3Club} alt="" />
      //   <img src={quizStep3OnDate} alt="" />
      //   <img src={quizStep3Vernissage} alt="" />

      //   <Link to={ROUTES.QUESTIONFOUR}>NÄSTA FRÅGA</Link>
      // </div>

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
          <ImageFlexContainer>
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
          </ImageFlexContainer>
        </FlexContainerRow>
      </div>
    );
  }
}

export class QuestionFour extends Component {
  render() {
    return (
      <div>
        <h1>Vilka är dina favoritdrycker?</h1>
        <p>Alternativ: Kaffe, vatten, cocktails, te, vin, öl</p>

        <img src={quizStep4Coffee} alt="" />
        <img src={quizStep4Water} alt="" />
        <img src={quizStep4Cocktail} alt="" />
        <img src={quizStep4Tea} alt="" />
        <img src={quizStep4Wine} alt="" />
        <img src={quizStep4Beer} alt="" />

        <Link to={ROUTES.QUESTIONFIVE}>NÄSTA FRÅGA</Link>
      </div>
    );
  }
}

export class QuestionFive extends Component {
  render() {
    return (
      <div>
        <h1>Hur vill du känna dig i din parfym?</h1>
        <p>Alternativ: Självsäker, elegant, unik, sensuell</p>

        <img src={quizStep5Confident} alt="" />
        <img src={quizStep5Elegant} alt="" />
        <img src={quizStep5Unique} alt="" />
        <img src={quizStep5Sensual} alt="" />

        <Link to={ROUTES.QUESTIONSIX}>NÄSTA FRÅGA</Link>
      </div>
    );
  }
}

export class QuestionSix extends Component {
  render() {
    return (
      <div>
        <h1>Vilka är dina favoritparfymer idag?</h1>
        <input
          placeholder="Skriv namnen på parfymer du tycker om och
          tryck return efter varje. I vissa fall ger vi förslag och då
          är det bra om du väljer dem i listan för bättre matchning"
        />

        <Link to={ROUTES.RECOMMENDATION}>
          Visa min Sniph-kollektion
        </Link>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition),
)(QuizPage);
