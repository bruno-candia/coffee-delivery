import styled from 'styled-components';

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors['base-button']};
  padding: 5.5px 8px;
  gap: 4px;
  border-radius: 6px;
  height: inherit;

  & input {
    ${({ theme }) => theme.fonts.textM};
    color: ${({ theme }) => theme.colors['base-title']};
    background: transparent;
    border-radius: 6px;
    border: 0;
    width: 20px;
    height: 21px;
    display: flex;
    align-items: center;
    line-height: 0;
    justify-content: center;
    text-align: center;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  & button {
    line-height: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.colors['purple']};

    &:hover {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }

    &:disabled {
      color: ${({ theme }) => theme.colors['base-label']};
      cursor: not-allowed;
    }
  }
`;
