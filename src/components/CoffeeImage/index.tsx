import { CoffeeImageComponent } from './styles';

interface CoffeeImageProps {
  src: string;
  alt: string;
  size: 'regular' | 'small';
}

export function CoffeeImage({ src, alt, size }: CoffeeImageProps) {
  return <CoffeeImageComponent src={src} alt={alt} size={size} />;
}
