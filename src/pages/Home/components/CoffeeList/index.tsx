import { CartButton } from '../../../../components/CartButton';
import { CoffeeImage } from '../../../../components/CoffeeImage';
import {
  CoffeeForm,
  CoffeeItem,
  CoffeeItemBody,
  CoffeeItemFooter,
  CoffeeItemHeader,
  CoffeeListContainer,
} from './styles';
import { Tag } from '../../../../components/Tag';
import { Price } from '../../../../components/Price';
import { Stock } from '../../../../components/Stock';
import { Stepper } from '../../../../components/Stepper';
import { useProductsList } from '../../../../hooks/useProductsList';

export function CoffeeList() {
  const {
    productsList,
    getCurrentStock,
    handleSubmit,
    productQuantities,
    updateQuantity,
  } = useProductsList();

  if (productsList && productsList.length === 0) {
    return <h3>Sorry, no coffee found</h3>;
  }

  return (
    <CoffeeListContainer>
      <h3>Nossos cafés</h3>
      <ul>
        {productsList.map((coffee) => (
          <CoffeeItem key={coffee.id}>
            <CoffeeItemHeader>
              <CoffeeImage
                src={coffee.image}
                alt={coffee.name}
                size="regular"
              />
              <div>
                {coffee.tags &&
                  coffee.tags.map((tag: string) => <Tag key={tag} tag={tag} />)}
              </div>
            </CoffeeItemHeader>
            <CoffeeItemBody>
              <h2>{coffee.name}</h2>
              <p>{coffee.description}</p>
            </CoffeeItemBody>
            <CoffeeItemFooter>
              <Price
                price={
                  coffee.price * productQuantities[coffee.id] || coffee.price
                }
                stock={coffee.stock}
              />
              <CoffeeForm onSubmit={(event) => handleSubmit(event, coffee)}>
                <Stepper
                  maxValue={getCurrentStock(coffee.id)}
                  value={productQuantities[coffee.id] || 0}
                  onUpdate={(value) => updateQuantity(coffee.id, value)}
                />
                <CartButton
                  type="submit"
                  disabled={getCurrentStock(coffee.id) === 0}
                />
              </CoffeeForm>
            </CoffeeItemFooter>
            <Stock stock={getCurrentStock(coffee.id)} />
          </CoffeeItem>
        ))}
      </ul>
    </CoffeeListContainer>
  );
}
