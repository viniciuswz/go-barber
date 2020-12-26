import styled, { css } from 'styled-components';

import Tooltip from '../ToolTip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  color: #666360;

  display: flex;
  align-items: center;
  height: 56px;
  border: 2px solid #232129;
  padding: 16px;
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      svg {
        color: #ff9000;
      }
    `}
    svg {
    margin-right: 18px;
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
    flex: 1;

    &::placeholder {
      color: #666360;
    }
  }
  & ~ div {
    margin-top: 8px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
