import styled from 'styled-components';

export const StockContainer = styled.p`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 12px;
  ${({ theme }) => theme.fonts.textXS};
  color: ${({ theme }) => theme.colors['base-label']};
`
