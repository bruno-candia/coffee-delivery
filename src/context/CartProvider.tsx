import { ReactNode, useEffect, useReducer, useState } from 'react';
import CartContext from './CartContext';
import { Address, PaymentMethodEnum, Product } from '../types/coffee';
import { cartReducer, initialCartState } from '../reducers/cart/reducer';
import {
  addCartAction,
  cartSimulationAction,
  clearCartAction,
  removeAllItemsCartAction,
  removeItemCartAction,
  saveUserDataAction,
  updateItemCartAction,
} from '../reducers/cart/action';

interface CartProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartProviderProps) {
  const [productQuantities, setProductQuantities] = useState<{
    [key: number]: number;
  }>({});
  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialCartState,
    (initialState) => {
      const localStorageCart = localStorage.getItem(
        '@coffeeDelivery:cart-1.0.0',
      );

      if (localStorageCart) {
        return {
          cart: JSON.parse(localStorageCart),
        };
      }

      return initialState;
    },
  );

  const { cart } = cartState;

  const updateQuantity = (id: number, quantity: number) => {
    setProductQuantities((prev) => ({ ...prev, [id]: quantity }));
  };

  function updateCart(product: Product) {
    dispatch(addCartAction(product));
  }

  function removeItemCart(id: number) {
    dispatch(removeItemCartAction(id));
  }

  function updateItemCart(product: Product, quantity: number) {
    dispatch(updateItemCartAction(product.id, quantity - product.quantity));
  }

  function cartSimulation() {
    dispatch(cartSimulationAction());
  }

  function clearCart() {
    localStorage.removeItem('@coffeeDelivery:cart-1.0.0');
    dispatch(clearCartAction());
  }

  function removeAllItemsCart() {
    dispatch(removeAllItemsCartAction());
  }

  function getUserData(userDate: {
    address: Address;
    paymentMethod: PaymentMethodEnum;
  }) {
    dispatch(saveUserDataAction(userDate));
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cart);
    localStorage.setItem('@coffeeDelivery:cart-1.0.0', stateJSON);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        updateCart,
        updateQuantity,
        productQuantities,
        cart,
        removeItemCart,
        updateItemCart,
        cartSimulation,
        clearCart,
        getUserData,
        removeAllItemsCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
