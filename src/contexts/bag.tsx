import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { Alert } from 'react-native';

import { Bag, BagService, ProductBag } from '../service/BagService';
import { Product } from '../service/ProductsService';

export interface AddProductParams {
  product: Product
  amount?: number
}

interface ShippingBagData {
  bag: Bag | null
  handleAddProduct: (data: AddProductParams) => Promise<void>
  handleIncrement: (productId: number) => Promise<void>
  handleDecrement: (productId: number) => Promise<void>
  handleBuy: () => Promise<void>
  amountProduct: (productId: number) => Promise<number>
}

interface ShippingBagProviderProps {
  children: ReactNode
}

export const ShippingBag = createContext({} as ShippingBagData);

export function ShippingBagProvider({ children }: ShippingBagProviderProps) {
  const [bag, setBag] = useState<Bag | null>(null);

  const {
    addProduct,
    getBag,
    getProductBag,
    removeProduct,
    updateBag,
    saveBuy,
  } = BagService();

  const sumTotal = useCallback((products: ProductBag[]) => {
    const total = products.reduce((acc, product) => acc + (product.amount * product.price), 0);

    return total;
  }, []);

  const handleAddProduct = useCallback(async ({ product, amount = 1 }: AddProductParams) => {
    const { product: productFounded } = await getProductBag(product.id);
    if (!productFounded) {
      const response = await addProduct({ product, amount });
      setBag(response);
    } else {
      Alert.alert('Produto já adicionado');
    }
  }, [addProduct, getProductBag]);

  const handleIncrement = useCallback(async (productId: number) => {
    const { product } = await getProductBag(productId);
    if (product) {
      const updatedItemsBag = bag.products.map((itemBag) => (itemBag.id === product.id ? (
        ({
          ...itemBag,
          amount: itemBag.amount + 1,
          subtotal: (itemBag.amount + 1) * itemBag.price,
        })
      ) : itemBag));

      const updatedBag = {
        amount: bag.amount + 1,
        products: updatedItemsBag,
        total: sumTotal(updatedItemsBag),
      };

      setBag(updatedBag);
      await updateBag(updatedBag);
    }
  }, [bag, getProductBag, sumTotal, updateBag]);

  const handleDecrement = useCallback(async (productId: number) => {
    const { product } = await getProductBag(productId);
    if (product) {
      if (product.amount > 1) {
        if (product) {
          const updatedItemsBag = bag.products.map((itemBag) => (itemBag.id === product.id ? (
            ({
              ...itemBag,
              amount: itemBag.amount - 1,
              subtotal: (itemBag.amount - 1) * itemBag.price,
            })
          ) : itemBag));

          const updatedBag = {
            amount: bag.amount - 1,
            products: updatedItemsBag,
            total: sumTotal(updatedItemsBag),
          };

          setBag(updatedBag);
          await updateBag(updatedBag);
        }
      } else {
        const updatedBag = await removeProduct(productId);
        setBag(updatedBag);
        await updateBag(updatedBag);
      }
    }
  }, [bag, sumTotal, getProductBag, updateBag, removeProduct]);

  const handleBuy = useCallback(async () => {
    await saveBuy();
    setBag({} as Bag);
  }, [saveBuy]);

  const amountProduct = useCallback(async (productId: number) => {
    const { product } = await getProductBag(productId);
    return product?.amount || 1;
  }, [getProductBag]);

  useEffect(() => {
    async function loadBag() {
      const response = await getBag();
      if (response) {
        setBag(response);
      } else {
        setBag({} as Bag);
      }
    }

    if (!bag) {
      loadBag();
    }
  }, [bag, getBag]);

  return (
    <ShippingBag.Provider value={{
      bag,
      handleAddProduct,
      handleIncrement,
      handleDecrement,
      handleBuy,
      amountProduct,
    }}
    >
      {children}
    </ShippingBag.Provider>
  );
}

export const useShippingBag = () => useContext(ShippingBag);
