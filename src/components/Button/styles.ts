import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_700};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
