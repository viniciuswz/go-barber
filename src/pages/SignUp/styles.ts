import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signInImage from '../../assets/sign-up-background.png';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  max-width: 700px;
  width: 100%;
`;

const appearFromRight = keyframes`
  from {
    opacity:0;
    transform : translateX(50px)
  }
  to{
    opacity:1;
    transform : translateX(0px)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  animation: ${appearFromRight} 1s;
  height: 100vh;

  img {
    margin-bottom: 80px;
  }
  h1 {
    font-size: 24px;
    margin-bottom: 24px;
  }
  form {
    max-width: 340px;
    width: 100%;

    button {
    }
    a {
      display: block;
      text-decoration: none;
      margin-top: 24px;
      text-align: center;
      color: #f4ede8;
      transition: 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
    & ~ a {
      display: flex;
      text-decoration: none;
      margin-top: 24px;
      text-align: center;
      color: #ff9400;
      align-items: center;
      transition: 0.2s;
      &:hover {
        opacity: 0.8;
      }
      svg {
        margin-right: 18px;
      }
    }
  }
`;

export const Background = styled.div`
  background: url(${signInImage}) no-repeat center;
  background-size: cover;
  flex: 1;
`;
