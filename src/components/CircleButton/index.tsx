import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Icon,
} from './styles';

interface CircleButtonProps extends RectButtonProps {
  icon: string
}

export function CircleButton({ icon, ...props }: CircleButtonProps) {
  return (
    <Container {...props}>
      <Icon name={icon} />
    </Container>
  );
}
