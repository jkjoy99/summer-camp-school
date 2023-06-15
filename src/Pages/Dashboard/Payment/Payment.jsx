import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutFrom from './CheckoutFrom';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {

    const [money, setMoney] = useState([]);
      const {id} = useParams();

      useEffect(() =>{
        fetch(`http://localhost:5000/payment/${id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setMoney(data)
        })
      },[id])

      const price = parseFloat(money.price);

    return (
        <div>
            <Helmet>
        <title>Music Instrument | Payment</title>
      </Helmet>
            <h2 className='text-3xl mb-7'>Please payment and Enrolled our class</h2>
            <Elements stripe={stripePromise}>
                <CheckoutFrom money={money} price={price}></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default Payment;