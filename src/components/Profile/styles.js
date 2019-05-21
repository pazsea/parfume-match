import styled from 'styled-components/macro';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1.563;
`;
export const FlexRightContainer = styled.div`
  display: flex;
  justify-content: center;
  /* justify-content: flex-end; */
  flex-grow: 2;
  margin-left: 10px;
  margin-right: 20px;
`;

export const FlexLeftContainer = styled.div`
  /* justify-content: flex-start; */
  flex-grow: 1;
  margin-right: 10px;
  margin-left: 50px;
  width: 35%;
`;

export const ProfileContent = styled.div`
  /* flex-direction: column; */
  justify-content: center;
  text-align: center;
  h1,
  h2 {
    justify-content: center;
  }
  img {
    margin-bottom: 30px;
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

// export const CollectionBackground = styled.div`
//   background-color: lightgreen;
// `;

export const ProfilePicture = styled.div`
  img {
    height: 10rem;
    width: auto;
    border-radius: 50%;
  }
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
export const Blog = styled.div`
  width: 80%;
  flex-wrap: wrap;
`;

export const TitleCenter = styled.div`
  text-align: center;
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
