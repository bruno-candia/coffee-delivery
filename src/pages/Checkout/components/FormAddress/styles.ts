import styled from 'styled-components';
export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const InputWrapper = styled.span`
  position: relative;
  flex: 1;
  width: 100%;

  &::before {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 52%;
    right: -8px;
    content: 'Optional';
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    line-height: 130%;
    font-style: italic;
    color: ${({ theme }) => theme.colors['base-label']};
    transition: opacity 0.2s ease-in-out;
  }

  &:has(input:focus::before) {
    content: '';
    opacity: 0;
  }

  &:has(input:not(:placeholder-shown))::before,
  &:has(input[value]):before {
    content: '';
    opacity: 0;
  }
`;

export const Input = styled.input`
  height: 40px;
  border: transparent;
  border-radius: 4px;
  padding: 12px 12px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};

  &::placeholder {
    ${({ theme }) => theme.fonts.textS};
    color: ${({ theme }) => theme.colors['base-label']};
  }

  &:active,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors['yellow-dark']};
  }

  &[name='zipCode'] {
    width: 40%;
    max-width: 200px;
  }

  &[placeholder='Rua'] {
    width: 100%;
  }

  &[placeholder='Número'] {
    flex: 0 0 200px;
    max-width: 200px;
  }

  &[placeholder='Complemento'] {
    width: 100%;
  }

  &[placeholder='Bairro'] {
    flex: 0 0 200px;
    max-width: 200px;
  }

  &[placeholder='Cidade'] {
    flex: 1;
  }

  &[placeholder='UF'] {
    flex: 0 0 60px;
    max-width: 60px;
    text-transform: uppercase;
  }

  &[aria-invalid='true'] {
    border: 1px solid ${({ theme }) => theme.colors['red']};
  }
`;

export const InputRow = styled.span`
  display: flex;
  gap: 12px;
`;
