import { styled } from 'styled-components';

const Icon = styled.div<{ $link?: boolean, icon: string, width: number, height: number }>`
  background-image: url(${(props) => props.icon});
  background-size: contain;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border: none;
  background-color: transparent;
  cursor: ${(props) => (props.$link ? 'pointer' : 'cursor')};
`;

export default Icon;
