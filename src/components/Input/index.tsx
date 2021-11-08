/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Icon,
  InputContainer,
  InputWrapper,
} from './styles';

export interface InputProps extends TextInputProps {
  icon: string
}

export function Input({ icon, ...props }: InputProps) {
  return (
    <InputWrapper>
      <Icon name={icon} />
      <InputContainer {...props} />
    </InputWrapper>
  );
}
