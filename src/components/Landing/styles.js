import styled from 'styled-components';
import landingbg from '../../images/landingbg.jpg';

export const LandingDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100vw;
  height: 100vh;
  background-image: url(${landingbg});
  background-size: cover;
`;
