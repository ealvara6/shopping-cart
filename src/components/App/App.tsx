import Header from '../Navbar/Navbar';
import styled from 'styled-components';

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
