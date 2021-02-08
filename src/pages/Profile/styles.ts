import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    width: 100%;
    height: 144px;
    background: #28262e;
    display: flex;
    align-self: center;
    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      svg {
        color: #999591;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -100px auto 0;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    max-width: 340px;
    width: 100%;
    h1 {
      font-size: 20px;
      margin-bottom: 24px;
    }

    button {
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  align-self: center;
  width: 186px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  position: relative;
  label {
    width: 48px;
    height: 48px;
    background: #ff9000;
    border-radius: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.2s;
    cursor: pointer;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }
    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
