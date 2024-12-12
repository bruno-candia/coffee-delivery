import styled from 'styled-components';

export const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  & > div {
    position: relative;
  }
`;

export const PaymentMethod = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors['base-button']};
  ${({ theme }) => theme.fonts.buttonS};
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition:
    background 0.3s,
    border 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  & svg {
    color: ${({ theme }) => theme.colors['purple']};
  }

  input:checked + & {
    background: ${({ theme }) => theme.colors['purple-light']};
    border: 1px solid ${({ theme }) => theme.colors['purple']};
  }
`;

export const PaymentRadioInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 99;
  opacity: 0;
`;
