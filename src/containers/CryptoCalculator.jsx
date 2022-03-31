import React from 'react';
import AppTitle from '../components/AppTitle';
import styled from 'styled-components';
import LeverageSlider from '../components/LeverageSlider';
import {InputGroup, Input} from 'rsuite';

const Container = styled.div`
  margin-left: 40em;
  margin-right: 40em;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const SplitContainer = styled.div`
  display: flex;
  width: 100%;
  & > * {
    width: 50%;
    margin-left: auto;
  }
`;

const CryptoCalculator = () => {
  return (
    <Container>
      <RowContainer>
        <AppTitle/>
      </RowContainer>
      <RowContainer>
        <SplitContainer>
          <p>Leverage</p>
          <LeverageSlider/>
        </SplitContainer>
      </RowContainer>
      <RowContainer>
        <SplitContainer>
          <p>Total Capital</p>
          <InputGroup>
            <Input/>
          </InputGroup>
        </SplitContainer>
      </RowContainer>
      <RowContainer>
        <SplitContainer>
          <p>Initial Margin</p>
          <InputGroup>
            <Input/>
          </InputGroup>
        </SplitContainer>
      </RowContainer>
      <RowContainer>
        <SplitContainer>
          <p>LONG / SHORT</p>
          <InputGroup>
            <Input/>
          </InputGroup>
        </SplitContainer>
      </RowContainer>
      <RowContainer>
        <SplitContainer>
          <p>Entry Price</p>
          <InputGroup>
            <Input/>
            <InputGroup.Addon>$</InputGroup.Addon>
          </InputGroup>
        </SplitContainer>
      </RowContainer>
      <RowContainer>
        <SplitContainer>
          <p>Stop Loss Price</p>
          <InputGroup>
            <Input/>
            <InputGroup.Addon>$</InputGroup.Addon>
          </InputGroup>
        </SplitContainer>
      </RowContainer>
      <RowContainer>
        <SplitContainer>
          <p>Price Loss Price</p>
          <InputGroup>
            <Input/>
            <InputGroup.Addon>$</InputGroup.Addon>
          </InputGroup>
        </SplitContainer>
      </RowContainer>
    </Container>
  );
};

export default CryptoCalculator;