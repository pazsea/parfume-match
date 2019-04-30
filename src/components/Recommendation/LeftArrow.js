import React from 'react';
import { BackArrow } from './styles';

const LeftArrow = props => {
  return (
    <BackArrow onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
    </BackArrow>
  );
};

export default LeftArrow;
