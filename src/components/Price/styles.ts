import styled from 'styled-components';

export const PriceContainer = styled.p`
  ${({ theme }) => theme.fonts.textS};
  color: ${({ theme }) => theme.colors['base-text']};
  
  & span {
    ${({ theme }) => theme.fonts.titleM};
  }
`
