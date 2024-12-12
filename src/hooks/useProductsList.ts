import { useContext, useEffect, useReducer } from 'react';
import { productReducer } from '../reducers/products/reducer';
import { GetProductsService } from '../services/porductsService/GetProductsService';
import { getProductsAction } from '../reducers/products/action';
import { Coffee, Product } from '../types/coffee';
import CartContext from '../context/CartContext';

interface UseProductsListProps {
  productsList: Coffee[];
  handleSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    coffee: Coffee,
  ) => void;
  getCurrentStock: (id: number) => number;
  productQuantities: Record<number, number>;
  updateQuantity: (id: number, quantity: number) => void;
}

export function useProductsList(): UseProductsListProps {
  const { cart, updateCart, productQuantities, updateQuantity } =
    useContext(CartContext);
  const [productListState, dispatch] = useReducer(
    productReducer,
    {
      productsList: [],
    },
    (initialState) => {
      const localStorageProducts = localStorage.getItem(
        '@coffeeDelivery:products-1.0.0',
      );

      if (localStorageProducts) {
        return {
          productsList: JSON.parse(localStorageProducts),
        };
      }

      return initialState;
    },
  );

  const { productsList } = productListState;

  async function fetchProducts() {
    const productsList = await GetProductsService();
    dispatch(getProductsAction(productsList));
  }

  useEffect(() => {
    if (productsList.length === 0) {
      fetchProducts();
    }

    const stateJSON = JSON.stringify(productsList);
    localStorage.setItem('@coffeeDelivery:products-1.0.0', stateJSON);
  }, [productsList]);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    coffee: Coffee,
  ) {
    event.preventDefault();
    const quantity = productQuantities[coffee.id] || 0;

    if (quantity === 0) {
      return;
    }

    const product: Product = {
      id: coffee.id,
      name: coffee.name,
      price: coffee.price,
      image: coffee.image,
      quantity,
      stock: coffee.stock,
      total: parseFloat((coffee.price * quantity).toFixed(2)),
    };

    const productQuantity = product.quantity === 0 ? 0 : 1;

    updateCart(product);
    updateQuantity(coffee.id, productQuantity);
  }

  function getCurrentStock(id: number) {
    const selectedProduct = cart.selectedProducts.find(
      (product) => product.id === id,
    );
    const productList = productsList.find((product) => product.id === id);

    if (!selectedProduct) {
      return productList?.stock || 0;
    }

    if (!productList) {
      return 0;
    }

    return productList.stock - selectedProduct.quantity;
  }

  return {
    productsList,
    handleSubmit,
    getCurrentStock,
    productQuantities,
    updateQuantity,
  };
}
