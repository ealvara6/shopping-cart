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
  font-size: 24px;
  font-weight: bold;
  background-color: #F4F2DE;
  flex-grow: 1;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: min-content;
  padding: 10px 0px;
  gap: 15px;
  background-color: #E9B384;
`;

function Header() {
  return (
    <StyledHeader>
      <Title>
        Shopping Website
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
