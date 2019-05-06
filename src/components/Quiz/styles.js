import styled from 'styled-components';

export const SlideWrapper = styled.div`
  background: lightcoral;
  height: 100vh;
  width: auto;
  background-repeat: no-repeat;
`;

export const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.563;
`;

export const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  line-height: 1.563;
`;

export const FlexLeftContainer = styled.div`
  margin-right: 10px;
`;

export const FlexRightContainer = styled.div`
  /* border: 1px blue solid; */
  margin-left: 10px;
`;

export const QuizTitle = styled.div`
  text-align: center;
  letter-spacing: 0;
  font-weight: 900;
  font-size: 1em;
`;
export const QuizSubTitle = styled.div`
  text-align: center;
  letter-spacing: 0;
  font-weight: 300;
  font-size: 1em;
`;

export const QuizIntroText = styled.div`
  text-align: center;
  padding-bottom: 2rem;
  font-family: 'PT Serif';
  font-weight: 300;
  font-size: 16px;
`;

export const ImageFlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  img {
    padding-bottom: 15px;
    width: 80%;
  }
`;

export const ImageFlexSpacing = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  /* justify-content: space-between; */
  /* text-align: center; */
  color: white;
  img {
    padding-bottom: 15px;
    width: 100%;
  }
`;

export const ImageText = styled.div`
  /* border: 1px solid green; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const RelativeContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  :hover {
    opacity: 0.8;
  }
`;

export const TextInsideImage = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
`;

export const QuizInput = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1em;

  textarea {
    margin-bottom: 30px;
    height: 550px;
    width: 500px;
    background-color: #f6f6f6;
  }

  ::placeholder {
    vertical-align: super;
  }
`;

export const QuizIntroButton = styled.div`
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
