import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { NoCollectionDiv } from './styles';
import { QuizIntroButton } from '../Quiz/styles';
import { Middle } from '../Loading/styles';
// make component for no recommended collection

const NoCollection = () => {
  return (
    <NoCollectionDiv>
      <Middle>
        <p>Du har ingen aktiv prenumeration...</p>
      </Middle>
      <QuizIntroButton>
        <button>
          <Link to={ROUTES.QUIZ}>Ta Doft-Quizet</Link>
        </button>
      </QuizIntroButton>
    </NoCollectionDiv>
  );
};

export default NoCollection;
