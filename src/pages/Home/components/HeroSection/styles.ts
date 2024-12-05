import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3.5rem;
  width: 100%;
  z-index: 1;
  padding: 5.75rem 0;

  & img {
    width: 100%;
    max-width: 30rem;
    min-width: 16rem;
  }

  @media (max-width: 1120px) {
    padding: 5.75rem 3rem;
  }


  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    gap: 3rem;


    & img {
      order: -1;
    }
  }

`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: flex-start;
  gap: 4.125rem;

   & div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: flex-start;

    & h1 {
      ${({ theme }) => theme.fonts.titleXL};
      color: ${({ theme }) => theme.colors['base-title']};
    }

    & p {
      ${({ theme }) => theme.fonts.textL};
      color: ${({ theme }) => theme.colors['base-text']};
    }

    @media (max-width: 768px) {
      & h1 {
        ${({ theme }) => theme.fonts.titleL};
      }


      & p {
        ${({ theme }) => theme.fonts.textM};
      }
    }
   }

  & ul {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2.5rem;
    row-gap: 1.25rem;


    @media (max-width: 1120px) {
      grid-template-columns: 1fr;
    }
  }
`;