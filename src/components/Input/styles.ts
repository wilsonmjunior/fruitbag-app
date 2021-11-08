import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';

export const InputWrapper = styled.View`
  width: 100%;
  height: 54px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.shape};

  flex-direction: row;
  align-items: center;

  padding: 0 16px;
`;

export const IconWrapper = styled.View``;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.8;
`;

export const InputContainer = styled.TextInput`
  flex: 1;
  margin: 0 16px;
`;
