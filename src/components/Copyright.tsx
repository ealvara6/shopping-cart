import { styled } from 'styled-components';
import githubIcon from '../assets/github-mark-white.svg';

const StyledCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Icon = styled.button`
  background-image: url(${githubIcon});
  background-size: contain;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

function Copyright() {
  return (
    <StyledCopyright>
      <div>&copy; 2023</div>
      <div>Ealvara73</div>
      <Icon />
    </StyledCopyright>
  );
}

export default Copyright;
