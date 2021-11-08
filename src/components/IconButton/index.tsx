import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Icon,
} from './styles';

export interface IconProps extends RectButtonProps {
  icon: string
  size?: number
  transparent?: boolean
}

export function IconButton({
  icon, size, transparent = false, onPress,
}: IconProps) {
  return (
    <Container
      onPress={onPress}
      transparent={transparent}
    >
      <Icon
        name={icon}
        size={size}
      />
    </Container>
  );
}
