import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 16px;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductWrapper = styled.View`
  margin-left: 16px;
`;

export const ProductImage = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(55)}px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_700};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;

  margin-top: 12px;
`;
