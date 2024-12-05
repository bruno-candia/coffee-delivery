import { PriceContainer } from './styles';

interface PriceProps extends React.ComponentProps<'p'> {
  price: number;
  stock?: number;
}

export function Price({ price, stock, ...props }: PriceProps) {
  if (stock === 0) {
    return <PriceContainer {...props}></PriceContainer>;
  }

  return (
    <PriceContainer {...props}>
      R$ <span>{price.toFixed(2)}</span>
    </PriceContainer>
  );
}
