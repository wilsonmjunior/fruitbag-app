import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  margin-top: ${getStatusBarHeight() + 28}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const BagWrapper = styled.View``;

export const ItemsCounBag = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.red};

  position: absolute;
  top: 29px;
  right: 11px;
`;
