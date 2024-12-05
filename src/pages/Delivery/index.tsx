import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import { DeliveryAddress, DeliveryContainer, DeliveryHeader, DeliveryInfos, DeliveryPaymentMethod, DeliveryTime, DeliveryWrapper } from './styles';

export function Delivery() {
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
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> Farrapos - Porto
              Alegre, RS
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
              <p>Cartão de Crédito</p>
            </div>
          </DeliveryPaymentMethod>
        </DeliveryInfos>
      </DeliveryContainer>
      <img src="/delivery-illustration.svg" alt="" />
    </DeliveryWrapper>
  );
}
