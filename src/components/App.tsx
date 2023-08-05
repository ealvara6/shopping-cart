import styled from 'styled-components';
import Header from './Navbar';
import Home from './Home';

const StyledApp = styled.div`
  display: flex ;
  flex-direction: column;
`;

function App() {
  return (
    <StyledApp>
      <Header />
      <Home />
    </StyledApp>
  );
}

export default App;
