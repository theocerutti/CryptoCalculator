import React, {useState} from "react";
import AppTitle from "../components/AppTitle";
import styled from "styled-components";
import LeverageSlider from "../components/LeverageSlider";
import {Button, ButtonGroup, ButtonToolbar, Tooltip, Whisper} from "rsuite";
import {Input, Divider} from "../components";
import {APP_CONSTANTS} from "../constants";
import Report from "./Report";

const Container = styled.div`
  margin-left: 40%;
  margin-right: 40%;
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
  const [totalCapital, setTotalCapital] = useState(null);
  const [initialCost, setInitialCost] = useState(null);
  const [leverage, setLeverage] = useState(1);
  const [entryPrice, setEntryPrice] = useState(null);
  const [tpMark, setTPMark] = useState(null);
  const [slMark, setSLMark] = useState(null);
  const [isLong, setIsLong] = useState(null);

  const getTradeTypeAppearance = (isLong) => {
    if (isLong === null)
      return "primary"
    return isLong ? "primary" : "subtle";
  }

  return (
    <Container>
      <Row>
        <AppTitle>{APP_CONSTANTS.title}</AppTitle>
      </Row>
      <Row>
        <LeverageSlider value={leverage} onChange={setLeverage}/>
      </Row>
      <Row>
        <Input tooltipMessage={APP_CONSTANTS.initialCost} onChange={setInitialCost} prefix="Initial Margin" postfix="$"/>
      </Row>
      <Row>
        <ButtonToolbar style={{ width: "100%" }}>
          <ButtonGroup justified size="lg">
            <Button onClick={() => setIsLong(!isLong)} appearance={getTradeTypeAppearance(isLong)} color="green">Long</Button>
            <Button onClick={() => setIsLong(!isLong)} appearance={getTradeTypeAppearance(!isLong)} color="red">Short</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Row>
      <Row>
        <Input tooltipMessage={APP_CONSTANTS.entryPrice} onChange={setEntryPrice} prefix="Entry Price"/>
      </Row>
      <Row>
        <Input tooltipMessage={APP_CONSTANTS.TPMarkDesc} onChange={setTPMark} prefix="Take Profit Mark"/>
      </Row>
      <Row>
        <Input tooltipMessage={APP_CONSTANTS.SLMarkDesc} onChange={setSLMark} prefix="Stop Loss Mark"/>
      </Row>
      <Row>
        <Input tooltipMessage={APP_CONSTANTS.totalCapitalDesc} onChange={setTotalCapital} prefix="Total Capital" postfix="$"/>
      </Row>
      <Divider/>
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