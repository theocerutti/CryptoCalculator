const APP_CONSTANTS = {
  title: 'Crypto Calculator',
  version: process.env.REACT_APP_VERSION,
  entryPrice: 'This is the price where you open your position.',
  initialCost: "Initial Cost, it doesn't include the leverage! That's what you will pay.",
  TPMarkDesc: '[Take Profit]: Price where you will close your position and take your profit.',
  SLMarkDesc: '[Stop Loss]: Close the position if the price goes to the Stop Loss Mark.',
  totalCapitalDesc: 'Total capital of your account. Optional.',
  copyUrlReportDesc: "Copy URL report config to send it to your friends!",
  projectUrl: process.env.REACT_APP_GITHUB_PROJECT_URL,
};

export { APP_CONSTANTS };
