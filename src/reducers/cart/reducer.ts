/* eslint-disable @typescript-eslint/no-explicit-any */

import { Cart } from '../../types/coffee';
import { CartActionTypes } from './action';

export interface CartState {
  cart: Cart;
}

export const initialCartState: CartState = {
  cart: {
    id: 0,
    totalQuantity: 0,
    subtotal: 0,
    shipping: 0,
    total: 0,
    selectedProducts: [],
    address: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      acronymState: '',
    },
    paymentMethod: undefined,
  },
};

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_ITEMS_CART: {
      const productIndex = state.cart.selectedProducts.findIndex(
        (product) => product.id === action.payload.product.id,
      );

      const updatedProducts = state.cart.selectedProducts.map((product) => {
        if (product.id === action.payload.product.id) {
          return {
            ...product,
            total: product.total + action.payload.product.total,
            quantity: product.quantity + action.payload.product.quantity,
          };
        }

        return product;
      });

      if (productIndex === -1) {
        return {
          cart: {
            ...state.cart,
            totalQuantity: updatedProducts.length + 1,
            selectedProducts: [
              ...state.cart.selectedProducts,
              action.payload.product,
            ],
          },
        };
      }

      return {
        cart: {
          ...state.cart,
          totalQuantity: updatedProducts.length,
          selectedProducts: updatedProducts,
        },
      };
    }

    case CartActionTypes.UPDATE_ITEM_CART: {
      const productIndex = state.cart.selectedProducts.findIndex(
        (product) => product.id === action.payload.productId,
      );

      if (productIndex === -1) {
        return state;
      }

      const updatedQuantity =
        state.cart.selectedProducts[productIndex].quantity +
        action.payload.quantity;

      console.log(updatedQuantity);

      const updatedProducts = state.cart.selectedProducts.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            total: product.price * updatedQuantity,
            quantity: updatedQuantity,
          };
        }

        return product;
      });

      const subTotalPrice = updatedProducts.reduce(
        (act, current) => act + current.total,
        0,
      );

      return {
        cart: {
          ...state.cart,
          subtotal: subTotalPrice,
          totalQuantity: updatedProducts.length,
          selectedProducts: updatedProducts,
          total: subTotalPrice + state.cart.shipping,
        },
      };
    }

    case CartActionTypes.REMOVE_ITEM_CART: {
      const productIndex = state.cart.selectedProducts.findIndex(
        (product) => product.id === action.payload.productId,
      );

      if (productIndex === -1) {
        return state;
      }

      const updatedProducts = state.cart.selectedProducts.filter((product) => {
        return product.id !== action.payload.productId;
      });

      const subTotalPrice = updatedProducts.reduce(
        (act, current) => act + current.total,
        0,
      );

      return {
        cart: {
          ...state.cart,
          subtotal: subTotalPrice,
          totalQuantity: updatedProducts.length,
          selectedProducts: updatedProducts,
          total: subTotalPrice + state.cart.shipping,
        },
      };
    }

    case CartActionTypes.CART_SIMULATION: {
      const hasCart = state.cart;

      if (!hasCart) {
        return state;
      }

      const subTotalPrice = state.cart.selectedProducts.reduce(
        (act, current) => act + current.total,
        0,
      );

      const shipping = Math.floor(Math.random() * 30);

      return {
        cart: {
          ...state.cart,
          subtotal: subTotalPrice,
          shipping,
          total: subTotalPrice + shipping,
        },
      };
    }

    case CartActionTypes.SAVE_USER_DATA: {
      return {
        cart: {
          ...state.cart,
          address: action.payload.userData.address,
          paymentMethod: action.payload.userData.paymentMethod,
        },
      };
    }

    case CartActionTypes.REMOVE_ALL_ITEMS_CART: {
      return {
        cart: {
          ...state.cart,
          selectedProducts: [],
          totalQuantity: 0,
          subtotal: 0,
          shipping: 0,
          total: 0,
        },
      };
    }

    case CartActionTypes.CLEAR_CART: {
      return initialCartState;
    }

    default:
      return state;
  }
}
