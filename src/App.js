import CryptoCalculator from './containers/CryptoCalculator';
import styled from "styled-components";
import {BrowserRouter} from "react-router-dom";

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <CryptoCalculator/>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
