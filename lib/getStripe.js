import { loadStripe } from '@stripe/stripe-js';

let stripeIns;

const getStripe = () => {
  if (!stripeIns) {
    stripeIns = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  return stripeIns;
};

export default getStripe;
