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
  /* margin: 0.8em 0; */
  margin: 2em 0;
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
  /* border-bottom: 1px solid #ccc; */
  background-color: white;
  align-items: center;
  margin: 0 auto; /* Ny */
  padding: 0.5em 0; /* Ny */

  button {
    cursor: pointer;
    border: none;
    font-size: 1.2em;
    font-weight: 700;
    background: none;
    height: fit-content;
    padding: 0.3em 0;
    margin-left: 0.4em;
    border: 1px solid transparent; /* För att innehållet inte ska tryckas ned vid hover */
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
    /* background-color: #ddd; */
    border-bottom: 1px solid #ccc; /* Ny */
  }
`;

export const NotesDiv = styled.div`
  display: flex;
  flex: 0.5;
  align-items: center;
  font-size: 0.7em;
  /* margin-left: 0.4em; */
  margin-bottom: 0.3em;
  margin-left: 1em;
  margin-top: 0.5em;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const StarsDiv = styled.div`
  flex: 1;
  font-size: 1.3em;
  /* margin-left: 0.4em; */
  margin: 0 auto;
`;

export const HeaderDiv = styled.div`
  flex: 1;
  /* margin-left: 0.4em; */
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 1.4em;
  padding: 0.2em 0;
  margin: 0 auto; /* Ny */
`;

//DESCRIPTION TAB

export const DescriptionDiv = styled.div`
  flex: 8;
  /* margin-left: 0.4em; */
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  /* padding: 0.5em; */
  margin-left: 1em;
  margin-bottom: 1em;
  margin-top: 0.4em;
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
  /* margin: 0 0.4em 0.4em 0.4em; */
  padding: 0.5em;
  width: 93%;
  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 1.1em;
  font-size: 1em;
  font-family: 'Roboto';
`;

export const RatingButton = styled.input`
  flex: 1;
  color: #fff;
  background: #000;
  /* margin: 0 0.4em 0.4em 0.4em; */
  /* border: 1px solid #000; */
  text-transform: uppercase;

  padding: 10px 25px;
  font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue',
    sans-serif;

  font-weight: bold;
  text-align: center;
  font-size: 0.8em;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 1em;

  :hover {
    color: #000;
    background: white;
    border: 1px solid black;
    cursor: pointer;
  }
`;
