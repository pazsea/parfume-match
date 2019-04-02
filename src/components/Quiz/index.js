import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Link,
} from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
// import { QUESTIONONE } from '../../constants/routes';
import * as ROUTES from '../../constants/routes';
import { QuestionOneImageOne } from '../Quiz/styles';
import quizStep1Everything from '../../images/quizStep1Everything.jpg';
import quizStep1Man from '../../images/quizStep1Man.jpg';
import quizStep1Unisex from '../../images/quizStep1Unisex.jpg';
import quizStep1Woman from '../../images/quizStep1Woman.jpg';
import quizStep2ILikeParfume from '../../images/quizStep2ILikeParfume.jpg';
import quizStep2ImThinkingOf from '../../images/quizStep2ImThinkingOf.jpg';
import quizStep2GiveMeSomething from '../../images/quizStep2GiveMeSomething.jpg';
import { quizStep3AtGym } from '../../images/index.js';

// Quiz page är huvudkomponenten som har tre states för slutföring.
// Quiz page har tre komponenter renderas utifall state är tillgängligt.

class QuizPage extends Component {
  render() {
    return (
      <div>
        <h1>Sniph quiz: Hitta din kollektion</h1>
        <p>
          Svårt att bestämma dig för vilken av våra kollektioner som
          passar dig?
          <br /> Ingen fara! Gör vårt Sniph quiz så kommer vi att
          kunna ge dig en bättre rekommendation. Du kan göra testet
          flera gånger och som medlem kan du byta kollektion när du
          vill.
        </p>

        <Link to={ROUTES.QUESTIONONE}>STARTA DOFT-QUIZ</Link>
      </div>
    );
  }
}

export class QuestionOne extends Component {
  render() {
    return (
      <div>
        <h1>Vilken parfymtyp är du ute efter?</h1>
        <p>Alternativ: För kvinnor, unisex, för män, allt</p>

        <img src={quizStep1Everything} />
        <img src={quizStep1Man} />
        <img src={quizStep1Unisex} />
        <img src={quizStep1Woman} />
        <br />
        <Link to={ROUTES.QUESTIONTWO}>NÄSTA FRÅGA</Link>
      </div>
    );
  }
}

export class QuestionTwo extends Component {
  render() {
    return (
      <div>
        <h1>Hur avancerad är din parfymsmak</h1>
        <p>
          Alternativ: Jag gillar parfym men inte mer, Jag tänker på
          topp- och basnoter, ge mig något att bita i!
        </p>
        <img src={quizStep2ILikeParfume} />
        <img src={quizStep2ImThinkingOf} />
        <img src={quizStep2GiveMeSomething} />

        <Link to={ROUTES.QUESTIONTHREE}>NÄSTA FRÅGA</Link>
      </div>
    );
  }
}

export class QuestionThree extends Component {
  render() {
    return (
      <div>
        <h1>Nr vill du dofta extra härligt?</h1>
        <p>
          På jobbet, hemma, på klubben, på gymmet, på nästa dejt, på
          vernissage
        </p>

        <img src={quizStep3AtGym} />

        <Link to={ROUTES.QUESTIONFOUR}>NÄSTA FRÅGA</Link>
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
        <p>
          Placeholdertext: "Skriv namnen på parfymer du tycker om och
          tryck return efter varje. I vissa fall ger vi förslag och då
          är det bra om du väljer dem i listan för bättre matchning"
        </p>
        <Link to={ROUTES.WARDROBE}>Visa min Sniph-kollektion</Link>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition),
)(QuizPage);
