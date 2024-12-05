import { ReactNode } from 'react';
import { ICON_COLOR, ItemContainer } from './styles';
import { Icon } from '@phosphor-icons/react/dist/lib/types';

interface IconProps extends React.ComponentProps<Icon> {
  icon: Icon;
  itemColor?: ICON_COLOR;
  children: ReactNode;
}

export function IntroItem({
  icon: ItemIcon,
  itemColor = ICON_COLOR.YELLOW_DARK,
  children,
  ...props
}: IconProps) {
  return (
    <ItemContainer $item-color={itemColor}>
      <span>
        <ItemIcon size={16} weight="fill" {...props} />
      </span>
      <p>{children}</p>
    </ItemContainer>
  );
}
