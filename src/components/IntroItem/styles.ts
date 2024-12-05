import styled from 'styled-components';

export enum ICON_COLOR {
  YELLOW_DARK = 'yellow-dark',
  YELLOW = 'yellow',
  PURPLE = 'purple',
  GRAY_DARK = 'base-text',
}

interface ItemProps {
  '$item-color': ICON_COLOR;
}

export const ItemContainer = styled.li<ItemProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors['base-text']};

  & span {
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors['white']};
    background-color: ${({ theme, '$item-color': color }) =>
      theme.colors[color]};
  }

  & p {
    ${({ theme }) => theme.fonts.textM}
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    & p {
      ${({ theme }) => theme.fonts.textS};
    }
  }
`;
