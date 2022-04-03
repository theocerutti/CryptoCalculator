import React from 'react';
import { Message } from 'rsuite';
import styled from 'styled-components';
import { MoneyText } from '../components';
import { calculateDistancePercent, convertValue, formatNum, getPercent } from '../utils/utils';
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

  const tpslError = parseFloat(tpMark) < parseFloat(slMark);

  let tokenQuantity = initialCost / entryPrice;
  let tokenQuantityLeverage = tokenQuantity * leverage;
  let notionalSize = initialCost * leverage;
  let takeProfitPercent = leverage * calculateDistancePercent(entryPrice, tpMark);
  let takeProfit = (1 / entryPrice - 1 / tpMark) * notionalSize * tpMark;
  let stopLossPercent = !slMark ? -100 : leverage * calculateDistancePercent(entryPrice, slMark);
  let stopLoss = !slMark ? -parseFloat(initialCost) : (1 / entryPrice - 1 / slMark) * notionalSize * slMark;
  let capitalRisk = getPercent(Math.abs(stopLoss), totalCapital);
  let capitalAfterLoss = totalCapital - Math.abs(stopLoss);
  let PLRatio = Math.abs(isLong ? (takeProfit / stopLoss) : (stopLoss / takeProfit));

  tokenQuantity = convertValue(tokenQuantity);
  tokenQuantityLeverage = convertValue(tokenQuantityLeverage);
  notionalSize = convertValue(notionalSize);
  takeProfitPercent = convertValue(takeProfitPercent);
  takeProfit = convertValue(takeProfit);
  stopLossPercent = convertValue(stopLossPercent);
  stopLoss = convertValue(stopLoss);
  capitalRisk = convertValue(capitalRisk);
  capitalAfterLoss = convertValue(capitalAfterLoss);
  PLRatio = convertValue(PLRatio);

  const report = (
    <ReportContainer>
      {takeProfitPercent && takeProfit && (
        <TextContainer>
          <TextBold>Take Profit: </TextBold>
          <MoneyText value={takeProfit.toFixed(fixedDecimal)} />
          <span> ({formatNum(takeProfitPercent)}%)</span>
        </TextContainer>
      )}
      {stopLossPercent && stopLoss && (
        <TextContainer>
          <TextBold>Stop Loss: </TextBold>
          <MoneyText value={stopLoss.toFixed(2)} />
          <span> ({formatNum(stopLossPercent)}%)</span>
        </TextContainer>
      )}
      {PLRatio && (
        <TextContainer>
          <TextBold>Profit/Loss Ratio: </TextBold>
          <span>{formatNum(PLRatio, false)}</span>
        </TextContainer>
      )}
      {tokenQuantity && tokenQuantityLeverage && (
        <TextContainer>
          <TextBold>Tokens (with leverage): </TextBold>
          <span>{tokenQuantityLeverage.toFixed(fixedDecimal)}</span>
          <FontAwesomeIcon style={{ marginLeft: '0.5em' }} icon={faCoins} />
        </TextContainer>
      )}
      {notionalSize && (
        <TextContainer>
          <TextBold>Notional Size: </TextBold>
          <span>{notionalSize.toFixed(2)}$</span>
        </TextContainer>
      )}
      {totalCapital && capitalAfterLoss && (
        <TextContainer>
          <TextBold>Capital Risk: </TextBold>
          <span>-{capitalRisk.toFixed(fixedDecimal)}%</span>
          <span> (AfterLoss: {capitalAfterLoss.toFixed(fixedDecimal)})</span>
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
          The take profit must be <TextBold>{isLong ? 'higher' : 'lower'}</TextBold>{' '}
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
