import styled from 'styled-components';

export const CoffeeListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 9.8125rem;
  width: 100%;
  gap: 3.375rem;

  & h3 {
    ${({ theme }) => theme.fonts.titleL};
    color: ${({ theme }) => theme.colors['base-title']};
  }

  & ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    column-gap: 2rem;
    row-gap: 2.5rem;
    width: 100%;
    list-style: none;
  }

  @media (max-width: 1120px) {
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    align-items: center;
    gap: 3rem;

    & ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const CoffeeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 36px 36px 6px 6px;
  background: ${({ theme }) => theme.colors['base-card']};
  padding: 0 1.25rem 1.25rem 1.25rem;

  & img {
    margin-top: calc(0px - 1.25rem);
    border-radius: 36px 36px 6px 6px;
  }
`;

export const CoffeeItemHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;

  & div {
    display: flex;
    gap: 4px;
  }
`;

export const CoffeeItemBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  margin-bottom: 2.0625rem;

  & h2 {
    ${({ theme }) => theme.fonts.titleS};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  & p {
    ${({ theme }) => theme.fonts.textS};
    color: ${({ theme }) => theme.colors['base-label']};
  }
`;

export const CoffeeItemFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const CoffeeForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 100%;
`;
