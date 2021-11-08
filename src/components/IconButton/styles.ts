import styled, { css } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  transparent: boolean
}

interface IconProps {
  size: number
}

export const Container = styled(RectButton)<ContainerProps>`
  ${({ transparent }) => (!transparent ? css`
    width: 50px;
    height: 50px;
    border-radius: 15px;
    background: ${({ theme }) => theme.colors.shape};
  ` : css`
    border-radius: ${RFValue(20)}px;
  `)}

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${({ size }) => (size ? RFValue(size) : RFValue(20))}px;
  color: ${({ theme }) => theme.colors.primary};
`;
