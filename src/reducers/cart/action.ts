import { Address, PaymentMethodEnum, Product } from '../../types/coffee';

export enum CartActionTypes {
  ADD_ITEMS_CART = 'ADD_ITEMS_CART',
  UPDATE_ITEM_CART = 'UPDATE_ITEM_CART',
  REMOVE_ITEM_CART = 'REMOVE_ITEM_CART',
  REMOVE_ALL_ITEMS_CART = 'REMOVE_ALL_ITEMS_CART',
  CART_SIMULATION = 'CART_SIMULATION',
  CLEAR_CART = 'CLEAR_CART',
  SAVE_USER_DATA = 'SAVE_USER_DATA',
}

export function addCartAction(product: Product) {
  return {
    type: CartActionTypes.ADD_ITEMS_CART,
    payload: {
      product,
    },
  };
}

export function updateItemCartAction(productId: number, quantity: number) {
  return {
    type: CartActionTypes.UPDATE_ITEM_CART,
    payload: {
      productId,
      quantity,
    },
  };
}

export function removeItemCartAction(productId: number) {
  return {
    type: CartActionTypes.REMOVE_ITEM_CART,
    payload: {
      productId,
    },
  };
}

export function removeAllItemsCartAction() {
  return {
    type: CartActionTypes.REMOVE_ALL_ITEMS_CART,
  };
}

export function saveUserDataAction(userData: {
  address: Address;
  paymentMethod: PaymentMethodEnum;
}) {
  return {
    type: CartActionTypes.SAVE_USER_DATA,
    payload: {
      userData,
    },
  };
}

export function cartSimulationAction() {
  return {
    type: CartActionTypes.CART_SIMULATION,
  };
}

export function clearCartAction() {
  return {
    type: CartActionTypes.CLEAR_CART,
  };
}
