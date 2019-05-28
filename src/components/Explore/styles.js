import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0.8em 0;
  /* border: 1px solid red; */
`;

export const TitleCenter = styled.div`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  /* vertical-align: middle; */
  display: flex;
  /* height: 20%; */
  font-size: 1.5em;
  flex-direction: column;
  color: black;
  border: 5px double black;
  margin-top: 0.8em;
  height: 80%;
  width: 30%;
  padding: 0 1.5%;
  justify-content: center;
  h1 {
    margin: 6% 0 2% 0;
  }
  p {
    i {
      color: lightgreen;
      font-weight: bold;
    }
  }
  /* font-weight: bold; */
  background-color: rgba(255, 255, 255, 0.6);
  font-family: 'Amatic SC', cursive;
`;
export const ImageDiv = styled.div`
  flex-basis: 40%;
  display: flex;
  justify-content: center;

  img {
    height: 15rem;
    min-width: 12rem;
    width: auto;

    max-width: 17rem;
    border-radius: 50%;
    /* border: 1px solid black; */
    align-self: center;
    /* width: 50%;
    height: 300px; */
  }
`;

export const ParfumeDiv = styled.div`
  flex-basis: 35%;
  display: flex;
  flex-direction: column;
  height: 300px;

  /* box-shadow: 4px 2px 2px black; */
  border: 1px solid #ccc;
`;

export const QuizTitle = styled.div`
  text-align: center;
  letter-spacing: 0;
  font-weight: 900;
  font-size: 1em;
`;

export const TextBox = styled.div`
  flex: 4;
  margin: 0.8em 0.8em 0.8em 0.8em;
  overflow-y: hidden;
  font-size: 1.1em;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-style: italic;
  border: none;
  h3 {
    margin: 0 0 0.4em 0;
    font-style: normal;
    font-weight: 900;
  }
`;

export const RatingBox = styled.textarea`
  height: 100px;
  /* overflow-y: scroll; */
  margin: 0 0.4em 0.4em 0.4em;
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  font-size: 1em;
  border: none;
`;

export const ButtonWrapper = styled.div`
  flex: 1;
  height: fit-content;

  #link {
    /* display: flex;
    align-content: center; */
    cursor: pointer;
    height: 100%;
    width: 100%;
    background-color: black;
    border: none;
    color: white;
    padding-top: 20px;
    padding-right: 32px;
    padding-left: 32px;

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
    :hover {
      color: #000;
      background: white;
      border: 1px solid black;
      cursor: pointer;
    }
  }
`;
