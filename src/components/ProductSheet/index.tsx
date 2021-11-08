import React from 'react';

import { usePrice } from '../../hooks/usePrice';
import { Button } from '../Button';
import { ControlProducts } from '../ControlProducts';

import {
  Container,
  ControlProductsWrapper,
  Description,
  Footer,
  Price,
  Title,
} from './styles';

interface ProductSheetProps {
  title: string
  description: string
  price: number
  count: number
  onDecrement: () => void
  onIncrement: () => void
  onBuy: () => void
}

export function ProductSheet({
  title,
  description,
  price,
  count,
  onDecrement,
  onIncrement,
  onBuy,
}: ProductSheetProps) {
  const { priceFormatted } = usePrice({ price });

  return (
    <Container>
      <Title>{title}</Title>
      <Description>
        {description}
      </Description>

      <Footer>
        <ControlProductsWrapper>
          <Price>{priceFormatted}</Price>
          <ControlProducts
            count={count}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
          />
        </ControlProductsWrapper>

        <Button title="Comprar" onPress={onBuy} />
      </Footer>

    </Container>
  );
}
