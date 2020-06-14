import stripePackage from 'stripe';
import handler from './libs/handler-lib';
import { calculateCost } from './libs/billing-lib';

export const main = handler(async (event) => {
  const { storage, source } = JSON.parse(event.body);
  const amount = calculateCost(storage);
  const description = 'scratch charge';
  const stripe = stripePackage(process.env.stripeSecretKey);
  await stripe.charges.create({
    source,
    amount,
    description,
    currency: 'usd',
  });
  return { status: true };
});
