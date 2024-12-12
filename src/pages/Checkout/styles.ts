import styled from 'styled-components';

export const CheckoutForm = styled.form`
  display: grid;
  grid-template-columns: 1.42862fr 1fr;
  gap: 2rem;
  width: 100%;
  height: 100%;
  max-width: 1120px;
  padding: 2.5rem 0 0 0;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
    padding: 0 3rem;
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & h4 {
    ${({ theme }) => theme.fonts.titleXS};
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  width: 100%;

  & h4 {
    ${({ theme }) => theme.fonts.titleXS}
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  gap: 2rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  & svg {
    &[data-icon='money'] {
      color: ${({ theme }) => theme.colors['purple']};
    }

    &[data-icon='map'] {
      color: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }

  & h5 {
    ${({ theme }) => theme.fonts.textM};
  }

  & p {
    ${({ theme }) => theme.fonts.textS};
  }
`;

export const CheckoutBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;
  padding: 2.5rem;
`;

export const CheckoutList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-height: 300px;
  overflow-y: auto;
  scrollbar-width: thin;
  padding-right: 1rem;
  padding-bottom: 1.5rem;
`;

export const CheckoutItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px 4px;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    & img {
      margin: 0;
    }
  }

  & strong {
    ${({ theme }) => theme.fonts.textM};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  & span {
    ${({ theme }) => theme.fonts.textMBold};
    color: ${({ theme }) => theme.colors['base-text']};
    text-align: right;
  }
`;

export const CheckoutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CheckoutControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  box-sizing: border-box;

  & > button {
    display: flex;
    align-items: center;
    gap: 4px;
    border: 0;
    color: ${({ theme }) => theme.colors['purple']};
    cursor: pointer;
    background: ${({ theme }) => theme.colors['base-button']};
    padding: 0.5rem;
    border-radius: 6px;
    transition: background 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors['base-hover']};
    }

    & span {
      ${({ theme }) => theme.fonts.buttonS};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors['base-text']};
      line-height: 0;
    }
  }
`;

export const CheckoutFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors['base-button']};

  & div {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors['base-text']};
  }

  & button {
    ${({ theme }) => theme.fonts.buttonG};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors['white']};
    background: ${({ theme }) => theme.colors['yellow']};
    border: 0;
    padding: 0.75rem 0;
    margin-top: 0.75rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;

    &:disabled {
      background: ${({ theme }) => theme.colors['base-button']};
      cursor: not-allowed;

      &:hover {
        background: ${({ theme }) => theme.colors['base-button']};
      }
    }

    &:hover {
      background: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }
`;

export const Subtotal = styled.div`
  ${({ theme }) => theme.fonts.textM};

  & span:first-child {
    ${({ theme }) => theme.fonts.textS};
  }
`;

export const Shipping = styled.div`
  ${({ theme }) => theme.fonts.textM};

  & span:first-child {
    ${({ theme }) => theme.fonts.textS};
  }
`;

export const Total = styled.div`
  & span {
    ${({ theme }) => theme.fonts.textLBold};
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    ${({ theme }) => theme.fonts.textLBold};
  }
`;
