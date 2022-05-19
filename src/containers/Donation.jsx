import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import TextCopy from '../components/TextCopy';
import BTClogo from '../assets/images/btc-logo.png';
import ETHlogo from '../assets/images/eth-logo.png';
import NexoLogo from '../assets/images/nexo-logo.png';
import BinanceLogo from '../assets/images/binance-logo.png';
import TextUrl from '../components/TextUrl';
import { APP_CONSTANTS } from '../constants';

const DonationTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

const TextBold = styled.span`
  margin: 0;
  font-weight: bold;
`;

const TextContainer = styled.div`
  margin-bottom: 0.5em;
  display: flex;
  align-items: center;

  & > ${TextCopy}, ${TextUrl} {
    margin-left: 0.5em;
  }
`;

const AssetLogo = styled.img`
  height: 1.5em;
  width: 1.5em;
  margin-right: 0.5em;
`;

const Donation = () => {
  return (
    <>
      <DonationTitleContainer>
        <h4>Donation / Referral</h4>
        <FontAwesomeIcon style={{ marginLeft: '0.5em' }} icon={faHandHoldingDollar} size='lg' />
      </DonationTitleContainer>
      <TextContainer>
        <AssetLogo src={ETHlogo} />
        <TextBold>ETH (ERC20): </TextBold>
        <TextCopy>{APP_CONSTANTS.donation.eth}</TextCopy>
      </TextContainer>
      <TextContainer>
        <AssetLogo src={BTClogo} />
        <TextBold>BTC: </TextBold>
        <TextCopy>{APP_CONSTANTS.donation.btc}</TextCopy>
      </TextContainer>
      <TextContainer>
        <AssetLogo src={NexoLogo} />
        <TextBold>Nexo Referral: </TextBold>
        <TextUrl>{APP_CONSTANTS.donation.nexo}</TextUrl>
      </TextContainer>
      <TextContainer>
        <AssetLogo src={BinanceLogo} />
        <TextBold>Binance Referral: </TextBold>
        <TextUrl>{APP_CONSTANTS.donation.binance}</TextUrl>
      </TextContainer>
    </>
  );
};

export default Donation;
