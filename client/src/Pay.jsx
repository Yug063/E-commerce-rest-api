import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const KEY =
  "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        if (stripeToken) {
          const res = await axios.post(
            "http://localhost:5000/api/checkout/payment",
            {
              tokenId: stripeToken.id,
              amount: 2000,
            }
          );
          console.log(res.data); // Handle the response as needed
        }
      } catch (err) {
        console.log(err);
      }
    };

    stripeToken && makeRequest(); // Call the function immediately
  }, [stripeToken]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Ecommerce App"
        image="/images/avatar.jpg"
        billingAddress
        shippingAddress
        description="Your total is 2000"
        amount={2000}
        currency="INR"
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
