import React, { ReactNode } from 'react';

import { AuthProvider } from './autth';
import { ShippingBagProvider } from './bag';
import { ProductsProvider } from './products';

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <ProductsProvider>
        <ShippingBagProvider>
          {children}
        </ShippingBagProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}
