import React from 'react';
import { InputNumber, Tooltip, Whisper } from 'rsuite';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const CustomInputNumber = styled(InputNumber)`
  input {
    text-align: right;
  }

  .rs-input-number-btn-group-vertical {
    display: none;
  }
`;

const Input = (props) => {
  const { tooltipMessage, tooltipPlacement, ...inputProps } = props;

  const input = (
    <Whisper
      trigger='focus'
      speaker={<Tooltip>{props.tooltipMessage || ''}</Tooltip>}
      placement={props.tooltipPlacement || 'autoHorizontalStart'}
    >
      <CustomInputNumber
        value={props.value}
        onChange={props.onChange}
        suffix={props.suffix}
        postfix={props.postfix}
        {...inputProps}
      />
    </Whisper>
  );

  if (!props.tooltipMessage || isMobile) return input.props.children;
  return input;
};

export default Input;
