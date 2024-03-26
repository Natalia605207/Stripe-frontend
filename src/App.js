import React, { useState } from "react";
import StripeContainer from "./Stripe/StripeContainer";
import { Shop } from "./Shop";
import "./App.css";

const App = () => {
  const [showPayment, setShowPayment] = useState(false);
  return (
    <div className="App">
      {showPayment ?
      <StripeContainer />
      :
      <Shop setShowPayment = {setShowPayment} />
      }
    </div>
  );
};

export default App;
