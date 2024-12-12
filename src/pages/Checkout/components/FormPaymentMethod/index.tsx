import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react';
import { CardContainer, CardHeader, CardWrapper } from '../../styles';
import { PaymentMethod, PaymentMethods, PaymentRadioInput } from './styles';
import { PaymentMethodEnum } from '../../../../types/coffee';
import { useFormContext } from 'react-hook-form';

const paymentMethods = [
  {
    id: 1,
    name: 'Cartão de crédito',
    icon: CreditCard,
    value: PaymentMethodEnum.CREDIT,
  },
  {
    id: 2,
    name: 'Cartão de débito',
    icon: Bank,
    value: PaymentMethodEnum.DEBIT,
  },
  { id: 3, name: 'Dinheiro', icon: Money, value: PaymentMethodEnum.MONEY },
];

export function FormPaymentMethod() {
  const { register, setValue, trigger } = useFormContext();

  return (
    <CardWrapper>
      <CardContainer>
        <CardHeader>
          <CurrencyDollar size={22} weight="regular" data-icon="money" />
          <span>
            <h5>Pagamento</h5>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </span>
        </CardHeader>
        <PaymentMethods>
          {paymentMethods.map((method) => (
            <div key={method.id} style={{ position: 'relative' }}>
              <PaymentRadioInput
                type="radio"
                id={`payment-${method.value}`}
                value={method.value}
                {...register('paymentMethod', {
                  onChange: (e) => {
                    setValue('paymentMethod', e.target.value);
                    trigger('paymentMethod');
                  },
                })}
              />
              <PaymentMethod>
                <method.icon size={16} weight="regular" />
                <span>{method.name}</span>
              </PaymentMethod>
            </div>
          ))}
        </PaymentMethods>
      </CardContainer>
    </CardWrapper>
  );
}
