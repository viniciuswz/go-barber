import styled from 'styled-components';
import { shade } from 'polished';
import signInImage from '../../assets/sign-up-background.png';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
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
      color: #fff;
      transition: 0.2s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  > a {
    display: flex;
    text-decoration: none;
    margin-top: 24px;
    text-align: center;
    color: #f4ede8;
    align-items: center;
    transition: 0.2s;
    &:hover {
      color: ${shade(0.2, '#F4EDE8')};
    }
    svg {
      margin-right: 18px;
    }
  }
`;

export const Background = styled.div`
  background: url(${signInImage}) no-repeat center;
  background-size: cover;
  flex: 1;
`;
