import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useEffect } from 'react';
import Swal from 'sweetalert2';


const CheckoutFrom = ({ money, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [enrolError, setEnrolError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [process, setProcess] = useState(false);
    const navigate = useNavigate();
    const [transactionId, setTransactionId] = useState("")
    const {user} = useContext(AuthContext)

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        if(price > 0){
            fetch("http://localhost:5000/create-payment-intent", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify({price}),
                })
                .then((res) => res.json())
                .then((data) => {
                    setClientSecret(data.clientSecret)
                });
        }
      }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('error', error);
            setEnrolError(error.message)
        }
        else{
            setEnrolError('');
            console.log('payment mathod', paymentMethod);
        }

        setProcess(true)

         const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || "unknown@gmail.com",
                  name: user?.displayName || "unknown"
                },
              },
            },
          );

          if(confirmError){
             console.log(confirmError)
          }

          setProcess(false)
          console.log("paymentIntent",paymentIntent)
          if(paymentIntent.status === "succeeded"){
               setTransactionId(paymentIntent.id);
               const payments = { 
                instructorName: money.instructorName,
                email: user?.email, 
                transactionId: paymentIntent.id,
                price,
                classImage: money.classImage,
                date: new Date(),
                items: money._id,
                className: `${money.className}Instrument`,
                payment: "successful",
              }

              fetch("http://localhost:5000/payments",{
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(payments)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data.insertedId){
                  navigate("/dashboard/selectedclass")
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Payment has been successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
              })
          }
    }

    return (
       <>
        {enrolError && <p className="text-red-600">{enrolError}</p>}
        <form className='w-2/3 m-8  text-white' onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: ' #000',
                            '::placeholder': {
                                color: ' #000',
                                
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />

            <div className="text-center">
                <button type="submit" className="btn btn-outline btn-secondary btn-sm ml-40 mt-4" disabled={!stripe || !clientSecret || process}>
                     Pay
                </button>
                {
                    enrolError && <p className="font-semibold text-red-600 text-[32px] mt-5">{enrolError}</p>
                }
                {
                    transactionId && <p className="font-semibold text-green-600 text-[32px] mt-5">Your Transaction Id is {transactionId}</p>
                }
            </div>
        </form>
       
       </>
    );
};

export default CheckoutFrom;