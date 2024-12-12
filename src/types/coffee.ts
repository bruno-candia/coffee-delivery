export interface Coffee {
  id: number;
  name: string;
  tags: string[];
  description: string;
  price: number;
  stock: number;
  image: string;
}

export type Product = Omit<Coffee, 'tags' | 'description'> & {
  quantity: number;
  total: number;
};

export interface Address {
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  acronymState: string;
}

export enum PaymentMethodEnum {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
  MONEY = 'MONEY',
}

export interface Cart {
  id: number;
  totalQuantity: number;
  subtotal: number;
  shipping: number;
  total: number;
  selectedProducts: Product[] | [];
  address: Address;
  paymentMethod?: PaymentMethodEnum;
}
