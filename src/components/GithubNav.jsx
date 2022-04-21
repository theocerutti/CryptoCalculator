import React from 'react';
import styled from 'styled-components';
import { APP_CONSTANTS } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  padding: 2em;
  position: absolute;
  top: 0;
  right: 0;
`;

const GithubNav = () => {
  return (
    <Container>
      <a href={APP_CONSTANTS.projectUrl} rel='noreferrer' target='_blank'>
        <FontAwesomeIcon color='var(--rs-text-primary)' size='3x' icon={faGithub} />
      </a>
    </Container>
  );
};

export default GithubNav;
