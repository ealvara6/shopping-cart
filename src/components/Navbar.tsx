import { styled } from 'styled-components';
import Button from './Button';

const StyledHeader = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20vh;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  background-color: #E9B384;
  flex-grow: 1;
  text-align: center;
  font-family: 'Bebas Neue', sans-serif;
  
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: min-content;
  padding: 10px 0px;
  gap: 15px;
  background-color: #F4F2DE;
`;

function Header() {
  return (
    <StyledHeader>
      <Title>
        <h1>
          Name
          <br />
          Placeholder
        </h1>
      </Title>
      <NavLinks>
        <Button name="HOME" />
        <Button name="SHOP" />
        <Button name="ABOUT" />
      </NavLinks>
    </StyledHeader>
  );
}

export default Header;
