import { styled } from 'styled-components';

const StyledButton = styled.button<{ $shop? : boolean }>`
  background: linear-gradient(to left, #F4F2DE 50%, #7C9D96 50%) right;
  background-size: 200% 100%;
  border: none;
  height: 45px;
  width: 95px;
  font-size: 16px;
  cursor: pointer;
  transition: all 500ms ease;

  &:hover {
    color: white;
    background-position: left;
  }
`;

interface ButtonInterface {
  name: string;
}

function Button({ name }: ButtonInterface) {
  return (
    <StyledButton>{name}</StyledButton>
  );
}

export default Button;
