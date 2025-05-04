"use client";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { supabase } from "@/lib/supabaseClient";

// Stripe public key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PaymentForm = ({ userId }) => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const { data, error } = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }), // Pass necessary metadata, like userId, project total
    }).then((res) => res.json());

    if (error) {
      console.error("Error creating payment intent:", error);
      alert("Payment failed, please try again.");
      setLoading(false);
      return;
    }

    const { clientSecret } = data;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error("Payment failed:", result.error.message);
      alert("Payment failed, please try again.");
    } else {
      if (result.paymentIntent.status === "succeeded") {
        alert("Payment successful!");
        // You can handle any post-payment actions here (e.g., updating user's status)
      }
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="card">Card details</label>
        <CardElement id="card" className="border p-2 rounded" />
      </div>

      <button
        type="submit"
        className={`btn w-full ${loading ? "bg-gray-300 cursor-not-allowed" : "bg-green-600 text-white"}`}
        disabled={!stripe || loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

const Payment = ({ userId }) => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Half Payment Required</h3>
      <p className="mb-6">To continue, please pay 50% of your total project cost.</p>

      <Elements stripe={stripePromise}>
        <PaymentForm userId={userId} />
      </Elements>
    </div>
  );
};

export default Payment;
