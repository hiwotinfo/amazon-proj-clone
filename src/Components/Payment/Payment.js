import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "../Payment/Payment.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider/StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {db} from '../firebase/firebase'
import axios from "../axios/axios";

const Payment = () => {
  const navigate = useNavigate()
  const [{ basket, user }, dispatch] = useStateValue();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [clientSecret, setClientSecret] = useState(true);

  //generate the spacial strip secret which allows us to charge a customer
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //Stripe excts the total in a currents subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      }); //after question mark arguments we call query params
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]); //this dipendancy is depend on basket charged the amount

  console.log("THE SECRET IS >>>", clientSecret);

  const getTotal=(basket)=>
  basket.reduce((amount, item) => item.price + amount, 0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {// this comes from strip
        // paymentIntent = payment confirmation

        db.collection('users') //to create a user collection
        .doc(user?.uid)// in side a user create document and create user id a
        .collection('orders')//to nagigate the collection if there the user
        .doc(paymentIntent.id)
        .set({
        basket:basket,
        amount: paymentIntent.amount,// how much many charged
        created: paymentIntent.created  // to what time created or charged the amount 
        })

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type:'EMPTY_BASKET'///after  pay  should be empty the basket
        });
        navigate('/orders');//to navigate orders
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>);
        </h1>
        <div className="payment__section">
          <div className="Payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Chicago, IL</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="Payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3> Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousendSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>processing</p> : "Buy Now"} </span>
                </button>
              </div>
              {error && <div>{error} </div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
