const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51MKXPyDH6JpRpam7zs7bRfFj48xecFxZyUzpuC7wTllPedN8Rw0PqCELud8afxuA3jGJ6g53tpYQgvOD3Juf8ikG00n8vISvOr');//Secret key

//App config 
const app = express();


//midlewares

app.use(cors({ origin: true }));
app.use(express.json());




app.get('/', (request, response) => response.status(200).send('hellow world'))

// app.post('/payments/create', async (request, response) => {
    // const total = request.query.total;
    // console.log('payment Request Recived for this amount >>>', total);
    

    app.post("/payments/create", async (request, response) => {
        const total = request.query.total;

        console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
    // const paymentIntent = await stripe.paymentIntents.create({//go to stripe and in side a paymentIntent create amount and currency
        // amount: total, //subnits of the currency 
        // currency: 'usd',
    // }) 

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });


    //OK - Created 
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,// clientSecret  in side paymentIntent clientSecret do assign 
    });
});
//Listen command
exports.api = functions.https.onRequest(app);




















