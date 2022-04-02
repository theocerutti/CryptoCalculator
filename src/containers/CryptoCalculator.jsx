import React, { useState, useEffect } from 'react';
import AppTitle from '../components/AppTitle';
import styled from 'styled-components';
import LeverageSlider from '../components/LeverageSlider';
import { Button, ButtonGroup, ButtonToolbar } from 'rsuite';
import { Input, Divider } from '../components';
import { APP_CONSTANTS } from '../constants';
import Report from './Report';
import { getQueryConfig, setQueryConfig } from '../utils/queryConfig';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  margin-left: 33%;
  margin-right: 33%;
  margin-top: 6em;
  margin-bottom: 6em;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const CryptoCalculator = () => {
  const navigation = useNavigate();
  const [queryParams, setQueryParams] = useState(null);
  const [totalCapital, setTotalCapital] = useState(null);
  const [initialCost, setInitialCost] = useState(null);
  const [leverage, setLeverage] = useState(1);
  const [entryPrice, setEntryPrice] = useState(null);
  const [tpMark, setTPMark] = useState(null);
  const [slMark, setSLMark] = useState(null);
  const [isLong, setIsLong] = useState(null);

  const getTradeTypeAppearance = (isLong) => {
    if (isLong === null) return 'primary';
    return isLong ? 'primary' : 'subtle';
  };

  const handleChange = (onChange, label) => (value) => {
    const newConfigParams = { ...queryParams, [label]: value };
    setQueryParams(newConfigParams);
    setQueryConfig(newConfigParams, navigation);
    onChange(value);
  };

  useEffect(() => {
    const queryConfig = getQueryConfig();
    setQueryParams(getQueryConfig());
    if (queryConfig && Object.keys(queryConfig).length > 0) {
      setTotalCapital(queryConfig.totalCapital);
      setInitialCost(queryConfig.initialCost);
      setLeverage(queryConfig.leverage || 1);
      setEntryPrice(queryConfig.entryPrice);
      setTPMark(queryConfig.tpMark);
      setSLMark(queryConfig.slMark);
      setIsLong(queryConfig.isLong);
    }
  }, []);

  return (
    <Container>
      <Row>
        <AppTitle>{APP_CONSTANTS.title}</AppTitle>
      </Row>
      <Row>
        <LeverageSlider value={leverage} onChange={(value) => handleChange(setLeverage, 'leverage')(value)} />
      </Row>
      <Row>
        <Input
          value={initialCost}
          tooltipMessage={APP_CONSTANTS.initialCost}
          onChange={(value) => handleChange(setInitialCost, 'initialCost')(value)}
          prefix='Initial Margin'
          postfix='$'
        />
      </Row>
      <Row>
        <ButtonToolbar style={{ width: '100%' }}>
          <ButtonGroup justified size='lg'>
            <Button
              onClick={() => handleChange(setIsLong, 'isLong')(true)}
              appearance={getTradeTypeAppearance(isLong)}
              color='green'
            >
              Long
            </Button>
            <Button
              onClick={() => handleChange(setIsLong, 'isLong')(false)}
              appearance={getTradeTypeAppearance(!isLong)}
              color='red'
            >
              Short
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Row>
      <Row>
        <Input
          value={entryPrice}
          tooltipMessage={APP_CONSTANTS.entryPrice}
          onChange={(value) => handleChange(setEntryPrice, 'entryPrice')(value)}
          prefix='Entry Price'
        />
      </Row>
      <Row>
        <Input
          value={tpMark}
          tooltipMessage={APP_CONSTANTS.TPMarkDesc}
          onChange={(value) => handleChange(setTPMark, 'tpMark')(value)}
          prefix='Take Profit Mark'
        />
      </Row>
      <Row>
        <Input
          value={slMark}
          tooltipMessage={APP_CONSTANTS.SLMarkDesc}
          onChange={(value) => handleChange(setSLMark, 'slMark')(value)}
          prefix='Stop Loss Mark'
        />
      </Row>
      <Row>
        <Input
          value={totalCapital}
          tooltipMessage={APP_CONSTANTS.totalCapitalDesc}
          onChange={(value) => handleChange(setTotalCapital, 'totalCapital')(value)}
          prefix='Total Capital'
          postfix='$'
        />
      </Row>
      <Divider />
      <Report
        isLong={isLong}
        entryPrice={entryPrice}
        leverage={leverage}
        tpMark={tpMark}
        slMark={slMark}
        totalCapital={totalCapital}
        initialCost={initialCost}
      />
    </Container>
  );
};

export default CryptoCalculator;
