import { styled } from 'styled-components';
import Icon from './Icon';
import githubIcon from '../assets/github-mark-white.svg';

const StyledCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

function Copyright() {
  return (
    <StyledCopyright>
      <div>&copy; 2023</div>
      <div>Ealvara73</div>
      <Icon $link icon={githubIcon} width={24} height={24} as="a" href="https://github.com/ealvara6" target="_blank" />
    </StyledCopyright>
  );
}

export default Copyright;
