import CryptoCalculator from './containers/CryptoCalculator';
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <AppContainer>
      <CryptoCalculator/>
    </AppContainer>
  );
}

export default App;
