const getPercent = (value, total) => {
  return (value / total) * 100;
};

// TODO: use typescript
const convertValue = (inputValue) => {
  if (inputValue === null || inputValue === undefined || isNaN(inputValue)) return null;
  return parseFloat(inputValue);
};

const formatNum = (value, signed = true) => {
  const sign = value < 0 ? '' : '+';
  return `${signed ? sign : ''}${value.toFixed(2)}`;
};

const calculateDistancePercent = (from, to) => {
  return ((to - from) / from) * 100;
};

export { formatNum, calculateDistancePercent, getPercent, convertValue };
