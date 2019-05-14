import React from 'react';
import { NextArrow } from './styles';
const RightArrow = props => {
  return (
    <NextArrow onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
    </NextArrow>
  );
};

export default RightArrow;
