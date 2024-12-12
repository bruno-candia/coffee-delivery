/* eslint-disable @typescript-eslint/no-explicit-any */
import { Coffee } from '../../types/coffee';
import { ProductActionTypes } from './action';

export interface ProductState {
  productsList: Coffee[];
}

export function productReducer(state: ProductState, action: any): ProductState {
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCT: {
      return {
        ...state,
        productsList: action.payload.productsList,
      };
    }

    default:
      return state;
  }
}
