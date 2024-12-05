import { ShoppingCart } from '@phosphor-icons/react';
import { Button } from './styles';

type CartButtonProps = React.ComponentProps<typeof Button>;

export function CartButton({  ...props }: CartButtonProps) {
  return (
    <Button {...props}>
      <ShoppingCart size={22} weight="fill" />
    </Button>
  );
}
