import CryptoCalculator from './containers/CryptoCalculator';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GithubNav from './components/GithubNav';
import { isMobile } from 'react-device-detect';
import './assets/css/hover-min.css';
import 'animate.css/animate.min.css';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <CryptoCalculator />
        {!isMobile && <GithubNav />}
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
