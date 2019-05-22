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
  height: 200px;

  /* box-shadow: 4px 2px 2px black; */
  border: 1px solid #ccc;
`;

export const TextBox = styled.div`
  flex: 4;
  margin: 0.2em 0.4em 0.4em 0.4em;
  h3 {
    margin: 0;
  }
`;

export const UserWardrobeButton = styled.div`
  link {
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
  }
`;
