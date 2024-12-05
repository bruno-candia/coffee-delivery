import { CoffeeTag } from './styles';

interface TagProps extends React.ComponentProps<'span'> {
  tag: string;
}

export function Tag({ tag,  ...props }: TagProps) {
  return <CoffeeTag {...props}>{tag}</CoffeeTag>;
}
