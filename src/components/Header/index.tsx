import { HeaderContainer, HeaderContent, Link, Location } from './styles';
import coffeeDeliveryLogo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { useCurrentCity } from '../../hooks/useCurrentCity';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';

export function Header() {
  const { currentCity, loading, error } = useCurrentCity();
  const { cart } = useContext(CartContext);

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="Coffee Delivery Logo" />
        </NavLink>

        <div>
          <Location loading={loading.toString()}>
            <MapPin size={22} weight="fill" />
            {error && 'Erro ao obter localização'}
            {currentCity && currentCity}
          </Location>

          <Link to="/checkout">
            <span>{cart.totalQuantity}</span>
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
}
