import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Icon,
  ProfileImage,
} from './styles';

export interface ProfileButtonProps extends RectButtonProps {
  image?: string;
}

export function ProfileButton({ onPress, image }: ProfileButtonProps) {
  return (
    <Container onPress={onPress}>
      {
        image
          ? <ProfileImage source={{ uri: image }} />
          : <Icon />
      }
    </Container>
  );
}
