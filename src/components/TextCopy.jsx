import React, { useState } from 'react';
import styled from 'styled-components';
import { copyToClipboard } from '../utils/clipboard';
import { Tooltip, Whisper } from 'rsuite';

const TextCopyContainer = styled.span`
  cursor: pointer;
`;

const TextCopy = ({ children, tooltipMessage, tooltipPlacement, className, ...props }) => {
  const [bouncing, setBouncing] = useState(false);

  const handleCopy = () => {
    copyToClipboard(children).then(() => {
      setBouncing(true);
      setTimeout(() => setBouncing(false), 500);
    });
  };

  return (
    <TextCopyContainer
      className={`hvr-fade ${
        bouncing ? 'animate__animated animate__pulse animate__repeat-1 animate__faster' : ''
      } ${className}`}
      onClick={handleCopy}
      {...props}>
      <Whisper
        trigger='hover'
        speaker={<Tooltip>{tooltipMessage || 'Copy'}</Tooltip>}
        placement={tooltipPlacement || 'autoHorizontalEnd'}>
        <div>{children}</div>
      </Whisper>
    </TextCopyContainer>
  );
};

export default styled(TextCopy)``;
