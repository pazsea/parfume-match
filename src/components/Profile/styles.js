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

  flex-grow: 2;
  margin-left: 10px;
  margin-right: 20px;
`;

export const FlexLeftContainer = styled.div`
  flex-grow: 1;
  margin-right: 10px;
  margin-left: 5rem;
  width: 30%;
`;

export const ProfileContent = styled.div`
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
    margin-bottom: 4rem;
    padding: 15px 32px;
    font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue',
      sans-serif;
    cursor: pointer;
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

export const ProfilePicture = styled.div`
  #file-input {
    display: none;
  }
  img {
    height: 15rem;
    width: auto;
    border-radius: 10%;
    cursor: cell;
  }
`;
export const Header = styled.div`
  display: flex;
  background-image: url(${props => props.headerImage});
  position: relative;
  width: 100%;
  height: 35vh;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 2rem;
  justify-content: center;
  align-content: center;

  svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
  }
`;
export const Blog = styled.div`
  width: 80%;
  flex-wrap: wrap;
  a {
    color: black;
  }
`;

export const TitleCenter = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;
export const TitleOnHeaderCenter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  color: white;
`;

export const TextCenter = styled.div`
  width: 50%;
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

export const DescriptionBox = styled.div`
  width: 80%;
  flex-wrap: wrap;
  textarea {
    width: 100%;
    height: 7rem;
    flex-wrap: wrap;
  }
`;

export const NoCollectionWrapper = styled.div`
  display: flex;
  background-color: lightgrey;
  flex-direction: column;
  width: 100%;
  height: 35vh;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
`;

export const SmallButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  text-align: center;

  #link {
    justify-content: flex-start;
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
  #input {
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
    font-size: 12px;
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

export const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  #link {
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
