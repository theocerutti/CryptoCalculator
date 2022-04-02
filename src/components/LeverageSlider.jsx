import React from 'react';
import { Slider } from 'rsuite';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1em;
  width: 100%;
`;

const LeverageContainer = styled.div`
  width: 100%;
`;

const LeverageSliderText = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const LeverageText = styled.div`
  font-weight: bold;
  font-size: 1.4em;
  margin-right: 0.5em;
`;

const LeverageSlider = (props) => {
  const max = 125;
  const min = 1;

  return (
    <Container>
      <LeverageSliderText>
        <LeverageText>{props.value || min}X</LeverageText>
        <div>Leverage</div>
      </LeverageSliderText>
      <LeverageContainer {...props}>
        <Slider
          defaultValue={min}
          value={props.value}
          min={min}
          max={max}
          progress
          onChange={(value) => props.onChange(value)}
        />
      </LeverageContainer>
    </Container>
  );
};

export default LeverageSlider;
