import React from 'react';

import { useImage } from '../../hooks/useImage';
import { usePrice } from '../../hooks/usePrice';
import { ControlProducts } from '../ControlProducts';

import {
  Container,
  Section,
  ProductWrapper,
  Title,
  Price,
  ProductImage,
} from './styles';

interface ItemBagProps {
  productId: number
  title: string
  price: number
  amountItems: number
  onIncrement: (productId: number) => Promise<void>
  onDecrement: (productId: number) => Promise<void>
}

export function ItemBag({
  productId,
  title,
  price,
  amountItems,
  onDecrement,
  onIncrement,
}: ItemBagProps) {
  const { priceFormatted } = usePrice({ price });

  const image = useImage({ productId, thumbnail: true });

  return (
    <Container>
      <Section>
        <ProductImage
          source={image}
        />

        <ProductWrapper>
          <Title>{title}</Title>
          <Price>{priceFormatted}</Price>
        </ProductWrapper>
      </Section>

      <ControlProducts
        count={amountItems}
        onIncrement={() => onIncrement(productId)}
        onDecrement={() => onDecrement(productId)}
      />
    </Container>
  );
}
