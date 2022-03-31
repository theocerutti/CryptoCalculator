import React from "react";
import styled from "styled-components";

const MoneyTextContainer = styled.span`
  margin: 0;
  color: ${props => props.value > 0 ? "green" : "red"};
`;

const MoneyText = (props) => {
  return (
    <MoneyTextContainer {...props}>{props.value}$</MoneyTextContainer>
  );
};

export default MoneyText;