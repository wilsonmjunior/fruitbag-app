import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

import { ScreenProp } from '../../routes/Screens';
import { useShippingBag } from '../../contexts/bag';
import { usePrice } from '../../hooks/usePrice';
import { Button } from '../../components/Button';

import {
  Container,
  IconCloseWrapper,
  IconClose,
  InfoText,
  Content,
  ResumeContainer,
  Section,
  Title,
  Label,
  ButtonWrapper,
} from './styles';

export function Checkout() {
  const html = `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      </head>
      <body style="text-align: center;">
        <h1 style="font-size: 20px; font-family: Heveltica, sans-serif; font-weight: bold;">
          Dados do pagamento
        </h1>
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(9, 132, 129, 0.4);">
          <p style="font-size: 16px; font-family: Heveltica, sans-serif;">Forma de pagamento</p>
          <p style="font-size: 16px; font-family: Heveltica, sans-serif; font-weight: bold;">Boleto</p>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(9, 132, 129, 0.4);">
          <p style="font-size: 16px; font-family: Heveltica, sans-serif;">Número do pedido</p>
          <p style="font-size: 16px; font-family: Heveltica, sans-serif; font-weight: bold;">840001</p>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(9, 132, 129, 0.4);">
          <p style="font-size: 16px; font-family: Heveltica, sans-serif;">Valor do pedido</p>
          <p style="font-size: 16px; font-family: Heveltica, sans-serif; font-weight: bold;">R$ 20,00</p>
        </div>
      </body>
    </html>
  `;

  const { navigate } = useNavigation<ScreenProp>();
  const [loading, setLoading] = useState(false);

  const { bag, handleBuy } = useShippingBag();

  const { priceFormatted: total } = usePrice({ price: bag?.total });

  const handleSave = useCallback(async () => {
    setLoading(true);

    const { uri } = await Print.printToFileAsync({
      html,
    });

    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }, [html]);

  const handleClose = useCallback(async () => {
    await handleBuy();
    navigate('Home');
  }, [handleBuy, navigate]);

  return (
    <Container>
      <IconCloseWrapper>
        <IconClose onPress={handleClose} />
      </IconCloseWrapper>

      <Content>
        <InfoText>Agora só aguardar enquanto separamos os seu produtos!</InfoText>

        <ResumeContainer>
          <Title>Dados do pagamento</Title>
          <Section>
            <Label>Forma de pagamento</Label>
            <Title>Boleto</Title>
          </Section>
          <Section>
            <Label>Número do pedido</Label>
            <Title>840001</Title>
          </Section>
          <Section>
            <Label>Valor do pedido</Label>
            <Title>{total}</Title>
          </Section>
        </ResumeContainer>

        <ButtonWrapper>
          <Button
            title="Salvar comprovante"
            onPress={handleSave}
            loading={loading}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  );
}
