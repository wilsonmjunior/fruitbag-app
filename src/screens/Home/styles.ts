import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Product } from '../../service/ProductsService';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  margin: 32px 20px 0;
`;

export const ProductCardWrapper = styled(
  FlatList as new () => FlatList<Product>,
).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 32px;
`;
