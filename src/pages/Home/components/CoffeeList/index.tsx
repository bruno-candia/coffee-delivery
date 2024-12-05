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
import { coffeeData } from '../../../../utils/coffeeData';

export function CoffeeList() {

  if (coffeeData.length === 0) {
    return <h3>Sorry, no coffee found</h3>;
  }

  return (
    <CoffeeListContainer>
      <h3>Nossos cafés</h3>
      <ul>
        {coffeeData.map((coffee) => (
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
              <Price price={coffee.price} stock={coffee.stock} />
              <CoffeeForm action="" onSubmit={(e) => e.preventDefault()}>
                <Stepper maxValue={coffee.stock} />
                <CartButton type="submit" />
              </CoffeeForm>
            </CoffeeItemFooter>
            <Stock stock={coffee.stock} />
          </CoffeeItem>
        ))}
      </ul>
    </CoffeeListContainer>
  );
}
