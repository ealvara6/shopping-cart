import { styled } from 'styled-components';
import StyledButton from './Button';

interface ProductInterface {
  product: {
    id: number;
    description: string;
    image: string;
    price: number;
    title: string;
  };
}

const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid #7C9D96 1px;
  gap: 15px;
  padding: 15px;
  width: 390px;
  border-radius: 15px;
`;

const ProductImage = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 200px;
`;

const Title = styled.div``;

const Purchase = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;

  @media screen and (max-width: 500px) {
    align-items: center;
    :first-child {
      display: none;
    }

    :nth-child(2) {
      grid-row: 2;
    }

    :nth-child(3) {
      grid-row: 1;
      align-self: center;
      justify-self: center;
    }

    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const Price = styled.div`
  align-self: center;
  justify-self: flex-end;
  font-size: 22px;
  color: #7C9D96;
`;

function Product({ product }: ProductInterface) {
  return (
    <StyledProduct>
      <ProductImage image={product.image} />
      <Title>{product.title}</Title>
      <Purchase>
        <div />
        <StyledButton $primary>Add To Cart</StyledButton>
        <Price>
          $
          {product.price}
        </Price>
      </Purchase>
    </StyledProduct>
  );
}

export default Product;
