import {
  CheckoutContainer,
  FormWrapper,
  CheckoutWrapper,
  CheckoutList,
  CheckoutItem,
  CheckoutContent,
  CheckoutControl,
  CheckoutBody,
  CheckoutFooter,
  TotalPrice,
  Shipping,
  Subtotal,
} from './styles';
import { FormAddress } from './components/FormAddress';
import { FormPaymentMethod } from './components/FormPaymentMethod';
import { Stepper } from '../../components/Stepper';
import { Trash } from '@phosphor-icons/react';
import { CoffeeImage } from '../../components/CoffeeImage';

export function Checkout() {
  return (
    <CheckoutWrapper>
      <FormWrapper>
        <FormAddress />
        <FormPaymentMethod />
      </FormWrapper>
      <CheckoutContainer>
        <h4>Cafés selecionados</h4>
        <CheckoutBody>
          <CheckoutList>
            <CheckoutItem>
              <div>
                <CoffeeImage
                  src="/cappuccino.png"
                  alt="Cappuccino"
                  size="small"
                />
                <CheckoutContent>
                  <strong>Cappuccino</strong>
                  <CheckoutControl>
                    <Stepper maxValue={1} />
                    <button>
                      <Trash size={16} weight="bold" />
                      <span>Remover</span>
                    </button>
                  </CheckoutControl>
                </CheckoutContent>
              </div>
              <span>R$ 5,00</span>
            </CheckoutItem>
            <CheckoutItem>
              <div>
                <CoffeeImage
                  src="/cappuccino.png"
                  alt="Cappuccino"
                  size="small"
                />
                <CheckoutContent>
                  <strong>Cappuccino</strong>
                  <CheckoutControl>
                    <Stepper  maxValue={1}/>
                    <button>
                      <Trash size={16} weight="bold" />
                      <span>Remover</span>
                    </button>
                  </CheckoutControl>
                </CheckoutContent>
              </div>
              <span>R$ 5,00</span>
            </CheckoutItem>
          </CheckoutList>
          <CheckoutFooter>
            <Subtotal>
              <span>Subtotal</span>
              <span>R$ 5,00</span>
            </Subtotal>
            <Shipping>
              <span>Frete</span>
              <span>R$ 5,00</span>
            </Shipping>
            <TotalPrice>
              <span>Total</span>
              <span>R$ 10,00</span>
            </TotalPrice>
            <button type='submit'>confirmar pedido</button>
          </CheckoutFooter>
        </CheckoutBody>
      </CheckoutContainer>
    </CheckoutWrapper>
  );
}
