import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CountText = styled.Text`
  font-size: ${RFValue(12)}px;
  margin: 0 10px;
`;
