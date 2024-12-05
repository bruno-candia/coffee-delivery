import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react';
import HeroBackground from '../../../../components/HeroBackground';
import { IntroItem } from '../../../../components/IntroItem';
import { ICON_COLOR } from '../../../../components/IntroItem/styles';
import { HeroWrapper, HeroContainer, HeroContent } from './styles';
import companyCoffeeImg from '../../../../assets/company-coffee-image.png';

export function HeroSection() {
  return (
    <HeroWrapper>
      <HeroBackground />
      <HeroContainer>
        <HeroContent>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <ul>
            <IntroItem
              icon={ShoppingCart}
              weight="fill"
              item-color={ICON_COLOR.YELLOW_DARK}
            >
              Compra simples e segura
            </IntroItem>
            <IntroItem
              icon={Package}
              weight="fill"
              item-color={ICON_COLOR.GRAY_DARK}
            >
              Embalagem mantém o café intacto
            </IntroItem>
            <IntroItem icon={Timer} weight="fill" item-color={ICON_COLOR.YELLOW}>
              Entrega rápida e rastreada
            </IntroItem>
            <IntroItem
              icon={Coffee}
              weight="fill"
              item-color={ICON_COLOR.PURPLE}
            >
              O café chega fresquinho até você
            </IntroItem>
          </ul>
        </HeroContent>
        <img src={companyCoffeeImg} loading="lazy"/>
      </HeroContainer>
    </HeroWrapper>
  );
}
