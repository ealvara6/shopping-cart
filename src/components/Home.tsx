import { styled } from 'styled-components';
import CarouselComponent from './Carousel';

const StyledHome = styled.main``;

function Home() {
  return (
    <StyledHome>
      <CarouselComponent />
    </StyledHome>
  );
}

export default Home;
