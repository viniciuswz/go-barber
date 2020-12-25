import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  color: #666360;

  display: flex;
  align-items: center;
  height: 56px;
  border: 2px solid #232129;
  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      svg {
        color: #ff9000;
      }
    `}

  svg {
    margin: 0 18px;
    ${props =>
      props.isFilled &&
      css`
        color: #ff9000;
      `}
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
`;
