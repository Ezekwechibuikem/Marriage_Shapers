// src/components/FlutterPayment.js
import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const FlutterPayment = () => {
  const config = {
    public_key: "FLWPUBK_TEST-xxxxxxxxxxxxxxxxxx-X", // replace with your key
    tx_ref: Date.now(),
    amount: 5000,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@example.com",
      phonenumber: "070********",
      name: "John Doe",
    },
    customizations: {
      title: "Marriage Shapers Payment",
      description: "Payment for Marriage Shapers service",
      logo: "https://your-logo-url.com/logo.png",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // close the modal programmatically
    },
    onClose: () => {},
  };

  return <FlutterWaveButton {...fwConfig} />;
};

export default FlutterPayment;
