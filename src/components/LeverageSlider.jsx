import React from 'react';
import styled from 'styled-components';
import { APP_CONSTANTS } from '../constants';
import Slider from 'rc-slider';

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
  const max = APP_CONSTANTS.maxLeverage;
  const min = 1;

  const getMarks = () => {
    let marks = {};

    for (let i = min; i <= max; i++) {
      if (i % 15 === 0)
        marks[i] = i;
    }
    return marks;
  }

  return (
    <Container>
      <LeverageSliderText>
        <LeverageText>{props.value || min}X</LeverageText>
        <div>Leverage</div>
      </LeverageSliderText>
      <LeverageContainer {...props}>
        <Slider
          defaultValue={min}
          min={min}
          max={max}
          value={props.value}
          marks={getMarks()}
          onChange={props.onChange}
        />
      </LeverageContainer>
    </Container>
  );
};

export default LeverageSlider;
