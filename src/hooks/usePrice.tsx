import { useMemo } from 'react';

interface PriceProps {
  price: number
}

export function usePrice({ price }: PriceProps) {
  const priceFormatted = useMemo(() => Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price), [price]);

  return { priceFormatted };
}
