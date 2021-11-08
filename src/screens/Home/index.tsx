import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ScreenProp } from '../../routes/Screens';
import { useShippingBag } from '../../contexts/bag';
import { useProducts } from '../../contexts/products';
import { GradientView } from '../../components/GradientView';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ProductCard } from '../../components/ProductCard';

import {
  Container,
  Content,
  ProductCardWrapper,
} from './styles';

export function Home() {
  const { navigate } = useNavigation<ScreenProp>();

  const { products, onSearch } = useProducts();
  const { handleAddProduct } = useShippingBag();

  return (
    <Container>
      <GradientView>
        <Header
          title="Quintal das frutas"
          onOpenBag={() => navigate('ShippingBag')}
        />

        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Content>
            <Input icon="search" placeholder="Buscar produto" onChangeText={(value) => onSearch(value)} />

            <ProductCardWrapper
              data={products}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <ProductCard
                  product={item}
                  onAddProduct={handleAddProduct}
                />
              )}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
          </Content>
        </KeyboardAvoidingView>
      </GradientView>
    </Container>
  );
}
