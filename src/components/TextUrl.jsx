import React from 'react';
import TextCopy from './TextCopy';
import styled from 'styled-components';

const TextUrlContainer = styled.span`
  & > a {
    text-decoration: none;
  }
`;

const TextUrl = (props) => {
  return (
    <TextUrlContainer>
      <a href={props.children} target='_blank' rel='noreferrer noopener'>
        <TextCopy animation={false} tooltipMessage={'Go'} {...props}>
          {props.children}
        </TextCopy>
      </a>
    </TextUrlContainer>
  );
};

export default styled(TextUrl)``;
