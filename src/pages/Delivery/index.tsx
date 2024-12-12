import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import {
  DeliveryAddress,
  DeliveryContainer,
  DeliveryHeader,
  DeliveryInfos,
  DeliveryPaymentMethod,
  DeliveryTime,
  DeliveryWrapper,
} from './styles';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { PaymentMethodEnum } from '../../types/coffee';

export function Delivery() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
      clearCart();
    }, 5000);
  }, [clearCart, navigate]);

  function translatePaymentMethod() {
    switch (cart.paymentMethod) {
      case PaymentMethodEnum.CREDIT:
        return 'Cartão de crédito';
      case PaymentMethodEnum.DEBIT:
        return 'Cartão de débito';
      case PaymentMethodEnum.MONEY:
        return 'Dinheiro';
      default:
        return 'Não informado';
    }
  }

  return (
    <DeliveryWrapper>
      <DeliveryContainer>
        <DeliveryHeader>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </DeliveryHeader>

        <DeliveryInfos>
          <DeliveryAddress>
            <span>
              <MapPin size={16} weight="fill" />
            </span>
            <p>
              Entrega em{' '}
              <strong>
                {cart.address.street}, {cart.address.number}
              </strong>{' '}
              {cart.address.district} - {cart.address.city},{' '}
              {cart.address.acronymState}
            </p>
          </DeliveryAddress>
          <DeliveryTime>
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <div>
              <h4>Previsão de entrega</h4>
              <p>20 min - 30 min</p>
            </div>
          </DeliveryTime>
          <DeliveryPaymentMethod>
            <span>
              <CurrencyDollar size={16} />
            </span>
            <div>
              <h4>Pagamento na entrega</h4>
              <p>{translatePaymentMethod()}</p>
            </div>
          </DeliveryPaymentMethod>
        </DeliveryInfos>
      </DeliveryContainer>
      <img src="/delivery-illustration.svg" alt="" />
    </DeliveryWrapper>
  );
}
