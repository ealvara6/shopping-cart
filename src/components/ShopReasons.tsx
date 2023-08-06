import { styled } from 'styled-components';
import { v4 as uuid4 } from 'uuid';
import Header from './Header';
import shippedIcon from '../assets/shipped.png';
import freeIcon from '../assets/free.png';
import awardIcon from '../assets/award.png';

const StyledShopReasons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Reasons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  line-height: 1.2;
  width: 300px;
  height: 200px;
  gap: 15px;
  padding: 15px;
  border-radius: 15px;
  background-color: #FAF9F6;
`;

const CardHeader = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const Image = styled.div<{ image: string; }>`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 64px;
  height: 64px;
`;

function ShopReasons() {
  const reasons = [
    {
      src: shippedIcon,
      title: 'Fast Delivery',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, dolorum.',
    },
    {
      src: freeIcon,
      title: 'Free Shipping',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, dolorum.',
    },
    {
      src: awardIcon,
      title: 'Best Quality',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, dolorum.',
    },
  ];

  const reasonsComponent = reasons.map((item) => (
    <Card key={uuid4()}>
      <Image image={item.src} />
      <CardHeader>{item.title}</CardHeader>
      <div>{item.desc}</div>
    </Card>
  ));

  return (
    <StyledShopReasons>
      <Header>WHY SHOP WITH US</Header>
      <Reasons>
        {reasonsComponent}
      </Reasons>
    </StyledShopReasons>
  );
}

export default ShopReasons;
