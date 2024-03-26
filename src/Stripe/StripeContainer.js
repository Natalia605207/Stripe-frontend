import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51OxEt807K46axgqXHj3ZramIVJkHB8fRm9UEEC8lkUtQ12hZQBqVsjP3RThqQo4Um0YUdqBIemTGFD1BN6MD8E6600crbkgGQY";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;