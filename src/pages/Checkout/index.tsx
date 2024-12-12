import {
  CheckoutContainer,
  CheckoutList,
  CheckoutItem,
  CheckoutContent,
  CheckoutControl,
  CheckoutBody,
  CheckoutFooter,
  TotalPrice,
  Shipping,
  Subtotal,
  CheckoutForm,
  UserInfoContainer,
} from './styles';
import { FormAddress } from './components/FormAddress';
import { FormPaymentMethod } from './components/FormPaymentMethod';
import { Stepper } from '../../components/Stepper';
import { Trash } from '@phosphor-icons/react';
import { CoffeeImage } from '../../components/CoffeeImage';
import { useCheckout } from '../../hooks/useCheckout';
import { FormProvider } from 'react-hook-form';

export function Checkout() {
  const { cart, checkoutForm, removeItemCart, handleDelivery, updateItemCart } =
    useCheckout();
  const {
    formState: { isValid, errors },
    handleSubmit,
  } = checkoutForm;

  return (
    <CheckoutForm onSubmit={handleSubmit(handleDelivery)}>
      <FormProvider {...checkoutForm}>
        <UserInfoContainer>
          <FormAddress />
          <FormPaymentMethod />
        </UserInfoContainer>
        <CheckoutContainer>
          <h4>Cafés selecionados</h4>
          <CheckoutBody>
            <CheckoutList>
              {cart.selectedProducts.map((product) => (
                <CheckoutItem key={product.id}>
                  <div>
                    <CoffeeImage
                      src={product.image}
                      alt={product.name}
                      size="small"
                    />
                    <CheckoutContent>
                      <strong>{product.name}</strong>
                      <CheckoutControl>
                        <Stepper
                          maxValue={product.stock}
                          value={product.quantity}
                          onUpdate={(value) => {
                            updateItemCart(product, value);
                          }}
                        />
                        <button
                          onClick={() => {
                            removeItemCart(product.id);
                          }}
                          type="button"
                        >
                          <Trash size={16} weight="bold" />
                          <span>Remover</span>
                        </button>
                      </CheckoutControl>
                    </CheckoutContent>
                  </div>
                  <span>R$ {product.total.toFixed(2)}</span>
                </CheckoutItem>
              ))}
            </CheckoutList>
            <CheckoutFooter>
              <Subtotal>
                <span>Subtotal</span>
                <span>R$ {cart.subtotal.toFixed(2)}</span>
              </Subtotal>
              {isValid && !!errors && (
                <>
                  <Shipping>
                    <span>Frete</span>
                    <span>R$ {cart.shipping}</span>
                  </Shipping>
                  <TotalPrice>
                    <span>Total</span>
                    <span>R$ {cart.total}</span>
                  </TotalPrice>
                </>
              )}
              <button
                type="submit"
                disabled={
                  (!isValid && !!errors) || cart.selectedProducts.length === 0
                }
              >
                confirmar pedido
              </button>
            </CheckoutFooter>
          </CheckoutBody>
        </CheckoutContainer>
      </FormProvider>
    </CheckoutForm>
  );
}
