import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ScreenProp } from '../../routes/Screens';
import { AddProductParams } from '../../contexts/bag';
import { usePrice } from '../../hooks/usePrice';
import { useImage } from '../../hooks/useImage';
import { Product } from '../../service/ProductsService';

import {
  Container,
  Content,
  Title,
  Price,
  ProductImage,
  AddButtonWrapper,
  Icon,
  AddButton,
} from './styles';

interface ProductCardProps {
  product: Product
  onAddProduct: (data: AddProductParams) => void
}

export function ProductCard({ product, onAddProduct }: ProductCardProps) {
  const { navigate } = useNavigation<ScreenProp>();

  const { priceFormatted } = usePrice({ price: product.price });
  const Image = useImage({ productId: product.id, thumbnail: true });

  const handleOpenProduct = useCallback(() => {
    navigate('ProductView', { product: JSON.stringify(product) });
  }, [navigate, product]);

  return (
    <View>
      <Container
        onPress={handleOpenProduct}
      >
        <ProductImage source={Image} />

        <Content>
          <Title>{product.name}</Title>
          <Price>{priceFormatted}</Price>
        </Content>
      </Container>

      <AddButtonWrapper>
        <AddButton onPress={() => onAddProduct({ product })}>
          <Icon name="plus" />
        </AddButton>
      </AddButtonWrapper>
    </View>
  );
}
