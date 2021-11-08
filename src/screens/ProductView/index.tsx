import React, { useCallback, useEffect, useState } from 'react';
import {
  useNavigation, RouteProp, ParamListBase, useRoute,
} from '@react-navigation/native';

import { ScreenProp } from '../../routes/Screens';
import { Product } from '../../service/ProductsService';
import { useImage } from '../../hooks/useImage';
import { useShippingBag } from '../../contexts/bag';
import { Header } from '../../components/Header';
import { ProductSheet } from '../../components/ProductSheet';
import { GradientView } from '../../components/GradientView';

import {
  Content,
  ProductImageWrapper,
  ProductImage,
  ProductSheetWrapper,
} from './styles';

interface RouteParams extends RouteProp<ParamListBase, string> {
  params: {
    product: string
  }
}

export function ProductView() {
  const { goBack, navigate } = useNavigation<ScreenProp>();
  const route = useRoute<RouteParams>();

  const [product, setProduct] = useState<Product>({} as Product);
  const [amount, setAmount] = useState<number>(1);

  const image = useImage({
    productId: product.id,
  });

  const {
    amountProduct,
    handleAddProduct: saveProduct,
  } = useShippingBag();

  const handleBuy = useCallback(async () => {
    await saveProduct({
      product,
      amount,
    });

    navigate('ShippingBag');
  }, [amount, navigate, product, saveProduct]);

  const handleDecrement = useCallback(() => {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  }, [amount]);

  const handleIncrement = useCallback(() => {
    setAmount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (route.params && route.params.product) {
      const { params } = route;
      const productJSON = JSON.parse(params.product) as Product;
      setProduct(productJSON);
    }
  }, [route]);

  useEffect(() => {
    async function loadAmount() {
      const response = await amountProduct(product.id);
      setAmount(response);
    }

    if (!amount) {
      loadAmount();
    }
  }, [amount, amountProduct, product]);

  return (
    <GradientView>
      <Header
        isBack
        title="Quintal das frutas"
        onBack={goBack}
        onOpenBag={() => navigate('ShippingBag')}
      />

      <Content>
        <ProductImageWrapper>
          <ProductImage source={image} />
        </ProductImageWrapper>

        <ProductSheetWrapper>
          <ProductSheet
            title={product.name}
            description={product.description}
            price={product.price}
            count={amount}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
            onBuy={handleBuy}
          />
        </ProductSheetWrapper>
      </Content>
    </GradientView>
  );
}
