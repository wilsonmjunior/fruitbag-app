import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.TouchableOpacity`
  width: ${wp('43%')}px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.shape};

  margin-bottom: 14px;
`;

export const ProductImage = styled.Image`
 border-top-left-radius: 20px;
 border-top-right-radius: 20px;
  width: 100%;
`;

export const Content = styled.View`
  padding: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_700};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-top: 10px;
`;

export const AddButtonWrapper = styled.View`
  position: absolute;
  right: 0;
  bottom: 14px;
  width: 30px;
  height: 30px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const AddButton = styled(RectButton)`
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.primary}
`;
