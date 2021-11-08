import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import {
  Image, Keyboard, KeyboardAvoidingView, Platform,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../contexts/autth';
import { Button } from '../../components/Button';
import { GradientView } from '../../components/GradientView';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';

import { Logo } from '../../assets/images';

import {
  ButtonWrapper,
  Content,
  ForgotPasswordWrapper,
  ForgotPassword,
  VSpacer,
  LogoWrapper,
  Form,
} from './styles';

export function SignIn() {
  const scrollRef = useRef<ScrollView>();

  const { goBack } = useNavigation();

  const [email, setEmail] = useState('john@mail.com');
  const [password, setPassword] = useState('123456');

  const { signIn } = useAuth();

  const handleSignIn = useCallback(async () => {
    await signIn({
      email,
      password,
    });
  }, [signIn, email, password]);

  const keyboardDidShow = () => {
    scrollRef.current?.scrollToEnd({ animated: true });
  };

  const keyboardDidHide = () => {
    scrollRef.current?.scrollToEnd({ animated: true });
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  return (
    <GradientView>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Header isBack onBack={goBack} noBag />
        <Content ref={scrollRef}>
          <LogoWrapper>
            <Image source={Logo} />
          </LogoWrapper>

          <Form>
            <Input
              icon="mail"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="E-mail"
              returnKeyType="next"
              onChangeText={setEmail}
              value={email}
            />
            <VSpacer />
            <Input
              icon="lock"
              secureTextEntry
              placeholder="Senha"
              returnKeyType="send"
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <ForgotPasswordWrapper>
            <ForgotPassword>Esqueci minha senha</ForgotPassword>
          </ForgotPasswordWrapper>
        </Content>

        <ButtonWrapper>
          <Button title="Entrar" onPress={handleSignIn} />
        </ButtonWrapper>
      </KeyboardAvoidingView>
    </GradientView>
  );
}
