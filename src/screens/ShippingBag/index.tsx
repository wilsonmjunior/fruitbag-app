import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import { ScreenProp } from '../../routes/Screens';
import { useAuth } from '../../contexts/autth';
import { useShippingBag } from '../../contexts/bag';
import { HeaderBag } from '../../components/Header/HeaderBag';
import { ItemBag } from '../../components/ItemBag';
import { GradientView } from '../../components/GradientView';
import { ResumeCheckout } from '../../components/ResumeCheckout';
import { Button } from '../../components/Button';

import {
  Content,
  ItemsWrapper,
  ButtonWrapper,
  EmptyBag,
  EmptyBagIcon,
  EmptyBagText,
} from './styles';

export function ShippingBag() {
  const { goBack, navigate } = useNavigation<ScreenProp>();

  const {
    bag,
    handleIncrement,
    handleDecrement,
    handleBuy,
  } = useShippingBag();

  const { user } = useAuth();

  const handleOpenProfile = useCallback(() => {
    if (user.id) {
      navigate('Profile');
    } else {
      navigate('SignIn');
    }
  }, [user, navigate]);

  const handleCheckout = useCallback(async () => {
    if (bag.products && bag.products.length > 0) {
      if (user.id) {
        await handleBuy();
        navigate('Checkout');
      } else {
        navigate('SignIn');
      }
    } else {
      Alert.alert('Seu carrinho está vazio');
    }
  }, [bag, user, handleBuy, navigate]);

  return (
    <GradientView>
      <HeaderBag
        title="Sacola de compras"
        onBack={goBack}
        onOpenProfile={handleOpenProfile}
      />

      <Content>
        <ItemsWrapper>
          {bag.products && bag.products.map((product) => (
            <ItemBag
              key={product.id}
              productId={product.id}
              title={product.name}
              price={product.price}
              amountItems={product.amount}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          ))}
        </ItemsWrapper>

        {
          bag.products && bag.products.length > 0 ? (
            <ResumeCheckout
              amount={bag.amount}
              subtotal={bag.total}
            />
          ) : (
            <EmptyBag>
              <EmptyBagIcon />
              <EmptyBagText>Sua sacola esta vazia!</EmptyBagText>
            </EmptyBag>
          )
        }

        <ButtonWrapper>
          <Button
            title="Finalizar compra"
            onPress={handleCheckout}
          />
        </ButtonWrapper>
      </Content>
    </GradientView>
  );
}
