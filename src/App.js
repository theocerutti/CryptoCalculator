import CryptoCalculator from './containers/CryptoCalculator';
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <AppContainer>
      <CryptoCalculator/>
    </AppContainer>
  );
}

export default App;
