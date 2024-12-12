import { useContext, useEffect } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Cart, PaymentMethodEnum, Product } from '../types/coffee';
import CartContext from '../context/CartContext';
import * as zod from 'zod';
import { useNavigate } from 'react-router-dom';

interface UseCheckoutProps {
  cart: Cart;
  checkoutForm: UseFormReturn<{
    zipCode: string;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    acronymState: string;
    paymentMethod: PaymentMethodEnum;
  }>;
  handleDelivery: () => void;
  removeItemCart: (id: number) => void;
  updateItemCart: (product: Product, quantity: number) => void;
}

const checkoutFormValidationSchema = zod.object({
  zipCode: zod.string().nonempty(),
  street: zod.string().nonempty(),
  number: zod.string().nonempty(),
  complement: zod.string().nonempty(),
  district: zod.string().nonempty(),
  city: zod.string().nonempty(),
  acronymState: zod.string().nonempty().min(2).max(2),
  paymentMethod: zod.nativeEnum(PaymentMethodEnum, {
    errorMap: () => ({ message: 'Selecione um método de pagamento' }),
  }),
});

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>;

export function useCheckout(): UseCheckoutProps {
  const {
    cart,
    updateItemCart,
    cartSimulation,
    removeItemCart,
    removeAllItemsCart,
    getUserData,
  } = useContext(CartContext);
  const navigate = useNavigate();

  console.log(navigate);

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      acronymState: '',
      paymentMethod: undefined,
    },
    mode: 'onBlur',
  });

  function handleDelivery() {
    if (checkoutForm.formState.isValid) {
      getUserData({
        address: {
          zipCode: checkoutForm.getValues().zipCode,
          street: checkoutForm.getValues().street,
          number: checkoutForm.getValues().number,
          complement: checkoutForm.getValues().complement,
          district: checkoutForm.getValues().district,
          city: checkoutForm.getValues().city,
          acronymState: checkoutForm.getValues().acronymState,
        },
        paymentMethod: checkoutForm.getValues().paymentMethod,
      });
      navigate('/delivery');
      removeAllItemsCart();
    }
  }

  useEffect(() => {
    cartSimulation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { cart, checkoutForm, updateItemCart, removeItemCart, handleDelivery };
}
