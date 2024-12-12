import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  color: ${({ theme }) => theme.colors['white']};
  background: ${({ theme }) => theme.colors['purple-dark']};
  padding: 8px;
  border-radius: 6px;
  line-height: 0;
  border: 0;
  cursor: pointer;

  &:disabled {
    color: ${({ theme }) => theme.colors['base-label']};
    background-color: ${({ theme }) => theme.colors['base-button']};
    cursor: not-allowed;
  }
`;
