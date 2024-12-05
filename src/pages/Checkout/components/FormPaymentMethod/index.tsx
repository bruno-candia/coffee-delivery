import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { CardContainer, CardHeader, CardWrapper } from "../../styles";
import { PaymentMethod, PaymentMethods } from "./styles";

const paymentMethods = [
  { id: 1, name: 'Cartão de crédito', icon: CreditCard },
  { id: 2, name: 'Cartão de débito', icon: Bank },
  { id: 3, name: 'Dinheiro', icon: Money },
];

export function FormPaymentMethod() {
  return (
    <CardWrapper>
    <CardContainer>
      <CardHeader>
        <CurrencyDollar size={22} weight="regular" data-icon="money" />
        <span>
          <h5>Pagamento</h5>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja
            pagar
          </p>
        </span>
      </CardHeader>
      <PaymentMethods>
        {paymentMethods.map((method) => (
          <PaymentMethod key={method.id}>
            <method.icon size={16} weight="regular" />
            <span>{method.name}</span>
          </PaymentMethod>
        ))}
      </PaymentMethods>
    </CardContainer>
  </CardWrapper>
  );
}
