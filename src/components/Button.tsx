import { styled, css } from 'styled-components';

const StyledButton = styled.button<{ $primary? : boolean }>`
  background: linear-gradient(to left, #F4F2DE 50%, #7C9D96 50%) right;
  background-size: 200% 100%;
  border: none;
  width: 150px;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
  transition: all 500ms ease;

  &:hover {
    color: white;
    background-position: left;
  }

  ${(props) => props.$primary && css`
    color: white;
    background: linear-gradient(to left, #7C9D96 50%, #F4F2DE 50%) right;
    background-size: 200% 100%;

    &:hover {
      color: black;
    }
  `}
`;

export default StyledButton;
