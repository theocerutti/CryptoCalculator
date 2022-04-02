import CryptoCalculator from './containers/CryptoCalculator';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GithubNav from './components/GithubNav';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <CryptoCalculator />
        <GithubNav />
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
