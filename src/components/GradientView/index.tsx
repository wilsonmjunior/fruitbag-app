import React, { ReactNode } from 'react';

import {
  Container,
} from './styles';

interface GradientViewProps {
  children: ReactNode
  }

export function GradientView({ children }: GradientViewProps) {
  return (
    <Container>{children}</Container>
  );
}
