import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled(RectButton)`
  width: 20px;
  height: 20px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.text};

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
