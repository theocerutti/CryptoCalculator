import React from 'react';
import styled from 'styled-components';
import { Badge } from 'rsuite';
import { APP_CONSTANTS } from '../constants';
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  display: flex;
  align-items: baseline;
`;

const Title = styled.h1`
  margin-bottom: 1em;
  ${isMobile && `font-size: 2.5em;`}
`;

const AppTitle = (props) => {
  return (
    <Container>
      <Title {...props}>{props.children}</Title>
      {!isMobile && <Badge content={`v${APP_CONSTANTS.version}`} />}
    </Container>
  );
};

export default AppTitle;
