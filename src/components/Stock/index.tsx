import { StockContainer } from './styles';

interface StockProps extends React.ComponentProps<'p'> {
  stock: number;
}

export function Stock({ stock, ...props }: StockProps) {
  if (stock === 0) {
    return <StockContainer {...props}>Fora de estoque</StockContainer>;
  }

  return <StockContainer {...props}>Em estoque: {stock}</StockContainer>;
}
