import { Coffee } from '../../types/coffee';

export enum ProductActionTypes {
  GET_PRODUCT = 'GET_PRODUCT',
  UPDATE_PRODUCT = 'UPDATE_PRODUCT',
}

export function getProductsAction(productsList: Coffee[]) {
  return {
    type: ProductActionTypes.GET_PRODUCT,
    payload: {
      productsList,
    },
  };
}

export function updateProductAction(productId: number, quantity: number) {
  return {
    type: ProductActionTypes.UPDATE_PRODUCT,
    payload: {
      productId,
      quantity,
    },
  };
}
