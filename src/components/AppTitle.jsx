import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  margin-bottom: 1em;
`;

const AppTitle = (props) => {
  return (
    <Title {...props}>{props.children}</Title>
  );
};

export default AppTitle;