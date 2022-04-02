import React from "react";
import styled from "styled-components";

const MoneyTextContainer = styled.span`
  margin: 0;
  color: var(--rs-${props => props.value > 0 ? "green" : "red"}-500);
`;

const MoneyText = (props) => {
  return (
    <MoneyTextContainer {...props}>{props.value}$</MoneyTextContainer>
  );
};

export default MoneyText;
