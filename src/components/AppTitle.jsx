import React from 'react';
import styled from 'styled-components';
import { Badge } from 'rsuite';
import { APP_CONSTANTS } from '../constants';

const Container = styled.div`
  display: flex;
  align-items: baseline;
`;

const Title = styled.h1`
  margin-bottom: 1em;
`;

const AppTitle = (props) => {
  return (
    <Container>
      <Title {...props}>{props.children}</Title>
      <Badge content={`v${APP_CONSTANTS.version}`} />
    </Container>
  );
};

export default AppTitle;
