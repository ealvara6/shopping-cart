import styled from 'styled-components';
import Header from './Navbar';

const StyledApp = styled.div`
  display: flex ;
  flex-direction: column;
`;

function App() {
  return (
    <StyledApp>
      <Header />
    </StyledApp>
  );
}

export default App;
