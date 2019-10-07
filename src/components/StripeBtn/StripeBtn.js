import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeBtn = ({ price }) => {
  const pKey = "pk_test_kodbouv7dAjnX4uqTGO9phnt00St34KmvU";
  const stripePrice = price * 100;

  const onToken = token => {
      console.log(token);
  }

  return (
    <StripeCheckout 
        label="Pay Now" 
        name="Let's Sweat" 
        currency="EUR" 
        billingAddress 
        shippingAddress 
        image="https://firebasestorage.googleapis.com/v0/b/let-s-sweat.appspot.com/o/images%2Ficon.png?alt=media&token=6a6017a3-7ed7-411c-9ef5-993c26938f64" 
        description={`Your total is ${price}`}
        amount={stripePrice}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={pKey}
    />
  );
};

export default StripeBtn;
