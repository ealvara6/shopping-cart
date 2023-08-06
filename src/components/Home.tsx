import { styled } from 'styled-components';
import CarouselComponent from './Carousel';
import LatestProducts from './LatestProducts';
import ShopReasons from './ShopReasons';

const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-bottom: 100px;
`;

function Home() {
  return (
    <StyledHome>
      <CarouselComponent />
      <LatestProducts />
      <ShopReasons />
    </StyledHome>
  );
}

export default Home;
