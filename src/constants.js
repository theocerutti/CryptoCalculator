const APP_CONSTANTS = {
  title: 'Crypto Calculator',
  version: process.env.REACT_APP_VERSION,
  entryPrice: 'This is the price where you open your position.',
  initialCost: "Initial Cost, it doesn't include the leverage! That's what you will pay.",
  TPMarkDesc: '[Take Profit]: Price where you will close your position and take your profit.',
  SLMarkDesc: '[Stop Loss]: Close the position if the price goes to the Stop Loss Mark.',
  totalCapitalDesc: 'Total capital of your account. Optional.',
  copyUrlReportDesc: 'Copy URL report config to send it to your friends!',
  projectUrl: process.env.REACT_APP_GITHUB_PROJECT_URL,
  maxLeverage: 125,
  donation: {
    nexo: 'https://nexo.io/ref/c4ey5fhjuf?src=web-link',
    binance: 'https://accounts.binance.com/en/register?ref=374537611',
    eth: '0x17ded84d45b28d5ea359bb1b3a6343ff97a94217',
    btc: '1GEqsD4YFW9P4ihfceRuF9HDcsAv1jNnSF',
  },
};

export { APP_CONSTANTS };
