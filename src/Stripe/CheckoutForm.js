import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [messageSuccess, setMessageSuccess] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://stripe-backend-okyz.onrender.com",
          {
            amount: 999,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          setMessageSuccess(true);
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div>
        {!messageSuccess ?
        <div className="stripe-box">
    <form onSubmit={handleSubmit} className="payment-form">
      <CardElement />
      <button className="pay-btn">Pay</button>
    </form>
    </div>
    :
    <div className="confirm-answer">
        <IoMdCheckmarkCircleOutline className="checkmark"/>
        <h2>Your payment was successful!</h2>
        <p>Enjoy your purchase.</p>
    </div>
    }
    </div>
  );
};