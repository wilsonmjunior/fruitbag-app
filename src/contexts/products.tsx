import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import { Product, ProductsService } from '../service/ProductsService';

interface ProductsData {
  products: Product[]
  onSearch: (query: string) => void
}

interface ProductsProviderProps {
  children: ReactNode
}

export const Products = createContext({} as ProductsData);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const { getProducts } = ProductsService();

    if (products.length === 0) {
      const response = getProducts();
      setProducts(response);
    }
  }, [products]);

  const onSearch = useCallback((query: string) => {
    if (query !== '') {
      const productsFounded = products.filter((product) => product.name.includes(query));
      setProducts(productsFounded);
    } else {
      setProducts([]);
    }
  }, [products]);

  return (
    <Products.Provider value={{ products, onSearch }}>
      {children}
    </Products.Provider>
  );
}

export const useProducts = () => useContext(Products);
