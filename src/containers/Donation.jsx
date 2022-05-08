import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import TextCopy from '../components/TextCopy';
import BTClogo from '../assets/images/btc-logo.png';
import ETHlogo from '../assets/images/eth-logo.png';
import LTClogo from '../assets/images/ltc-logo.png';
import BNBlogo from '../assets/images/bnb-logo.png';

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

  & > ${TextCopy} {
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
        <h4>Donation</h4>
        <FontAwesomeIcon style={{ marginLeft: '0.5em' }} icon={faHandHoldingDollar} size='lg' />
      </DonationTitleContainer>
      <TextContainer>
        <AssetLogo src={ETHlogo} />
        <TextBold>ETH (ERC20): </TextBold>
        <TextCopy>0x17ded84d45b28d5ea359bb1b3a6343ff97a94217</TextCopy>
      </TextContainer>
      <TextContainer>
        <AssetLogo src={BTClogo} />
        <TextBold>BTC: </TextBold>
        <TextCopy>1GEqsD4YFW9P4ihfceRuF9HDcsAv1jNnSF</TextCopy>
      </TextContainer>
      <TextContainer>
        <AssetLogo src={BNBlogo} />
        <TextBold>BNB (BSC): </TextBold>
        <TextCopy>0x17ded84d45b28d5ea359bb1b3a6343ff97a94217</TextCopy>
      </TextContainer>
      <TextContainer>
        <AssetLogo src={LTClogo} />
        <TextBold>LTC: </TextBold>
        <TextCopy>LefU5xzfNYEuBr8N5EAkaBxoVskH4hkWJe</TextCopy>
      </TextContainer>
    </>
  );
};

export default Donation;
