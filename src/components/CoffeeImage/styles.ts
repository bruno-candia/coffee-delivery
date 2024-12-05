 
import styled, { css } from "styled-components";


const IMAGE_SIZE = {
  regular: css`
    max-width: 7.5rem;
    height: auto;
  `,

  small: css`
    max-width: 4rem;
    height: auto;
  `
} as const;

interface CoffeeImageComponentProps {
  size: keyof typeof IMAGE_SIZE;
}

export const CoffeeImageComponent = styled.img<CoffeeImageComponentProps>`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: block;

  ${({ size }) => IMAGE_SIZE[size]}
`;