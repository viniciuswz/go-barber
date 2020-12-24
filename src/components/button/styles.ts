import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
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
`;
