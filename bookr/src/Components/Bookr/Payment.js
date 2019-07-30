import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Payment() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 64998.67,
    // description: "Cool car"
  });

  async function handleToken(token, addresses) {
    console.log(product, token)
    const response = await axios.post(
      "http://localhost:3300/payment",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>On Sale · ${product.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_Grqfk8uqKNCJYpAQS2t89UB700wHJklrMa"
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />
    </div>
  );
}

export default Payment;