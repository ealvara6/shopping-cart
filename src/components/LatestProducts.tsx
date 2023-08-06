import { useEffect, useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import { styled } from 'styled-components';
import Product from './Product';
import StyledButton from './Button';
import Header from './Header';

const StyledLatestProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 25px;
  width: 75vw;
`;

function LatestProducts() {
  const [products, setProducts] = useState({
    isLoaded: false,
    products: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://fakestoreapi.com/products?limit=6');
      const data = await result.json();

      const productComponents = data.map(
        (item: object) => <Product key={uuid4()} product={item} />,
      );

      setProducts({
        isLoaded: true,
        products: productComponents,
      });
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <StyledLatestProducts>
      <Header>LATEST PRODUCTS</Header>
      {products.isLoaded ? <Products>{products.products}</Products> : 'Loading...'}
      <StyledButton $primary>View All Products</StyledButton>
    </StyledLatestProducts>
  );
}

export default LatestProducts;
