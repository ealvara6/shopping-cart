import { styled } from 'styled-components';
import CarouselComponent from './Carousel';
import LatestProducts from './LatestProducts';

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
    </StyledHome>
  );
}

export default Home;
