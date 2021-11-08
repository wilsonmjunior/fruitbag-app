import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title,
} from './styles';

export interface ButtonProps extends RectButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({ title, loading, ...props }: ButtonProps) {
  const theme = useTheme();

  return (
    <Container {...props}>
      {!loading ? (
        <Title>{title}</Title>
      ) : (
        <ActivityIndicator color={theme.colors.shape} />
      )}
    </Container>
  );
}
