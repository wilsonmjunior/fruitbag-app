import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import styled, { DefaultTheme } from 'styled-components/native';

interface GradientProps extends LinearGradientProps {
  theme: DefaultTheme
}

export const Container = styled(LinearGradient)
  .attrs(({ theme }: GradientProps) => ({
    ...theme.gradients.default,
  }))`
    flex: 1;
`;
