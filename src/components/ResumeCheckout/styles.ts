import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: 32px;
`;

export const Divider = styled.View`
  border: ${({ theme }) => theme.borders.default};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
  padding: 14px 0;
`;

const label = css`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Label = styled.Text`
  ${label}
  margin-right: 16px;
`;

export const Total = styled.Text`
  ${label}
  font-family: ${({ theme }) => theme.fonts.secondary_700};
`;

export const TotalWrapper = styled.View`
  flex-direction: row;
`;
