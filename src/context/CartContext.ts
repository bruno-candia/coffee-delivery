import { createContext } from 'react';
import { Address, Cart, PaymentMethodEnum, Product } from '../types/coffee';

interface CartContextProps {
  updateCart: (product: Product) => void;
  updateQuantity: (id: number, quantity: number) => void;
  productQuantities: { [key: number]: number };
  cart: Cart;
  removeItemCart: (id: number) => void;
  updateItemCart: (product: Product, quantity: number) => void;
  cartSimulation: () => void;
  clearCart: () => void;
  getUserData: (userDate: {
    address: Address;
    paymentMethod: PaymentMethodEnum;
  }) => void;
  removeAllItemsCart: () => void;
}

const CartContext = createContext({} as CartContextProps);

export default CartContext;
