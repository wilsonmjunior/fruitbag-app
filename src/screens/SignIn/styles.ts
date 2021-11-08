import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const LogoWrapper = styled.View`
  align-items: center;
  margin-top: ${getStatusBarHeight() + 48}px;
`;

export const Content = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  height: 100%;
  margin: 0 20px 0;
`;

export const Form = styled.View``;

export const VSpacer = styled.View`
  height: 16px;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin: 64px 20px ${getBottomSpace() + 10}px;
`;

export const ForgotPasswordWrapper = styled.View`
  align-items: flex-end;
  margin-top: 16px;
`;

export const ForgotPassword = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;
