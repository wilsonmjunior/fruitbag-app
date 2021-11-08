import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../contexts/autth';
import { Button } from '../../components/Button';

import {
  Container,
  IconCloseWrapper,
  IconClose,
  Content,
  Label,
  Title,
  ButtonWrapper,
  Section,
} from './styles';

export function Profile() {
  const { goBack } = useNavigation();

  const { user, signOut } = useAuth();

  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <IconCloseWrapper>
        <IconClose onPress={goBack} />
      </IconCloseWrapper>

      <Content>
        <Section>
          <Label>Nome</Label>
          <Title>{user.name}</Title>
        </Section>

        <Section>
          <Label>Email</Label>
          <Title>{user.email}</Title>
        </Section>

        <ButtonWrapper>
          <Button
            title="Sair"
            onPress={handleLogout}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  );
}
