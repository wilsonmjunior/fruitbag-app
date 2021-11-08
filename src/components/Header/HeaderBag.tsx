import React from 'react';

import { useAuth } from '../../contexts/autth';
import { IconButton } from '../IconButton';
import { ProfileButton } from '../ProfileButton';

import {
  Container, Title,
} from './styles';

interface HeaderBagProps {
  title: string
  onBack: () => void;
  onOpenProfile: () => void;
}

export function HeaderBag({ title, onBack, onOpenProfile }: HeaderBagProps) {
  const { user } = useAuth();

  return (
    <Container>
      <IconButton
        icon="chevron-left"
        size={24}
        onPress={onBack}
        transparent
      />
      <Title>{title}</Title>
      <ProfileButton onPress={onOpenProfile} image={user.image} />
    </Container>
  );
}
