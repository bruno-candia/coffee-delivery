import styled, { css } from 'styled-components';

interface CoffeeTagProps {
  outOfStock?: boolean;
}


export const CoffeeTag = styled.span<CoffeeTagProps>`
  display: flex;
  gap: 4px;
  ${({ theme }) => theme.fonts.tag};
  color: ${({ theme }) => theme.colors['yellow-dark']};
  background: ${({ theme }) => theme.colors['yellow-light']};
  padding: 4px 8px;
  border-radius: 6.25rem;
  text-transform: uppercase;

  ${({ outOfStock }) => outOfStock && css`
    color: ${({ theme }) => theme.colors['red-dark']};
    background: ${({ theme }) => theme.colors['red-light']};
  `}
`;