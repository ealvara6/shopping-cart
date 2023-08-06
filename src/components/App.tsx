import styled from 'styled-components';
import Header from './Navbar';
import Home from './Home';
import Footer from './Footer';

const StyledApp = styled.div`
  display: flex ;
  flex-direction: column;
`;

function App() {
  return (
    <StyledApp>
      <Header />
      <Home />
      <Footer />
    </StyledApp>
  );
}

export default App;
