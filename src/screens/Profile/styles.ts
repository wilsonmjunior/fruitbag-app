import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const IconCloseWrapper = styled.View`
  align-items: flex-end;
  padding: 16px;
`;

export const IconClose = styled(Feather).attrs({
  name: 'x',
})`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
  flex: 1;
  margin: 0 20px;
`;

export const Section = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.colors.border};

  padding: 12px 0;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_700};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-top: 2px;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: ${getBottomSpace() + 10}px;
`;
