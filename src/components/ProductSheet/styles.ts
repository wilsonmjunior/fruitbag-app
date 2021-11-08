import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: ${RFPercentage(35)}px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${({ theme }) => theme.colors.shape};
  box-shadow: ${({ theme }) => theme.shadows.default};
  padding: 16px 20px ${getBottomSpace() + 10}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_700};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;

  margin-top: 12px;
`;

export const Footer = styled.View`
  margin-top: 16px;
`;

export const ControlProductsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.title};
`;
