import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { ScreenProp } from '../../routes/Screens';
import { useShippingBag } from '../../contexts/bag';
import { useAuth } from '../../contexts/autth';
import { IconButton } from '../IconButton';
import { ProfileButton } from '../ProfileButton';

import {
  BagWrapper,
  Container,
  ItemsCounBag,
  Title,
} from './styles';

interface HeaderProps {
  isBack?: boolean
  title?: string
  noBag?: boolean
  onBack?: () => void
  onOpenBag?: () => void
}

export function Header({
  isBack,
  title,
  noBag,
  onBack,
  onOpenBag,
}: HeaderProps) {
  const { navigate } = useNavigation<ScreenProp>();

  const { bag } = useShippingBag();
  const { user } = useAuth();

  return (
    <Container>
      {isBack ? (
        <IconButton icon="chevron-left" size={24} onPress={onBack} transparent />
      ) : (
        <ProfileButton image={user.image} onPress={() => navigate(!user.id ? 'SignIn' : 'Profile')} />
      )}
      <Title>{title}</Title>

      {!noBag && (
        <BagWrapper>
          <IconButton icon="shopping-bag" onPress={onOpenBag} />
          {bag?.amount > 0 && (
            <ItemsCounBag />
          )}
        </BagWrapper>
      )}
    </Container>
  );
}
