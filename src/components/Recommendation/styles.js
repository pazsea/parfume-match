import styled from 'styled-components';

export const Slider = styled.div`
  position: relative;
  width: 500px;
  margin: 0 auto;
  height: 500px;
  overflow: hidden;
  white-space: nowrap;
`;

export const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Slide = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
`;

export const Arrow = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 50%;
  cursor: pointer;
  transition: transform ease-in 0.1s;
`;

export const NextArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 25px;
  z-index: 999;
  color: #fff;
`;

export const BackArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 25px;
  z-index: 999;
  color: #fff;
`;
