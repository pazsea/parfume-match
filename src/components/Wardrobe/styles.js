import styled from 'styled-components';

export const QuizTitle = styled.div`
  text-align: center;
  letter-spacing: 0;
  font-weight: 900;
  font-size: 1em;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0.8em 0;
`;

// ONE WHOLE CARD
export const ImageDiv = styled.div`
  flex-basis: 40%;
  display: flex;
  justify-content: center;

  img {
    align-self: center;
    width: 50%;
    /* height: auto; */
  }
`;

export const ParfumeDiv = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  /* box-shadow: 4px 2px 2px black; */
  border: 1px solid #ccc;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  background-color: white;
  align-items: center;

  button {
    cursor: pointer;
    border: none;
    font-size: 1.2em;
    font-weight: 700;
    background: none;
    height: fit-content;
    padding: 0;
    margin-left: 0.4em;
  }
  button:nth-child(1) {
    border-bottom: ${props =>
      props.tabOpen === 'descriptionTab' + [props.index]
        ? '1px solid black'
        : null};
  }

  button:nth-child(2) {
    margin-left: 0.9em;

    border-bottom: ${props =>
      props.tabOpen === 'ratingTab' + [props.index]
        ? '1px solid black'
        : null};
  }
  button:hover {
    background-color: #ddd;
  }
`;

export const StarsDiv = styled.div`
  flex: 1;
  font-size: 2em;
  margin-left: 0.4em;
`;
export const HeaderDiv = styled.div`
  flex: 1;
  margin-left: 0.4em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 1.4em;
  padding: 0.1em 0;
`;

//DESCRIPTION TAB

export const DescriptionDiv = styled.div`
  flex: 8;
  margin-left: 0.4em;
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
`;

//MY RATING TAB

export const RatingForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 8;
  label {
    font-size: 1.5em;
  }
`;

export const RatingBox = styled.textarea`
  flex: 5;
  margin: 0 0.4em 0.4em 0.4em;
`;

export const RatingButton = styled.input`
  flex: 1;
  color: #fff;
  background: #000;
  margin: 0 0.4em 0.4em 0.4em;
  border: 2px solid #000;
  text-transform: uppercase;

  :hover {
    color: #000;
    background: white;
    border: 2px solid black;
    cursor: pointer;
  }
`;
