import styled from 'styled-components';

export const DeliveryWrapper = styled.div`
  display: grid;
  grid-template-columns: 15fr 14fr;
  gap: 6.375rem;
  width: 100%;
  height: 100%;
  max-width: 1120px;
  padding: 5rem 0 0 0;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
    padding: 0 3rem;
  }

  & img {
    display: flex;
    align-self: flex-end;
    justify-self: flex-end;
  }
`;

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const DeliveryHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  & h1 {
    ${({ theme }) => theme.fonts.titleL};
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  & p {
    ${({ theme }) => theme.fonts.textL};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`;

export const DeliveryInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-sizing: content-box;
  background:
    linear-gradient(
        ${({ theme }) => theme.colors['background']},
        ${({ theme }) => theme.colors['background']}
      )
      padding-box,
    linear-gradient(
        63deg,
        ${({ theme }) => theme.colors['yellow']},
        ${({ theme }) => theme.colors['purple']}
      )
      border-box;
  border: 1px solid transparent;
  border-radius: 6px 36px 6px 36px;
  outline: none;
  padding: 2.5rem;

  & div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    max-width: 22.125rem;

    & span {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      padding: 0.5rem;
      color: ${({ theme }) => theme.colors['white']};
    }

    & svg {
      width: 1rem;
      height: 1rem;
    }

    & p {
      ${({ theme }) => theme.fonts.textM};
      color: ${({ theme }) => theme.colors['base-text']};

      & strong {
        ${({ theme }) => theme.fonts.textMBold};
      }
    }
  }
`;

export const DeliveryAddress = styled.div`
  & span {
    background: ${({ theme }) => theme.colors['purple']};
  }
`;

export const DeliveryTime = styled.div`
  & span {
    background: ${({ theme }) => theme.colors['yellow']};
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    color: ${({ theme }) => theme.colors['base-text']};

    & h4 {
      ${({ theme }) => theme.fonts.textM};
    }

    & p {
      ${({ theme }) => theme.fonts.textMBold};
    }
  }
`;

export const DeliveryPaymentMethod = styled.div`
  & span {
    background: ${({ theme }) => theme.colors['yellow-dark']};
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    color: ${({ theme }) => theme.colors['base-text']};

    & h4 {
      ${({ theme }) => theme.fonts.textM};
    }

    & p {
      ${({ theme }) => theme.fonts.textMBold};
    }
  }
`;
