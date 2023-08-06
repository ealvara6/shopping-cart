/* eslint-disable import/no-extraneous-dependencies */
import { styled } from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { v4 as uuid4 } from 'uuid';
import electronics from '../assets/electronics.jpg';
import jewellery from '../assets/jewellery.jpg';
import menClothes from '../assets/men-clothes.jpg';
import womenClothes from '../assets/women-clothes.jpg';
import StyledButton from './Button';

const Image = styled.div<{ image: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImageContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 50px;
  width: 75vw;
  height: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  color: white;
  max-width: 500px;
  line-height: 1.3;
  font-size: 18px;

  @media screen and (max-width: 650px) {
    text-align: center;
  }
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 48px;
`;

function CarouselComponent() {
  const carouselSlide = [
    {
      src: electronics,
      header: 'Electronics',
    },
    {
      src: jewellery,
      header: 'Jewellery',
    },
    {
      src: menClothes,
      header: 'Men\'s Clothing',
    },
    {
      src: womenClothes,
      header: 'Women\'s Clothing',
    },
  ];

  const carouselSlideComponent = carouselSlide.map((slide) => (
    <Image image={slide.src} key={uuid4()}>
      <ImageContent>
        <Text>
          <Header>{slide.header}</Header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit a vero non, sit rerum fugit?
          </p>
        </Text>
        <StyledButton $primary>SHOP NOW</StyledButton>
      </ImageContent>
    </Image>
  ));

  return (
    <Carousel emulateTouch showThumbs={false} infiniteLoop centerMode centerSlidePercentage={100}>
      {carouselSlideComponent}
    </Carousel>
  );
}

export default CarouselComponent;
