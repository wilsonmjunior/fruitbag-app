import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flex: 1,
  },
})`
  margin: 32px 20px 0;
`;

export const ItemsWrapper = styled.View``;

export const ButtonWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin: 32px 0 ${getBottomSpace() + 10}px;
`;

export const EmptyBag = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
`;

export const EmptyBagIcon = styled(Feather).attrs({
  name: 'shopping-bag',
  size: RFValue(50),
})`
  color: ${({ theme }) => theme.colors.text};
`;

export const EmptyBagText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-top: 10px;
`;
