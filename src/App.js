import "./App.css";
import React, { useEffect } from "react";
import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Components/Login/Login";
import HomeSlider from "./Components/HomeSlider/HomeSlider";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import { auth } from "./Components/firebase/firebase";
import Footer from "./Components/Footer/Footer";
import Payment from "./Components/Payment/Payment";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from "./Components/Orders/Orders";

const promise = loadStripe(
  'pk_test_51MKXPyDH6JpRpam7YRvYfwuxkA5m5fTa8Xj0Wtnb2lO8J49XpnFwYMgi1GjZCSTELNbzl75OZviAuRuJ5VKVQwbw00LkmLzKE0'  //Publishable key
)
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // you, seconds ago * y=uncommit chart
      console.log("THE USER IS >>", authUser);
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          User: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* <Header/>
<Home /> */}

        <Routes>

          <Route path="/orders" element={<>
          <Header/>
          <Orders/> 
          </>
          } 
            
          />

          
          <Route path="/login" element={<><Login /></>} />

          <Route path="/payment" element={
          <>
          <Header /> 

          <Elements stripe={promise}>
          <Payment />
          </Elements>
          </>
          } 

          />

          <Route
            path="/"
            element={
              <>
                <Header />
                <HomeSlider />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
