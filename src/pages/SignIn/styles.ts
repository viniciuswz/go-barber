import styled from 'styled-components';
import { shade } from 'polished';
import signInImage from '../../assets/sign-in-background.png';

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
    div {
      background: #232129;
      border-radius: 10px;
      display: flex;
      align-items: center;
      height: 56px;
      border: 2px solid transparent;

      svg {
        margin: 0 18px;
        color: #666360;
      }
      input {
        background: transparent;
        color: #fff;
        border: 0;

        &::placeholder {
          color: #666360;
        }
      }
      & ~ div {
        margin-top: 8px;
      }
    }
    button {
      width: 100%;
      height: 56px;
      font-size: 16px;
      background: #ff9000;
      border-radius: 10px;

      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 24px;
      border: 0;
      transition: 0.2s;
      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
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
`;

export const Background = styled.div`
  background: url(${signInImage}) no-repeat center;
  background-size: cover;
  flex: 1;
`;
