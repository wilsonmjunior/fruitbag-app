import React from 'react';

import { usePrice } from '../../hooks/usePrice';

import {
  Container,
  Divider,
  Label,
  Section,
  Total,
  TotalWrapper,
} from './styles';

interface ResumeCheckoutProps {
  amount: number
  subtotal: number
}

export function ResumeCheckout({ amount, subtotal }: ResumeCheckoutProps) {
  const freteValue = 20;

  const { priceFormatted: frete } = usePrice({ price: freteValue });
  const { priceFormatted: subtotalFormatted } = usePrice({ price: subtotal });
  const { priceFormatted: totalFormatted } = usePrice({ price: subtotal + freteValue });

  return (
    <Container>
      <Divider />
      <Section>
        <Label>Subtotal</Label>
        <Total>{subtotalFormatted}</Total>
      </Section>

      <Section>
        <Label>Frete</Label>
        <Total>{frete}</Total>
      </Section>

      <Section>
        <Label>Total</Label>
        <TotalWrapper>
          <Label>
            {`(${amount})`}
          </Label>
          <Total>{totalFormatted}</Total>
        </TotalWrapper>
      </Section>
    </Container>
  );
}
