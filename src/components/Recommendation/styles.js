// import styled from 'styled-components';
import styled from 'styled-components/macro';

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

export const CleanImage = styled.div`
  background: blue;
  /* align-self: center; */
  background-repeat: no-repeat;
  /* height: 300px; */
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row-reverse;
  /* top: 0; */
  background-image: url(${props => props.headerImage});
  width: 100%;
  height: 35vh;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 2rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextFlexContainer = styled.div`
  flex-direction: column;
  word-wrap: wrap;
`;

export const Description = styled.div`
  width: 400px;
  max-width: 500px;
`;

export const ImageFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex-direction: column;
  text-align: center;
  padding-right: 5rem;
  color: white;
`;

export const SubscribeButton = styled.div`
  text-align: center;
  text-transform: uppercase;
  button {
    background-color: black;
    border: none;
    color: white;
    padding: 15px 32px;
    font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue',
      sans-serif;

    font-weight: bold;
    color: white;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    font-size: 16px;
    a:visited {
      text-decoration: none;
      color: white;
    }
    a:link {
      text-decoration: none;
      color: white;
    }
  }
`;
