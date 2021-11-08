import React from 'react';
import { CircleButton } from '../CircleButton';

import {
  Container,
  CountText,
} from './styles';

interface ControlProductsProps {
  count: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

export function ControlProducts({ count, onDecrement, onIncrement }: ControlProductsProps) {
  return (
    <Container>
      <CircleButton icon="minus" onPress={onDecrement} />
      <CountText>{count}</CountText>
      <CircleButton icon="plus" onPress={onIncrement} />
    </Container>
  );
}
