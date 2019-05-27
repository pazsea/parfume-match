import styled from 'styled-components';
import wardrobeHeader from '../../images/wardrobeheader.jpg';

export const QuizTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0 auto;
  color: white;
  justify-content: center;
  h1 {
    font-size: 2.5em;
  }
`;

export const DescButtonDiv = styled.div`
  flex: 1;
  display: flex;
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
    background: none;
    /* height: auto; */
  }
`;

export const ParfumeDiv = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  background: white;
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
  margin: 0 auto;
  padding: 0.5em 0;

  button {
    cursor: pointer;
    border: none;
    font-size: 1.2em;
    font-weight: 700;
    background: none;
    /* height: fit-content; */
    padding: 0.3em 0;
    /* margin-left: 0.4em; */
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

export const TitleCenter = styled.div`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  vertical-align: middle;
  display: flex;
  /* height: 20%; */
  font-size: 1.1em;
  flex-direction: column;
  color: black;
  border: 5px double black;
  margin-top: 1%;
  height: fit-content;
  width: 20%;
  padding: 0 1.5%;
  h1 {
    margin: 6% 0;
  }
  p {
    i {
      color: pink;
      font-weight: bold;
    }
  }
  /* font-weight: bold; */
  background-color: rgba(255, 255, 255, 0.6);
  font-family: 'Amatic SC', cursive;
`;

export const StarsDiv = styled.div`
  flex: 1;
  font-size: 2em;
  /* margin-left: 0.4em; */
  margin: 0 auto;
`;

export const HeaderDiv = styled.div`
  display: flex;

  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  /* margin-bottom: 2rem; */
  justify-content: center;
  align-content: center;
  background-position-y: 100%;

  flex: 1;
  /* margin-left: 0.4em; */
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 1.4em;
  padding: 0.2em 0;
  margin: 0 auto; /* Ny */
`;

export const Header = styled.div`
  display: flex;
  background-image: url(${wardrobeHeader});
  position: relative;
  width: 100%;
  height: 35vh;

  margin-bottom: 2rem;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  align-content: center;
  background-position-y: 100%;

  svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
  }
`;
//DESCRIPTION TAB

export const DescriptionDiv = styled.div`
  flex: 8;
  margin-left: 0.4em;
  margin-right: 0.4em;

  /* font-size: 1em;
  font-family: 'Roboto', sans-serif; */
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
  margin: 0 0.4em 0.4em 0.4em;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3em;
  font-style: ${props => (props.editState ? 'none' : 'italic')};
  border: ${props => (props.editState ? '1px solid grey' : 'none')};
`;

export const RatingButton = styled.button`
  flex: 1;
  color: #fff;
  background: #000;
  /* margin: 0 0.4em 0.4em 0.4em; */
  /* border: 1px solid #000; */
  text-transform: uppercase;

  padding: 10px 25px;
  font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue',
    sans-serif;

  margin: 0 0.4em 0.4em 0.4em;

  font-weight: bold;
  text-align: center;
  /* font-size: 0.8em; */
  /* width: 50%; */
  /* margin: 0 auto; */
  /* margin-bottom: 1em; */
  border: 2px solid #000;

  :hover {
    color: #000;
    background: white;
    border: 2px solid black;
    cursor: pointer;
  }
`;

export const EditButton = styled.button`
  flex: 1;
  font-weight: ${props => (props.editState ? 'bold' : '300')};
  color: ${props => (props.editState ? 'darkgreen' : '#fff')};
  background: ${props => (props.editState ? 'yellow' : '#000')};
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
