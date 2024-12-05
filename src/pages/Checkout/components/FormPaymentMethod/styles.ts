import styled from 'styled-components';

export const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .75rem;
`;

export const PaymentMethod = styled.button`
  display: flex;
  align-items: center;
  gap: .75rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors['base-button']};
  ${({ theme }) => theme.fonts.buttonS};
  text-transform: uppercase;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  &.selected {
    background: ${({ theme }) => theme.colors['purple-light']};
    border: 1px solid ${({ theme }) => theme.colors['purple']};
  }

  & svg {
    color: ${({ theme }) => theme.colors['purple']};
  }
`;
