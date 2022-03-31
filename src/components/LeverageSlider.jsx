import React from 'react';
import {Slider} from 'rsuite';
import styled from 'styled-components';

const LeverageContainer = styled.div`
  width: 100%;
  text-align: center;  
`;

const LeverageSlider = (props) => {
  return (
    <LeverageContainer { ...props }>
      <Slider defaultValue={0} min={0} step={1} max={50} graduated progress       renderMark={mark => {
        if (mark % 10 === 0) {
          return <span>{mark}</span>;
        }
        return null;
      }}/>
    </LeverageContainer>
  );
};

export default LeverageSlider;