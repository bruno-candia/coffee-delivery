import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  z-index: 1;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.5rem;
  max-width: 1120px;

  & img {
    height: 2.5rem;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  @media (max-width: 1120px) {
    padding: 0 3rem;
  }
`;

interface LocationProps {
  loading: string;
  theme: DefaultTheme;
}

export const Location = styled.span<LocationProps>`
  display: flex;
  align-items: center;
  gap: 4px;
  ${({ theme }) => theme.fonts.textS};
  color: ${({ theme }) => theme.colors['purple-dark']};
  background: ${({ theme }) => theme.colors['purple-light']};
  padding: 8px;
  border-radius: 6px;

  & svg {
    color: ${({ theme }) => theme.colors['purple']};
  }

  ${({ loading, theme }: { loading: string; theme: DefaultTheme }) =>
    loading === 'true' &&
    css`
      width: 12.5rem;
      align-items: center;
      justify-content: flex-start;
      background-color: ${theme.colors['purple-light']};
      background: linear-gradient(
          100deg,
          rgba(255, 255, 255, 0) 40%,
          rgba(255, 255, 255, 0.5) 50%,
          rgba(255, 255, 255, 0) 60%
        )
        ${theme.colors['purple-light']};
      background-size: 200% 100%;
      background-position-x: 180%;
      animation: 1s loading ease-in-out infinite;

      @keyframes loading {
        to {
          background-position-x: -20%;
        }
      }
    `}

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Link = styled(NavLink)`
  position: relative;
  color: ${({ theme }) => theme.colors['yellow-dark']};
  background: ${({ theme }) => theme.colors['yellow-light']};

  & span {
    position: absolute;
    transform: translate(50%, -50%);
    top: 0;
    right: 0;
    ${({ theme }) => theme.fonts.textSBold};
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors['yellow-dark']};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1px;
    line-height: 0;
    overflow: hidden;
  }

  padding: 8px;
  border-radius: 6px;
  line-height: 0;
  border: 0;
  cursor: pointer;
`;
