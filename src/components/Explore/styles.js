import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0.8em 0;
  border: 1px solid red;
`;

export const ImageDiv = styled.div`
  flex-basis: 40%;
  display: flex;
  justify-content: center;

  img {
    align-self: center;
    width: 50%;
    /* height: auto; */
    border: 1px solid blue;
  }
`;

export const ParfumeDiv = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;

  /* box-shadow: 4px 2px 2px black; */
  border: 1px solid #ccc;
`;
