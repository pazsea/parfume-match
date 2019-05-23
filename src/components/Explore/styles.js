import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0.8em 0;
  /* border: 1px solid red; */
`;

export const ImageDiv = styled.div`
  flex-basis: 40%;
  display: flex;
  justify-content: center;

  img {
    height: 15rem;
    width: auto;
    border-radius: 50%;
    align-self: center;
    /* width: 50%;
    height: 300px; */
  }
`;

export const ParfumeDiv = styled.div`
  flex-basis: 50%;
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
  margin: 0.2em 0.4em 0.4em 0.4em;
  overflow-y: hidden;
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  h3 {
    margin: 0;
  }
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
