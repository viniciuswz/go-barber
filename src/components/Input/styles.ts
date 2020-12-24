import styled from 'styled-components';

export const Container = styled.div`
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
`;
