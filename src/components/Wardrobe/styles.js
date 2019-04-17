import styled from 'styled-components';

export const QuizTitle = styled.div`
  text-align: center;
  letter-spacing: 0;
  font-weight: 900;
  font-size: 1em;
`;

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
`;

// ONE WHOLE CARD
export const ImageDiv = styled.div`
  margin: 0.5em;
  flex: 1;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  img {
    align-self: center;
    width: 50%;
    height: auto;
  }
`;

export const ParfumeDiv = styled.div`
  margin: 0.5em;
  flex: 1;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
`;

export const StarsDiv = styled.div`
  flex: 1;
  border: 1px solid black;
  font-size: 1.5em;
`;
export const HeaderDiv = styled.div`
  flex: 1;
  border: 1px solid black;
`;

//DESCRIPTION TAB

export const DescriptionDiv = styled.div`
  flex: 8;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex: 1;
  /* border: 1px solid black; */
  flex-direction: row;
  button {
    cursor: pointer;
    background: none;
    border: 1px solid black;
  }
`;

//MY RATING TAB

export const RatingForm = styled.form`
  border: 1px solid yellow;
  display: flex;
  /* align-items: stretch; */
  flex-direction: column;
  flex: 8;
  label {
    font-size: 1.5em;
  }
`;

export const RatingBox = styled.input`
  flex: 8;
`;

export const RatingButton = styled.input`
  flex: 1;
`;
