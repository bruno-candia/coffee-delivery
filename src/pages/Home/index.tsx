import { CoffeeList } from './components/CoffeeList';
import { HeroSection } from './components/HeroSection';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <CoffeeList />
    </HomeContainer>
  );
}
