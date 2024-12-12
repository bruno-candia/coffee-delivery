import { Coffee } from '../../types/coffee';
import { data } from '../../utils/coffeeData';

export const GetProductsService = (): Promise<Coffee[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
