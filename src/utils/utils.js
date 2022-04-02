const getPercent = (value, total) => {
  return (value / total) * 100;
};

const formatNum = (value) => {
  return `${value < 0 ? '' : '+'}${value.toFixed(2)}`;
};

const calculateDistancePercent = (from, to) => {
  return ((to - from) / from) * 100;
};

export { formatNum, calculateDistancePercent, getPercent };
