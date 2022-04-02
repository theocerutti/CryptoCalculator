import React from 'react';
import { Message } from 'rsuite';
import styled from 'styled-components';
import { MoneyText } from '../components';
import { calculateDistancePercent, formatNum, getPercent } from '../utils/utils';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TextBold = styled.span`
  margin: 0;
  font-weight: bold;
`;

const TextContainer = styled.div`
  margin-bottom: 0.5em;
`;

const ReportContainer = styled.div`
  font-size: 1.2em;
`;

const Report = ({ tpMark, slMark, initialCost, leverage, totalCapital, entryPrice, isLong }) => {
  const fixedDecimal = 2;
  const canShowReport = (tpMark || slMark || entryPrice) && initialCost && leverage && isLong !== null;

  if (!isLong) {
    // invert marks if short
    [tpMark, slMark] = [slMark, tpMark];
  }

  let tpslError = parseFloat(tpMark) < parseFloat(slMark);

  const tokenQuantity = initialCost / entryPrice;
  const tokenQuantityLeverage = tokenQuantity * leverage;
  const notionalSize = initialCost * leverage;
  let takeProfitPercent = leverage * calculateDistancePercent(entryPrice, tpMark);
  let takeProfit = (1 / entryPrice - 1 / tpMark) * notionalSize * tpMark;
  let stopLossPercent = leverage * calculateDistancePercent(entryPrice, slMark);
  let stopLoss = (1 / entryPrice - 1 / slMark) * notionalSize * slMark;

  const report = (
    <ReportContainer>
      {tpMark && !isNaN(takeProfit) && (
        <TextContainer>
          <TextBold>Take Profit: </TextBold>
          <MoneyText value={takeProfit.toFixed(fixedDecimal)} />
          <span> ({formatNum(takeProfitPercent)}%)</span>
        </TextContainer>
      )}
      {slMark && !isNaN(stopLoss) && (
        <TextContainer>
          <TextBold>Stop Loss: </TextBold>
          <MoneyText value={stopLoss.toFixed(2)} />
          <span> ({formatNum(stopLossPercent)}%)</span>
        </TextContainer>
      )}
      <TextContainer>
        <TextBold>Tokens (with leverage): </TextBold>
        <span>{tokenQuantityLeverage.toFixed(fixedDecimal)}</span>
        <FontAwesomeIcon style={{ marginLeft: '0.5em' }} icon={faCoins} />
      </TextContainer>
      <TextContainer>
        <TextBold>Notional Size: </TextBold>
        <span>{notionalSize.toFixed(2)}$</span>
      </TextContainer>
      {totalCapital && (
        <TextContainer>
          <TextBold>Capital Risk: </TextBold>
          <span>-{getPercent(Math.abs(stopLoss), totalCapital).toFixed(fixedDecimal)}%</span>
          <span> (AfterLoss: {(totalCapital - Math.abs(stopLoss)).toFixed(fixedDecimal)})</span>
        </TextContainer>
      )}
    </ReportContainer>
  );

  const showReport = () => {
    if (!canShowReport) {
      return <Message type='info'>You have not entered all the information</Message>;
    }
    if (tpslError) {
      return (
        <Message type='error'>
          The take profit must be <TextBold>{isLong ? 'higher' : 'lower'}</TextBold>
          than the stop loss! Maybe you want to <TextBold>{isLong ? 'Short' : 'Long'}</TextBold> ?
        </Message>
      );
    }
    return report;
  };

  return (
    <div>
      <h3>Result Report</h3>
      {showReport()}
    </div>
  );
};

export default Report;
