import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.shape};
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather).attrs({
  name: 'user',
  size: RFValue(20),
})`
  color: ${({ theme }) => theme.colors.primary};
`;

export const ProfileImage = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 15px;
`;
